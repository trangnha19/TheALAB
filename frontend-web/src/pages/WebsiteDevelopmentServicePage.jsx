/**
 * WebsiteDevelopmentServicePage.jsx — Trang Chi Tiết Dịch Vụ
 * "Xây dựng Website chuyên nghiệp"
 * Route: /services/website-development
 *
 * Bám sát 100% thiết kế dvchitiet3.png:
 *   Navbar → Breadcrumb → Hero 2 cột → Vấn đề DN → Giải pháp →
 *   Công nghệ sử dụng → Dự án tiêu biểu → CTA → Footer
 */

import { useState } from 'react'
import Footer from '../components/Layout/Footer'
import PublicNavbar from '../components/Layout/PublicNavbar'

/* ── Check Icon tái sử dụng ── */
function CheckIcon({ className = 'w-5 h-5 text-[#3ea54a]' }) {
  return (
    <svg className={`${className} shrink-0`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9
           10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd" />
    </svg>
  )
}

/* ── Solid Check (vòng tròn xanh, tích trắng) ── */
function SolidCheck() {
  return (
    <div className="w-6 h-6 rounded-full bg-[#3ea54a] flex items-center
                    justify-center shrink-0 mt-0.5">
      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1
             1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd" />
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */
export default function WebsiteDevelopmentServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <PublicNavbar />

      {/* ══════════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-0">
        <nav className="flex items-center gap-2 text-[13px] text-slate-400">
          <a href="/" className="hover:text-[#3ea54a] transition-colors">Trang chủ</a>
          <span>/</span>
          <a href="/services" className="hover:text-[#3ea54a] transition-colors">Dịch vụ</a>
          <span>/</span>
          <span className="text-[#3ea54a] font-semibold">Xây dựng website chuyên nghiệp</span>
        </nav>
      </div>

      {/* ══════════════════════════════════════════
          1. HERO SECTION PHÂN TẦNG
      ══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Cột trái: nội dung */}
          <div>
            <span className="inline-block text-[#3ea54a] text-sm font-semibold mb-3">
              Dịch vụ
            </span>
            <h1 className="text-3xl md:text-[2.2rem] font-extrabold text-[#0a2540] leading-tight mb-4">
              Xây dựng<br />Website chuyên nghiệp
            </h1>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-6 max-w-lg">
              Thiết kế website hiện đại, chuẩn SEO, tương thích mọi thiết bị, mang đến trải nghiệm
              tuyệt vời và giúp doanh nghiệp bứt phá trên môi trường số.
            </p>

            {/* 4 tính năng cốt lõi */}
            <ul className="space-y-3 mb-8">
              {[
                'Giao diện đẹp, trải nghiệm tốt',
                'Chuẩn SEO, tốc độ tải nhanh',
                'Bảo mật cao, vận hành ổn định',
                'Dễ dàng quản trị, mở rộng linh hoạt',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 text-[#3ea54a]" />
                  <span className="text-[14px] text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* 2 nút hành động */}
            <div className="flex flex-wrap gap-3">
              <a href="/lienhe"
                className="inline-flex items-center gap-2 bg-[#3ea54a] hover:bg-green-600
                           text-white font-bold text-sm px-6 py-3 rounded-lg
                           transition-all duration-200 shadow-md hover:shadow-lg">
                NHẬN TƯ VẤN MIỄN PHÍ
              </a>
              <a href="#projects"
                className="inline-flex items-center gap-2 border-2 border-[#3ea54a]
                           text-[#3ea54a] hover:bg-[#3ea54a] hover:text-white
                           font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200">
                XEM CÁC DỰ ÁN ĐÃ THỰC HIỆN
              </a>
            </div>
          </div>

          {/* Cột phải: ảnh mockup website */}
          <div className="flex items-center justify-center">
            <img
              src="/dichvu/dvchitiet3/1.png"
              alt="Website Mockup"
              className="w-full h-auto object-contain max-h-[440px]"
            />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. DOANH NGHIỆP BẠN ĐANG GẶP VẤN ĐỀ?
      ══════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              DOANH NGHIỆP BẠN ĐANG GẶP VẤN ĐỀ?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Ô 1 */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7
                       20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0
                       0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Thiếu hiện diện trực tuyến</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Chưa có website chuyên nghiệp để giới thiệu và xây dựng thương hiệu.
              </p>
            </div>

            {/* Ô 2 */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11
                       0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21
                       12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Bỏ lỡ nhiều cơ hội kinh doanh</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Khách hàng khó tìm thấy bạn khi không có mặt trên Internet.
              </p>
            </div>

            {/* Ô 3 */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Website chậm, kém hiệu quả</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Tốc độ tải chậm, giao diện lỗi thời khiến khách hàng rời đi.
              </p>
            </div>

            {/* Ô 4 */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573
                       1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426
                       1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37
                       2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724
                       1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
                       00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
                       001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Khó khăn trong quản trị</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Hệ thống phức tạp, khó cập nhật nội dung và quản lý.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. GIẢI PHÁP THE ALAB CUNG CẤP
      ══════════════════════════════════════════ */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-3">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              GIẢI PHÁP THE ALAB CUNG CẤP
            </h2>
          </div>
          <p className="text-center text-[15px] text-slate-500 mb-12">
            Dịch vụ xây dựng Website toàn diện - Hiện đại - Hiệu quả
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Cột trái: ảnh www mockup */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src="/dichvu/dvchitiet3/2.png"
                alt="Website Development Solution"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Cột phải: 5 tính năng */}
            <div>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Thiết kế website theo yêu cầu',
                    desc: 'Giao diện độc quyền, sáng tạo, chuẩn nhận diện thương hiệu.',
                  },
                  {
                    title: 'Chuẩn SEO, thân thiện Google',
                    desc: 'Cấu trúc tối ưu, hỗ trợ SEO On-page giúp tăng thứ hạng.',
                  },
                  {
                    title: 'Tương thích mọi thiết bị',
                    desc: 'Hiển thị thích hợp trên desktop, tablet và mobile.',
                  },
                  {
                    title: 'Tốc độ nhanh, bảo mật cao',
                    desc: 'Tối ưu hiệu suất, bảo vệ dữ liệu và chống tấn công hiệu quả.',
                  },
                  {
                    title: 'Hỗ trợ tận tâm',
                    desc: 'Đồng hành, hỗ trợ kỹ thuật và tư vấn 24/7.',
                  },
                ].map((feat) => (
                  <li key={feat.title} className="flex items-start gap-4">
                    <SolidCheck />
                    <div>
                      <span className="text-[14px] font-bold text-[#0a2540] block">{feat.title}</span>
                      <span className="text-[13px] text-slate-500 leading-relaxed">{feat.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. CÔNG NGHỆ CHÚNG TÔI SỬ DỤNG
      ══════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              CÔNG NGHỆ CHÚNG TÔI SỬ DỤNG
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Backend */}
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 mb-4 uppercase tracking-wide">
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['.NET', 'Python', 'Node.js', 'Java'].map((tech) => (
                    <span key={tech}
                      className="inline-flex items-center px-3 py-1.5 rounded-full
                                 bg-slate-100 text-slate-700 text-[12px] font-semibold
                                 border border-slate-200 hover:border-[#3ea54a] hover:text-[#3ea54a]
                                 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 mb-4 uppercase tracking-wide">
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'HTML5', 'Vue', 'CSS3', 'JavaScript'].map((tech) => (
                    <span key={tech}
                      className="inline-flex items-center px-3 py-1.5 rounded-full
                                 bg-slate-100 text-slate-700 text-[12px] font-semibold
                                 border border-slate-200 hover:border-[#3ea54a] hover:text-[#3ea54a]
                                 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CMS & Platform */}
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 mb-4 uppercase tracking-wide">
                  CMS &amp; Platform
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['WordPress', 'Shopify', 'Magento'].map((tech) => (
                    <span key={tech}
                      className="inline-flex items-center px-3 py-1.5 rounded-full
                                 bg-slate-100 text-slate-700 text-[12px] font-semibold
                                 border border-slate-200 hover:border-[#3ea54a] hover:text-[#3ea54a]
                                 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. DỰ ÁN TIÊU BIỂU
      ══════════════════════════════════════════ */}
      <section id="projects" className="py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              DỰ ÁN TIÊU BIỂU
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Wonder Wood */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full h-36 bg-gradient-to-br from-amber-50 to-orange-50
                              rounded-xl flex items-center justify-center mb-5 border border-amber-100">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-amber-700
                                  flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8C8 10 5.9 16.17 3.82 19.41A1 1 0 004.7 21c3.62-.47
                               9.37-4.45 10.3-8 1 4 3.5 5.24 3.5 5.24A12.26 12.26 0
                               0020 9.74 1 1 0 0017 8z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-amber-800 tracking-wide">WONDER WOOD</span>
                </div>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-1">Công ty TNHH Wonder Wood</h3>
              <p className="text-[13px] text-slate-500 mb-3">Thiết kế hệ thống ERP</p>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50
                               text-[#3ea54a] text-[11px] font-semibold border border-emerald-100">
                Sản xuất B2B
              </span>
              <div className="mt-4">
                <a href="#"
                  className="inline-flex items-center gap-1 text-[#3ea54a] text-[13px]
                             font-semibold hover:gap-2 transition-all duration-200 group-hover:underline">
                  Xem thêm →
                </a>
              </div>
            </div>

            {/* Yến sào Nam An */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full h-36 bg-gradient-to-br from-yellow-50 to-amber-50
                              rounded-xl flex items-center justify-center mb-5 border border-yellow-100">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-yellow-600
                                  flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13
                           21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-yellow-800 tracking-wide">YẾN SÀO NAM AN</span>
                </div>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-1">Thương hiệu Yến sào Nam An</h3>
              <p className="text-[13px] text-slate-500 mb-3">Thiết kế hệ thống ERP</p>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50
                               text-[#3ea54a] text-[11px] font-semibold border border-emerald-100">
                Sản xuất B2C
              </span>
              <div className="mt-4">
                <a href="#"
                  className="inline-flex items-center gap-1 text-[#3ea54a] text-[13px]
                             font-semibold hover:gap-2 transition-all duration-200 group-hover:underline">
                  Xem thêm →
                </a>
              </div>
            </div>

            {/* Tàu hũ Yummy */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full h-36 bg-gradient-to-br from-red-50 to-orange-50
                              rounded-xl flex items-center justify-center mb-5 border border-red-100">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-red-500
                                  flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2
                           2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-red-700 tracking-wide">TÀU HŨ YUMMY</span>
                </div>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-1">Thương hiệu tàu hũ Yummy</h3>
              <p className="text-[13px] text-slate-500 mb-3">Thiết kế hệ thống ERP</p>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50
                               text-[#3ea54a] text-[11px] font-semibold border border-emerald-100">
                F&amp;B
              </span>
              <div className="mt-4">
                <a href="#"
                  className="inline-flex items-center gap-1 text-[#3ea54a] text-[13px]
                             font-semibold hover:gap-2 transition-all duration-200 group-hover:underline">
                  Xem thêm →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. BANNER CTA CUỐI TRANG
      ══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="w-full bg-gradient-to-r from-[#2b7534] to-[#1a4d22] rounded-2xl
                        p-10 flex flex-col md:flex-row items-center justify-between
                        gap-6 shadow-xl">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-white leading-snug mb-2">
              Sẵn sàng bắt đầu dự án của bạn?
            </h2>
            <p className="text-green-200 text-[14px] leading-relaxed max-w-md">
              Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận giải pháp phù hợp nhất
            </p>
          </div>
          <a href="/lienhe"
            className="shrink-0 bg-white hover:bg-slate-50 text-[#2b7534]
                       font-extrabold px-10 py-3.5 rounded-xl transition-all duration-200
                       text-sm shadow-lg whitespace-nowrap hover:shadow-xl">
            LIÊN HỆ NGAY
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
