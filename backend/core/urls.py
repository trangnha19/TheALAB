"""
Cấu hình URL chính cho dự án TheALAB Backend.

Tất cả endpoint API có tiền tố /api/
Trang quản trị Django tại /admin/
"""

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # Trang quản trị Django
    path('admin/', admin.site.urls),

    # Tất cả endpoints API của ứng dụng - tiền tố /api/
    path('api/', include('api.urls')),
]
