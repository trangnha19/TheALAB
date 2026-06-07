/**
 * ProjectPage.jsx — Trang Dự án tiêu biểu The ALAB
 * Bám sát 100% thiết kế mẫu duanpage.png
 * Routes: /projects  và  /preview/duan
 */

import { useState } from 'react'
import Footer from '../components/Layout/Footer'
import PublicNavbar from '../components/Layout/PublicNavbar'
import Breadcrumb from '../components/Breadcrumb'

/* ═══════════════════════════════════════════════════
   DỮ LIỆU 8 DỰ ÁN MẪU
═══════════════════════════════════════════════════ */
const PROJECT_DATA = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  title: 'Website The Alab',
  desc: 'Thiết kế và phát triển website chính thức của The Alab',
  tag: 'Website',
  year: '2024',
  img: '/duan/2.png',
}))

const TABS = [
  'Tất cả dự án',
  'Website',
  'Ứng dụng di động',
  'Hệ thống quản lý',
  'Thương mại điện tử',
  'Khác',
]

/* Icon toàn cầu */
function GlobeIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657
           0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════
   COMPONENT CHÍNH
═══════════════════════════════════════════════════ */
export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState('Tất cả dự án')
  const [activePage, setActivePage] = useState(1)
  const totalPages = 5

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PublicNavbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════
            TẦNG 1: HERO BANNER
        ══════════════════════════════════════════ */}
        <section
          style={{
            backgroundImage: "url('/duan/1.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative w-full bg-slate-900/60 pt-24 pb-16 text-white">
            <div className="max-w-6xl mx-auto px-6">
              <Breadcrumb items={[
                { label: 'Trang chủ', path: '/' },
                { label: 'Dự án' },
              ]} />
              {/* H1 */}
              <h1 className="font-black tracking-tight text-4xl md:text-5xl leading-tight mb-5 max-w-2xl">
                CÁC DỰ ÁN{' '}
                <span className="text-[#3ea54a]">TIÊU BIỂU</span>
              </h1>

              {/* Sub text */}
              <p className="text-white/75 text-base leading-relaxed max-w-xl">
                The Alab tự hào đồng hành cùng nhiều doanh nghiệp trong hành trình chuyển đổi số
                và phát triển bền vững.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TẦNG 2: THANH BỘ LỌC TABS + DROPDOWN
        ══════════════════════════════════════════ */}
        <div className="border-b border-slate-100 bg-white sticky top-[96px] z-40">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">

            {/* Tab list */}
            <div className="flex flex-wrap items-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-[#3ea54a] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                className="appearance-none bg-white border border-slate-200 rounded-lg
                           text-sm font-semibold text-slate-600 pl-4 pr-9 py-2.5
                           focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                           focus:border-[#3ea54a] cursor-pointer hover:border-slate-300
                           transition-all duration-200"
              >
                <option>Mới nhất</option>
                <option>Cũ nhất</option>
                <option>A → Z</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            TẦNG 3: LƯỚI 8 CARD DỰ ÁN
        ══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
                        max-w-6xl mx-auto px-6 py-10">
          {PROJECT_DATA.map((proj) => (
            <div
              key={proj.id}
              className="bg-white border border-slate-100 shadow-sm rounded-xl p-4
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                         flex flex-col cursor-pointer group"
            >
              {/* Ảnh + badge toàn cầu */}
              <div className="relative mb-3">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-36 object-cover rounded-lg
                             group-hover:brightness-95 transition-all duration-300"
                />
                {/* Badge tròn xanh lá — góc trái dưới ảnh */}
                <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-[#3ea54a]
                                flex items-center justify-center shadow-md
                                border-2 border-white">
                  <GlobeIcon />
                </div>
              </div>

              {/* Nội dung */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-[14px] font-bold text-[#0a2540] mb-1">{proj.title}</h3>
                <p className="text-[12px] text-slate-500 leading-relaxed mb-4 flex-1">
                  {proj.desc}
                </p>

                {/* Footer card */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3ea54a] shrink-0" />
                    <span className="text-[11px] font-semibold text-slate-600">{proj.tag}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">{proj.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════
            TẦNG 4: THANH PHÂN TRANG
        ══════════════════════════════════════════ */}
        <div className="flex items-center justify-center gap-2 pb-14">
          {/* Nút số 1..3 */}
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setActivePage(n)}
              className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200 ${
                activePage === n
                  ? 'bg-[#3ea54a] text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#3ea54a] hover:text-[#3ea54a]'
              }`}
            >
              {n}
            </button>
          ))}

          {/* Dấu ... */}
          <span className="w-10 h-10 flex items-center justify-center text-slate-400 font-bold text-sm">
            ...
          </span>

          {/* Nút số 5 */}
          <button
            onClick={() => setActivePage(5)}
            className={`w-10 h-10 rounded-lg text-sm font-bold transition-all duration-200 ${
              activePage === 5
                ? 'bg-[#3ea54a] text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-[#3ea54a] hover:text-[#3ea54a]'
            }`}
          >
            5
          </button>

          {/* Mũi tên phải */}
          <button
            onClick={() => setActivePage(Math.min(activePage + 1, totalPages))}
            className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-slate-600
                       flex items-center justify-center
                       hover:border-[#3ea54a] hover:text-[#3ea54a] transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </main>

      <Footer />
    </div>
  )
}
