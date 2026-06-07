/**
 * main.jsx — Điểm khởi động ứng dụng React
 *
 * Bọc toàn bộ ứng dụng trong BrowserRouter để kích hoạt
 * hệ thống định tuyến (routing) của react-router-dom.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter bao ngoài để toàn bộ app dùng được useNavigate, NavLink, v.v. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
