/**
 * ContactPage.jsx
 * Route: /lienhe
 * Trang Liên hệ — The ALAB Data Technology
 */

import { useState } from 'react'
import PublicNavbar from '../components/Layout/PublicNavbar'
import Footer from '../components/Layout/Footer'
import Breadcrumb from '../components/Breadcrumb'

export default function ContactPage() {
  const [agreed, setAgreed] = useState(true)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════
            1. HERO BANNER + FORM
        ══════════════════════════════════════════ */}
        <section
          className="relative w-full overflow-hidden pb-16"
          style={{
            backgroundImage: "url('/lienhe/background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-10">
            <Breadcrumb items={[
              { label: 'Trang chủ', path: '/' },
              { label: 'Liên hệ' },
            ]} />
            {/* H1 */}
            <h1 className="text-3xl md:text-4xl font-black leading-tight text-[#073F6E]">
              <span className="text-[#3ea54a]">LIÊN HỆ NGAY</span> VỚI CHÚNG TÔI
            </h1>
            <p className="text-slate-500 text-sm mb-8">
              Hãy cùng nhau tạo nên điều gì đó tuyệt vời
            </p>
          </div>

          {/* ── Form Card ── */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100/80
                          max-w-6xl mx-auto w-full relative z-10 mx-6 md:mx-auto px-6">

            <h2 className="text-lg font-black text-[#073F6E] mb-1">GỬI YÊU CẦU LIÊN HỆ</h2>
            <p className="text-slate-400 text-sm mb-6">Chúng tôi sẽ sớm liên hệ lại với bạn</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">

              {/* ── Cột trái: Thông tin liên hệ ── */}
              <div className="space-y-5">
                <p className="text-sm font-black text-[#073F6E] uppercase tracking-wide mb-2">
                  Thông tin liên hệ
                </p>

                {/* Họ + Tên */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#073F6E] mb-1">
                      Họ và tên lót <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập họ và tên lót..."
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm
                                 text-slate-700 placeholder-slate-400 focus:outline-none
                                 focus:ring-2 focus:ring-[#073F6E]/20 focus:border-[#073F6E]
                                 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#073F6E] mb-1">
                      Tên của bạn <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập tên..."
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm
                                 text-slate-700 placeholder-slate-400 focus:outline-none
                                 focus:ring-2 focus:ring-[#073F6E]/20 focus:border-[#073F6E]
                                 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-[#073F6E] mb-1">
                    Email của bạn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm
                               text-slate-700 placeholder-slate-400 focus:outline-none
                               focus:ring-2 focus:ring-[#073F6E]/20 focus:border-[#073F6E]
                               transition-all duration-200"
                  />
                </div>

                {/* Số điện thoại */}
                <div>
                  <label className="block text-sm font-bold text-[#073F6E] mb-1">
                    Số điện thoại của bạn <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại của bạn"
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm
                               text-slate-700 placeholder-slate-400 focus:outline-none
                               focus:ring-2 focus:ring-[#073F6E]/20 focus:border-[#073F6E]
                               transition-all duration-200"
                  />
                </div>

                {/* Công ty + Lĩnh vực */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-[#073F6E] mb-1">
                      Tên công ty <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập tên công ty..."
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm
                                 text-slate-700 placeholder-slate-400 focus:outline-none
                                 focus:ring-2 focus:ring-[#073F6E]/20 focus:border-[#073F6E]
                                 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#073F6E] mb-1">
                      Lĩnh vực hoạt động <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm
                                 text-slate-600 focus:outline-none focus:ring-2
                                 focus:ring-[#073F6E]/20 focus:border-[#073F6E]
                                 transition-all duration-200 bg-white appearance-none"
                    >
                      <option value="">Chọn lĩnh vực...</option>
                      <option>Công nghệ thông tin</option>
                      <option>Thương mại điện tử</option>
                      <option>Sản xuất</option>
                      <option>Bán lẻ / F&B</option>
                      <option>Giáo dục</option>
                      <option>Y tế</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ── Cột phải: Thông tin dự án ── */}
              <div className="flex flex-col">
                <p className="text-sm font-black text-[#073F6E] uppercase tracking-wide mb-2">
                  Thông tin dự án
                </p>

                {/* Textarea */}
                <div className="flex-1">
                  <label className="block text-sm font-bold text-[#073F6E] mb-1">
                    Mô tả dự án <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={8}
                    placeholder="Chúng tôi có thể giúp gì cho bạn?"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm
                               text-slate-700 placeholder-slate-400 resize-none focus:outline-none
                               focus:ring-2 focus:ring-[#073F6E]/20 focus:border-[#073F6E]
                               transition-all duration-200"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 mt-4">
                  <input
                    id="agree"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded accent-[#3ea54a] cursor-pointer shrink-0"
                  />
                  <label htmlFor="agree" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
                    Tôi đồng ý nhận thông tin tư vấn và cập nhật từ The ALAB qua email.
                  </label>
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-slate-400 mt-3 leading-relaxed">
                  THE ALAB cam kết bảo mật thông tin của bạn. Chúng tôi sẽ không chia sẻ
                  dữ liệu cá nhân với bên thứ ba dưới bất kỳ hình thức nào.
                </p>

                {/* Submit button */}
                <button
                  type="button"
                  className="bg-[#073F6E] hover:bg-sky-900 text-white font-bold rounded-lg
                             px-6 py-2.5 flex items-center gap-2 justify-center ml-auto mt-4
                             transition-colors duration-200 text-sm"
                >
                  GỬI YÊU CẦU
                  {/* Icon paper plane */}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. BẢN ĐỒ VỊ TRÍ
        ══════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-black text-xl text-[#073F6E] mb-4 mt-12">
            VỊ TRÍ CỦA CHÚNG TÔI
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <iframe
              title="The ALAB Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.4!2d108.2476!3d16.0473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAyJzUwLjMiTiAxMDjCsDE0JzUxLjQiRQ!5e0!3m2!1svi!2svn!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            4. KẾT NỐI VỚI CHÚNG TÔI
        ══════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-black text-xl text-[#073F6E] mb-4 mt-8">
            KẾT NỐI VỚI CHÚNG TÔI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-12">

          {/* Card 1 — Điện thoại */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                          flex flex-col items-start hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#073F6E]/8 flex items-center justify-center mb-4"
                 style={{ background: 'rgba(7,63,110,0.08)' }}>
              <svg className="w-6 h-6 text-[#073F6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502
                     1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0
                     011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716
                     21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Số điện thoại
            </p>
            <p className="text-base font-black text-[#073F6E]">0935 050 909</p>
          </div>

          {/* Card 2 — Email */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                          flex flex-col items-start hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                 style={{ background: 'rgba(7,63,110,0.08)' }}>
              <svg className="w-6 h-6 text-[#073F6E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0
                     00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Email
            </p>
            <p className="text-base font-black text-[#073F6E] break-all">contact@thealab.vn</p>
          </div>

          {/* Card 3 — Facebook */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                          flex flex-col items-start hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                 style={{ background: 'rgba(7,63,110,0.08)' }}>
              <svg className="w-6 h-6 text-[#073F6E]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388
                         10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007
                         1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491
                         0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612
                         23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
              Facebook
            </p>
            <a href="https://facebook.com/The.A.Lab" target="_blank" rel="noreferrer"
               className="text-base font-black text-[#073F6E] hover:text-[#3ea54a] transition-colors break-all">
              facebook.com/The.A.Lab
            </a>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  )
}
