/**
 * PublicNavbar.jsx — Thanh điều hướng công khai dùng chung
 * Nền trắng phẳng, logo trái, tab căn giữa, VI | EN góc phải
 * Active tự động theo window.location.pathname (useLocation)
 */

import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PublicNavbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const links = [
    { label: 'TRANG CHỦ', href: '/' },
    { label: 'GIỚI THIỆU', href: '/gioithieu' },
    { label: 'DỊCH VỤ',   href: '/dichvu' },
    { label: 'DỰ ÁN',     href: '/duan' },
    { label: 'LIÊN HỆ',   href: '/lienhe' },
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo trái */}
        <a href="/">
          <img src="/screenshots/logo.jpg" alt="The ALAB" className="h-11 md:h-14 w-auto object-contain transition-all duration-300 hover:scale-[1.02]" />
        </a>

        {/* Menu giữa */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className={`text-xs font-semibold tracking-wide transition-colors ${
                isActive(l.href)
                  ? 'text-[#3ea54a] border-b-2 border-[#3ea54a] pb-px'
                  : 'text-slate-600 hover:text-[#3ea54a]'
              }`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* VI | EN + hamburger phải */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-600">
            <span className="text-[#3ea54a] cursor-pointer">VI</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-[#3ea54a] cursor-pointer">EN</span>
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setOpen(!open)}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className={`block text-sm font-medium py-1 ${
                isActive(l.href) ? 'text-[#3ea54a] font-bold' : 'text-slate-700 hover:text-[#3ea54a]'
              }`}>
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 pt-2 border-t border-slate-100">
            <span className="text-[#3ea54a] cursor-pointer">VI</span>
            <span className="text-slate-300">|</span>
            <span className="hover:text-[#3ea54a] cursor-pointer">EN</span>
          </div>
        </div>
      )}
    </header>
  )
}
