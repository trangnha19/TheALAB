/**
 * WebpageFormPage.jsx — Trang tạo mới / chỉnh sửa Webpage (UI nâng cấp)
 *
 * Hai chế độ:
 *   - mode="create" → /webpages/new    → POST /api/webpages/
 *   - mode="edit"   → /webpages/:id/edit → PUT /api/webpages/:id/
 */

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MainLayout from '../components/Layout/MainLayout'
import LoadingSpinner from '../components/Common/LoadingSpinner'
import api from '../services/api'

const CODE_REGEX = /^[a-z0-9_-]+$/

function WebpageFormPage({ mode }) {
  const navigate    = useNavigate()
  const { id }      = useParams()
  const isEdit      = mode === 'edit'

  const [code, setCode]       = useState('')
  const [title, setTitle]     = useState('')
  const [content, setContent] = useState('')

  const [loading, setLoading]       = useState(isEdit)
  const [submitting, setSubmitting] = useState(false)
  const [errorMsg, setErrorMsg]     = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  useEffect(() => {
    if (!isEdit) return
    const fetch = async () => {
      try {
        const { data } = await api.get(`/api/webpages/${id}/`)
        setCode(data.code); setTitle(data.title); setContent(data.content)
      } catch (err) {
        setErrorMsg(err.response?.status === 404 ? 'Không tìm thấy webpage.' : 'Không thể tải dữ liệu.')
      } finally { setLoading(false) }
    }
    fetch()
  }, [id, isEdit])

  const validate = () => {
    const errs = {}
    if (!code.trim())                         errs.code = 'Mã trang không được để trống.'
    else if (!CODE_REGEX.test(code.trim()))   errs.code = 'Chỉ dùng: chữ thường a-z, số 0-9, dấu - và _'
    if (!title.trim())                        errs.title = 'Tiêu đề không được để trống.'
    if (!content.trim())                      errs.content = 'Nội dung không được để trống.'
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    if (!validate()) return
    setSubmitting(true)
    try {
      const payload = { code: code.trim(), title: title.trim(), content: content.trim() }
      if (isEdit) await api.put(`/api/webpages/${id}/`, payload)
      else        await api.post('/api/webpages/', payload)
      navigate('/dashboard')
    } catch (err) {
      const d = err.response?.data
      if (d) {
        const se = {}
        if (d.code)    se.code    = Array.isArray(d.code)    ? d.code[0]    : d.code
        if (d.title)   se.title   = Array.isArray(d.title)   ? d.title[0]   : d.title
        if (d.content) se.content = Array.isArray(d.content) ? d.content[0] : d.content
        if (Object.keys(se).length) setFieldErrors(se)
        else setErrorMsg(d.detail || d.error || 'Có lỗi xảy ra.')
      } else {
        setErrorMsg('Không thể kết nối đến máy chủ.')
      }
    } finally { setSubmitting(false) }
  }

  if (loading) return <LoadingSpinner />

  return (
    <MainLayout title={isEdit ? 'Chỉnh sửa Webpage' : 'Tạo Webpage mới'}>
      <div className="max-w-2xl">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <button onClick={() => navigate('/dashboard')}
            className="flex items-center gap-1.5 hover:text-alab-green transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Webpages
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-alab-navy font-medium">
            {isEdit ? `Chỉnh sửa #${id}` : 'Tạo mới'}
          </span>
        </div>

        {/* Card form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Dải màu đầu card */}
          <div className="h-1.5 bg-gradient-to-r from-alab-navy to-alab-green" />

          <div className="p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                ${isEdit ? 'bg-alab-green/10 text-alab-green' : 'bg-alab-navy/10 text-alab-navy'}`}>
                {isEdit ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M12 4v16m8-8H4" />
                  </svg>
                )}
              </div>
              <div>
                <h2 className="text-lg font-bold text-alab-navy">
                  {isEdit ? `Chỉnh sửa: ${title || '...'}` : 'Tạo Webpage mới'}
                </h2>
                <p className="text-xs text-slate-500">
                  {isEdit ? 'Cập nhật nội dung webpage' : 'Điền đầy đủ thông tin bên dưới'}
                </p>
              </div>
            </div>

            {/* Lỗi chung */}
            {errorMsg && (
              <div className="mb-5 flex items-start gap-2.5 bg-red-50 border border-red-200
                              text-red-700 text-sm px-4 py-3 rounded-xl">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Mã trang */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Mã trang (code)
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toLowerCase())}
                  placeholder="vd: about-us, home_page, lien-he"
                  className={`w-full border rounded-xl px-4 py-3 text-sm font-mono bg-slate-50
                              focus:outline-none focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green
                              focus:bg-white transition-all duration-200
                              ${fieldErrors.code ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                />
                {fieldErrors.code && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.code}
                  </p>
                )}
                <p className="text-xs text-slate-400 mt-1.5">
                  Chỉ dùng chữ thường a-z, số 0-9, dấu <code className="bg-slate-100 px-1 rounded">-</code> và <code className="bg-slate-100 px-1 rounded">_</code>
                </p>
              </div>

              {/* Tiêu đề */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Tiêu đề
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Nhập tiêu đề trang..."
                  className={`w-full border rounded-xl px-4 py-3 text-sm bg-slate-50
                              focus:outline-none focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green
                              focus:bg-white transition-all duration-200
                              ${fieldErrors.title ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                />
                {fieldErrors.title && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.title}
                  </p>
                )}
              </div>

              {/* Nội dung */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Nội dung
                  <span className="text-red-500 ml-1">*</span>
                  <span className="ml-2 text-xs font-normal text-slate-400">(hỗ trợ HTML)</span>
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={'<h2>Tiêu đề</h2>\n<p>Đoạn văn bản...</p>'}
                  rows={14}
                  className={`w-full border rounded-xl px-4 py-3 text-sm font-mono resize-y bg-slate-50
                              focus:outline-none focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green
                              focus:bg-white transition-all duration-200 leading-relaxed
                              ${fieldErrors.content ? 'border-red-400 bg-red-50' : 'border-slate-200'}`}
                />
                {fieldErrors.content && (
                  <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {fieldErrors.content}
                  </p>
                )}
              </div>

              {/* Nút hành động */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-2 bg-alab-green hover:bg-green-600
                             active:bg-green-700 disabled:bg-green-300 disabled:cursor-not-allowed
                             text-white font-semibold px-7 py-3 rounded-xl
                             transition-all duration-150 shadow-sm shadow-green-600/20 text-sm"
                >
                  {submitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Đang lưu...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {isEdit ? 'Lưu thay đổi' : 'Tạo webpage'}
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/dashboard')}
                  className="text-sm text-slate-500 hover:text-slate-700 px-5 py-3 rounded-xl
                             border border-slate-200 hover:border-slate-300 bg-white
                             transition-all duration-150"
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default WebpageFormPage
