/**
 * DashboardPage.jsx — Trang quản lý danh sách Webpages
 *
 * Đây là trang chính của khu vực Admin, hiển thị:
 *   - Bảng danh sách tất cả webpages
 *   - Thanh công cụ tìm kiếm, sắp xếp, lọc (trong WebpageTable)
 *   - Nút tạo webpage mới
 *
 * Tuyến đường: /dashboard (yêu cầu xác thực)
 */

import MainLayout from '../components/Layout/MainLayout'
import WebpageTable from '../components/Webpage/WebpageTable'

function DashboardPage() {
  return (
    <MainLayout title="Quản lý Webpages">
      <WebpageTable />
    </MainLayout>
  )
}

export default DashboardPage
