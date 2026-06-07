"""
Models (Cấu trúc dữ liệu) cho app API của TheALAB Website.

Mỗi model tương ứng với một bảng trong cơ sở dữ liệu SQLite.
"""

from django.db import models
from django.core.validators import RegexValidator


# Validator đảm bảo mã webpage chỉ chứa ký tự hợp lệ
code_validator = RegexValidator(
    regex=r'^[a-z0-9_-]+$',
    message='Chỉ cho phép chữ thường (a-z), số (0-9), dấu gạch ngang (-) và gạch dưới (_).'
)


class Webpage(models.Model):
    """
    Model đại diện cho một trang nội dung (webpage) trong hệ thống.

    Mỗi webpage có một mã code duy nhất dùng làm URL thân thiện.
    Ví dụ: code='about-us' → xem tại /preview/about-us

    Trường dữ liệu:
        - id        : Khóa chính tự tăng (BigAutoField)
        - code      : Mã định danh duy nhất, chỉ chữ thường/số/gạch ngang/gạch dưới
        - title     : Tiêu đề trang, bắt buộc
        - content   : Nội dung trang, có thể chứa HTML
        - created_at: Thời điểm tạo, tự động ghi nhận
    """

    code = models.CharField(
        max_length=100,
        unique=True,
        validators=[code_validator],
        verbose_name='Mã trang',
        help_text='Chỉ chữ thường, số, dấu - và _. Ví dụ: about-us, home_page'
    )

    title = models.CharField(
        max_length=255,
        verbose_name='Tiêu đề'
    )

    content = models.TextField(
        verbose_name='Nội dung',
        help_text='Nội dung trang, có thể chứa HTML'
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Ngày tạo'
    )

    class Meta:
        # Sắp xếp mặc định: mới nhất lên trước
        ordering = ['-created_at']
        verbose_name = 'Webpage'
        verbose_name_plural = 'Webpages'

    def __str__(self):
        """Hiển thị tên thân thiện trong Django Admin."""
        return f'{self.code} — {self.title}'
