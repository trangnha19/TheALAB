/**
 * SoftwareDevServicePage.jsx
 * Route: /dichvu/tuvan-phattrien
 * Trang chi tiết dịch vụ Tư vấn & Phát triển Phần mềm Theo Yêu Cầu
 * Tài nguyên: /dichvu/dvchitiet1/
 */

import { Link } from 'react-router-dom'
import PublicNavbar from '../components/Layout/PublicNavbar'
import Footer from '../components/Layout/Footer'
import Breadcrumb from '../components/Breadcrumb'

/* ─── Dữ liệu ─────────────────────────────────────────── */
const PROBLEMS = [
  { icon: '/dichvu/dvchitiet1/logo1.png', title: 'Dữ liệu phân tán' },
  { icon: '/dichvu/dvchitiet1/logo2.png', title: 'Quy trình thủ công' },
  { icon: '/dichvu/dvchitiet1/logo3.png', title: 'Khó kiểm soát hiệu suất' },
  { icon: '/dichvu/dvchitiet1/logo4.png', title: 'Nguy cơ thất thoát dữ liệu' },
]

const FEATURES = [
  { title: 'Quản lý khách hàng',       desc: 'Lưu trữ thông tin và lịch sử giao dịch tập trung.' },
  { title: 'Quản lý đơn hàng',         desc: 'Theo dõi đơn hàng từ tạo mới đến hoàn thành.' },
  { title: 'Quản lý kho',              desc: 'Kiểm soát tồn kho, nhập xuất, cảnh báo tự động.' },
  { title: 'Quản lý nhân sự',          desc: 'Theo dõi hồ sơ, chấm công, tính lương.' },
  { title: 'Báo cáo theo thời gian thực', desc: 'Hệ thống báo cáo trực quan, cập nhật liên tục.' },
  { title: 'Phân quyền bảo mật',       desc: 'Phân quyền chi tiết, đảm bảo an toàn dữ liệu.' },
]

const STEPS = [
  { label: '1. Khảo sát',          icon: '/dichvu/dvchitiet1/1.png', desc: 'Tiếp nhận yêu cầu và khảo sát thực tế' },
  { label: '2. Phân tích yêu cầu', icon: '/dichvu/dvchitiet1/2.png', desc: 'Phân tích nghiệp vụ và đề xuất giải pháp' },
  { label: '3. Thiết kế hệ thống', icon: '/dichvu/dvchitiet1/3.png', desc: 'Thiết kế giao diện và kiến trúc hệ thống' },
  { label: '4. Lập trình',         icon: '/dichvu/dvchitiet1/6.png', desc: 'Phát triển phần mềm theo tiêu chuẩn' },
  { label: '5. Kiểm thử',          icon: '/dichvu/dvchitiet1/7.png', desc: 'Kiểm thử chức năng, hiệu năng và bảo mật.' },
  { label: '6. Triển khai',        icon: '/dichvu/dvchitiet1/8.png', desc: 'Bàn giao, đào tạo và hỗ trợ vận hành' },
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
  {
    img:      '/dichvu/dvchitiet1/9.jpg',
    company:  'Wonder Wood',
    system:   'Hệ thống ERP Quản lý Sản xuất',
    category: 'Phần mềm ERP',
  },
  {
    img:      '/dichvu/dvchitiet1/4.jpg',
    company:  'Yến sào Nam An',
    system:   'Hệ thống Quản lý Bán hàng & Kho',
    category: 'Phần mềm quản lý',
  },
  {
    img:      '/dichvu/dvchitiet1/10.jpg',
    company:  'Tàu hũ Yummy',
    system:   'Hệ thống POS & Quản lý Chuỗi',
    category: 'Phần mềm POS',
  },
]

/* ─── Component ───────────────────────────────────────── */
export default function SoftwareDevServicePage() {
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
            backgroundImage: "url('/dichvu/dvchitiet1/background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
          }}
        >
          {/* Overlay trắng → trong suốt */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-0" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-10">
            <div className="max-w-xl">
              <Breadcrumb items={[
                { label: 'Trang chủ', path: '/' },
                { label: 'Dịch vụ', path: '/dichvu' },
                { label: 'Tư vấn & Phát triển' },
              ]} />
              {/* H1 */}
              <h1 className="text-3xl md:text-4xl font-black leading-tight mb-6 text-[#073F6E]">
                <span className="text-[#3ea54a] block md:inline">Tư vấn &amp; Phát triển</span>
                <br className="hidden md:block" /> Phần mềm Theo Yêu Cầu
              </h1>

              {/* Mô tả */}
              <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
                Giải pháp phần mềm chuyên biệt, được thiết kế riêng cho từng doanh nghiệp,
                tối ưu quy trình và nâng cao năng lực cạnh tranh.
              </p>

              {/* Bộ đôi nút */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/lienhe"
                  className="bg-[#3ea54a] hover:bg-[#2d7a36] text-white font-bold
                             px-6 py-3 rounded-md text-sm transition-colors duration-200"
                >
                  NHẬN TƯ VẤN MIỄN PHÍ
                </a>
                <a
                  href="/duan"
                  className="border-2 border-[#3ea54a] text-[#3ea54a] hover:bg-[#3ea54a]/10
                             font-bold px-6 py-3 rounded-md text-sm transition-colors duration-200"
                >
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
                <div
                  key={p.title}
                  className="bg-white border border-slate-100 shadow-sm rounded-2xl
                             p-6 flex flex-col items-center text-center
                             hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={p.icon}
                    alt={p.title}
                    className="w-14 h-14 object-contain mb-4"
                  />
                  <h3 className="text-[14px] font-bold text-[#073F6E]">{p.title}</h3>
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
                Chúng tôi giúp doanh nghiệp số hóa toàn bộ quy trình
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Cột trái: ảnh dashboard */}
              <div>
                <img
                  src="/dichvu/dvchitiet1/5.png"
                  alt="Dashboard quản trị"
                  className="w-full rounded-xl shadow-md border border-slate-100"
                />
              </div>

              {/* Cột phải: danh sách tính năng */}
              <div className="space-y-4">
                {FEATURES.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <img
                      src="/dichvu/dvchitiet1/logo5.png"
                      alt="check"
                      className="w-5 h-5 shrink-0 mt-0.5"
                    />
                    <div>
                      <span className="text-[15px] font-semibold text-slate-700 block">{f.title}</span>
                      <span className="text-slate-500 text-xs mt-1 block">{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 4: QUY TRÌNH TRIỂN KHAI
        ══════════════════════════════════════════ */}
        <section className="bg-white py-12 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-xl md:text-2xl font-black text-[#073F6E] uppercase mb-2">
                Quy trình triển khai
              </h2>
              <p className="text-slate-500 text-sm">6 bước triển khai chuyên nghiệp</p>
            </div>

            {/* Trục ngang 6 bước */}
            <div className="flex flex-wrap items-start justify-center gap-0">
              {STEPS.map((step, idx) => (
                <div key={step.label} className="flex items-start">
                  {/* Bước */}
                  <div className="flex flex-col items-center w-28 md:w-36">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md border border-slate-100
                                    flex items-center justify-center p-3 mx-auto mb-3
                                    transition-transform duration-300 hover:scale-105">
                      <img
                        src={step.icon}
                        alt={step.label}
                        className="w-12 h-12 md:w-14 md:h-14 object-contain"
                      />
                    </div>
                    <span className="text-[11px] md:text-xs font-bold text-[#073F6E] text-center leading-tight block">
                      {step.label}
                    </span>
                    <span className="text-slate-500 text-[10px] md:text-xs mt-1 block text-center max-w-[100px] mx-auto leading-tight">
                      {step.desc}
                    </span>
                  </div>

                  {/* Mũi tên nối (trừ bước cuối) */}
                  {idx < STEPS.length - 1 && (
                    <span className="text-slate-300 text-xl hidden md:block mx-2 mt-6 shrink-0">→</span>
                  )}
                </div>
              ))}
            </div>

            {/* Tech Stack — liền ngay dưới quy trình */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
              {TECH_STACKS.map((stack) => (
                <div
                  key={stack.label}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-slate-100/60 flex flex-col items-start w-full transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-left text-slate-800 text-lg font-bold mb-4 w-full px-2">
                    {stack.label}
                  </h3>
                  <div className="grid grid-cols-4 gap-2 md:gap-4 w-full items-center justify-items-center mt-6 px-1 md:px-2 overflow-hidden">
                    {stack.icons.map((ic) => (
                      <img
                        key={ic.alt}
                        src={ic.src}
                        alt={ic.alt}
                        className="h-10 md:h-12 w-auto max-w-full object-contain transition-all duration-300 hover:scale-105 shrink-0"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 6: DỰ ÁN TIÊU BIỂU
        ══════════════════════════════════════════ */}
        <section className="bg-white py-16 border-t border-slate-100">
          <h2 className="text-xl md:text-2xl font-black text-[#073F6E] text-center uppercase tracking-wide mb-8">
            Dự án tiêu biểu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mb-16">

            {/* Card 1 — Wonder Wood */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100
                            relative flex flex-row items-center gap-4 min-h-[160px] overflow-hidden
                            hover:shadow-lg transition-all duration-300">
              <img
                src="/dichvu/dvchitiet1/9.jpg"
                alt="Wonder Wood"
                className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 rounded-xl"
              />
              <div className="flex flex-col flex-1 justify-center pr-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                  Công ty TNHH Wonder Wood
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-0.5">Thiết kế hệ thống ERP</p>
                <span className="border border-[#073F6E]/30 text-[#073F6E] bg-sky-50/40
                                 rounded-full px-3 py-0.5 text-[11px] font-semibold mt-2 self-start">
                  Sản xuất B2B
                </span>
              </div>
              <a href="/duan"
                className="absolute bottom-4 right-5 text-xs md:text-sm font-bold
                           text-[#3ea54a] hover:text-[#2d7a36] transition-colors">
                Xem thêm
              </a>
            </div>

            {/* Card 2 — Yến sào Nam An */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100
                            relative flex flex-row items-center gap-4 min-h-[160px] overflow-hidden
                            hover:shadow-lg transition-all duration-300">
              <img
                src="/dichvu/dvchitiet1/4.jpg"
                alt="Yến sào Nam An"
                className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 rounded-xl"
              />
              <div className="flex flex-col flex-1 justify-center pr-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                  Thương hiệu Yến sào Nam An
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-0.5">Thiết kế hệ thống ERP</p>
                <span className="border border-[#073F6E]/30 text-[#073F6E] bg-sky-50/40
                                 rounded-full px-3 py-0.5 text-[11px] font-semibold mt-2 self-start">
                  Sản xuất B2C
                </span>
              </div>
              <a href="/duan"
                className="absolute bottom-4 right-5 text-xs md:text-sm font-bold
                           text-[#3ea54a] hover:text-[#2d7a36] transition-colors">
                Xem thêm
              </a>
            </div>

            {/* Card 3 — Tàu hũ Yummy */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-slate-100
                            relative flex flex-row items-center gap-4 min-h-[160px] overflow-hidden
                            hover:shadow-lg transition-all duration-300">
              <img
                src="/dichvu/dvchitiet1/10.jpg"
                alt="Tàu hũ Yummy"
                className="w-24 h-24 md:w-28 md:h-28 object-contain shrink-0 rounded-xl"
              />
              <div className="flex flex-col flex-1 justify-center pr-4">
                <h3 className="text-sm md:text-base font-bold text-slate-900 leading-snug">
                  Thương hiệu tàu hũ Yummy
                </h3>
                <p className="text-xs md:text-sm text-slate-500 mt-0.5">Thiết kế hệ thống ERP</p>
                <span className="border border-[#073F6E]/30 text-[#073F6E] bg-sky-50/40
                                 rounded-full px-3 py-0.5 text-[11px] font-semibold mt-2 self-start">
                  F&amp;B
                </span>
              </div>
              <a href="/duan"
                className="absolute bottom-4 right-5 text-xs md:text-sm font-bold
                           text-[#3ea54a] hover:text-[#2d7a36] transition-colors">
                Xem thêm
              </a>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            SECTION 7: CTA BANNER ĐÁY
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
