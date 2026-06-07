"""
Serializers (Bộ chuyển đổi dữ liệu) cho app API của TheALAB Website.

Serializer có nhiệm vụ:
  1. Chuyển đổi object Python/Django thành JSON để trả về cho client
  2. Validate và phân tích dữ liệu JSON từ client thành Python object
"""

from rest_framework import serializers
from .models import Webpage


class WebpageListSerializer(serializers.ModelSerializer):
    """
    Serializer nhẹ dùng cho danh sách webpages.

    Không bao gồm trường 'content' để giảm kích thước payload
    khi tải danh sách nhiều trang cùng lúc.

    Dùng cho: GET /api/webpages/
    """

    class Meta:
        model = Webpage
        fields = ('id', 'code', 'title', 'created_at')
        read_only_fields = ('id', 'created_at')


class WebpageDetailSerializer(serializers.ModelSerializer):
    """
    Serializer đầy đủ dùng cho xem chi tiết, tạo mới và cập nhật webpage.

    Bao gồm tất cả các trường, 'created_at' là chỉ đọc.
    Validate unique của 'code' khi cập nhật (loại trừ chính bản ghi đang sửa).

    Dùng cho:
        - GET /api/webpages/<id>/   (chi tiết)
        - POST /api/webpages/       (tạo mới)
        - PUT/PATCH /api/webpages/<id>/ (cập nhật)
    """

    class Meta:
        model = Webpage
        fields = ('id', 'code', 'title', 'content', 'created_at')
        read_only_fields = ('id', 'created_at')

    def validate_code(self, value):
        """
        Kiểm tra tính duy nhất của trường 'code'.

        Khi cập nhật (có instance), bỏ qua chính bản ghi đó để tránh lỗi
        giả khi giữ nguyên code cũ.
        """
        queryset = Webpage.objects.filter(code=value)

        # Nếu đang cập nhật (có instance), loại bỏ bản ghi hiện tại khỏi kiểm tra
        if self.instance:
            queryset = queryset.exclude(pk=self.instance.pk)

        if queryset.exists():
            raise serializers.ValidationError('Mã webpage này đã tồn tại.')

        return value


class WebpagePreviewSerializer(serializers.ModelSerializer):
    """
    Serializer công khai dùng cho trang xem trước (preview).

    Không bao gồm 'id' và 'created_at' để không lộ thông tin nội bộ.

    Dùng cho: GET /api/webpages/preview/<code>/
    """

    class Meta:
        model = Webpage
        fields = ('code', 'title', 'content')


class ChangeUsernameSerializer(serializers.Serializer):
    """
    Serializer xử lý yêu cầu đổi tên đăng nhập.

    Yêu cầu xác nhận mật khẩu để tăng bảo mật.

    Dùng cho: POST /api/auth/change-username/
    """

    # Tên đăng nhập mới
    new_username = serializers.CharField(
        max_length=150,
        required=True,
        error_messages={'required': 'Vui lòng nhập tên đăng nhập mới.'}
    )

    # Mật khẩu xác nhận (chỉ ghi, không trả về)
    password = serializers.CharField(
        write_only=True,
        required=True,
        error_messages={'required': 'Vui lòng nhập mật khẩu để xác nhận.'}
    )

    def validate_new_username(self, value):
        """Kiểm tra tên đăng nhập mới không rỗng sau khi trim."""
        value = value.strip()
        if not value:
            raise serializers.ValidationError('Tên đăng nhập không được để trống.')
        return value


class ChangePasswordSerializer(serializers.Serializer):
    """
    Serializer xử lý yêu cầu đổi mật khẩu.

    Yêu cầu mật khẩu cũ để xác nhận danh tính và
    kiểm tra mật khẩu mới khớp với xác nhận.

    Dùng cho: POST /api/auth/change-password/
    """

    # Mật khẩu hiện tại (chỉ ghi)
    old_password = serializers.CharField(
        write_only=True,
        required=True,
        error_messages={'required': 'Vui lòng nhập mật khẩu cũ.'}
    )

    # Mật khẩu mới (chỉ ghi)
    new_password = serializers.CharField(
        write_only=True,
        required=True,
        min_length=5,
        error_messages={
            'required': 'Vui lòng nhập mật khẩu mới.',
            'min_length': 'Mật khẩu mới phải có ít nhất 5 ký tự.'
        }
    )

    # Xác nhận mật khẩu mới (chỉ ghi)
    confirm_password = serializers.CharField(
        write_only=True,
        required=True,
        error_messages={'required': 'Vui lòng xác nhận mật khẩu mới.'}
    )

    def validate(self, data):
        """Kiểm tra mật khẩu mới và xác nhận phải khớp nhau."""
        if data['new_password'] != data['confirm_password']:
            raise serializers.ValidationError({
                'confirm_password': 'Mật khẩu mới và xác nhận không khớp.'
            })
        return data
