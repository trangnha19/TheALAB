"""
Custom Permissions (Phân quyền tùy chỉnh) cho app API của TheALAB Website.

Định nghĩa các lớp phân quyền riêng để kiểm soát truy cập API.
"""

from rest_framework.permissions import BasePermission


class IsAdminUser(BasePermission):
    """
    Chỉ cho phép người dùng là Quản trị viên (Admin) truy cập.

    Điều kiện:
        - Người dùng phải đã xác thực (is_authenticated = True)
        - Và phải có quyền staff (is_staff = True) HOẶC superuser (is_superuser = True)

    Sử dụng trong các view yêu cầu quyền quản trị:
        - Danh sách, tạo, sửa, xóa Webpage
    """

    message = 'Bạn không có quyền thực hiện thao tác này. Yêu cầu quyền Quản trị viên.'

    def has_permission(self, request, view):
        """
        Kiểm tra quyền truy cập trước khi xử lý request.

        Trả về True nếu người dùng đã đăng nhập và là admin/superuser.
        """
        return bool(
            request.user
            and request.user.is_authenticated
            and (request.user.is_staff or request.user.is_superuser)
        )
