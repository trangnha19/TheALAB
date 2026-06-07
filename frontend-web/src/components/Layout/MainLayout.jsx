/**
 * MainLayout.jsx — Layout tổng thể cho khu vực quản trị Admin
 *
 * Sidebar: bg-[#3ea54a] (xanh lá thương hiệu), active bg-[#2b7534] (xanh đậm hơn)
 * Header:  bg-white shadow-sm, tiêu đề text-slate-800
 */

import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const menuItems = [
  {
    to: '/dashboard',
    label: 'Webpages',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1
             0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    to: '/account',
    label: 'Tài khoản',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
]

function MainLayout({ title, children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">

      {/* ═══════════════════════════════════════
          SIDEBAR TRÁI — xanh lá #3ea54a
      ═══════════════════════════════════════ */}
      <aside
        className="w-64 flex flex-col shrink-0"
        style={{ backgroundColor: '#3ea54a' }}
      >

        {/* Logo */}
        <div className="px-5 py-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.18)' }}>
          <img
            src="/screenshots/logo.png"
            alt="The ALAB Data Technology"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70" />
            <span className="text-emerald-100 text-[11px] tracking-wide">Admin Dashboard</span>
          </div>
        </div>

        {/* Nhãn phân loại */}
        <div className="px-5 pt-5 pb-2">
          <p className="text-emerald-100/70 text-[10px] font-bold uppercase tracking-[0.14em]">
            Quản lý
          </p>
        </div>

        {/* Menu điều hướng */}
        <nav className="flex-1 px-3 pb-4 space-y-0.5 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium
                 text-white transition-all duration-150
                 ${isActive ? '' : 'hover:bg-white/10'}`
              }
              style={({ isActive }) => isActive
                ? { backgroundColor: '#2b7534', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }
                : undefined
              }
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? 'opacity-100' : 'opacity-80'}>
                    {item.icon}
                  </span>
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Nút đăng xuất */}
        <div className="px-3 pb-5 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.18)' }}>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm
                       text-white/80 transition-all duration-150"
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = 'white'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
            }}
          >
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0
                   013-3h4a3 3 0 013 3v1" />
            </svg>
            Đăng xuất
          </button>
          <p className="text-emerald-100/50 text-[10px] text-center mt-3">Admin Panel v1.0</p>
        </div>
      </aside>

      {/* ═══════════════════════════════════════
          KHU VỰC NỘI DUNG PHẢI
      ═══════════════════════════════════════ */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header trên */}
        <header className="bg-white border-b border-slate-100 shadow-sm px-6
                           flex items-center justify-between shrink-0 h-16">

          {/* Tiêu đề trang */}
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 rounded-full" style={{ backgroundColor: '#3ea54a' }} />
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">
              {title || 'Bảng điều khiển'}
            </h1>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3">

            {/* Xem trang công khai */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500
                         border border-slate-200 px-3 py-1.5 rounded-lg
                         hover:border-[#3ea54a] hover:text-[#3ea54a] transition-all duration-150"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Xem website
            </a>

            <div className="w-px h-7 bg-slate-200" />

            {/* Avatar + Username */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center
                              text-white font-bold text-sm uppercase shadow-sm"
                   style={{ background: 'linear-gradient(135deg, #3ea54a, #2b7534)' }}>
                {user?.username?.charAt(0) || 'A'}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800 leading-none">
                  {user?.username || 'Admin'}
                </p>
                <p className="text-[11px] text-slate-400 leading-none mt-0.5">Quản trị viên</p>
              </div>
            </div>
          </div>
        </header>

        {/* Vùng nội dung cuộn */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
