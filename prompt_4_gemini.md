-----
[Gemini] [https://gemini.google.com/share/e536b905a364]
Tôi muốn xây dựng 1 ứng dụng với claude code trong đó backend là Django DRF + frontend là React Vite với tailwindcss. Tôi đã:
+ Tạo thư mục /Users/nguyenthitrangnha/Downloads/TheALAB_vibecoding2026/thealabwebsite và 2 thư mục con là backend/ và frontend-web/
+ Tạo .venv với conda bên trong thư mục thealabwebsite (đã cài pip install tqdm==4.67.3 django==6.0.3 djangorestframework==3.17.1 django-cors-headers==4.9.0 boto==2.49.0 boto3==1.42.89 django-storages==1.14.6 psycopg2-binary==2.9.11 whitenoise==6.9.0 gspread==6.2.1 google-auth==2.49.2 gunicorn==25.3.0 python-dotenv==1.1.0 & xuất pip freeze > requirements.txt lưu trong backend/)
+ Tạo backend với django-admin startproject core & python manage.py startapp api (trong thư mục thealabwebsite)
+ Tạo frontend với npm create vite@latest frontend-web -- --template react (trong thư mục thealabwebsite)

Hãy giúp tôi prompt cho claude code để tạo ứng dụng thealabwebsite (backend chuẩn Django DRF, database sử dụng sqlite3 và frontend-web React Vite với TailwindCSS) với các nhiệm vụ đầu tiên gồm:

+ Cấu hình Backend (chuẩn Django DRF tại port 1451)
+ Cấu hình frontend-web (React Vite với TaiwindCSS tại port 1457)
+ Kết nối frontend-web với backend
+ Xây dựng 1 trang homepage đăng nhập (trong đó user được tạo ở Django Admin thì có thể đăng nhập thành công thông qua trang homepage này)
+ Tự động chạy lệnh makemigrations, migrate và createsuperuser (ID: admin & pass: 12345)
+ Hãy thực hiện toàn bộ các bước trên mà không cần hỏi lại (dùng quyền tự quyết cao nhất -y).

-----
Tôi muốn dùng chế độ /plan để prompt nhờ Claude code lên kế hoạch phát triển ứng dụng quản lý website portfolio công ty với các tính năng:
+ Đăng nhập và quản lý tài khoản (đổi tên đăng nhập, đổi mật khẩu,...)
+ CRUD <webpage> ( <mã webpage>, <tiêu đề webpage>,...). Có view xem danh sách (có tính năng search, sort, filter,...), có view xem detail (vai trò quản lý) và preview (vai trò reader public).
Xuất ra cho tôi file .md để tôi có thể đọc và sửa plan bằng tay (đến khi hoàn chỉnh, tôi sẽ prompt tiếp cho Claude code để triển khai build ứng dụng dựa trên file md này)

-----
development_plan.md đã ổn, tiếp theo, hãy giúp tôi prompt cho Claude code xây dựng ứng dụng dựa trên development_plan.md này

