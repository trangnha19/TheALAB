/**
 * ProtectedRoute.jsx — Higher-Order Component bảo vệ tuyến đường admin
 *
 * Kiểm tra xem người dùng có token xác thực trong localStorage không.
 *   - Có token → render component con (children)
 *   - Không có token → chuyển hướng về trang /login
 *
 * Cách dùng trong App.jsx:
 *   <Route path="/dashboard" element={
 *     <ProtectedRoute><DashboardPage /></ProtectedRoute>
 *   } />
 */

import { Navigate } from 'react-router-dom'

/**
 * ProtectedRoute — Bảo vệ tuyến đường yêu cầu xác thực.
 *
 * @param {{ children: React.ReactNode }} props
 * @returns {React.ReactNode} - Render children hoặc redirect về /login
 */
function ProtectedRoute({ children }) {
  // Kiểm tra token trong localStorage
  const token = localStorage.getItem('authToken')

  // Không có token → chuyển về trang đăng nhập
  if (!token) {
    return <Navigate to="/login" replace />
  }

  // Có token → render nội dung được bảo vệ
  return children
}

export default ProtectedRoute
