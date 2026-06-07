/**
 * useAuth.js — Custom Hook quản lý trạng thái xác thực
 *
 * Hook này cung cấp một interface thống nhất để:
 *   - Đọc thông tin người dùng đã đăng nhập
 *   - Thực hiện đăng nhập (lưu token + thông tin vào localStorage và state)
 *   - Thực hiện đăng xuất (gọi API logout + xóa localStorage + reset state)
 *
 * Cách dùng:
 *   const { user, token, login, logout, isAuthenticated } = useAuth()
 */

import { useState } from 'react'
import api from '../services/api'

/**
 * Đọc dữ liệu người dùng hiện tại từ localStorage.
 * Trả về null nếu chưa đăng nhập.
 *
 * @returns {{ username: string, email: string, isAdmin: boolean } | null}
 */
const getUserFromStorage = () => {
  const token = localStorage.getItem('authToken')
  if (!token) return null

  return {
    username: localStorage.getItem('username') || '',
    email: localStorage.getItem('email') || '',
    isAdmin: localStorage.getItem('isAdmin') === 'true',
  }
}

/**
 * useAuth — Hook quản lý phiên đăng nhập người dùng.
 *
 * @returns {{
 *   user: { username, email, isAdmin } | null,
 *   token: string | null,
 *   isAuthenticated: boolean,
 *   login: (token: string, userData: object) => void,
 *   logout: () => Promise<void>,
 *   updateUser: (newData: object) => void
 * }}
 */
function useAuth() {
  // Khởi tạo state từ localStorage để giữ phiên khi tải lại trang
  const [user, setUser] = useState(getUserFromStorage)
  const [token, setToken] = useState(() => localStorage.getItem('authToken'))

  /**
   * Đăng nhập: Lưu thông tin người dùng vào localStorage và cập nhật state.
   *
   * @param {string} newToken - Token xác thực nhận từ API login
   * @param {object} userData - Thông tin người dùng: { username, email, is_admin }
   */
  const login = (newToken, userData) => {
    localStorage.setItem('authToken', newToken)
    localStorage.setItem('username', userData.username || '')
    localStorage.setItem('email', userData.email || '')
    localStorage.setItem('isAdmin', userData.is_admin ? 'true' : 'false')

    setToken(newToken)
    setUser({
      username: userData.username || '',
      email: userData.email || '',
      isAdmin: userData.is_admin || false,
    })
  }

  /**
   * Đăng xuất: Gọi API logout để xóa token trên server,
   * sau đó xóa localStorage và reset state.
   */
  const logout = async () => {
    try {
      await api.post('/api/auth/logout/')
    } catch {
      // Bỏ qua lỗi — vẫn xóa dữ liệu local dù server có lỗi
    } finally {
      localStorage.removeItem('authToken')
      localStorage.removeItem('username')
      localStorage.removeItem('email')
      localStorage.removeItem('isAdmin')

      setToken(null)
      setUser(null)
    }
  }

  /**
   * Cập nhật thông tin người dùng trong state và localStorage.
   * Dùng sau khi đổi username thành công.
   *
   * @param {object} newData - Dữ liệu cần cập nhật (ví dụ: { username, token })
   */
  const updateUser = (newData) => {
    if (newData.token) {
      localStorage.setItem('authToken', newData.token)
      setToken(newData.token)
    }
    if (newData.username) {
      localStorage.setItem('username', newData.username)
    }

    setUser((prev) => ({ ...prev, ...newData }))
  }

  return {
    user,
    token,
    isAuthenticated: !!token,
    login,
    logout,
    updateUser,
  }
}

export default useAuth
