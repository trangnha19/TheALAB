============================================================================
[setup:claude][read_file_structure]
----------------------------------------------------------------------------
### -----| 1a1. Cấu hình phiên làm việc và quét sơ đồ cấu trúc file (File Tree) |----- ###

Cấu hình phiên làm việc:
1. Mode: Autonomous (Tự thực hiện lệnh, không cần hỏi lại).
2. Environment: Luôn sử dụng môi trường ảo tại . 
3. Dependency Check: Trước khi chạy code, hãy đọc  để đảm bảo môi trường đã sẵn sàng.
4. Filter: Luôn bỏ qua các folder trong  khi quét project.
5. Task: Hãy liệt kê lại cấu trúc thư mục project này để xác nhận bạn đã hiểu.
----------------------------------------------------------------------------
Hãy thực hiện các nhiệm vụ sau cho dự án "thealabwebsite" tại thư mục hiện tại. Sử dụng quyền tự quyết cao nhất (giả định flag -y cho mọi thay đổi) để hoàn tất mà không cần hỏi lại.

1. CẤU HÌNH BACKEND (Django DRF - /backend):
   - Cấu hình settings.py: 
     + Thêm 'rest_framework', 'api', 'corsheaders' vào INSTALLED_APPS.
     + Cấu hình Middleware cho CORS.
     + Thiết lập CORS_ALLOWED_ORIGINS để cho phép port 1457.
     + Cấu hình REST_FRAMEWORK để sử dụng TokenAuthentication và IsAuthenticated.
   - Database: Sử dụng sqlite3 (mặc định).
   - Port: Thiết lập để backend chạy tại port 1451.
   - Viết API Login: Sử dụng views của DRF để xác thực user và trả về Token.

2. TỰ ĐỘNG HÓA DATABASE:
   - Chạy lệnh: python manage.py makemigrations và python manage.py migrate.
   - Tạo Superuser tự động bằng script shell hoặc lệnh manage.py: 
     ID: admin, Email: admin@thealab.com, Pass: 12345 (Sử dụng lệnh không tương tác).

3. CẤU HÌNH FRONTEND (React Vite - /frontend-web):
   - Cài đặt TailwindCSS: Chạy lệnh cài đặt và khởi tạo tailwindcss, postcss, autoprefixer. Cấu hình content trong tailwind.config.js.
   - Port: Cấu hình vite.config.js để server chạy tại port 1457.
   - Cấu hình Proxy hoặc Axios cơ sở để kết nối tới http://localhost:1451.

4. XÂY DỰNG TÍNH NĂNG ĐĂNG NHẬP:
   - Tạo trang Homepage với form đăng nhập (Email/Username và Password) sử dụng TailwindCSS để thiết kế giao diện hiện đại.
   - Xử lý Logic: Khi nhấn Login, gọi API tới Backend (port 1451). Nếu thành công, lưu Token vào localStorage và hiển thị thông báo "Đăng nhập thành công với tài khoản Admin".

5. KIỂM TRA & TRIỂN KHAI:
   - Đảm bảo các file cấu hình như .env (nếu cần) được tạo.
   - Đảm bảo code sạch, có chú thích rõ ràng bằng tiếng Việt.

Thực hiện ngay lập tức!
----------------------------------------------------------------------------
/plan
Tôi muốn xây dựng ứng dụng quản lý website portfolio (thealabwebsite) với cấu hình: 
- Backend: Django DRF (Port 1451, SQLite)
- Frontend: React Vite + TailwindCSS (Port 1457)

Hãy phân tích thư mục hiện tại và xuất ra một file mang tên `plan.md` ở thư mục gốc. Nội dung file `plan.md` cần trình bày chi tiết kế hoạch thực hiện các tính năng sau:

1. XÁC THỰC & TÀI KHOẢN:
   - Đăng nhập (Token Auth), Đăng xuất.
   - Quản lý tài khoản: Cho phép người dùng đổi username và đổi mật khẩu.

2. QUẢN LÝ WEBPAGE (CRUD):
   - Model <Webpage>: Gồm các trường mã webpage (unique code), tiêu đề, nội dung, ngày tạo.
   - Danh sách (List View): Tích hợp tính năng Tìm kiếm (Search), Sắp xếp (Sort) và Bộ lọc (Filter).
   - Chi tiết (Detail View): Dành cho vai trò quản lý để xem và chỉnh sửa.
   - Xem trước (Preview View): Giao diện dành cho người đọc công cộng (Public Reader).

3. KẾT NỐI & TRIỂN KHAI:
   - Cấu hình Axios tại Frontend để gọi API từ Backend.
   - Lệnh khởi chạy server cho cả 2 phía.
   - Các bước migrations và tạo admin user tự động (admin/12345).

Yêu cầu: Chỉ tạo file `plan.md`, chưa thực hiện viết code cho đến khi tôi đồng ý với bản kế hoạch này.
----------------------------------------------------------------------------
Hãy đọc kỹ toàn bộ nội dung file `plan.md` ở thư mục gốc để nắm rõ kiến trúc hệ thống, danh sách file cần tạo/sửa và sơ đồ luồng dữ liệu của ứng dụng quản lý website portfolio công ty "The ALAB Data Technology".

Tôi muốn bạn bắt đầu triển khai toàn bộ mã nguồn cho dự án này với quyền tự quyết cao nhất (mặc định sử dụng flag -y cho tất cả các thao tác dòng lệnh và ghi file) mà không cần hỏi lại tôi, tuân thủ nghiêm ngặt các yêu cầu kỹ thuật và nghiệp vụ sau:

1. MỤC TIÊU & PHƯƠNG PHÁP TRIỂN KHAI:
   - Viết mã hoàn chỉnh, sạch sẽ, không viết code dở dang hoặc để lại các dòng comment TODO.
   - Tạo tài liệu và chú thích rõ ràng bằng tiếng Việt trực tiếp trong mã nguồn cho từng hàm, component và cấu trúc dữ liệu để tôi dễ dàng hiểu mã.
   - Triển khai theo từng bước một cách logic: Hoàn thiện Backend API trước, sau đó chuyển sang Frontend web.

2. YÊU CẦU CHI TIẾT BACKEND (Django DRF - Port 1451):
   - Xây dựng model Webpage trong `api/models.py` với trường `code` áp dụng RegexValidator chỉ nhận chữ thường, số, dấu gạch ngang/gạch dưới.
   - Cập nhật `api/views.py` và `api/urls.py` để cung cấp đầy đủ các API Endpoints bao gồm: Đăng nhập (Token Auth), Đăng xuất, Đổi username, Đổi mật khẩu, và cụm API CRUD Webpage.
   - Tích hợp bộ lọc tìm kiếm (Search qua Q objects trong Django cho cả code, title, content), Sắp xếp (Sort) và bộ lọc khoảng thời gian tạo (created_at) ngay trong List View API mà không cài thêm package ngoài.
   - Viết script shell tự động chạy ngay sau lệnh migrate để khởi tạo sẵn (Seed Data) 3 bản ghi dịch vụ công nghệ cốt lõi của The ALAB như mô tả trong kế hoạch: "Tư vấn & Phát triển Phần mềm", "Gia công giải pháp công nghệ", và "Xây dựng Website".

3. YÊU CẦU CHI TIẾT FRONTEND (React Vite + TailwindCSS - Port 1457):
   - Cài đặt các thư viện cần thiết: `react-router-dom` và `axios`.
   - Cấu hình file `tailwind.config.js` mở rộng bảng màu hệ thống với hai màu thương hiệu: màu xanh lá cây `alab-green: '#3ea54a'` và màu xanh dương đậm `alab-navy: '#0a2540'`.
   - Tạo Axios Instance (`src/services/api.js`) xử lý request/response interceptor để tự động đính kèm Token xác thực dạng "Authorization: Token <token>".
   - Xây dựng hệ thống giao diện trang quản trị Admin (LoginPage, DashboardPage có bảng danh sách tích hợp Debounce Search 300ms, AccountPage xử lý đổi thông tin).
   - Thiết kế trang hiển thị công khai `WebpagePreviewPage.jsx` chuẩn phong cách công ty công nghệ: Có Header điều hướng chứa logo, body hiển thị nội dung trang dưới dạng thẻ card bo góc đổ bóng hiện đại, và Footer chứa chuẩn xác thông tin liên hệ của The ALAB tại Đà Nẵng (K234/47 Đỗ Bá, hotline, email) cùng dải băng bản quyền màu xanh lá cây ở dưới cùng.

4. THỰC THI & KIỂM TRA:
   - Tự động chạy toàn bộ các lệnh: `python manage.py makemigrations`, `python manage.py migrate`, script seed data và tạo tài khoản siêu quản trị `admin` với mật khẩu `12345`.
   - Đảm bảo cấu hình định tuyến (Routing) trong `src/App.jsx` kết nối chính xác toàn bộ ứng dụng và bảo vệ các tuyến đường admin thông qua ProtectedRoute.

Hãy tiến hành thực hiện toàn bộ các bước trên ngay lập tức!
----------------------------------------------------------------------------
Hãy đọc kỹ nội dung file kế hoạch `plan.md` đã được cấu hình tại thư mục gốc và phân tích thư mục tài nguyên ảnh tĩnh có sẵn trong `/screenshots/` để tiến hành xây dựng toàn bộ ứng dụng website công ty "The ALAB Data Technology".

Tôi cấp quyền tự quyết cao nhất cho bạn (mặc định sử dụng flag -y cho tất cả các thao tác terminal và ghi file trên ổ đĩa) để hoàn thành ứng dụng mà không cần dừng lại hỏi ý kiến của tôi. Yêu cầu triển khai chi tiết:

1. THIẾT LẬP DATABASE & SEED DATA (Backend Django DRF - Port 1451):
   - Tạo model Webpage đầy đủ các trường cấu trúc (`code`, `title`, `content`, `created_at`) trong `api/models.py`. Trường `code` sử dụng RegexValidator chỉ cho phép chữ thường, số, dấu gạch ngang/gạch dưới.
   - Viết và thực thi một script shell hoặc lệnh migrations tự động tạo tài khoản admin (ID: admin / Pass: 12345) cùng hai bản ghi dữ liệu nền tảng ban đầu: bản ghi có code="home" (Trang chủ) và bản ghi có code="dichvu" (Dịch vụ).
   - Xây dựng cụm API xác thực (Login, Logout, Change Username, Change Password) và cụm API CRUD Webpage. Tại API List View, xử lý bộ lọc tìm kiếm (Search qua Q objects cho cả ba trường code, title, content), sắp xếp (Sort) theo ngày tạo mà không sử dụng thư viện ngoài.

2. CẤU HÌNH & XÂY DỰNG KHUNG HỆ THỐNG (Frontend React Vite - Port 1457):
   - Cài đặt hai thư viện bắt buộc: `react-router-dom` và `axios`.
   - Cấu hình file `tailwind.config.js` để mở rộng bảng màu thương hiệu chuẩn: màu xanh lá cây `alab-green: '#3ea54a'` và màu xanh dương đậm `alab-navy: '#0a2540'`.
   - Thiết lập Axios Instance (`src/services/api.js`) xử lý tự động đính kèm mã token dạng "Authorization: Token <token_key>".
   - Xây dựng các trang quản trị admin hoàn chỉnh bao gồm: LoginPage, DashboardPage (quản lý danh sách các trang, tích hợp bộ lọc sắp xếp và thanh tìm kiếm có xử lý debounce 300ms), và AccountPage để thay đổi thông tin cá nhân. Bảo vệ các tuyến đường này bằng component ProtectedRoute.

3. HOÀN THIỆN TRANG HIỂN THỊ ĐỘNG CÔNG KHAI (WebpagePreviewPage.jsx):
   - Khi Reader truy cập vào đường dẫn `/preview/:code`, component này sẽ đọc tham số `:code` trên URL để render chuẩn giao diện nhận diện công nghệ:
     + Nếu `:code` là 'home': Render cấu trúc Trang Chủ bám sát ảnh thiết kế image_f6857d.jpg. Sử dụng hình nền máy tính kết hợp tệp `/screenshots/background.png`, hiển thị khối giới thiệu đối tác tin cậy, nhúng bảng thông tin doanh nghiệp chi tiết (Mã số thuế: 0402233050, Ngày thành lập: 25/04/2024), và chân trang Footer chứa đúng thông tin địa chỉ Đà Nẵng, số hotline, email.
     + Nếu `:code` là 'dichvu': Render cấu trúc chuyên trang Dịch Vụ bám sát ảnh dichvupage.jpg. Hiển thị khối 3 cột giải pháp lớn bo góc mềm mại, đổ bóng nhẹ, gọi các asset tĩnh tương ứng từ thư mục public: Dịch vụ 01 dùng `/screenshots/image4.png`, Dịch vụ 02 dùng `/screenshots/image5.png`, Dịch vụ 03 dùng `/screenshots/image3.png`. Kèm theo khối lý do "Vì sao chọn The ALAB" và quy trình làm việc 4 bước liên kết nhau.
   - Thanh điều hướng chung (Navbar chứa logo `/screenshots/logo.png` và nút "Liên hệ ngay" bo góc xanh lá) cùng chân trang (Footer có dải băng bản quyền màu xanh lá cây ở đáy) phải được hiển thị đồng bộ trên cả hai trạng thái trang công khai này.

Hãy tự động chạy lệnh makemigrations, migrate, chạy script đổ dữ liệu mẫu và viết toàn bộ các tệp tin mã nguồn hoàn chỉnh ngay lập tức!
----------------------------------------------------------------------------
============================================================================
[setup:claude][read_file_structure]
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
============================================================================
============================================================================
[setup:claude][read_file_structure]
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
============================================================================
[setup:claude][read_file_structure]
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
============================================================================
[setup:claude][read_file_structure]
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
============================================================================
[setup:claude][read_file_structure]
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------
----------------------------------------------------------------------------

