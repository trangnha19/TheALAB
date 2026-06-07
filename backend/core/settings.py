"""
Cấu hình Django cho dự án TheALAB Website Backend.
Được tạo bởi 'django-admin startproject' sử dụng Django 6.0.3.
"""

from pathlib import Path

# Đường dẫn gốc của dự án
BASE_DIR = Path(__file__).resolve().parent.parent


# ============================================================
# BẢO MẬT
# ============================================================

# Khóa bảo mật - KHÔNG để lộ trong production
SECRET_KEY = 'django-insecure-7+d==tumasqzt&ho4r&gfp*%1#$1pk6ugmpoiv4ig%-t6tn+yc'

# Chế độ debug - Tắt khi triển khai production
DEBUG = True

# Cho phép tất cả host trong môi trường phát triển
ALLOWED_HOSTS = ['*']


# ============================================================
# CÁC ỨNG DỤNG ĐƯỢC CÀI ĐẶT
# ============================================================

INSTALLED_APPS = [
    # Các app mặc định của Django
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Thư viện bên ngoài (Third-party)
    'rest_framework',           # Django REST Framework - xây dựng API
    'rest_framework.authtoken', # Xác thực người dùng bằng Token
    'corsheaders',              # Xử lý CORS cho phép frontend gọi API

    # Ứng dụng nội bộ của dự án
    'api',                      # App API chính của TheALAB
]


# ============================================================
# MIDDLEWARE
# ============================================================

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # CorsMiddleware phải được đặt TRƯỚC CommonMiddleware
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# ============================================================
# CƠ SỞ DỮ LIỆU
# Sử dụng SQLite3 cho môi trường phát triển
# ============================================================

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# ============================================================
# KIỂM TRA MẬT KHẨU
# ============================================================

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# ============================================================
# QUỐC TẾ HÓA
# ============================================================

LANGUAGE_CODE = 'vi'
TIME_ZONE = 'Asia/Ho_Chi_Minh'
USE_I18N = True
USE_TZ = True


# ============================================================
# FILE TĨNH
# ============================================================

STATIC_URL = 'static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# ============================================================
# CẤU HÌNH CORS
# Cho phép frontend tại port 1457 gọi API backend tại port 1451
# ============================================================

CORS_ALLOWED_ORIGINS = [
    'http://localhost:1457',
    'http://127.0.0.1:1457',
]

# Cho phép gửi cookie và thông tin xác thực qua CORS
CORS_ALLOW_CREDENTIALS = True


# ============================================================
# CẤU HÌNH DJANGO REST FRAMEWORK
# ============================================================

REST_FRAMEWORK = {
    # Phương thức xác thực: Sử dụng Token Authentication
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    # Chính sách phân quyền mặc định: Yêu cầu xác thực
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}
