/**
 * AccountPage.jsx — Trang quản lý tài khoản người dùng (đại tu UI)
 *
 * Hai phần chính với card thiết kế nâng cao:
 *   1. Đổi tên đăng nhập — confirm mật khẩu
 *   2. Đổi mật khẩu — logout tự động sau thành công
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import api from '../services/api'
import useAuth from '../hooks/useAuth'

/* Input tái sử dụng với label + focus alab-green */
function FormInput({ label, type = 'text', value, onChange, placeholder, required, autoComplete }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm bg-slate-50
                   text-slate-800 placeholder-slate-400
                   focus:outline-none focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green
                   focus:bg-white transition-all duration-200"
      />
    </div>
  )
}

/* Spinner nhỏ cho nút */
function BtnSpinner() {
  return (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

function AccountPage() {
  const navigate = useNavigate()
  const { user, updateUser, logout } = useAuth()

  // ── State đổi username ──
  const [newUsername, setNewUsername]           = useState('')
  const [confirmPwForUser, setConfirmPwForUser] = useState('')
  const [usernameLoading, setUsernameLoading]   = useState(false)
  const [usernameSuccess, setUsernameSuccess]   = useState('')
  const [usernameError, setUsernameError]       = useState('')

  // ── State đổi mật khẩu ──
  const [oldPw, setOldPw]         = useState('')
  const [newPw, setNewPw]         = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [pwLoading, setPwLoading] = useState(false)
  const [pwSuccess, setPwSuccess] = useState('')
  const [pwError, setPwError]     = useState('')

  const handleChangeUsername = async (e) => {
    e.preventDefault()
    setUsernameError('')
    setUsernameSuccess('')
    setUsernameLoading(true)
    try {
      const { data } = await api.post('/api/auth/change-username/', {
        new_username: newUsername,
        password: confirmPwForUser,
      })
      updateUser({ username: data.new_username, token: data.token })
      setUsernameSuccess(`Đổi thành công! Username mới: ${data.new_username}`)
      setNewUsername('')
      setConfirmPwForUser('')
    } catch (err) {
      setUsernameError(
        err.response?.data?.error ||
        err.response?.data?.new_username?.[0] ||
        'Không thể đổi tên đăng nhập.'
      )
    } finally {
      setUsernameLoading(false)
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault()
    setPwError('')
    setPwSuccess('')
    setPwLoading(true)
    try {
      await api.post('/api/auth/change-password/', {
        old_password: oldPw,
        new_password: newPw,
        confirm_password: confirmPw,
      })
      setPwSuccess('Đổi mật khẩu thành công. Đang đăng xuất...')
      setTimeout(async () => { await logout(); navigate('/login') }, 1500)
    } catch (err) {
      const d = err.response?.data
      setPwError(d?.error || d?.old_password?.[0] || d?.new_password?.[0] ||
        d?.confirm_password?.[0] || d?.non_field_errors?.[0] || 'Không thể đổi mật khẩu.')
    } finally {
      setPwLoading(false)
    }
  }

  return (
    <MainLayout title="Tài khoản">
      <div className="max-w-2xl space-y-6">

        {/* ── CARD: Thông tin hiện tại ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-alab-navy to-alab-green" />
          <div className="p-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              Tài khoản hiện tại
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-alab-green to-green-700
                              flex items-center justify-center text-white font-extrabold text-xl uppercase
                              shadow-md shadow-green-600/20">
                {user?.username?.charAt(0) || 'A'}
              </div>
              <div>
                <p className="font-bold text-alab-navy text-base">{user?.username}</p>
                <p className="text-sm text-slate-500">{user?.email || 'Chưa có email'}</p>
                {user?.isAdmin && (
                  <span className="inline-flex items-center gap-1 mt-1.5 text-xs bg-alab-green/10
                                   text-alab-green px-2.5 py-0.5 rounded-full font-semibold">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Quản trị viên
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD: Đổi tên đăng nhập ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-alab-navy/10 flex items-center justify-center text-alab-navy">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-alab-navy text-sm">Đổi tên đăng nhập</h3>
              <p className="text-xs text-slate-500">Cập nhật mà không cần đăng nhập lại</p>
            </div>
          </div>

          <div className="p-6">
            {/* Alert */}
            {usernameSuccess && (
              <div className="mb-4 flex items-start gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-4 py-3 rounded-xl">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {usernameSuccess}
              </div>
            )}
            {usernameError && (
              <div className="mb-4 flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {usernameError}
              </div>
            )}

            <form onSubmit={handleChangeUsername} className="space-y-4">
              <FormInput label="Tên đăng nhập mới" value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="Nhập tên đăng nhập mới..." required autoComplete="off" />
              <FormInput label="Xác nhận mật khẩu hiện tại" type="password"
                value={confirmPwForUser} onChange={(e) => setConfirmPwForUser(e.target.value)}
                placeholder="Nhập mật khẩu để xác nhận..." required autoComplete="current-password" />
              <button type="submit" disabled={usernameLoading}
                className="flex items-center gap-2 bg-alab-navy hover:bg-slate-700
                           disabled:bg-slate-400 text-white text-sm font-semibold
                           px-6 py-2.5 rounded-xl transition-colors duration-150 shadow-sm">
                {usernameLoading ? <><BtnSpinner /> Đang lưu...</> : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 13l4 4L19 7" />
                    </svg>
                    Lưu tên đăng nhập mới
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* ── CARD: Đổi mật khẩu ── */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-alab-navy text-sm">Đổi mật khẩu</h3>
              <p className="text-xs text-slate-500">Sẽ tự động đăng xuất sau khi đổi thành công</p>
            </div>
          </div>

          <div className="p-6">
            {pwSuccess && (
              <div className="mb-4 flex items-start gap-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm px-4 py-3 rounded-xl">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {pwSuccess}
              </div>
            )}
            {pwError && (
              <div className="mb-4 flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {pwError}
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <FormInput label="Mật khẩu hiện tại" type="password" value={oldPw}
                onChange={(e) => setOldPw(e.target.value)}
                placeholder="Nhập mật khẩu hiện tại..." required autoComplete="current-password" />
              <FormInput label="Mật khẩu mới" type="password" value={newPw}
                onChange={(e) => setNewPw(e.target.value)}
                placeholder="Ít nhất 5 ký tự..." required autoComplete="new-password" />
              <FormInput label="Xác nhận mật khẩu mới" type="password" value={confirmPw}
                onChange={(e) => setConfirmPw(e.target.value)}
                placeholder="Nhập lại mật khẩu mới..." required autoComplete="new-password" />

              <button type="submit" disabled={pwLoading}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700
                           disabled:bg-red-400 text-white text-sm font-semibold
                           px-6 py-2.5 rounded-xl transition-colors duration-150 shadow-sm">
                {pwLoading ? <><BtnSpinner /> Đang xử lý...</> : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Đổi mật khẩu
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </MainLayout>
  )
}

export default AccountPage
