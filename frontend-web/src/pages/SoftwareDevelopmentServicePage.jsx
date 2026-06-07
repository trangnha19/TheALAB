/**
 * SoftwareDevelopmentServicePage.jsx — Trang Chi Tiết Dịch Vụ
 * "Tư vấn & Phát triển Phần mềm Theo Yêu Cầu"
 * Route: /services/software-development
 *
 * Cấu trúc bám sát dvchitiet1.png:
 *   Navbar → Breadcrumb → Hero 2 cột → Vấn đề DN → Giải pháp →
 *   Quy trình triển khai 6 bước → Dự án tiêu biểu → CTA → Footer
 */

import { useState } from 'react'
import Footer from '../components/Layout/Footer'
import PublicNavbar from '../components/Layout/PublicNavbar'

/* ═══════════════════════════════════════════════════
   CHECK ICON — dấu tích xanh lá dùng chung
═══════════════════════════════════════════════════ */
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

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */
export default function SoftwareDevelopmentServicePage() {
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
          <span className="text-[#3ea54a] font-semibold">Tư vấn &amp; Phát triển Phần mềm</span>
        </nav>
      </div>

      {/* ══════════════════════════════════════════
          1. HERO SECTION PHÂN TẦNG
      ══════════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Cột trái: nội dung */}
          <div>
            {/* Nhãn nhỏ màu xanh */}
            <span className="inline-block text-[#3ea54a] text-sm font-semibold mb-3">
              Dịch vụ
            </span>

            {/* Tiêu đề lớn */}
            <h1 className="text-3xl md:text-[2.2rem] font-extrabold text-[#0a2540] leading-tight mb-4">
              Tư vấn &amp; Phát triển<br />
              Phần mềm Theo Yêu Cầu
            </h1>

            {/* Intro text */}
            <p className="text-[15px] text-slate-500 leading-relaxed mb-6 max-w-lg">
              Chúng tôi tư vấn và phát triển các phần mềm tùy chỉnh theo nhu
              cầu đặc thù của từng doanh nghiệp, giúp tối ưu quy trình vận hành
              và nâng cao hiệu quả kinh doanh.
            </p>

            {/* Danh sách 4 tính năng cốt lõi */}
            <ul className="space-y-3 mb-8">
              {[
                'Phần mềm quản lý doanh nghiệp',
                'Hệ thống ERP (Enterprise Resource Planning)',
                'Quản lý Chuỗi Cung ứng & Kho bãi',
                'Cổng thông tin Tương tác Khách hàng',
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
                           font-bold text-sm px-6 py-3 rounded-lg
                           transition-all duration-200">
                XEM CÁC DỰ ÁN ĐÃ THỰC HIỆN
              </a>
            </div>
          </div>

          {/* Cột phải: ảnh minh họa */}
          <div className="flex items-center justify-center">
            <img
              src="/dichvu/dv1.png"
              alt="Tư vấn & Phát triển Phần mềm"
              className="w-full h-auto object-contain max-h-[440px]"
            />
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. PHẦN KHẢO SÁT: "DOANH NGHIỆP BẠN ĐANG GẶP VẤN ĐỀ?"
      ══════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tiêu đề */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              DOANH NGHIỆP BẠN ĐANG GẶP VẤN ĐỀ?
            </h2>
          </div>

          {/* Grid 4 thẻ vấn đề */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Ô 1: Dữ liệu phân tán */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Dữ liệu phân tán</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Thông tin nằm ở nhiều file Excell, giấy tờ, phần mềm khác nhau
              </p>
            </div>

            {/* Ô 2: Quy trình thủ công */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Quy trình thủ công</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Tốn nhiều thời gian nhập liệu, xử lý và dễ xảy ra sai sót.
              </p>
            </div>

            {/* Ô 3: Khó kiểm soát hiệu suất */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0
                       0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2
                       2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Khó kiểm soát hiệu suất</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Không có báo cáo trực quan để đánh giá hiệu suất theo thời gian thực
              </p>
            </div>

            {/* Ô 4: Nguy cơ thất thoát dữ liệu */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7
                            hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-full bg-[#3ea54a]/10 flex items-center
                              justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02
                       12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03
                       9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
              </div>
              <h3 className="text-[15px] font-bold text-[#0a2540] mb-2">Nguy cơ thất thoát dữ liệu</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed">
                Thiếu hệ thống bảo mật tập trung, phân quyền rõ ràng.
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
          {/* Tiêu đề */}
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              GIẢI PHÁP THE ALAB CUNG CẤP
            </h2>
          </div>
          <p className="text-center text-[15px] text-slate-500 mb-12">
            Chúng tôi giúp doanh nghiệp số hóa toàn bộ quy trình
          </p>

          {/* Grid 2 cột: ảnh dashboard + danh sách tính năng */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Cột trái: ảnh giao diện quản trị */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img
                src="/screenshots/image2.png"
                alt="Giao diện quản trị hệ thống"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Cột phải: 6 tính năng */}
            <div>
              <ul className="space-y-5">
                {[
                  {
                    title: 'Quản lý khách hàng',
                    desc: 'Lưu trữ thông tin và lịch sử giao dịch tập trung.',
                  },
                  {
                    title: 'Quản lý đơn hàng',
                    desc: 'Theo dõi đơn hàng từ tạo mới đến hoàn thành.',
                  },
                  {
                    title: 'Quản lý kho',
                    desc: 'Kiểm soát tồn kho, nhập xuất, cảnh báo tự động.',
                  },
                  {
                    title: 'Quản lý nhân sự',
                    desc: 'Theo dõi hồ sơ, chấm công, tính lương.',
                  },
                  {
                    title: 'Báo cáo theo thời gian thực',
                    desc: 'Hệ thống báo cáo trực quan, cập nhật liên tục.',
                  },
                  {
                    title: 'Phân quyền bảo mật',
                    desc: 'Phân quyền chi tiết, đảm bảo an toàn dữ liệu.',
                  },
                ].map((feat) => (
                  <li key={feat.title} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#3ea54a] flex items-center
                                    justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1
                             1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
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
          4. QUY TRÌNH TRIỂN KHAI (6 BƯỚC)
      ══════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Tiêu đề */}
          <div className="text-center mb-3">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              QUY TRÌNH TRIỂN KHAI
            </h2>
          </div>
          <p className="text-center text-[15px] text-slate-500 mb-12">
            6 bước triển khai chuyên nghiệp
          </p>

          {/* 6 bước nằm ngang */}
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-between gap-4 mb-12">
            {[
              {
                num: '1',
                label: 'Khảo sát',
                desc: 'Tiếp nhận yêu cầu và khảo sát thực tế',
                icon: (
                  <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9
                         5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
              },
              {
                num: '2',
                label: 'Phân tích yêu cầu',
                desc: 'Phân tích nghiệp vụ và đề xuất giải pháp',
                icon: (
                  <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2
                         2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                num: '3',
                label: 'Thiết kế hệ thống',
                desc: 'Thiết kế giao diện và kiến trúc hệ thống',
                icon: (
                  <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1
                         1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1
                         1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                ),
              },
              {
                num: '4',
                label: 'Lập trình',
                desc: 'Phát triển phần mềm theo tiêu chuẩn',
                icon: (
                  <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
              {
                num: '5',
                label: 'Kiểm thử',
                desc: 'Kiểm thử chức năng, hiệu năng và bảo mật.',
                icon: (
                  <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                num: '6',
                label: 'Triển khai',
                desc: 'Bàn giao, đào tạo và hỗ trợ vận hành',
                icon: (
                  <svg className="w-7 h-7 text-[#3ea54a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((step, idx, arr) => (
              <div key={step.num} className="flex flex-col lg:flex-row items-center flex-1 min-w-0">
                {/* Khối bước */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#3ea54a]/30
                                  flex items-center justify-center mb-3 shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-[#3ea54a] mb-1">{step.num}.</span>
                  <h3 className="text-[13px] font-bold text-[#0a2540] mb-1 leading-snug">{step.label}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed px-1">{step.desc}</p>
                </div>
                {/* Mũi tên nối (ẩn ở bước cuối) */}
                {idx < arr.length - 1 && (
                  <div className="hidden lg:flex items-center mx-1 shrink-0">
                    <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Công nghệ / Ngôn ngữ */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Backend */}
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 mb-4 uppercase tracking-wide">Backend</h4>
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
                <h4 className="text-[13px] font-bold text-slate-800 mb-4 uppercase tracking-wide">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Angular.JS', 'Vue.js', 'TypeScript'].map((tech) => (
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

              {/* Database */}
              <div>
                <h4 className="text-[13px] font-bold text-slate-800 mb-4 uppercase tracking-wide">Database</h4>
                <div className="flex flex-wrap gap-2">
                  {['MySQL', 'SQL Server', 'MongoDB', 'PostgreSQL'].map((tech) => (
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
          {/* Tiêu đề */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-[1.7rem] font-extrabold text-[#3ea54a] uppercase tracking-wide">
              DỰ ÁN TIÊU BIỂU
            </h2>
          </div>

          {/* 3 thẻ dự án */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Dự án 1: Wonder Wood */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              {/* Logo/ảnh dự án */}
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
              <div className="mb-3">
                <h3 className="text-[15px] font-bold text-[#0a2540] mb-1">Công ty TNHH Wonder Wood</h3>
                <p className="text-[13px] text-slate-500 mb-3">Thiết kế hệ thống ERP</p>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50
                                 text-[#3ea54a] text-[11px] font-semibold border border-emerald-100">
                  Sản xuất B2B
                </span>
              </div>
              <a href="#"
                className="inline-flex items-center gap-1 text-[#3ea54a] text-[13px]
                           font-semibold mt-3 hover:gap-2 transition-all duration-200
                           group-hover:underline">
                Xem thêm →
              </a>
            </div>

            {/* Dự án 2: Yến sào Nam An */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full h-36 bg-gradient-to-br from-yellow-50 to-amber-50
                              rounded-xl flex items-center justify-center mb-5 border border-yellow-100">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-yellow-600
                                  flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48
                               10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10
                               14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-yellow-800 tracking-wide">YẾN SÀO NAM AN</span>
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-[15px] font-bold text-[#0a2540] mb-1">Thương hiệu Yến sào Nam An</h3>
                <p className="text-[13px] text-slate-500 mb-3">Thiết kế hệ thống ERP</p>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50
                                 text-[#3ea54a] text-[11px] font-semibold border border-emerald-100">
                  Sản xuất B2C
                </span>
              </div>
              <a href="#"
                className="inline-flex items-center gap-1 text-[#3ea54a] text-[13px]
                           font-semibold mt-3 hover:gap-2 transition-all duration-200
                           group-hover:underline">
                Xem thêm →
              </a>
            </div>

            {/* Dự án 3: Tàu hũ Yummy */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6
                            hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full h-36 bg-gradient-to-br from-red-50 to-orange-50
                              rounded-xl flex items-center justify-center mb-5 border border-red-100">
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-xl bg-red-500
                                  flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3
                               2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0
                               .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02
                               17h15v2h-15z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-red-700 tracking-wide">TÀU HŨ YUMMY</span>
                </div>
              </div>
              <div className="mb-3">
                <h3 className="text-[15px] font-bold text-[#0a2540] mb-1">Thương hiệu tàu hũ Yummy</h3>
                <p className="text-[13px] text-slate-500 mb-3">Thiết kế hệ thống ERP</p>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50
                                 text-[#3ea54a] text-[11px] font-semibold border border-emerald-100">
                  F&amp;B
                </span>
              </div>
              <a href="#"
                className="inline-flex items-center gap-1 text-[#3ea54a] text-[13px]
                           font-semibold mt-3 hover:gap-2 transition-all duration-200
                           group-hover:underline">
                Xem thêm →
              </a>
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
              Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận
              giải pháp phù hợp nhất
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

      {/* ── Footer chuẩn ── */}
      <Footer />
    </div>
  )
}
