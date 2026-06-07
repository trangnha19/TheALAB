"""
Cấu hình URL cho app API của TheALAB Website.

Thứ tự URL patterns quan trọng:
  - webpages/preview/<code>/ phải đứng TRƯỚC webpages/<id>/
    để tránh Django nhầm "preview" là một integer ID.

Danh sách endpoints:
  POST   /api/auth/login/              — Đăng nhập
  POST   /api/auth/logout/             — Đăng xuất
  POST   /api/auth/change-username/    — Đổi tên đăng nhập
  POST   /api/auth/change-password/    — Đổi mật khẩu
  GET    /api/webpages/preview/<code>/ — Xem công khai (public)
  GET    /api/webpages/                — Danh sách webpages (admin)
  POST   /api/webpages/                — Tạo webpage mới (admin)
  GET    /api/webpages/<id>/           — Chi tiết webpage (admin)
  PUT    /api/webpages/<id>/           — Cập nhật toàn bộ (admin)
  PATCH  /api/webpages/<id>/           — Cập nhật một phần (admin)
  DELETE /api/webpages/<id>/           — Xóa webpage (admin)
"""

from django.urls import path
from . import views

urlpatterns = [
    # 1. Đăng nhập — không cần xác thực
    path('auth/login/', views.login_view, name='api-login'),

    # 2. Đăng xuất — cần Token
    path('auth/logout/', views.logout_view, name='api-logout'),

    # 3. Đổi tên đăng nhập — cần Token
    path('auth/change-username/', views.change_username_view, name='api-change-username'),

    # 4. Đổi mật khẩu — cần Token
    path('auth/change-password/', views.change_password_view, name='api-change-password'),

    # 5. Xem preview công khai — PHẢI đứng trước <int:pk>/ để tránh xung đột
    path('webpages/preview/<str:code>/', views.webpage_preview_view, name='api-webpage-preview'),

    # 6. Danh sách + Tạo mới — cần Token + IsAdminUser
    path('webpages/', views.webpage_list_create_view, name='api-webpage-list-create'),

    # 7. Chi tiết + Cập nhật + Xóa — cần Token + IsAdminUser
    path('webpages/<int:pk>/', views.webpage_detail_view, name='api-webpage-detail'),
]
