"""
Views (Controllers) cho app API của TheALAB Website.

Xử lý tất cả các yêu cầu HTTP và trả về phản hồi JSON.

Nhóm endpoint:
  - Auth: login, logout, đổi username, đổi mật khẩu
  - Webpage: CRUD (danh sách, tạo, chi tiết, cập nhật, xóa, preview công khai)
"""

from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db.models import Q
from django.utils.dateparse import parse_date

from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Webpage
from .permissions import IsAdminUser
from .serializers import (
    WebpageDetailSerializer,
    WebpageListSerializer,
    WebpagePreviewSerializer,
    ChangePasswordSerializer,
    ChangeUsernameSerializer,
)


# ============================================================
# NHÓM AUTH — Xác thực người dùng
# ============================================================


@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    """
    API Đăng nhập người dùng.

    Phương thức: POST /api/auth/login/
    Quyền truy cập: Công khai (AllowAny)

    Đầu vào (JSON):
        - username (str): Tên đăng nhập
        - password (str): Mật khẩu

    Phản hồi thành công (200):
        - token    : Token xác thực để dùng cho các API tiếp theo
        - username : Tên đăng nhập
        - email    : Email người dùng
        - is_admin : True nếu là quản trị viên
        - message  : Thông báo thành công

    Phản hồi lỗi:
        - 400: Thiếu thông tin đăng nhập
        - 401: Sai tên đăng nhập hoặc mật khẩu
    """
    username = request.data.get('username', '').strip()
    password = request.data.get('password', '').strip()

    # Kiểm tra dữ liệu đầu vào
    if not username or not password:
        return Response(
            {'error': 'Vui lòng cung cấp tên đăng nhập và mật khẩu.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Xác thực thông tin người dùng với cơ sở dữ liệu
    user = authenticate(request, username=username, password=password)

    if user is not None:
        # Xác thực thành công — tạo hoặc lấy token hiện có
        token, _ = Token.objects.get_or_create(user=user)
        return Response(
            {
                'token': token.key,
                'username': user.username,
                'email': user.email,
                'is_admin': user.is_staff or user.is_superuser,
                'message': f'Đăng nhập thành công với tài khoản {user.username}.',
            },
            status=status.HTTP_200_OK
        )
    else:
        return Response(
            {'error': 'Tên đăng nhập hoặc mật khẩu không đúng.'},
            status=status.HTTP_401_UNAUTHORIZED
        )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    """
    API Đăng xuất người dùng.

    Phương thức: POST /api/auth/logout/
    Quyền truy cập: Yêu cầu Token (IsAuthenticated)
    Header: Authorization: Token <token>

    Logic:
        Xóa bản ghi Token khỏi cơ sở dữ liệu để vô hiệu hóa phiên đăng nhập.

    Phản hồi thành công (200):
        - message: Thông báo đăng xuất thành công
    """
    # Xóa token của người dùng hiện tại khỏi database
    Token.objects.filter(user=request.user).delete()

    return Response(
        {'message': 'Đăng xuất thành công.'},
        status=status.HTTP_200_OK
    )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_username_view(request):
    """
    API Đổi tên đăng nhập.

    Phương thức: POST /api/auth/change-username/
    Quyền truy cập: Yêu cầu Token (IsAuthenticated)

    Đầu vào (JSON):
        - new_username (str): Tên đăng nhập mới
        - password (str): Mật khẩu hiện tại để xác nhận

    Logic:
        1. Validate dữ liệu qua ChangeUsernameSerializer
        2. Kiểm tra mật khẩu xác nhận
        3. Kiểm tra tên đăng nhập mới chưa tồn tại
        4. Cập nhật username
        5. Xóa token cũ → cấp token mới để giữ phiên

    Phản hồi thành công (200):
        - message     : Thông báo thành công
        - new_username: Tên đăng nhập đã cập nhật
        - token       : Token mới (thay thế token cũ)

    Phản hồi lỗi:
        - 400: Mật khẩu sai, username đã tồn tại, hoặc dữ liệu không hợp lệ
    """
    serializer = ChangeUsernameSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    new_username = serializer.validated_data['new_username']
    password = serializer.validated_data['password']
    user = request.user

    # Bước 1: Xác nhận mật khẩu hiện tại
    if not user.check_password(password):
        return Response(
            {'error': 'Mật khẩu không đúng.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Bước 2: Kiểm tra tên mới chưa được dùng bởi tài khoản khác
    if User.objects.filter(username=new_username).exclude(pk=user.pk).exists():
        return Response(
            {'error': 'Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Bước 3: Cập nhật username
    user.username = new_username
    user.save()

    # Bước 4: Xóa token cũ và cấp token mới
    Token.objects.filter(user=user).delete()
    new_token, _ = Token.objects.get_or_create(user=user)

    return Response(
        {
            'message': 'Đổi tên đăng nhập thành công.',
            'new_username': new_username,
            'token': new_token.key,
        },
        status=status.HTTP_200_OK
    )


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_password_view(request):
    """
    API Đổi mật khẩu.

    Phương thức: POST /api/auth/change-password/
    Quyền truy cập: Yêu cầu Token (IsAuthenticated)

    Đầu vào (JSON):
        - old_password     : Mật khẩu hiện tại
        - new_password     : Mật khẩu mới
        - confirm_password : Xác nhận mật khẩu mới

    Logic:
        1. Validate dữ liệu (bao gồm kiểm tra new_password == confirm_password)
        2. Xác minh old_password đúng
        3. Đặt mật khẩu mới
        4. Xóa token → bắt buộc đăng nhập lại để bảo mật

    Phản hồi thành công (200):
        - message: Thông báo thành công, yêu cầu đăng nhập lại

    Phản hồi lỗi:
        - 400: Mật khẩu cũ sai, mật khẩu mới không khớp
    """
    serializer = ChangePasswordSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    user = request.user
    old_password = serializer.validated_data['old_password']
    new_password = serializer.validated_data['new_password']

    # Bước 1: Xác minh mật khẩu cũ
    if not user.check_password(old_password):
        return Response(
            {'error': 'Mật khẩu cũ không đúng.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Bước 2: Đặt mật khẩu mới
    user.set_password(new_password)
    user.save()

    # Bước 3: Xóa token hiện tại (bắt buộc đăng nhập lại)
    Token.objects.filter(user=user).delete()

    return Response(
        {'message': 'Đổi mật khẩu thành công. Vui lòng đăng nhập lại.'},
        status=status.HTTP_200_OK
    )


# ============================================================
# NHÓM WEBPAGE — Quản lý nội dung trang
# ============================================================


@api_view(['GET', 'POST'])
@permission_classes([IsAdminUser])
def webpage_list_create_view(request):
    """
    API Danh sách và Tạo mới Webpage.

    GET /api/webpages/ — Lấy danh sách (có tìm kiếm, sắp xếp, lọc ngày)
    POST /api/webpages/ — Tạo webpage mới

    Quyền truy cập: IsAdminUser (phải là staff hoặc superuser)

    === GET: Query params ===
        - search       : Tìm kiếm trong code, title, content (không phân biệt hoa/thường)
        - sort         : Tên trường để sắp xếp (code, title, created_at)
                         Thêm '-' phía trước để đảo ngược: -created_at
        - created_from : Lọc từ ngày (định dạng YYYY-MM-DD)
        - created_to   : Lọc đến ngày (định dạng YYYY-MM-DD)

    === GET: Phản hồi 200 ===
        { "count": 25, "results": [{ "id", "code", "title", "created_at" }] }
        (Không trả về 'content' trong danh sách để giảm payload)

    === POST: Đầu vào ===
        { "code": "about-us", "title": "Giới thiệu", "content": "<p>...</p>" }

    === POST: Phản hồi 201 ===
        Object Webpage đầy đủ bao gồm content và created_at
    """
    if request.method == 'GET':
        queryset = Webpage.objects.all()

        # --- Tìm kiếm toàn văn ---
        # Sử dụng Q objects để tìm đồng thời trong nhiều trường
        search = request.query_params.get('search', '').strip()
        if search:
            queryset = queryset.filter(
                Q(code__icontains=search) |
                Q(title__icontains=search) |
                Q(content__icontains=search)
            )

        # --- Lọc theo khoảng thời gian tạo ---
        created_from = request.query_params.get('created_from', '')
        created_to = request.query_params.get('created_to', '')

        if created_from:
            date_from = parse_date(created_from)
            if date_from:
                queryset = queryset.filter(created_at__date__gte=date_from)

        if created_to:
            date_to = parse_date(created_to)
            if date_to:
                queryset = queryset.filter(created_at__date__lte=date_to)

        # --- Sắp xếp theo yêu cầu ---
        # Các trường hợp lệ để sắp xếp (tránh SQL injection)
        allowed_sort_fields = {'code', 'title', 'created_at', '-code', '-title', '-created_at'}
        sort = request.query_params.get('sort', '-created_at')

        if sort in allowed_sort_fields:
            queryset = queryset.order_by(sort)
        else:
            queryset = queryset.order_by('-created_at')

        # Serialize và trả về kèm tổng số bản ghi
        serializer = WebpageListSerializer(queryset, many=True)
        return Response(
            {'count': queryset.count(), 'results': serializer.data},
            status=status.HTTP_200_OK
        )

    elif request.method == 'POST':
        serializer = WebpageDetailSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
@permission_classes([IsAdminUser])
def webpage_detail_view(request, pk):
    """
    API Chi tiết, Cập nhật và Xóa một Webpage.

    GET    /api/webpages/<id>/ — Xem chi tiết
    PUT    /api/webpages/<id>/ — Cập nhật toàn bộ
    PATCH  /api/webpages/<id>/ — Cập nhật một phần
    DELETE /api/webpages/<id>/ — Xóa

    Quyền truy cập: IsAdminUser

    Phản hồi lỗi chung:
        - 404: Không tìm thấy webpage với id tương ứng
    """
    # Tìm bản ghi theo ID, trả 404 nếu không tồn tại
    try:
        webpage = Webpage.objects.get(pk=pk)
    except Webpage.DoesNotExist:
        return Response(
            {'detail': 'Không tìm thấy.'},
            status=status.HTTP_404_NOT_FOUND
        )

    if request.method == 'GET':
        serializer = WebpageDetailSerializer(webpage)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method in ('PUT', 'PATCH'):
        # partial=True cho phép cập nhật một phần (PATCH)
        is_partial = (request.method == 'PATCH')
        serializer = WebpageDetailSerializer(webpage, data=request.data, partial=is_partial)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        webpage.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
@permission_classes([AllowAny])
def webpage_preview_view(request, code):
    """
    API Xem trước công khai một Webpage theo mã code.

    GET /api/webpages/preview/<code>/
    Quyền truy cập: Công khai (AllowAny) — không cần đăng nhập

    URL param:
        - code (str): Mã unique của webpage (ví dụ: about-us, home)

    Phản hồi thành công (200):
        { "code": "about-us", "title": "Giới thiệu", "content": "<p>...</p>" }
        (Không trả về 'id' và 'created_at' để giữ tính công khai an toàn)

    Phản hồi lỗi:
        - 404: Không tìm thấy trang với code tương ứng
    """
    try:
        webpage = Webpage.objects.get(code=code)
    except Webpage.DoesNotExist:
        return Response(
            {'error': 'Trang không tồn tại.'},
            status=status.HTTP_404_NOT_FOUND
        )

    serializer = WebpagePreviewSerializer(webpage)
    return Response(serializer.data, status=status.HTTP_200_OK)
