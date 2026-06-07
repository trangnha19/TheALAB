# KẾ HOẠCH TRIỂN KHAI — THEALAB WEBSITE (BẢN CHUẨN ĐỒ HỌA SCREENSHOTS)
> Phiên bản: 1.2 · Cập nhật cấu trúc hình ảnh tĩnh và giao diện The ALAB
> Backend: Django DRF · Port 1451 · SQLite  
> Frontend: React 19 + Vite 8 + TailwindCSS v3 · Port 1457

---

## Trạng thái hiện tại (đã xác nhận)

### Backend (`/backend`)
| File | Trạng thái |
|------|-----------|
| `core/settings.py` | Đầy đủ: CORS, REST_FRAMEWORK, TokenAuth, INSTALLED_APPS |
| `api/views.py` | Chỉ có `login_view` (POST, AllowAny) |
| `api/urls.py` | Chỉ có `POST /api/auth/login/` |
| `api/models.py` | Rỗng — chưa có model nào |
| `api/admin.py` | Rỗng |
| `api/migrations/` | Chỉ có `__init__.py` — chưa có migration nào |
| `requirements.txt` | Đầy đủ: DRF, corsheaders, gunicorn, whitenoise |

### Frontend (`/frontend-web`)
| File | Trạng thái |
|------|-----------|
| `vite.config.js` | Proxy `/api/*` → `http://localhost:1451` đã có |
| `src/App.jsx` | Chỉ có form login đơn giản, dùng `fetch()` native |
| `src/main.jsx` | Chưa có Router |
| `package.json` | Thiếu: `react-router-dom`, `axios` |
| `src/pages/`, `src/components/`, `src/services/` | Chưa tồn tại |
| `public/screenshots/` | Đầy đủ asset: `logo.png`, `background.png`, `image1.png` -> `image6.png` |

---

## Phần 1 · Danh sách file cần tạo/sửa

### 1.1 Backend — Sửa đổi/Tạo mới
- `api/models.py`: Thêm model `Webpage` (gồm các trường: `id`, `code`, `title`, `content`, `created_at`). Trường `code` có validator regex giới hạn ký tự chữ thường, số, dấu `-` và `_`.
- `api/serializers.py` *(Tạo mới)*: Khai báo các class Serializer phục vụ Auth (đổi username, đổi mật khẩu) và Webpage CRUD.
- `api/permissions.py` *(Tạo mới)*: Viết custom permission `IsAdminUser` kiểm tra quyền `is_staff` hoặc `is_superuser`.
- `api/views.py` & `api/urls.py`: Thêm đầy đủ logic và các tuyến dẫn cho Đăng xuất, Đổi tài khoản, cụm CRUD bài viết và endpoint preview công khai.

### 1.2 Frontend — Sửa đổi/Tạo mới
- `tailwind.config.js`: Định nghĩa thêm hai mã màu thương hiệu: `alab-green: '#3ea54a'` và `alab-navy: '#0a2540'`.
- `src/services/api.js` *(Tạo mới)*: Cấu hình Axios Instance tự động gắn token header dạng `Authorization: Token <token_key>`.
- `src/App.jsx` & `src/main.jsx`: Cấu hình hệ thống React Router điều hướng.
- Các trang chức năng quản trị (`src/pages/`): `LoginPage.jsx`, `DashboardPage.jsx` (bảng danh sách tích hợp bộ lọc và tìm kiếm), `AccountPage.jsx` (form đổi username/password).
- Trang công khai tĩnh (`src/pages/WebpagePreviewPage.jsx`): Render giao diện tùy biến dựa theo tham số mã trang trên URL, sử dụng trực tiếp các asset từ `/screenshots/`.

---

## Phần 2 · Quy chuẩn Giao diện Nhận diện Thương hiệu (Tailwind v3)

### 2.1 Cấu hình Tailwind mở rộng
Hệ thống giao diện sử dụng mã màu mở rộng bám sát theo tệp thiết kế thực tế:
*   `alab-green` (`#3ea54a`): Dùng cho hệ thống nút bấm hành động, viền icon, và dải băng bản quyền đáy trang.
*   `alab-navy` (`#0a2540`): Dùng cho toàn bộ hệ thống chữ tiêu đề, đề mục lớn.

### 2.2 Cấu trúc Trang Công Khai Động (`WebpagePreviewPage.jsx`)
Trang web sử dụng chung cấu trúc thanh điều hướng Header (chứa Menu và Logo `/screenshots/logo.png`) và Footer (chứa thông tin mã số thuế `0402233050`, địa chỉ Đà Nẵng, hotline, email). Phần thân trang (Body) thay đổi linh hoạt:

*   **Khi URL là `/preview/home` (Giao diện Trang chủ):**
    - Khối Banner lớn dùng hình nền `/screenshots/background.png` kết hợp hình minh họa máy tính laptop.
    - Khối Giới thiệu có bảng thông số doanh nghiệp hiển thị rõ ràng (Mã số thuế, ngày lập 25/04/2024, ngành nghề).
    - Khối chân trang Footer đồng bộ theo ảnh thực tế.
*   **Khi URL là `/preview/dichvu` (Giao diện Trang dịch vụ):**
    - Hiển thị banner phụ "Dịch vụ của chúng tôi".
    - Render 3 thẻ card giải pháp bo góc mềm mại, đổ bóng nhẹ, tương ứng với 3 ảnh minh họa công nghệ: `01` - `/screenshots/image4.png`, `02` - `/screenshots/image5.png`, `03` - `/screenshots/image3.png`.
    - Hiển thị phần "Vì sao chọn The ALAB" kèm quy trình làm việc 4 bước mắc xích logic (Sử dụng icon hoặc ký hiệu đồ họa phù hợp).

---

## Phần 3 · Quy trình Thực thi Hệ thống

### Giai đoạn 1: Khởi chạy và Seed Data phía Backend
1. Chạy các lệnh phát hiện và thực thi database: `python manage.py makemigrations` và `python manage.py migrate`.
2. Chạy script tạo sẵn tài khoản quản trị tối cao (`admin` / `12345`).
3. Tự động chèn sẵn dữ liệu (Seed Data) ban đầu cho 2 trang có mã `home` (tiêu đề: Trang chủ) và `dichvu` (tiêu đề: Dịch vụ) vào SQLite để frontend có dữ liệu render ngay lập tức.

### Giai đoạn 2: Xây dựng và Kết nối Frontend
1. Cài đặt các thư viện lõi: `npm install react-router-dom axios`.
2. Tạo cấu trúc Axios Interceptor điều phối Token.
3. Hoàn thiện các view quản trị (Admin Dashboard có thanh Search sử dụng debounce xử lý độ trễ 300ms) và trang xem trước công khai (Render chuẩn bố cục ảnh công ty công nghệ).