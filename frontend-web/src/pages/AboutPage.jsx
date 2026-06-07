/**
 * AboutPage.jsx — Trang Giới thiệu The ALAB
 * Route: /gioithieu
 */

import { Fragment } from 'react'
import Footer from '../components/Layout/Footer'
import PublicNavbar from '../components/Layout/PublicNavbar'
import Breadcrumb from '../components/Breadcrumb'

const METRICS = [
  {
    number: '20+',
    label: 'Dự án triển khai',
    sub: 'Thành công',
    icon: (
      <svg className="w-6 h-6 mx-auto mb-2 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    number: '50+',
    label: 'Khách hàng',
    sub: 'Đã đồng hành',
    icon: (
      <svg className="w-6 h-6 mx-auto mb-2 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7
             20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002
             5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '99.9%',
    label: 'Hệ thống ổn định',
    sub: 'Vận hành tin cậy',
    icon: (
      <svg className="w-6 h-6 mx-auto mb-2 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0
             01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622
             5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '2024',
    label: 'Năm thành lập',
    sub: 'Vững bước phát triển',
    icon: (
      <svg className="w-6 h-6 mx-auto mb-2 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0
             00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const STEPS = [
  {
    title: 'Tiếp nhận yêu cầu',
    desc: 'Lắng nghe và phân tích nhu cầu của khách hàng',
    icon: (
      <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0
             01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8
             9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Tư vấn giải pháp',
    desc: 'Đề xuất giải pháp phù hợp và lập kế hoạch triển khai',
    icon: (
      <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9
             5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Triển khai dự án',
    desc: 'Phát triển, kiểm thử và đảm bảo chất lượng',
    icon: (
      <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Bàn giao & Hỗ trợ',
    desc: 'Bàn giao sản phẩm và đồng hành hỗ trợ khách hàng',
    icon: (
      <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0
             006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0
             01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.818m2.963-2.963l1.914
             1.914m-1.914-1.914l-3.828-3.828" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PublicNavbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════
            SECTION 1: HERO BANNER PHÒNG HỌP
        ══════════════════════════════════════════ */}
        <section
          className="relative w-full overflow-hidden"
          style={{
            backgroundImage: 'url("/gioithieu/10.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-14">

            {/* Breadcrumb */}
            <Breadcrumb items={[
              { label: 'Trang chủ', path: '/' },
              { label: 'Giới thiệu' },
            ]} />

            {/* Nhãn danh mục */}
            <span className="text-[#3ea54a] text-xs font-bold tracking-wider block mb-4 mt-4">
              GIỚI THIỆU —
            </span>

            {/* H1 */}
            <h1 className="text-3xl md:text-5xl font-black leading-tight text-white mt-3 mb-3">
              VỀ CHÚNG TÔI - <span className="text-[#3ea54a]">THE ALAB</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-sm md:text-base max-w-2xl leading-relaxed mb-5">
              Đơn vị tiên phong cung cấp giải pháp công nghệ dữ liệu và phát triển phần mềm toàn diện.
            </p>

            {/* CTA */}
            <button className="bg-[#3ea54a] hover:bg-[#2d7a36] text-white font-bold rounded-lg
                               px-5 py-2.5 text-sm flex items-center gap-2 mt-0 mb-10
                               transition-colors duration-200">
              Khám phá ngay &rarr;
            </button>

            {/* Metrics bar — hộp kính mờ, 4 cột vách ngăn dọc, không icon */}
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-xl p-6
                            border border-white/10
                            grid grid-cols-2 md:grid-cols-4">
              {METRICS.map((m, idx) => (
                <div
                  key={m.label}
                  className={`flex flex-col px-4 py-2 text-white
                    ${idx < METRICS.length - 1 ? 'border-r border-slate-500/30' : ''}`}
                >
                  {/* Số liệu xanh lục */}
                  <span className="text-2xl md:text-3xl font-black text-[#3ea54a] leading-none mb-1">
                    {m.number}
                  </span>
                  {/* Tiêu đề + mô tả phụ căn trái */}
                  <p className="text-white text-xs md:text-sm font-bold leading-snug">{m.label}</p>
                  <p className="text-slate-400 text-[11px] mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 2: CHÚNG TÔI LÀ AI?
        ══════════════════════════════════════════ */}
        <section id="chung-toi" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Cột trái: ảnh + badge nổi */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/gioithieu/4.png"
                  alt="Văn phòng The ALAB"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              {/* Badge trích dẫn gối đè đáy ảnh */}
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-md
                              flex items-center gap-2 max-w-xs border border-slate-100">
                <span className="text-[#3ea54a] text-2xl font-black leading-none shrink-0">"</span>
                <p className="text-slate-600 text-[12px] leading-snug font-medium">
                  Đối tác công nghệ đồng hành cùng doanh nghiệp hiện đại
                </p>
              </div>
            </div>

            {/* Cột phải: nội dung */}
            <div>
              <h2 className="text-3xl font-black text-[#073F6E] leading-tight mb-6">
                Chúng tôi <span className="text-[#3ea54a]">là ai?</span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  <strong className="text-[#073F6E]">THE ALAB Data Technology</strong> là công ty công nghệ
                  chuyên cung cấp giải pháp phần mềm và quản lý dữ liệu toàn diện cho doanh nghiệp Việt Nam.
                </p>
                <p>
                  Chúng tôi tập trung xây dựng các hệ thống thông minh giúp doanh nghiệp tối ưu quy trình
                  vận hành, nâng cao hiệu suất và đưa ra quyết định dựa trên dữ liệu chính xác.
                </p>
                <p>
                  Với đội ngũ kỹ sư giàu kinh nghiệm và phương pháp triển khai linh hoạt, The ALAB cam kết
                  đồng hành cùng doanh nghiệp từ giai đoạn tư vấn đến vận hành ổn định lâu dài.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 3: TẦM NHÌN & SỨ MỆNH SO LE
        ══════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-12">
              <h2 className="text-xl sm:text-2xl font-black text-[#073F6E] uppercase">
                Tầm nhìn &amp; Sứ mệnh
              </h2>
              <div className="w-16 h-1 bg-[#3ea54a] mx-auto mt-2" />
            </div>

            <div className="space-y-8">

              {/* Card Tầm nhìn — ảnh trái, chữ phải */}
              <div className="flex flex-col md:flex-row items-center gap-8
                              bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="shrink-0">
                  <img
                    src="/gioithieu/7.jpg"
                    alt="Tầm nhìn"
                    className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3ea54a] mb-3">Tầm nhìn</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Trở thành đối tác công nghệ dữ liệu hàng đầu, giúp doanh nghiệp khai thác
                    tối đa giá trị dữ liệu và bứt phá trong kỷ nguyên số.
                  </p>
                </div>
              </div>

              {/* Card Sứ mệnh — chữ trái, ảnh phải (so le) */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-8
                              bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <div className="shrink-0">
                  <img
                    src="/gioithieu/1.jpg"
                    alt="Sứ mệnh"
                    className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#3ea54a] mb-3">Sứ mệnh</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Xây dựng giải pháp công nghệ hiện đại, thực tiễn, góp phần nâng cao năng lực
                    cạnh tranh cho doanh nghiệp.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 4: GIÁ TRỊ CỐT LÕI — DẢI BĂNG PHẲNG TRỒI SỤT
        ══════════════════════════════════════════ */}
        <section className="w-full bg-gradient-to-r from-[#073F6E] via-[#165a4c] to-[#3ea54a]
                            py-12 md:py-16 my-24 relative text-white overflow-visible">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">

            {/* ── Cột trái: chữ (span 4) ── */}
            <div className="lg:col-span-4">
              <span className="text-xs uppercase opacity-60 tracking-wider block mb-2">
                CORE VALUES
              </span>
              <h2 className="text-3xl font-black mb-3">Giá trị cốt lõi</h2>
              <p className="text-white/85 text-sm leading-relaxed max-w-xs">
                Nền tảng tạo nên bản sắc và định hướng phát triển của chúng tôi.
              </p>
            </div>

            {/* ── Cột phải: 4 card trồi sụt (span 8) ── */}
            <div className="lg:col-span-8 relative w-full flex items-center justify-center
                            gap-4 md:gap-5 mt-10 lg:mt-0 min-h-[280px]">

              {/* Card 1 — Đổi mới sáng tạo: căn giữa trục dọc bình thường */}
              <div className="bg-white p-2.5 pb-4 rounded-2xl shadow-2xl border border-slate-100
                              flex flex-col items-center text-center w-[160px] md:w-[170px]
                              shrink-0 relative transition-all duration-300 hover:scale-105">
                <img src="/gioithieu/6.png" alt="Đổi mới sáng tạo"
                     className="rounded-xl w-full h-[110px] object-cover" />
                <p className="text-slate-800 font-bold text-xs md:text-sm mt-3">Đổi mới sáng tạo</p>
              </div>

              {/* Card 2 — Đồng hành tận tâm: nhô cao lên trên */}
              <div className="bg-white p-2.5 pb-4 rounded-2xl shadow-2xl border border-slate-100
                              flex flex-col items-center text-center w-[160px] md:w-[170px]
                              shrink-0 relative transition-all duration-300 hover:scale-105
                              -translate-y-12 lg:-translate-y-14">
                <img src="/gioithieu/3.jpg" alt="Đồng hành tận tâm"
                     className="rounded-xl w-full h-[110px] object-cover" />
                <p className="text-slate-800 font-bold text-xs md:text-sm mt-3">Đồng hành tận tâm</p>
              </div>

              {/* Card 3 — Bền vững dài lâu: thụt sâu xuống dưới */}
              <div className="bg-white p-2.5 pb-4 rounded-2xl shadow-2xl border border-slate-100
                              flex flex-col items-center text-center w-[160px] md:w-[170px]
                              shrink-0 relative transition-all duration-300 hover:scale-105
                              translate-y-12 lg:translate-y-14">
                <img src="/gioithieu/2.jpg" alt="Bền vững dài lâu"
                     className="rounded-xl w-full h-[110px] object-cover" />
                <p className="text-slate-800 font-bold text-xs md:text-sm mt-3">Bền vững dài lâu</p>
              </div>

              {/* Card 4 — Hiệu quả thực chất: căn giữa trục dọc bình thường */}
              <div className="bg-white p-2.5 pb-4 rounded-2xl shadow-2xl border border-slate-100
                              flex flex-col items-center text-center w-[160px] md:w-[170px]
                              shrink-0 relative transition-all duration-300 hover:scale-105">
                <img src="/gioithieu/8.jpg" alt="Hiệu quả thực chất"
                     className="rounded-xl w-full h-[110px] object-cover" />
                <p className="text-slate-800 font-bold text-xs md:text-sm mt-3">Hiệu quả thực chất</p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 5: QUY TRÌNH LÀM VIỆC 4 BƯỚC
        ══════════════════════════════════════════ */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">

            {/* Tiêu đề */}
            <div className="text-center mb-4">
              <span className="bg-emerald-50/60 text-[#3ea54a] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md inline-block mb-3">
                QUY TRÌNH LÀM VIỆC
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
                Đơn giản - Minh bạch - Hiệu quả
              </h2>
            </div>

            {/* 4 bước — flex với connector trên desktop, grid trên mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:flex lg:items-start lg:gap-0 mt-12 relative">
              {STEPS.map((step, idx) => (
                <Fragment key={step.title}>
                  {/* Thẻ bước */}
                  <div className="flex flex-col items-center text-center lg:flex-1">

                    {/* Vòng tròn icon có vòng cung xanh lục ở góc trên-phải */}
                    <div className="w-16 h-16 bg-white
                                    border-2 border-slate-100
                                    border-t-[#3ea54a] border-r-[#3ea54a]
                                    [border-top-width:4px] [border-right-width:4px]
                                    rounded-full flex items-center justify-center
                                    shadow-sm mx-auto relative z-10">
                      {step.icon}
                    </div>

                    {/* Số thứ tự */}
                    <span className="text-[#3ea54a] font-bold text-xl mt-3 block text-center">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Card trắng chứa nội dung */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm
                                    text-center flex flex-col items-center mt-3 min-h-[180px] w-full">
                      <h3 className="font-bold text-[#073F6E] text-base mb-1">{step.title}</h3>
                      <div className="w-6 h-0.5 bg-[#3ea54a] my-2" />
                      <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Connector chấm + mũi tên — chỉ hiện giữa các bước trên desktop */}
                  {idx < STEPS.length - 1 && (
                    <div className="hidden lg:flex items-center pt-8 px-3 shrink-0">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <svg className="w-3 h-3 text-slate-300 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA ĐÁY TRANG
        ══════════════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-[#032e42] to-[#3ea54a] rounded-xl p-8
                          flex flex-col md:flex-row items-center justify-between text-white gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold leading-snug mb-2">
                Sẵn sàng bắt đầu dự án của bạn?
              </h2>
              <p className="text-white/80 text-[14px] leading-relaxed max-w-md">
                Liên hệ ngay với THE ALAB để nhận được tư vấn phù hợp nhất.
              </p>
            </div>
            <a
              href="/lienhe"
              className="shrink-0 bg-white text-[#115349] font-black rounded-full
                         px-6 py-3 shadow-md hover:bg-slate-50 transition-colors duration-200
                         whitespace-nowrap text-sm"
            >
              LIÊN HỆ NGAY
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
