/**
 * WebsiteDevServicePage.jsx
 * Route: /dichvu/xaydung-website
 * Trang chi tiết dịch vụ Xây dựng Website chuyên nghiệp
 * Tài nguyên: /dichvu/dvchitiet3/ + /dichvu/dvchitiet2/ + /dichvu/dvchitiet1/ (fallback)
 */

import { Link } from 'react-router-dom'
import PublicNavbar from '../components/Layout/PublicNavbar'
import Footer from '../components/Layout/Footer'
import Breadcrumb from '../components/Breadcrumb'

/* ─── Dữ liệu ─────────────────────────────────────────── */
const PROBLEMS = [
  {
    icon:  '/dichvu/dvchitiet2/logo1.png',
    title: 'Thiếu nhận diện trực tuyến',
    desc:  'Chưa có website chuyên nghiệp để giới thiệu và xây dựng thương hiệu',
  },
  {
    icon:  '/dichvu/dvchitiet2/logo2.png',
    title: 'Bỏ lỡ nhiều cơ hội kinh doanh',
    desc:  'Khách hàng khó tìm thấy bạn khi không có mặt trên Internet',
  },
  {
    icon:  '/dichvu/dvchitiet2/logo3.png',
    title: 'Website chậm, kém hiệu quả',
    desc:  'Tốc độ tải chậm, giao diện lỗi thời khiến khách hàng rời đi',
  },
  {
    icon:  '/dichvu/dvchitiet2/logo4.png',
    title: 'Khó khăn trong quản trị',
    desc:  'Hệ thống phức tạp, khó cập nhật nội dung và quản lý',
  },
]

const SOLUTIONS = [
  {
    title: 'Thiết kế website theo yêu cầu',
    desc:  'Giao diện độc quyền, sáng tạo, chuẩn nhận diện thương hiệu.',
  },
  {
    title: 'Chuẩn SEO, thân thiện Google',
    desc:  'Cấu trúc tối ưu, hỗ trợ SEO Onpage giúp tăng thứ hạng.',
  },
  {
    title: 'Tương thích mọi thiết bị',
    desc:  'Hiển thị thích hợp trên desktop, tablet và mobile.',
  },
  {
    title: 'Tốc độ nhanh, bảo mật cao',
    desc:  'Tối ưu hiệu suất, bảo vệ dữ liệu và chống tấn công hiệu quả.',
  },
  {
    title: 'Hỗ trợ tận tâm',
    desc:  'Đồng hành, hỗ trợ kỹ thuật và tư vấn 24/7.',
  },
]

const TECH_STACKS = [
  {
    label: 'Backend',
    cols:  4,
    icons: [
      { src: '/dichvu/dvchitiet1/logo6.svg.png', alt: '.NET' },
      { src: '/dichvu/dvchitiet1/logo7.svg.png', alt: 'Python' },
      { src: '/dichvu/dvchitiet1/logo8.svg.png', alt: 'NodeJS' },
      { src: '/dichvu/dvchitiet1/logo9.svg.png', alt: 'Java' },
    ],
  },
  {
    label: 'Frontend',
    cols:  5,
    icons: [
      { src: '/dichvu/dvchitiet1/logo10.webp', alt: 'React' },
      { src: '/dichvu/dvchitiet1/logo11.png',  alt: 'Angular' },
      { src: '/dichvu/dvchitiet1/logo12.png',  alt: 'Vue' },
      { src: '/dichvu/dvchitiet1/logo13.webp', alt: 'TypeScript' },
      { src: '/dichvu/dvchitiet1/logo8.svg.png', alt: 'NodeJS' },
    ],
  },
  {
    label: 'CMS & Platform',
    cols:  3,
    icons: [
      { src: '/dichvu/dvchitiet3/1.png', alt: 'WordPress' },
      { src: '/dichvu/dvchitiet3/2.png', alt: 'Shopify' },
      { src: '/dichvu/dvchitiet3/1.png', alt: 'Magento' },
    ],
  },
]

const PROJECTS = [
  { img: '/dichvu/dvchitiet1/9.jpg',  company: 'Công ty TNHH Wonder Wood',   system: 'Thiết kế hệ thống ERP', badge: 'Sản xuất B2B' },
  { img: '/dichvu/dvchitiet1/4.jpg',  company: 'Thương hiệu Yến sào Nam An', system: 'Thiết kế hệ thống ERP', badge: 'Sản xuất B2C' },
  { img: '/dichvu/dvchitiet1/10.jpg', company: 'Thương hiệu tàu hũ Yummy',   system: 'Thiết kế hệ thống ERP', badge: 'F&B' },
]

/* ─── Helpers ──────────────────────────────────────────── */
const colsClass = { 3: 'grid-cols-3', 4: 'grid-cols-4', 5: 'grid-cols-5' }

/* ─── Component ───────────────────────────────────────── */
export default function WebsiteDevServicePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════
            SECTION 1: HERO BANNER
        ══════════════════════════════════════════ */}
        <section
          className="relative w-full overflow-hidden"
          style={{
            backgroundImage: "url('/dichvu/dvchitiet3/background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-10">
            <div className="max-w-xl">
              <Breadcrumb items={[
                { label: 'Trang chủ', path: '/' },
                { label: 'Dịch vụ', path: '/dichvu' },
                { label: 'Xây dựng Website' },
              ]} />
              {/* H1 */}
              <h1 className="text-3xl md:text-4xl font-black text-[#073F6E] leading-tight mb-4">
                <span className="text-[#3ea54a] block">Xây dựng</span> Website chuyên nghiệp
              </h1>

              {/* Mô tả */}
              <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
                Thiết kế website hiện đại, chuẩn SEO, tương thích mọi thiết bị, mang đến trải nghiệm
                tuyệt vời và giúp doanh nghiệp bứt phá trên môi trường số.
              </p>

              {/* Bộ đôi nút */}
              <div className="flex flex-wrap items-center gap-4">
                <a href="/lienhe"
                  className="bg-[#3ea54a] hover:bg-[#2d7a36] text-white font-bold
                             px-6 py-3 rounded-md text-sm transition-colors duration-200">
                  NHẬN TƯ VẤN MIỄN PHÍ
                </a>
                <a href="/duan"
                  className="border-2 border-[#3ea54a] text-[#3ea54a] hover:bg-[#3ea54a]/10
                             font-bold px-6 py-3 rounded-md text-sm transition-colors duration-200">
                  XEM CÁC DỰ ÁN ĐÃ THỰC HIỆN
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 2: VẤN ĐỀ DOANH NGHIỆP
        ══════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl font-black text-[#073F6E] text-center uppercase mb-10">
              Doanh nghiệp bạn đang gặp vấn đề?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROBLEMS.map((p) => (
                <div key={p.title}
                  className="bg-white border border-slate-100 shadow-sm rounded-2xl
                             p-6 flex flex-col items-center text-center
                             hover:shadow-md transition-all duration-300">
                  <img src={p.icon} alt={p.title} className="w-14 h-14 object-contain mb-4" />
                  <h3 className="text-[14px] font-bold text-[#073F6E] mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 3: GIẢI PHÁP THE ALAB CUNG CẤP
        ══════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-black text-[#073F6E] uppercase mb-2">
                Giải pháp The ALAB cung cấp
              </h2>
              <p className="text-slate-500 text-sm">
                Dịch vụ xây dựng Website toàn diện — Hiện đại — Hiệu quả
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Cột trái: ảnh minh họa */}
              <div>
                <img
                  src="/dichvu/dvchitiet3/1.png"
                  alt="Xây dựng Website"
                  className="w-full object-contain rounded-xl"
                />
              </div>

              {/* Cột phải: danh sách giải pháp */}
              <div className="space-y-5">
                {SOLUTIONS.map((s) => (
                  <div key={s.title} className="flex items-start gap-3">
                    <img
                      src="/dichvu/dvchitiet1/logo5.png"
                      alt="check"
                      className="w-5 h-5 shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="text-[15px] font-semibold text-slate-700 block">{s.title}</span>
                      <span className="text-slate-500 text-xs mt-0.5 block">{s.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 4: CÔNG NGHỆ CHÚNG TÔI SỬ DỤNG
        ══════════════════════════════════════════ */}
        <section className="bg-white py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl font-black text-[#073F6E] uppercase mb-2">
                Công nghệ chúng tôi sử dụng
              </h2>
              <p className="text-slate-500 text-sm">Công nghệ hiện đại, chuẩn quốc tế</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TECH_STACKS.map((stack) => (
                <div key={stack.label}
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-100
                             flex flex-col items-start w-full transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-left text-slate-800 text-lg font-bold mb-4 w-full">
                    {stack.label}
                  </h3>
                  <div className={`grid ${colsClass[stack.cols]} gap-4 w-full items-center justify-items-center mt-2 overflow-hidden`}>
                    {stack.icons.map((ic) => (
                      <img
                        key={ic.alt}
                        src={ic.src}
                        alt={ic.alt}
                        className="h-10 md:h-12 w-auto max-w-full object-contain
                                   transition-all duration-300 hover:scale-105 shrink-0"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 5: DỰ ÁN TIÊU BIỂU
        ══════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 border-t border-slate-100">
          <h2 className="text-xl md:text-2xl font-black text-[#073F6E] text-center uppercase tracking-wide mb-8">
            Dự án tiêu biểu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mb-8">
            {PROJECTS.map((proj) => (
              <div key={proj.company}
                className="flex flex-row items-center gap-4 bg-white rounded-2xl p-5
                           shadow-md border border-slate-100 relative min-h-[160px] overflow-hidden
                           hover:shadow-lg transition-all duration-300">
                <img
                  src={proj.img}
                  alt={proj.company}
                  className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 rounded-xl"
                />
                <div className="flex flex-col flex-1 justify-center pr-4">
                  <h3 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                    {proj.company}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-0.5">{proj.system}</p>
                  <span className="border border-[#073F6E]/30 text-[#073F6E] bg-sky-50/40
                                   rounded-full px-3 py-0.5 text-[11px] font-semibold mt-2 self-start">
                    {proj.badge}
                  </span>
                </div>
                <a href="/duan"
                  className="absolute bottom-4 right-5 text-xs md:text-sm font-bold
                             text-[#3ea54a] hover:text-[#2d7a36] transition-colors">
                  Xem thêm
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 6: CTA BANNER ĐÁY
        ══════════════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-[#032e42] to-[#3ea54a] rounded-xl p-8
                          flex flex-col md:flex-row items-center justify-between text-white gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold leading-snug mb-2">
                Sẵn sàng bắt đầu dự án của bạn?
              </h2>
              <p className="text-white/80 text-[14px] leading-relaxed max-w-md">
                Liên hệ ngay để được tư vấn miễn phí và nhận báo giá chi tiết trong 24 giờ.
              </p>
            </div>
            <a href="/lienhe"
              className="shrink-0 bg-white text-[#115349] font-black rounded-full
                         px-6 py-3 shadow-md hover:bg-slate-50 transition-colors duration-200
                         whitespace-nowrap text-sm">
              LIÊN HỆ NGAY
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
