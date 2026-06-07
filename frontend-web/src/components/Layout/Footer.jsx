/**
 * Footer.jsx — Chân trang công khai TheALAB
 * Bám sát footer.png: grid lg:col-span-4/2/2/4, items-start,
 * logo scale-[1.35] origin-left để triệt tiêu vùng trắng thừa của file ảnh gốc.
 */

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-white border-t border-slate-100">

      {/* ── Lưới 4 cột ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12
                      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12
                      gap-8 lg:gap-12 items-start">

        {/* ══════════════════════════════════════
            CỘT 1 — Logo & Mô tả & Newsletter
        ══════════════════════════════════════ */}
        <div className="lg:col-span-4">

          {/* Logo — scale triệt tiêu vùng trắng thừa file ảnh gốc */}
          <div className="w-full overflow-visible mb-0">
            <img
              src="/screenshots/logo.png"
              alt="The ALAB Data Technology"
              className="h-24 md:h-28 w-auto object-contain block
                         scale-[2.00] origin-left -ml-14 -mt-4"
            />
          </div>

          {/* Mô tả */}
          <p className="text-[14px] text-slate-700 leading-relaxed font-normal -mt-6 mb-5 max-w-sm">
            The ALAB Data Technology cam kết mang đến những giải pháp công nghệ
            chất lượng, đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số
            và phát triển bền vững.
          </p>

          {/* Tiêu đề newsletter */}
          <span className="font-bold text-[16px] text-slate-900 tracking-wider mb-3 block">
            CẬP NHẬT THÔNG TIN MỚI NHẤT
          </span>

          {/* Input + Nút liền khối */}
          <div className="flex max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 min-w-0 border border-r-0 border-slate-200 rounded-l-lg
                         px-3 py-2.5 text-sm text-slate-700 placeholder-slate-400
                         bg-white focus:outline-none focus:border-[#3ea54a] transition-colors"
            />
            <button
              type="button"
              className="bg-[#3ea54a] hover:bg-green-600 active:bg-green-700
                         text-white text-sm font-semibold px-4 py-2.5
                         rounded-r-lg transition-colors shrink-0"
            >
              Đăng ký
            </button>
          </div>

          {/* Ghi chú riêng tư */}
          <span className="text-[12px] text-slate-400 mt-2 block">
            Chúng tôi tôn trọng quyền riêng tư của bạn
          </span>
        </div>

        {/* ══════════════════════════════════════
            CỘT 2 — Liên kết nhanh
        ══════════════════════════════════════ */}
        <div className="lg:col-span-2">
          <span className="font-bold text-[16px] text-slate-900 tracking-wider mb-6 block">
            LIÊN KẾT NHANH
          </span>
          <ul className="space-y-4">
            {[
              { label: 'Trang chủ',  href: '/' },
              { label: 'Giới thiệu', href: '/gioithieu' },
              { label: 'Dịch vụ',   href: '/dichvu' },
              { label: 'Liên hệ',   href: '/lienhe' },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[15px] text-slate-600 font-medium
                             hover:text-[#3ea54a] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ══════════════════════════════════════
            CỘT 3 — Dịch vụ
        ══════════════════════════════════════ */}
        <div className="lg:col-span-2">
          <span className="font-bold text-[16px] text-slate-900 tracking-wider mb-6 block">
            DỊCH VỤ
          </span>
          <ul className="space-y-4">
            {[
              'Tư vấn & Phát triển Phần mềm',
              'Gia công giải pháp công nghệ',
              'Xây dựng Website',
            ].map((item) => (
              <li key={item}>
                <a
                  href="/dichvu"
                  className="text-[15px] text-slate-600 font-medium
                             hover:text-[#3ea54a] transition-colors leading-snug block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ══════════════════════════════════════
            CỘT 4 — Thông tin liên hệ
        ══════════════════════════════════════ */}
        <div className="lg:col-span-4">
          <span className="font-bold text-[16px] text-slate-900 tracking-wider mb-6 block">
            THÔNG TIN LIÊN HỆ
          </span>

          <div className="space-y-4">

            {/* Địa chỉ */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0
                     9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              <span className="text-[15px] text-slate-600 font-medium leading-snug">
                K234/47 Đỗ Bá, Phường Mỹ An, Quận Ngũ Hành Sơn, TP. Đà Nẵng, Việt Nam
              </span>
            </div>

            {/* Điện thoại */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36
                         1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1
                         1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0
                         1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <a href="tel:0935050909"
                className="text-[15px] text-slate-600 font-medium hover:text-[#3ea54a] transition-colors">
                0935050909
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9
                         2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <a href="mailto:contact@thealab.vn"
                className="text-[15px] text-slate-600 font-medium hover:text-[#3ea54a] transition-colors">
                contact@thealab.vn
              </a>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-slate-800 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388
                         10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007
                         1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491
                         0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612
                         23.027 24 18.062 24 12.073z" />
              </svg>
              <a href="#"
                className="text-[15px] text-slate-600 font-medium hover:text-[#3ea54a]
                           transition-colors leading-snug">
                The A-LAB - Chuyển đổi số Doanh nghiệp dựa trên Dữ liệu
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Dải bản quyền full-width ── */}
      <div className="bg-[#3ea54a] w-full py-4 mt-0">
        <p className="text-center text-white text-[14px] font-medium">
          © 2024 THE ALAB DATA TECHNOLOGY. All rights reserved.
        </p>
      </div>

    </footer>
  )
}
