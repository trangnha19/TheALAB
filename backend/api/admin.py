"""
Cấu hình Django Admin cho app API của TheALAB Website.

Đăng ký các model để quản lý trực tiếp từ giao diện /admin/.
"""

from django.contrib import admin
from .models import Webpage


@admin.register(Webpage)
class WebpageAdmin(admin.ModelAdmin):
    """
    Cấu hình giao diện quản trị cho model Webpage.

    Tính năng:
        - Hiển thị danh sách rút gọn với các cột chính
        - Tìm kiếm nhanh qua code, title, content
        - Lọc theo ngày tạo
    """

    # Các cột hiển thị trong trang danh sách
    list_display = ('code', 'title', 'created_at')

    # Cho phép tìm kiếm theo các trường này
    search_fields = ('code', 'title', 'content')

    # Bộ lọc bên phải màn hình
    list_filter = ('created_at',)

    # Sắp xếp mặc định trong admin: mới nhất lên trước
    ordering = ('-created_at',)

    # Trường chỉ đọc (không cho phép sửa)
    readonly_fields = ('created_at',)
