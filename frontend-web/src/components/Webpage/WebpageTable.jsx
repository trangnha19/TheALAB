/**
 * WebpageTable.jsx — Bảng quản lý Webpage nâng cấp
 *
 * Cải tiến UI:
 *   - Toolbar tìm kiếm/lọc thiết kế card nổi bật
 *   - Bảng hover từng hàng, khoảng cách rộng rãi
 *   - Nút hành động có icon SVG + tooltip, padding hợp lý
 *   - Badge màu sắc cho cột Code
 *   - Trạng thái rỗng và loading có hình minh họa
 */

import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import LoadingSpinner from '../Common/LoadingSpinner'

const SORT_OPTIONS = [
  { value: '-created_at', label: 'Mới nhất trước' },
  { value: 'created_at',  label: 'Cũ nhất trước' },
  { value: 'title',       label: 'Tiêu đề A → Z' },
  { value: '-title',      label: 'Tiêu đề Z → A' },
  { value: 'code',        label: 'Mã A → Z' },
  { value: '-code',       label: 'Mã Z → A' },
]

const formatDate = (iso) => {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('vi-VN', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

/* Spinner nhỏ dùng trong nút */
function BtnSpinner() {
  return (
    <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  )
}

function WebpageTable() {
  const navigate = useNavigate()

  const [webpages, setWebpages]     = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState('')
  const [deleteMsg, setDeleteMsg]   = useState('')
  const [deletingId, setDeletingId] = useState(null)

  const [searchInput, setSearchInput] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [sort, setSort]               = useState('-created_at')
  const [createdFrom, setCreatedFrom] = useState('')
  const [createdTo, setCreatedTo]     = useState('')

  /* Debounce 300ms */
  useEffect(() => {
    const t = setTimeout(() => setSearchQuery(searchInput), 300)
    return () => clearTimeout(t)
  }, [searchInput])

  const fetchWebpages = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams()
      if (searchQuery)  params.set('search',       searchQuery)
      if (sort)         params.set('sort',          sort)
      if (createdFrom)  params.set('created_from',  createdFrom)
      if (createdTo)    params.set('created_to',    createdTo)

      const { data } = await api.get(`/api/webpages/?${params}`)
      setWebpages(data.results || [])
      setTotalCount(data.count || 0)
    } catch {
      setError('Không thể tải danh sách. Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }, [searchQuery, sort, createdFrom, createdTo])

  useEffect(() => { fetchWebpages() }, [fetchWebpages])

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Xóa webpage "${title}"?\n\nHành động này không thể hoàn tác.`)) return
    setDeletingId(id)
    try {
      await api.delete(`/api/webpages/${id}/`)
      setDeleteMsg(`Đã xóa "${title}" thành công.`)
      fetchWebpages()
      setTimeout(() => setDeleteMsg(''), 3500)
    } catch {
      setError(`Không thể xóa "${title}".`)
    } finally {
      setDeletingId(null)
    }
  }

  const hasFilter = searchQuery || createdFrom || createdTo

  return (
    <div className="space-y-5">

      {/* ══════════════════════════════════════
          TOOLBAR
      ══════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

        {/* Hàng 1: Search + Sort + Tạo mới */}
        <div className="flex flex-col sm:flex-row gap-3">

          {/* Ô tìm kiếm */}
          <div className="relative flex-1">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Tìm theo mã, tiêu đề hoặc nội dung..."
              className="w-full pl-10 pr-9 py-2.5 text-sm border border-slate-200 rounded-xl
                         bg-slate-50 focus:bg-white focus:outline-none
                         focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green
                         transition-all duration-200"
            />
            {searchInput && (
              <button onClick={() => setSearchInput('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Dropdown sắp xếp */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="pl-9 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl bg-slate-50
                         focus:outline-none focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green
                         appearance-none cursor-pointer transition-all duration-200"
            >
              {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>

          {/* Nút Tạo mới */}
          <button
            onClick={() => navigate('/webpages/new')}
            className="flex items-center gap-2 bg-alab-green hover:bg-green-600 active:bg-green-700
                       text-white text-sm font-semibold px-5 py-2.5 rounded-xl
                       transition-all duration-150 shadow-sm shadow-green-600/20 whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            Tạo webpage mới
          </button>
        </div>

        {/* Hàng 2: Lọc ngày */}
        <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Lọc ngày tạo:
          </span>
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Từ ngày</label>
            <input type="date" value={createdFrom}
              onChange={(e) => setCreatedFrom(e.target.value)}
              className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-slate-50
                         focus:outline-none focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Đến ngày</label>
            <input type="date" value={createdTo}
              onChange={(e) => setCreatedTo(e.target.value)}
              className="text-xs border border-slate-200 rounded-lg px-2.5 py-1.5 bg-slate-50
                         focus:outline-none focus:ring-2 focus:ring-alab-green/25 focus:border-alab-green" />
          </div>
          {(createdFrom || createdTo) && (
            <button onClick={() => { setCreatedFrom(''); setCreatedTo('') }}
              className="text-xs text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Xóa bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Thông báo xóa thành công */}
      {deleteMsg && (
        <div className="flex items-center gap-2.5 bg-emerald-50 border border-emerald-200
                        text-emerald-700 text-sm px-4 py-3 rounded-xl">
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {deleteMsg}
        </div>
      )}

      {/* Thông báo lỗi */}
      {error && (
        <div className="flex items-center gap-2.5 bg-red-50 border border-red-200
                        text-red-700 text-sm px-4 py-3 rounded-xl">
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          {error}
          <button onClick={() => setError('')} className="ml-auto text-red-400 hover:text-red-600">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════
          BẢNG DỮ LIỆU
      ══════════════════════════════════════ */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

        {/* Header bảng */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-bold text-alab-navy">Danh sách Webpages</h3>
            {hasFilter && (
              <span className="text-xs text-alab-green bg-alab-green/10 px-2 py-0.5 rounded-full font-medium">
                Đang lọc
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-white bg-alab-navy px-2.5 py-1 rounded-full">
              {totalCount} trang
            </span>
            {/* Nút refresh */}
            <button onClick={fetchWebpages}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400
                         hover:bg-slate-100 hover:text-alab-navy transition-colors"
              title="Làm mới danh sách">
              <svg className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trạng thái loading */}
        {loading ? (
          <div className="py-20">
            <LoadingSpinner fullScreen={false} text="Đang tải danh sách..." />
          </div>

        /* Trạng thái rỗng */
        ) : webpages.length === 0 ? (
          <div className="py-20 text-center px-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-sm font-semibold text-slate-600 mb-1">
              {hasFilter ? 'Không tìm thấy kết quả' : 'Chưa có webpage nào'}
            </p>
            <p className="text-xs text-slate-400 mb-5">
              {hasFilter
                ? 'Thử thay đổi từ khóa hoặc xóa bộ lọc.'
                : 'Bắt đầu bằng cách tạo một webpage mới.'}
            </p>
            {!hasFilter && (
              <button onClick={() => navigate('/webpages/new')}
                className="inline-flex items-center gap-2 bg-alab-green hover:bg-green-600
                           text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
                Tạo webpage đầu tiên
              </button>
            )}
          </div>

        /* Bảng dữ liệu */
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Mã trang
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Tiêu đề
                  </th>
                  <th className="px-6 py-3.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider hidden lg:table-cell">
                    Ngày tạo
                  </th>
                  <th className="px-6 py-3.5 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {webpages.map((wp) => (
                  <tr key={wp.id}
                    className="hover:bg-slate-50/80 transition-colors duration-100 group">

                    {/* Cột Mã */}
                    <td className="px-6 py-4">
                      <code className="inline-flex items-center gap-1.5 text-xs bg-alab-green/10
                                       text-alab-green px-2.5 py-1 rounded-lg font-mono font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-alab-green" />
                        {wp.code}
                      </code>
                    </td>

                    {/* Cột Tiêu đề */}
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-800 text-sm leading-snug">{wp.title}</p>
                      <p className="text-xs text-slate-400 mt-0.5 lg:hidden">{formatDate(wp.created_at)}</p>
                    </td>

                    {/* Cột Ngày tạo */}
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {formatDate(wp.created_at)}
                      </div>
                    </td>

                    {/* Cột Hành động */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1.5">

                        {/* Nút Preview — icon mắt xanh dương */}
                        <button
                          onClick={() => window.open(`/preview/${wp.code}`, '_blank')}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold
                                     text-blue-600 hover:text-blue-700
                                     bg-blue-50 hover:bg-blue-100
                                     px-2.5 py-1.5 rounded-lg transition-all duration-150"
                          title="Xem trang công khai"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Preview
                        </button>

                        {/* Nút Sửa — icon bút xanh lá */}
                        <button
                          onClick={() => navigate(`/webpages/${wp.id}/edit`)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold
                                     text-alab-green hover:text-green-700
                                     bg-alab-green/10 hover:bg-alab-green/20
                                     px-2.5 py-1.5 rounded-lg transition-all duration-150"
                          title="Chỉnh sửa"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          Sửa
                        </button>

                        {/* Nút Xóa — icon thùng rác đỏ */}
                        <button
                          onClick={() => handleDelete(wp.id, wp.title)}
                          disabled={deletingId === wp.id}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold
                                     text-red-500 hover:text-red-700
                                     bg-red-50 hover:bg-red-100 disabled:opacity-60
                                     px-2.5 py-1.5 rounded-lg transition-all duration-150"
                          title="Xóa webpage"
                        >
                          {deletingId === wp.id ? <BtnSpinner /> : (
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          )}
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default WebpageTable
