/**
 * App.jsx — Router gốc của ứng dụng TheALAB Website
 *
 * Định nghĩa toàn bộ cấu trúc định tuyến (routing):
 *
 *   /                      → Redirect tới /login hoặc /dashboard
 *   /login                 → LoginPage (public)
 *   /preview/:code         → WebpagePreviewPage (public)
 *   /dashboard             → DashboardPage (bảo vệ bởi ProtectedRoute)
 *   /webpages/new          → WebpageFormPage mode="create" (bảo vệ)
 *   /webpages/:id/edit     → WebpageFormPage mode="edit" (bảo vệ)
 *   /account               → AccountPage (bảo vệ)
 *   *                      → Redirect về /login (404 fallback)
 *
 * Quy tắc bảo vệ:
 *   Các tuyến admin được bọc trong <ProtectedRoute> — kiểm tra token
 *   trong localStorage. Không có token → redirect về /login tự động.
 */

import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/Common/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import AccountPage from './pages/AccountPage'
import WebpageFormPage from './pages/WebpageFormPage'
import WebpagePreviewPage from './pages/WebpagePreviewPage'
import ServicePage from './pages/ServicePage'
import SoftwareDevelopmentServicePage from './pages/SoftwareDevelopmentServicePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import OutsourcingServicePage from './pages/OutsourcingServicePage'
import WebsiteDevelopmentServicePage from './pages/WebsiteDevelopmentServicePage'
import SoftwareDevServicePage from './pages/SoftwareDevServicePage'
import OutsourcingDevServicePage from './pages/OutsourcingDevServicePage'
import WebsiteDevServicePage from './pages/WebsiteDevServicePage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      {/* === TUYẾN CÔNG KHAI CHÍNH THỨC (đường dẫn sạch) === */}
      <Route path="/" element={<WebpagePreviewPage />} />
      <Route path="/gioithieu" element={<AboutPage />} />
      <Route path="/dichvu" element={<WebpagePreviewPage />} />
      <Route path="/duan" element={<WebpagePreviewPage />} />
      <Route path="/lienhe" element={<ContactPage />} />

      {/* === TUYẾN CÔNG KHAI (không cần đăng nhập) === */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/preview/:code" element={<WebpagePreviewPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/dichvu/tuvan-phattrien" element={<SoftwareDevServicePage />} />
      <Route path="/dichvu/giaicong-congnghe" element={<OutsourcingDevServicePage />} />
      <Route path="/dichvu/xaydung-website" element={<WebsiteDevServicePage />} />
      <Route path="/services/software-development" element={<SoftwareDevelopmentServicePage />} />
      <Route path="/services/outsourcing" element={<OutsourcingServicePage />} />
      <Route path="/services/website-development" element={<WebsiteDevelopmentServicePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectPage />} />

      {/* === TUYẾN ADMIN (yêu cầu đăng nhập) === */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/webpages/new"
        element={
          <ProtectedRoute>
            <WebpageFormPage mode="create" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/webpages/:id/edit"
        element={
          <ProtectedRoute>
            <WebpageFormPage mode="edit" />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />

      {/* === FALLBACK 404 — Mọi đường dẫn không khớp → /login === */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
