/**
 * WebpagePreviewPage.jsx — Trang công khai The ALAB
 *
 * Hỗ trợ các trang:
 *   /preview/home    → HomePageContent
 *   /preview/dichvu  → DichVuContent
 *   /preview/lienhe  → LienHeContent  ← MỚI, bám sát lienhepage.jpg
 *   /preview/:other  → GenericContent (HTML từ DB)
 */

import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import api from '../services/api'
import LoadingSpinner from '../components/Common/LoadingSpinner'
import Footer from '../components/Layout/Footer'
import PublicNavbar from '../components/Layout/PublicNavbar'
import ServicePage from './ServicePage'
import ProjectPage from './ProjectPage'

/* ═══════════════════════════════════════════════════
   TRANG CHỦ (code = "home")
═══════════════════════════════════════════════════ */
function HomePageContent() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      quote: 'THE ALAB đã giúp chúng tôi xây dựng hệ thống báo cáo quản trị hiệu quả, rút ngắn đáng kể thời gian tổng hợp dữ liệu và nâng cao khả năng ra quyết định.',
      author: 'Nguyễn Văn Minh',
      role: 'Giám đốc điều hành — Wonder Wood',
    },
    {
      quote: 'Đội ngũ The ALAB rất chuyên nghiệp, tận tâm và luôn đồng hành cùng chúng tôi trong suốt quá trình triển khai hệ thống ERP.',
      author: 'Trần Thị Lan',
      role: 'Trưởng phòng CNTT — Yến sào Nam An',
    },
    {
      quote: 'Giải pháp phần mềm của The ALAB giúp chúng tôi quản lý kho, đơn hàng và nhân sự một cách hiệu quả, tiết kiệm rất nhiều chi phí vận hành.',
      author: 'Phạm Đức Long',
      role: 'CEO — Tàu hũ Yummy',
    },
  ]

  return (
    <main>

      {/* ══════════════════════════════════════════
          TẦNG 1: HERO BANNER TOÀN CHIỀU RỘNG — ảnh thành phố ban đêm
      ══════════════════════════════════════════ */}
      <section
        className="relative min-h-[560px] flex items-center overflow-hidden bg-slate-950"
        style={{ backgroundImage: 'url("/trangchu/trangchu10.png")', backgroundSize: 'cover', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat' }}
      >
        {/* Lớp phủ tối dốc sang phải để làm nổi bật chữ trắng */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/40 to-transparent z-0" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 z-10 w-full">
          <div className="max-w-xl">
            <span className="inline-block bg-[#3ea54a]/20 text-[#3ea54a] text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wider border border-[#3ea54a]/30">
              Công nghệ dữ liệu tiên tiến
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
              <span className="text-[#3ea54a] block mb-3 md:mb-4">THE ALAB</span>
              <span className="block">DATA TECHNOLOGY</span>
            </h1>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-8 font-medium">
              Giải pháp phần mềm tối ưu cho doanh nghiệp<br />
              Tối ưu vận hành - Quản lý dữ liệu - Nâng tầm hiệu quả
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/dichvu"
                className="bg-[#3ea54a] hover:bg-green-600 text-white font-extrabold
                           px-8 py-3.5 rounded-full shadow-lg text-sm
                           transition-all uppercase tracking-wider">
                Khám phá dịch vụ
              </a>
              <a href="/lienhe"
                className="bg-white hover:bg-slate-50 text-[#0a2540] font-extrabold
                           px-8 py-3.5 rounded-full border border-slate-200
                           text-sm shadow-sm transition-all uppercase tracking-wider">
                Liên hệ tư vấn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TẦNG 2: FLOATING BAR 4 TÍNH NĂNG
      ══════════════════════════════════════════ */}
      <div className="-mt-14 relative z-30 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              img: '/trangchu/trangchu1.jpg',
              title: 'GIẢI PHÁP PHẦN MỀM',
              desc: 'Phát triển phần mềm theo yêu cầu, tối ưu vận hành và nâng cao hiệu suất.',
            },
            {
              img: '/trangchu/trangchu2.jpg',
              title: 'QUẢN LÝ HIỆU QUẢ',
              desc: 'Hệ thống quản lý thông minh giúp đồng bộ dữ liệu, kiểm soát quy trình.',
            },
            {
              img: '/trangchu/trangchu4.jpg',
              title: 'CÔNG NGHỆ HIỆN ĐẠI',
              desc: 'Ứng dụng công nghệ tiên tiến, đảm bảo bảo mật, ổn định và mở rộng linh hoạt.',
            },
            {
              img: '/trangchu/trangchu3.jpg',
              title: 'HỖ TRỢ TẬN TÂM',
              desc: 'Đồng hành cùng doanh nghiệp từ tư vấn, triển khai đến vận hành.',
            },
          ].map((feat) => (
            <div key={feat.title}
              className="bg-white rounded-2xl p-6 border border-slate-100
                         shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                         flex items-start gap-4
                         hover:shadow-md transition-all duration-300">
              {/* Vòng tròn bọc ảnh — cố định kích thước, không co lún */}
              <div className="w-16 h-16 rounded-full bg-emerald-50/90
                              flex items-center justify-center shrink-0 shadow-sm
                              border border-emerald-100/50 transition-transform duration-300 hover:scale-105">
                <img
                  src={feat.img}
                  alt={feat.title}
                  className="w-11 h-11 object-contain"
                  onError={(e) => { e.currentTarget.style.opacity = '0' }}
                />
              </div>
              {/* Khối text bên phải */}
              <div className="flex-1 pt-1">
                <h3 className="text-[13px] font-bold text-[#0a2540] tracking-wide mb-1">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-[11.5px] leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TẦNG 3: DỰ ÁN CỦA CHÚNG TÔI
      ══════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#3ea54a] text-xs font-bold uppercase tracking-widest block mb-2">
                DỰ ÁN CỦA CHÚNG TÔI
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a2540] leading-tight">
                Những dự án tạo nên giá trị khác biệt
              </h2>
            </div>
            <a href="/duan"
              className="shrink-0 inline-flex items-center gap-1.5 border border-[#3ea54a]
                         text-[#3ea54a] text-sm font-semibold px-5 py-2.5 rounded-lg
                         hover:bg-[#3ea54a] hover:text-white transition-all duration-200">
              Xem tất cả dự án
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Grid 4 thẻ dự án */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}
                className="bg-white rounded-xl border border-slate-100 shadow-sm
                           hover:shadow-lg hover:-translate-y-1 transition-all duration-300
                           overflow-hidden flex flex-col">
                {/* Ảnh + badge */}
                <div className="relative">
                  <img
                    src="/trangchu/trangchu8.jpg"
                    alt="Website The Alab"
                    className="w-full h-36 object-cover"
                  />
                  {/* Badge tròn xanh lá — góc trái dưới ảnh */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-full bg-[#3ea54a]
                                  flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657
                           0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9
                           9 0 019-9" />
                    </svg>
                  </div>
                </div>

                {/* Nội dung */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-[14px] font-bold text-[#0a2540] mb-1">Website The Alab</h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed mb-4 flex-1">
                    Thiết kế và phát triển website chính thức của The Alab
                  </p>
                  {/* Footer card: tag + năm */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#3ea54a] shrink-0" />
                      <span className="text-[11px] font-semibold text-slate-600">Website</span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400">2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TẦNG 4: Ý KIẾN CỦA KHÁCH HÀNG
      ══════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Cột trái: Tiêu đề */}
            <div>
              <span className="text-[#3ea54a] text-xs font-bold uppercase tracking-widest block mb-4">
                Ý KIẾN CỦA KHÁCH HÀNG
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] leading-tight">
                Sự tin tưởng của khách hàng là động lực của chúng tôi
              </h2>
            </div>

            {/* Cột phải: Card trích dẫn + điều hướng */}
            <div className="relative">
              {/* Mũi tên trái */}
              <button
                onClick={() => setActiveTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)}
                className="absolute -left-5 top-1/2 -translate-y-1/2 z-10
                           w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm
                           flex items-center justify-center text-slate-400
                           hover:text-[#3ea54a] hover:border-[#3ea54a] transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Card trích dẫn */}
              <div className="bg-white rounded-2xl border border-slate-50 p-8 shadow-sm
                              relative flex flex-col items-start">
                {/* Icon dấu ngoặc kép */}
                <img
                  src="/trangchu/trangchu7.png"
                  alt="Quote"
                  className="w-8 h-8 object-contain mb-4 block"
                />
                <p className="text-[15px] text-slate-700 leading-relaxed mb-6">
                  "{testimonials[activeTestimonial].quote}"
                </p>
                <div>
                  <p className="text-[13px] font-bold text-[#0a2540]">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-[12px] text-slate-400 mt-0.5">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>

                {/* Dots phân trang */}
                <div className="flex items-center gap-2 mt-6">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`rounded-full transition-all duration-200 ${idx === activeTestimonial
                        ? 'w-5 h-2.5 bg-[#3ea54a]'
                        : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Mũi tên phải */}
              <button
                onClick={() => setActiveTestimonial(p => (p + 1) % testimonials.length)}
                className="absolute -right-5 top-1/2 -translate-y-1/2 z-10
                           w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm
                           flex items-center justify-center text-slate-400
                           hover:text-[#3ea54a] hover:border-[#3ea54a] transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TẦNG 5: BANNER CTA ĐÁY TRANG
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url(/trangchu/trangchu9.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay tối */}
        <div className="absolute inset-0 bg-[#0a2540]/80" />

        <div className="relative z-10 w-full py-20 px-6 flex flex-col items-start">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              Sẵn sàng tối ưu doanh nghiệp của bạn?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-lg">
              Liên hệ ngay với THE ALAB để nhận được tư vấn phù hợp nhất.
            </p>
            <a href="/lienhe"
              className="inline-flex items-center gap-2 bg-[#3ea54a] hover:bg-green-600
                         text-white font-extrabold text-sm px-8 py-4 rounded-lg
                         shadow-lg shadow-green-900/30 transition-all duration-200
                         uppercase tracking-wide">
              LIÊN HỆ NGAY
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

/* ═══════════════════════════════════════════════════
   TRANG LIÊN HỆ (code = "lienhe")
   Bám sát 100% lienhepage.jpg
═══════════════════════════════════════════════════ */
function LienHeContent() {
  /* State form */
  const [form, setForm] = useState({
    lastName: '', firstName: '', email: '', phone: '', company: '', industry: '',
    description: '', subscribe: true,
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    /* Giả lập gửi — không có API endpoint, chỉ hiển thị thông báo thành công */
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1000)
  }

  const industries = [
    'Chọn lĩnh vực hoạt động',
    'Công nghệ thông tin', 'Thương mại điện tử', 'Tài chính - Ngân hàng',
    'Giáo dục', 'Y tế', 'Sản xuất', 'Dịch vụ', 'Bán lẻ', 'Khác',
  ]

  return (
    <main>

      {/* ─────────────────────────────────────
          SECTION 1 — HERO BANNER
      ───────────────────────────────────── */}
      <section className="relative overflow-hidden"
        style={{ backgroundImage: 'url(/screenshots/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#f4fef5' }}>
        <div className="absolute inset-0 bg-white/84" />

        <div className="relative max-w-6xl mx-auto px-6 py-14">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <a href="/" className="hover:text-[#3ea54a] transition-colors">Trang chủ</a>
            <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0a2540] font-medium">Liên hệ</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Trái: Tiêu đề */}
            <div>
              {/* Chấm trang trí */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#3ea54a]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ea54a]/50" />
                <span className="w-1 h-1 rounded-full bg-[#3ea54a]/30" />
              </div>

              {/* Tiêu đề chính */}
              <h1 className="text-4xl md:text-[2.75rem] font-extrabold leading-tight mb-5">
                <span className="text-[#3ea54a]">LIÊN HỆ NGAY</span>{' '}
                <span className="text-[#0a2540]">VỚI CHÚNG TÔI</span>
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-sm">
                Hãy cùng nhau tạo nên điều gì đó tuyệt vời
              </p>
            </div>

            {/* Phải: Họa tiết bong bóng icon */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-64 h-52">
                {/* Bong bóng chat lớn */}
                <div className="absolute top-4 right-8 w-20 h-20 rounded-2xl bg-[#3ea54a]
                                flex items-center justify-center shadow-xl shadow-[#3ea54a]/30">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863
                         9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3
                         12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                {/* Bong bóng điện thoại nhỏ */}
                <div className="absolute bottom-10 left-6 w-16 h-16 rounded-2xl bg-[#3ea54a]/15
                                flex items-center justify-center border-2 border-[#3ea54a]/30 shadow-md">
                  <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0
                         01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1
                         1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716
                         21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                {/* Máy bay giấy */}
                <div className="absolute top-2 left-10 w-12 h-12 rounded-xl bg-white
                                flex items-center justify-center shadow-md border border-slate-100">
                  <svg className="w-6 h-6 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                {/* Lưới chấm nền */}
                <div className="absolute inset-0 -z-10"
                  style={{ backgroundImage: 'radial-gradient(circle, #3ea54a22 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 2 — FORM LIÊN HỆ
      ───────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">

            {/* Header card */}
            <div className="px-8 pt-8 pb-6 border-b border-slate-100">
              <h2 className="text-xl font-extrabold text-[#0a2540]">GỬI YÊU CẦU LIÊN HỆ</h2>
              <p className="text-slate-500 text-sm mt-1">Chúng tôi sẽ sớm liên hệ lại với bạn</p>
            </div>

            {submitted ? (
              /* Thông báo thành công */
              <div className="px-8 py-16 text-center">
                <div className="w-20 h-20 rounded-full bg-[#3ea54a]/10 flex items-center
                                justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-[#0a2540] mb-2">
                  Gửi yêu cầu thành công!
                </h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  Cảm ơn bạn đã liên hệ. Đội ngũ The ALAB sẽ phản hồi trong vòng <strong>1–2 ngày làm việc</strong>.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 bg-[#3ea54a] hover:bg-green-600
                             text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors">
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="px-8 py-7 grid grid-cols-1 lg:grid-cols-12 gap-8">

                  {/* ── CỘT TRÁI: Thông tin liên hệ (col-span-7) ── */}
                  <div className="lg:col-span-7">
                    <h3 className="text-sm font-bold text-[#0a2540] mb-5 flex items-center gap-2">
                      <span className="w-1 h-4 rounded-full bg-[#3ea54a] inline-block" />
                      Thông tin liên hệ
                    </h3>

                    <div className="space-y-4">
                      {/* Họ và tên lót + Tên */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Họ và tên lót <span className="text-red-500">*</span>
                          </label>
                          <input name="lastName" value={form.lastName} onChange={handleChange}
                            placeholder="Nhập họ và tên lót của bạn" required
                            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm
                                       bg-slate-50 text-slate-800 placeholder-slate-400
                                       focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                                       focus:border-[#3ea54a] focus:bg-white transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Tên của bạn <span className="text-red-500">*</span>
                          </label>
                          <input name="firstName" value={form.firstName} onChange={handleChange}
                            placeholder="Nhập tên của bạn" required
                            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm
                                       bg-slate-50 text-slate-800 placeholder-slate-400
                                       focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                                       focus:border-[#3ea54a] focus:bg-white transition-all" />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Email của bạn <span className="text-red-500">*</span>
                        </label>
                        <input name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="Nhập email của bạn" required
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm
                                     bg-slate-50 text-slate-800 placeholder-slate-400
                                     focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                                     focus:border-[#3ea54a] focus:bg-white transition-all" />
                      </div>

                      {/* Số điện thoại */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Số điện thoại của bạn <span className="text-red-500">*</span>
                        </label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                          placeholder="Nhập số điện thoại của bạn" required
                          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm
                                     bg-slate-50 text-slate-800 placeholder-slate-400
                                     focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                                     focus:border-[#3ea54a] focus:bg-white transition-all" />
                      </div>

                      {/* Tên công ty + Lĩnh vực */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Tên công ty
                          </label>
                          <input name="company" value={form.company} onChange={handleChange}
                            placeholder="Nhập tên công ty của bạn"
                            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm
                                       bg-slate-50 text-slate-800 placeholder-slate-400
                                       focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                                       focus:border-[#3ea54a] focus:bg-white transition-all" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                            Lĩnh vực hoạt động <span className="text-red-500">*</span>
                          </label>
                          <select name="industry" value={form.industry} onChange={handleChange} required
                            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm
                                       bg-slate-50 text-slate-700 appearance-none cursor-pointer
                                       focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                                       focus:border-[#3ea54a] focus:bg-white transition-all">
                            {industries.map(i => (
                              <option key={i} value={i === 'Chọn lĩnh vực hoạt động' ? '' : i}>{i}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── CỘT PHẢI: Thông tin dự án (col-span-5) ── */}
                  <div className="lg:col-span-5 flex flex-col">
                    <h3 className="text-sm font-bold text-[#0a2540] mb-5 flex items-center gap-2">
                      <span className="w-1 h-4 rounded-full bg-[#3ea54a] inline-block" />
                      Thông tin dự án
                    </h3>

                    {/* Label mô tả */}
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Mô tả dự án
                    </label>

                    {/* Textarea lớn */}
                    <textarea name="description" value={form.description} onChange={handleChange}
                      placeholder="Chúng tôi có thể giúp gì cho bạn?"
                      rows={8}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm
                                 bg-slate-50 text-slate-800 placeholder-slate-400 resize-none
                                 focus:outline-none focus:ring-2 focus:ring-[#3ea54a]/20
                                 focus:border-[#3ea54a] focus:bg-white transition-all leading-relaxed mb-4" />

                    {/* Checkbox đăng ký nhận tin */}
                    <label className="flex items-start gap-3 cursor-pointer mb-4">
                      <div className="relative mt-0.5 shrink-0">
                        <input type="checkbox" name="subscribe" checked={form.subscribe}
                          onChange={handleChange} className="sr-only peer" />
                        <div className="w-4 h-4 rounded border-2 border-slate-300 peer-checked:bg-[#3ea54a]
                                        peer-checked:border-[#3ea54a] transition-colors flex items-center justify-center">
                          {form.subscribe && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-slate-600 leading-relaxed">
                        Tôi muốn nhận thông tin liên lạc qua email với các tin tức, tài nguyên,
                        ý kiến và cập nhật dịch vụ liên quan.
                      </span>
                    </label>

                    {/* Chính sách bảo mật */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      The ALAB cam kết về quyền riêng tư của bạn. Bạn có thể hủy đăng ký nhận
                      những thông tin này bất cứ lúc nào. Bằng cách nhấp vào gửi, bạn đồng ý
                      cho The ALAB lưu trữ và xử lý dữ liệu của bạn. Để biết thêm thông tin,
                      vui lòng xem{' '}
                      <a href="#" className="text-[#3ea54a] hover:underline">
                        Chính sách quyền riêng tư
                      </a>{' '}của chúng tôi.
                    </p>

                    {/* Nút GỬI YÊU CẦU — căn phải */}
                    <div className="flex justify-end mt-auto">
                      <button type="submit" disabled={submitting}
                        className="inline-flex items-center gap-2 bg-[#3ea54a] hover:bg-green-600
                                   disabled:bg-green-300 disabled:cursor-not-allowed text-white
                                   font-bold text-sm px-7 py-3 rounded-xl transition-all
                                   shadow-md shadow-green-500/25">
                        {submitting ? (
                          <>
                            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Đang gửi...
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            GỬI YÊU CẦU
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 3 — VỊ TRÍ CỦA CHÚNG TÔI
      ───────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-extrabold text-[#3ea54a] mb-6 flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            VỊ TRÍ CỦA CHÚNG TÔI
          </h2>

          {/* Địa chỉ text */}
          <p className="text-slate-500 text-sm mb-5 flex items-center gap-2">
            <span className="font-semibold text-[#0a2540]">K234/47 Đỗ Bá,</span>
            Phường Mỹ An, Quận Ngũ Hành Sơn, TP. Đà Nẵng — gần Bãi tắm Mỹ Khê
          </p>

          {/* Khung bản đồ nhúng OpenStreetMap — không cần API key */}
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md border border-slate-100">
            <iframe
              title="Vị trí The ALAB Data Technology"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.openstreetmap.org/export/embed.html?bbox=108.2380%2C16.0310%2C108.2560%2C16.0470&layer=mapnik&marker=16.0390%2C108.2470"
            />
          </div>

          {/* Link mở bản đồ đầy đủ */}
          <div className="mt-3 text-right">
            <a href="https://www.openstreetmap.org/?mlat=16.039&mlon=108.247#map=16/16.039/108.247"
              target="_blank" rel="noopener noreferrer"
              className="text-xs text-[#3ea54a] hover:underline inline-flex items-center gap-1">
              Mở bản đồ lớn hơn
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          SECTION 4 — KẾT NỐI NHANH (3 card)
      ───────────────────────────────────── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-extrabold text-[#0a2540] text-center mb-10">
            KẾT NỐI VỚI CHÚNG TÔI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Điện thoại */}
            <a href="tel:0935050909"
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md
                         transition-all duration-200 p-6 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-[#3ea54a]/10 flex items-center justify-center
                              text-[#3ea54a] mb-4 group-hover:bg-[#3ea54a] group-hover:text-white
                              transition-all duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0
                       01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1
                       1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716
                       21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                Số điện thoại
              </p>
              <p className="text-lg font-extrabold text-[#0a2540] group-hover:text-[#3ea54a] transition-colors">
                0935050909
              </p>
            </a>

            {/* Card 2: Email */}
            <a href="mailto:contact@thealab.vn"
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md
                         transition-all duration-200 p-6 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-[#3ea54a]/10 flex items-center justify-center
                              text-[#3ea54a] mb-4 group-hover:bg-[#3ea54a] group-hover:text-white
                              transition-all duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0
                       00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                Email
              </p>
              <p className="text-base font-extrabold text-[#0a2540] group-hover:text-[#3ea54a] transition-colors">
                contact@thealab.vn
              </p>
            </a>

            {/* Card 3: Facebook */}
            <a href="https://www.facebook.com/The.A.Lab" target="_blank" rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md
                         transition-all duration-200 p-6 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-[#3ea54a]/10 flex items-center justify-center
                              text-[#3ea54a] mb-4 group-hover:bg-[#3ea54a] group-hover:text-white
                              transition-all duration-200">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388
                     10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669
                     4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956
                     1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                Facebook
              </p>
              <p className="text-base font-extrabold text-[#0a2540] group-hover:text-[#3ea54a] transition-colors">
                facebook.com/The.A.Lab
              </p>
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

/* ═══════════════════════════════════════════════════
   NỘI DUNG TỔNG QUÁT (code khác — HTML từ DB)
═══════════════════════════════════════════════════ */
function GenericContent({ webpage }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <nav className="text-xs text-slate-400 mb-6 flex items-center gap-2">
        <a href="/" className="hover:text-[#3ea54a] transition-colors">Trang chủ</a>
        <span>›</span>
        <span className="text-slate-600">{webpage.title}</span>
      </nav>
      <article className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="h-2" style={{ background: 'linear-gradient(to right, #0a2540, #3ea54a)' }} />
        <div className="p-8 sm:p-10">
          <h1 className="text-3xl font-bold text-[#0a2540] mb-2">{webpage.title}</h1>
          <div className="flex items-center gap-2 mb-8">
            <code className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full font-mono">
              {webpage.code}
            </code>
          </div>
          <div className="prose prose-slate max-w-none prose-headings:font-bold
                          prose-p:text-slate-600 prose-p:leading-relaxed prose-ul:text-slate-600"
            dangerouslySetInnerHTML={{ __html: webpage.content }}
          />
        </div>
      </article>
    </main>
  )
}

/* ═══════════════════════════════════════════════════
   TRANG GIỚI THIỆU (code = "gioithieu")
   Bám sát 100% gioithieupage.jpg
═══════════════════════════════════════════════════ */
function GioiThieuContent() {
  return (
    <main>

      {/* TẦNG 1: HERO BANNER PHÒNG HỌP + STATS BAR NỔI */}
      <section
        className="relative w-full pb-20"
        style={{ backgroundImage: 'url("/gioithieu/10.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        {/* Overlay gradient tối nhẹ từ trái sang phải */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-8">
          {/* Tiêu đề chính */}
          <div className="max-w-3xl">
            <span className="text-[#3ea54a] text-xs font-bold tracking-wider">GIỚI THIỆU —</span>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mt-3 mb-6">
              Đồng hành cùng doanh nghiệp<br />
              <span className="text-[#3ea54a]">TẠO NÊN GIÁ TRỊ BỀN VỮNG</span>
            </h1>
            <button className="bg-[#13b447] hover:bg-[#119e3e] text-white font-bold px-6 py-3 rounded text-sm transition-all duration-200 inline-flex items-center gap-2 w-fit">
              Khám phá ngay <span>→</span>
            </button>
          </div>
        </div>

        {/* Stats Bar nằm gọn bên trong section — ảnh nền tự dãn bao trọn */}
        <div className="relative mt-12 max-w-6xl mx-auto px-6 z-10 w-full">
          <div className="bg-[#0c2d4a]/60 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
            {[
              { number: '20+',   label: 'Dự án triển khai',  subLabel: 'Thành công' },
              { number: '50+',   label: 'Khách hàng',        subLabel: 'Đã đồng hành' },
              { number: '99.9%', label: 'Hệ thống ổn định',  subLabel: 'Vận hành tin cậy' },
              { number: '2024',  label: 'Năm thành lập',     subLabel: 'Vững bước phát triển' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black text-[#3ea54a] mb-1">{item.number}</span>
                <p className="text-white text-xs md:text-sm font-bold tracking-wide">{item.label}</p>
                <p className="text-slate-400 text-[11px] md:text-xs font-normal mt-0.5 opacity-80">{item.subLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TẦNG 2: CHÚNG TÔI LÀ AI? */}
      <section id="chung-toi" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Cột trái: Ảnh văn phòng + badge nổi */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/gioithieu/4.png"
                alt="Văn phòng The ALAB"
                className="w-full h-[420px] object-cover"
                onError={(e) => { e.currentTarget.style.opacity = '0.3' }}
              />
            </div>
            {/* Badge nổi góc dưới trái */}
            <div className="absolute -bottom-5 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 max-w-[260px] border border-slate-100">
              <div className="flex items-start gap-3">
                <span className="text-[#3ea54a] text-3xl font-black leading-none mt-0.5">“</span>
                <p className="text-slate-600 text-[13px] leading-relaxed font-medium">
                  Đối tác công nghệ đồng hành cùng doanh nghiệp hiện đại
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Nội dung */}
          <div className="pt-6">
            <span className="text-[#3ea54a] text-xs font-bold uppercase tracking-widest block mb-3">
              Về The ALAB
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] leading-tight mb-6">
              Chúng tôi <span className="text-[#3ea54a]">là ai?</span>
            </h2>
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong className="text-[#0a2540]">THE ALAB Data Technology</strong> là công ty công nghệ chuyên cung cấp giải pháp phần mềm và quản lý dữ liệu toàn diện cho doanh nghiệp Việt Nam.
              </p>
              <p>
                Chúng tôi tập trung vào việc xây dựng các hệ thống thông minh giúp doanh nghiệp tối ưu quy trình vận hành, nâng cao hiệu suất và đưa ra quyết định dựa trên dữ liệu chính xác.
              </p>
              <p>
                Với đội ngũ kỹ sư giàu kinh nghiệm và phương pháp triển khai linh hoạt, The ALAB cam kết đồng hành cùng doanh nghiệp từ giai đoạn tư vấn đến vận hành ổn định.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold text-[#0a2540]">
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span>Giải pháp tùy chỉnh</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold text-[#0a2540]">
                <svg className="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Bảo mật cao cấp</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold text-[#0a2540]">
                <svg className="w-4 h-4 text-[#3ea54a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm12-5a2 2 0 00-2-2h-2a2 2 0 00-2 2v5a2 2 0 002 2h2a2 2 0 002-2v-5zM11 7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2h2a2 2 0 002-2V7z" />
                </svg>
                <span>Phân tích dữ liệu</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold text-[#0a2540]">
                <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Hỗ trợ 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TẦNG 3: TẦM NHÌN & SỨ MỆNH SO LE */}
      <section className="pb-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center pt-16 pb-10">
            <span className="text-xs font-bold text-[#3ea54a] uppercase tracking-wider block mb-2">Định hướng</span>
            <h2 className="text-2xl md:text-3xl font-black text-[#0a2540]">Tầm nhìn &amp; Sứ mệnh</h2>
          </div>

          <div className="space-y-8">
            {/* Hàng 1: Ảnh trái — Card phải */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="shrink-0">
                <img src="/gioithieu/7.jpg" alt="Tầm nhìn"
                  className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => { e.currentTarget.style.opacity = '0.3' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3ea54a]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a2540]">Tầm nhìn</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Trở thành đối tác công nghệ dữ liệu hàng đầu Đông Nam Á, kiến tạo hệ sinh thái số thông minh giúp mọi doanh nghiệp Việt Nam bứt phá trong kỷ nguyên số hóa toàn diện.
                </p>
              </div>
            </div>

            {/* Hàng 2: Card trái — Ảnh phải (so le) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="shrink-0">
                <img src="/gioithieu/1.jpg" alt="Sứ mệnh"
                  className="w-44 h-44 rounded-full object-cover border-4 border-white shadow-lg"
                  onError={(e) => { e.currentTarget.style.opacity = '0.3' }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3ea54a]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0a2540]">Sứ mệnh</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Cung cấp các giải pháp phần mềm và dữ liệu tối ưu, đồng hành tận tâm với từng doanh nghiệp để tối ưu vận hành, quản trị hiệu quả và tăng trưởng bền vững trong thời đại 4.0.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TẦNG 4: GIÁ TRỊ CỐT LÕI — DẢI BĂNG NỔI SO LE */}
      <section className="relative w-full bg-white py-24 overflow-visible">

        {/* Dải băng nền nằm ngang tuyệt đối */}
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-64 z-0 w-full"
          style={{
            background: 'linear-gradient(to right, #021622 0%, #05313d 30%, #0d5546 65%, #3ea54a 100%)'
          }}
        />

        {/* Nội dung đè lên dải băng */}
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 items-center">

          {/* Cột trái: Tiêu đề + mô tả */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-black text-white mb-3">Giá trị cốt lõi</h2>
            <p className="text-white/95 text-sm font-medium leading-relaxed max-w-sm">
              Nền tảng tạo nên bản sắc và định hướng phát triển của chúng tôi.
            </p>
          </div>

          {/* Cột phải: 3 cột ảnh so le */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-4 items-center">

              {/* Cột 1: 1 card căn giữa */}
              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100 flex flex-col items-center text-center">
                  <img src="/gioithieu/6.png" alt="Đổi mới sáng tạo"
                    className="w-full h-24 md:h-28 object-cover rounded-xl mb-2"
                    onError={(e) => { e.currentTarget.style.opacity = '0.3' }} />
                  <span className="text-[11px] md:text-xs font-bold text-slate-800 pt-1">Đổi mới sáng tạo</span>
                </div>
              </div>

              {/* Cột 2: 2 card xếp chồng — trên nhô cao, dưới thụt thấp */}
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100 flex flex-col items-center text-center -mt-8">
                  <img src="/gioithieu/3.jpg" alt="Đồng hành tận tâm"
                    className="w-full h-24 md:h-28 object-cover rounded-xl mb-2"
                    onError={(e) => { e.currentTarget.style.opacity = '0.3' }} />
                  <span className="text-[11px] md:text-xs font-bold text-slate-800 pt-1">Đồng hành tận tâm</span>
                </div>
                <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100 flex flex-col items-center text-center mb-[-2rem]">
                  <img src="/gioithieu/2.jpg" alt="Bền vững dài lâu"
                    className="w-full h-24 md:h-28 object-cover rounded-xl mb-2"
                    onError={(e) => { e.currentTarget.style.opacity = '0.3' }} />
                  <span className="text-[11px] md:text-xs font-bold text-slate-800 pt-1">Bền vững dài lâu</span>
                </div>
              </div>

              {/* Cột 3: 1 card căn giữa */}
              <div className="flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-3 shadow-md border border-slate-100 flex flex-col items-center text-center">
                  <img src="/gioithieu/8.jpg" alt="Hiệu quả thực chất"
                    className="w-full h-24 md:h-28 object-cover rounded-xl mb-2"
                    onError={(e) => { e.currentTarget.style.opacity = '0.3' }} />
                  <span className="text-[11px] md:text-xs font-bold text-slate-800 pt-1">Hiệu quả thực chất</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* TẦNG 5: QUY TRÌNH LÀM VIỆC — ĐƯỜNG CUNG XANH */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#3ea54a] text-xs font-bold uppercase tracking-widest block mb-3 border border-[#3ea54a]/30 inline-block px-4 py-1 rounded-full">
              QUY TRÌNH LÀM VIỆC
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2540] mt-3">
              Đơn giản - Minh bạch - Hiệu quả
            </h2>
          </div>

          {/* 4 bước nằm ngang */}
          <div className="relative flex flex-col md:flex-row items-start justify-between gap-6">
            {/* Đường gạch nối giữa các bước */}
            <div className="hidden md:block absolute top-12 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)]
                            h-px border-t border-dashed border-slate-300 z-0" />

            {[
              {
                step: '01', title: 'Tiếp nhận yêu cầu',
                desc: 'Lắng nghe và phân tích nhu cầu của khách hàng',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                step: '02', title: 'Tư vấn giải pháp',
                desc: 'Đề xuất giải pháp phù hợp và lập kế hoạch triển khai',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
              },
              {
                step: '03', title: 'Triển khai dự án',
                desc: 'Phát triển, kiểm thử và đảm bảo chất lượng',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                step: '04', title: 'Bàn giao &amp; Hỗ trợ',
                desc: 'Bàn giao sản phẩm và đồng hành hỗ trợ khách hàng',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6}
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative z-10 flex-1 flex flex-col items-center text-center">
                {/* Vòng tròn icon với cung xanh */}
                <div className="relative mb-4">
                  {/* Cung SVG bên ngoài */}
                  <svg className="absolute inset-0 w-24 h-24 -rotate-90" viewBox="0 0 96 96">
                    <circle cx="48" cy="48" r="40" fill="none" stroke="#3ea54a1a" strokeWidth="4" />
                    <circle cx="48" cy="48" r="40" fill="none" stroke="#3ea54a"
                      strokeWidth="4" strokeLinecap="round"
                      strokeDasharray={`${(idx + 1) * 62.8} 251`} />
                  </svg>
                  {/* Đĩa icon chính */}
                  <div className="w-24 h-24 rounded-full bg-[#f0fdf4] border border-[#3ea54a]/20
                                  flex flex-col items-center justify-center text-[#3ea54a] gap-1">
                    {item.icon}
                  </div>
                </div>

                {/* Số thứ tự màu xanh */}
                <div className="text-2xl font-black text-[#3ea54a] mb-3">{item.step}</div>

                {/* Card nội dung */}
                <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm w-full max-w-[180px]">
                  <h3 className="text-[13px] font-extrabold text-[#0a2540] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-6 h-0.5 bg-[#3ea54a] mx-auto mb-2 rounded-full" />
                  <p className="text-slate-500 text-[11.5px] leading-relaxed">{item.desc}</p>
                </div>

                {/* Mũi tên nối sang bước kế (trừ bước cuối) */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-4 top-10 z-20 items-center justify-center
                                  w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm text-slate-400">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

/* ═══════════════════════════════════════════════════
   COMPONENT CHÍNH
═══════════════════════════════════════════════════ */
/* Ánh xạ đường dẫn sạch sang code nội tại */
const PATH_TO_CODE = {
  '/': 'home',
  '/gioithieu': 'gioithieu',
  '/dichvu': 'dichvu',
  '/duan': 'duan',
  '/lienhe': 'lienhe',
}

function WebpagePreviewPage() {
  const { code: paramCode } = useParams()
  const location = useLocation()
  const code = paramCode || PATH_TO_CODE[location.pathname] || 'home'

  const [webpage, setWebpage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  /* Các trang tự quản lý navbar+footer riêng — render thẳng, bỏ qua wrapper */
  if (code === 'dichvu') return <ServicePage />
  if (code === 'duan') return <ProjectPage />

  /* Các trang có layout tĩnh riêng */
  const isStatic = ['home', 'lienhe', 'gioithieu'].includes(code)

  useEffect(() => {
    if (isStatic) return
    setLoading(true)
    api.get(`/api/webpages/preview/${code}/`)
      .then((r) => setWebpage(r.data))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false))
  }, [code, isStatic])

  if (loading) return <LoadingSpinner />

  if (!isStatic && notFound) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <PublicNavbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto bg-slate-200 rounded-full flex items-center justify-center mb-5">
              <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-700 mb-2">Trang không tồn tại</h1>
            <p className="text-slate-500 mb-6">
              Không tìm thấy trang: <code className="bg-slate-100 px-2 py-0.5 rounded">{code}</code>
            </p>
            <a href="/"
              className="inline-block bg-[#3ea54a] hover:bg-green-600 text-white
                         px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
              Về trang chủ
            </a>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PublicNavbar activePage={code} />

      {code === 'home' && <HomePageContent />}
      {code === 'lienhe' && <LienHeContent />}
      {code === 'gioithieu' && <GioiThieuContent />}
      {!isStatic && webpage && <GenericContent webpage={webpage} />}

      <Footer />
    </div>
  )
}

export default WebpagePreviewPage
