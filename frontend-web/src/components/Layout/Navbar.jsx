/**
 * Navbar.jsx — Thanh điều hướng phía trên cho trang Admin
 *
 * Hiển thị:
 *   - Tiêu đề trang hiện tại (truyền vào qua prop)
 *   - Tên người dùng đang đăng nhập
 *   - Nút Đăng xuất
 *
 * Cách dùng:
 *   <Navbar title="Quản lý Webpages" user={user} onLogout={handleLogout} />
 */

/**
 * @param {{
 *   title?: string,
 *   user: { username: string } | null,
 *   onLogout: () => void
 * }} props
 */
function Navbar({ title = 'Bảng điều khiển', user, onLogout }) {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between">
      {/* Logo + Tiêu đề trang */}
      <div className="flex items-center gap-4">
        <img
          src="/screenshots/logo.png"
          alt="The ALAB Data Technology"
          className="h-16 md:h-20 w-auto object-contain"
        />
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      </div>

      {/* Thông tin người dùng + nút đăng xuất */}
      <div className="flex items-center gap-4">
        {/* Tên người dùng */}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <div className="w-8 h-8 rounded-full bg-alab-green flex items-center justify-center text-white font-bold text-xs uppercase">
            {user?.username?.charAt(0) || 'A'}
          </div>
          <span className="hidden sm:inline font-medium">{user?.username || 'Admin'}</span>
        </div>

        {/* Đường kẻ ngăn cách */}
        <div className="w-px h-6 bg-slate-200" />

        {/* Nút Đăng xuất */}
        <button
          onClick={onLogout}
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-600 transition-colors duration-150"
          title="Đăng xuất"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="hidden sm:inline">Đăng xuất</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
