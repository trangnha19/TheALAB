/**
 * api.js — Axios Instance trung tâm cho TheALAB Frontend
 *
 * File này khởi tạo một instance Axios được cấu hình sẵn với:
 *   1. baseURL trống (dùng Vite proxy: /api/* → http://localhost:1451)
 *   2. Request interceptor: tự động đính kèm Token vào mọi request
 *   3. Response interceptor: bắt lỗi 401 và tự động đăng xuất người dùng
 *
 * Cách dùng:
 *   import api from '../services/api'
 *   const response = await api.get('/api/webpages/')
 */

import axios from 'axios'

/**
 * Tạo Axios instance với cấu hình mặc định.
 *
 * baseURL để trống vì Vite đã cấu hình proxy:
 *   /api/* → http://localhost:1451
 * Nên chỉ cần gọi '/api/...' là đủ.
 */
const api = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Request Interceptor — Chạy trước mỗi request gửi đi.
 *
 * Tự động lấy token từ localStorage và đính kèm vào header
 * theo định dạng DRF Token Authentication: "Token <token_key>"
 * (Lưu ý: phải viết "Token" với chữ T hoa — KHÔNG dùng "Bearer")
 */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Token ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

/**
 * Response Interceptor — Chạy sau khi nhận phản hồi.
 *
 * Nếu server trả về lỗi 401 (Unauthorized), có nghĩa là:
 *   - Token đã hết hạn hoặc bị xóa khỏi server
 *   - Người dùng cần đăng nhập lại
 *
 * Hành động: Xóa dữ liệu localStorage và chuyển hướng về trang /login
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Xóa thông tin xác thực khỏi localStorage
      localStorage.removeItem('authToken')
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('isAdmin')

      // Chuyển về trang đăng nhập (tránh dùng react-router để đơn giản)
      if (window.location.pathname !== '/login') {
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api
