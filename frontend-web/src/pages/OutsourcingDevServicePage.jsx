/**
 * OutsourcingDevServicePage.jsx
 * Route: /dichvu/giaicong-congnghe
 * Trang chi tiết dịch vụ Gia công Giải pháp Công nghệ
 * Tài nguyên: /dichvu/dvchitiet2/ + /dichvu/dvchitiet1/ (fallback)
 */

import { Link } from 'react-router-dom'
import PublicNavbar from '../components/Layout/PublicNavbar'
import Footer from '../components/Layout/Footer'
import Breadcrumb from '../components/Breadcrumb'

/* ─── Dữ liệu ─────────────────────────────────────────── */
const PROBLEMS = [
  {
    icon:  '/dichvu/dvchitiet2/logo1.png',
    title: 'Thiếu nhân lực IT chất lượng',
    desc:  'Khó tuyển dụng & duy trì đội ngũ phát triển phần mềm phù hợp',
  },
  {
    icon:  '/dichvu/dvchitiet2/logo2.png',
    title: 'Chi phí vận hành cao',
    desc:  'Chi phí nhân sự, tuyển dụng và đào tạo tốn kém.',
  },
  {
    icon:  '/dichvu/dvchitiet2/logo3.png',
    title: 'Tiến độ dự án chậm',
    desc:  'Thiếu nhân lực khiến dự án kéo dài, bỏ lỡ cơ hội kinh doanh.',
  },
  {
    icon:  '/dichvu/dvchitiet2/logo4.png',
    title: 'Khó mở rộng linh hoạt',
    desc:  'Không thể tăng / giảm nhân sự nhanh theo nhu cầu',
  },
]

const SOLUTIONS = [
  {
    title: 'Gia công phần mềm theo yêu cầu',
    desc:  'Phát triển phần mềm đúng tiến độ, đúng yêu cầu, đúng ngân sách.',
  },
  {
    title: 'Bổ sung nhân sự IT',
    desc:  'Cung cấp lập trình viên chuyên nghiệp tích hợp trực tiếp vào nhóm của bạn.',
  },
  {
    title: 'Đảm bảo chất lượng',
    desc:  'Quy trình kiểm thử nghiêm ngặt, đảm bảo sản phẩm ổn định và bảo mật.',
  },
  {
    title: 'Bảo mật thông tin',
    desc:  'Cam kết bảo mật toàn bộ dữ liệu và mã nguồn theo tiêu chuẩn quốc tế.',
  },
  {
    title: 'Hỗ trợ dài hạn',
    desc:  'Đồng hành bảo trì, nâng cấp và mở rộng hệ thống sau khi bàn giao.',
  },
]

const TECH_STACKS = [
  {
    label: 'Backend',
    icons: [
      { src: '/dichvu/dvchitiet1/logo6.svg.png', alt: '.NET' },
      { src: '/dichvu/dvchitiet1/logo7.svg.png', alt: 'Python' },
      { src: '/dichvu/dvchitiet1/logo8.svg.png', alt: 'NodeJS' },
      { src: '/dichvu/dvchitiet1/logo9.svg.png', alt: 'Java' },
    ],
  },
  {
    label: 'Frontend',
    icons: [
      { src: '/dichvu/dvchitiet1/logo10.webp', alt: 'React' },
      { src: '/dichvu/dvchitiet1/logo11.png',  alt: 'Angular' },
      { src: '/dichvu/dvchitiet1/logo12.png',  alt: 'Vue' },
      { src: '/dichvu/dvchitiet1/logo13.webp', alt: 'TypeScript' },
    ],
  },
  {
    label: 'Database',
    icons: [
      { src: '/dichvu/dvchitiet1/logo14.webp', alt: 'PostgreSQL' },
      { src: '/dichvu/dvchitiet1/logo15.png',  alt: 'MySQL' },
      { src: '/dichvu/dvchitiet1/logo16.png',  alt: 'SQL Server' },
      { src: '/dichvu/dvchitiet1/logo17.png',  alt: 'MongoDB' },
    ],
  },
]

const PROJECTS = [
  { img: '/dichvu/dvchitiet1/9.jpg',  company: 'Công ty TNHH Wonder Wood',    system: 'Thiết kế hệ thống ERP', badge: 'Sản xuất B2B' },
  { img: '/dichvu/dvchitiet1/4.jpg',  company: 'Thương hiệu Yến sào Nam An',  system: 'Thiết kế hệ thống ERP', badge: 'Sản xuất B2C' },
  { img: '/dichvu/dvchitiet1/10.jpg', company: 'Thương hiệu tàu hũ Yummy',    system: 'Thiết kế hệ thống ERP', badge: 'F&B' },
]

/* ─── Component ───────────────────────────────────────── */
export default function OutsourcingDevServicePage() {
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
            backgroundImage: "url('/dichvu/dvchitiet2/background.png')",
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
                { label: 'Gia công giải pháp' },
              ]} />
              {/* H1 */}
              <h1 className="text-3xl md:text-4xl font-black text-[#073F6E] leading-tight mb-4">
                <span className="text-[#3ea54a] block">Gia công</span> Giải pháp Công nghệ
              </h1>

              {/* Mô tả */}
              <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
                Cung cấp đội ngũ lập trình viên giàu kinh nghiệm, quy trình làm việc chuyên nghiệp
                và linh hoạt, giúp doanh nghiệp tối ưu chi phí và rút ngắn thời gian phát triển sản phẩm.
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
                Đội ngũ gia công chuyên nghiệp — Linh hoạt — Hiệu quả
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Cột trái: ảnh minh họa */}
              <div>
                <img
                  src="/dichvu/dvchitiet2/2.png"
                  alt="Gia công công nghệ"
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
              <p className="text-slate-500 text-sm">Kiến trúc hiện đại, bảo mật và dễ mở rộng</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TECH_STACKS.map((stack) => (
                <div key={stack.label}
                  className="bg-white rounded-2xl p-6 shadow-md border border-slate-100
                             flex flex-col items-start w-full transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-left text-slate-800 text-lg font-bold mb-4 w-full">
                    {stack.label}
                  </h3>
                  <div className="grid grid-cols-4 gap-4 w-full items-center justify-items-center mt-2 overflow-hidden">
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
