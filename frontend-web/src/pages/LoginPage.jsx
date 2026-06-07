/**
 * LoginPage.jsx — Trang đăng nhập khu vực quản trị TheALAB
 *
 * Thiết kế 2 cột:
 *   - Trái (desktop): nền trắng/xám nhạt, logo + giới thiệu hệ thống,
 *     toàn bộ chữ màu đậm (text-alab-navy / text-slate-700) để tương phản rõ
 *   - Phải: Card trắng bo góc, đổ bóng sâu, input focus xanh lá, nút xanh lá
 */

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import useAuth from '../hooks/useAuth'

function LoginPage() {
  const navigate = useNavigate()
  const { login, isAuthenticated } = useAuth()

  const [username, setUsername]       = useState('')
  const [password, setPassword]       = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading]         = useState(false)
  const [errorMsg, setErrorMsg]       = useState('')

  useEffect(() => {
    if (isAuthenticated) navigate('/dashboard', { replace: true })
  }, [isAuthenticated, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    setLoading(true)
    try {
      const { data } = await api.post('/api/auth/login/', { username, password })
      login(data.token, { username: data.username, email: data.email, is_admin: data.is_admin })
      navigate('/dashboard', { replace: true })
    } catch (err) {
      setErrorMsg(err.response?.data?.error || 'Đăng nhập thất bại. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  /* Danh sách tính năng hiển thị bên trái */
  const features = [
    { icon: '📄', text: 'Quản lý nội dung webpage linh hoạt' },
    { icon: '🔒', text: 'Phân quyền & bảo mật Token Auth' },
    { icon: '⚡', text: 'Giao diện thân thiện, tốc độ cao' },
  ]

  return (
    /* Nền tổng thể — xám cực nhạt */
    <div className="min-h-screen bg-slate-50 flex">

      {/* ═══════════════════════════════════════
          CỘT TRÁI — Giới thiệu thương hiệu
          Chữ tối trên nền sáng → tương phản cao
      ═══════════════════════════════════════ */}
      <div className="hidden lg:flex lg:w-[52%] bg-white border-r border-slate-100
                      flex-col justify-between px-14 py-12 relative overflow-hidden">

        {/* Họa tiết nền trang trí */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full
                        bg-alab-green/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full
                        bg-alab-navy/4 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10">
          <img
            src="/screenshots/logo.png"
            alt="The ALAB Data Technology"
            className="h-14 w-auto object-contain"
          />
        </div>

        {/* Khối nội dung chính */}
        <div className="relative z-10 flex-1 flex flex-col justify-center py-10">

          {/* Badge thương hiệu */}
          <span className="inline-flex items-center gap-2 bg-alab-green/10 text-alab-green
                           text-xs font-bold uppercase tracking-widest px-3.5 py-1.5
                           rounded-full mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-alab-green" />
            Admin Dashboard
          </span>

          {/* Tiêu đề chính — màu đậm, tương phản rõ */}
          <h1 className="text-4xl font-extrabold text-alab-navy leading-snug mb-4">
            Hệ thống quản trị<br />
            <span className="text-alab-green">TheALAB CMS</span>
          </h1>

          {/* Mô tả */}
          <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-sm">
            Quản lý toàn bộ nội dung website công ty một cách dễ dàng,
            nhanh chóng và hiệu quả từ một giao diện duy nhất.
          </p>

          {/* Danh sách tính năng */}
          <div className="space-y-4">
            {features.map((feat) => (
              <div key={feat.text} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-alab-green/10 flex items-center
                                justify-center shrink-0 text-base">
                  {feat.icon}
                </div>
                <div className="pt-1.5">
                  <p className="text-sm font-semibold text-slate-800">{feat.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider + thống kê */}
          <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4">
            {[
              { n: '50+',  label: 'Dự án' },
              { n: '30+',  label: 'Khách hàng' },
              { n: '24/7', label: 'Hỗ trợ' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-extrabold text-alab-navy">{s.n}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer nhỏ bên trái */}
        <p className="relative z-10 text-xs text-slate-400">
          © 2026 The ALAB Data Technology · Đà Nẵng
        </p>
      </div>

      {/* ═══════════════════════════════════════
          CỘT PHẢI — Form đăng nhập
      ═══════════════════════════════════════ */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-slate-50">
        <div className="w-full max-w-md">

          {/* Logo mobile (ẩn trên desktop) */}
          <div className="lg:hidden text-center mb-8">
            <img src="/screenshots/logo.png" alt="The ALAB" className="h-14 w-auto object-contain mx-auto mb-3" />
            <p className="text-slate-500 text-sm">Hệ thống quản trị nội dung</p>
          </div>

          {/* ── Card form ── */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">

            {/* Dải màu đầu card */}
            <div className="h-1 bg-gradient-to-r from-alab-green via-green-400 to-alab-navy" />

            <div className="p-8">
              {/* Tiêu đề */}
              <div className="mb-7">
                <h2 className="text-2xl font-extrabold text-alab-navy">Đăng nhập</h2>
                <p className="text-slate-500 text-sm mt-1">
                  Nhập thông tin tài khoản của bạn để tiếp tục
                </p>
              </div>

              {/* Thông báo lỗi */}
              {errorMsg && (
                <div className="mb-5 flex items-start gap-2.5 bg-red-50 border border-red-200
                                text-red-700 text-sm px-4 py-3 rounded-xl">
                  <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586
                         10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0
                         001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10
                         8.586 8.707 7.293z"
                      clipRule="evenodd" />
                  </svg>
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Tên đăng nhập */}
                <div>
                  <label htmlFor="username"
                    className="block text-sm font-semibold text-slate-700 mb-2">
                    Tên đăng nhập
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="admin"
                      required
                      autoComplete="username"
                      className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 rounded-xl
                                 bg-slate-50 text-slate-800 placeholder-slate-400
                                 focus:outline-none focus:ring-2 focus:ring-alab-green/20
                                 focus:border-alab-green focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Mật khẩu */}
                <div>
                  <label htmlFor="password"
                    className="block text-sm font-semibold text-slate-700 mb-2">
                    Mật khẩu
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                      <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2
                             0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      autoComplete="current-password"
                      className="w-full pl-10 pr-11 py-3 text-sm border border-slate-200 rounded-xl
                                 bg-slate-50 text-slate-800 placeholder-slate-400
                                 focus:outline-none focus:ring-2 focus:ring-alab-green/20
                                 focus:border-alab-green focus:bg-white transition-all duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2
                                 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97
                               9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242
                               4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0
                               0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0
                               01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542
                               7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Nút đăng nhập — phủ màu alab-green */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-alab-green hover:bg-green-600 active:bg-green-700
                             disabled:bg-green-300 disabled:cursor-not-allowed
                             text-white font-bold rounded-xl px-4 py-3.5 text-sm
                             transition-all duration-200 shadow-md shadow-green-500/25
                             flex items-center justify-center gap-2 mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Đang xác thực...
                    </>
                  ) : (
                    <>
                      Đăng nhập
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                          d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* Gợi ý tài khoản mặc định */}
              <div className="mt-6 pt-5 border-t border-slate-100 text-center">
                <p className="text-xs text-slate-400">
                  Tài khoản mặc định:{' '}
                  <code className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                    admin / 12345
                  </code>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright mobile */}
          <p className="lg:hidden text-center text-xs text-slate-400 mt-6">
            © 2026 TheALAB Data Technology · Đà Nẵng
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
