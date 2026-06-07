/**
 * ServicePage.jsx — Trang Dịch Vụ công khai The ALAB
 * Route: /dichvu
 * Bám sát 100% thiết kế mẫu image_00c6c0.jpg & image_00c6a3.jpg
 */

import Footer from '../components/Layout/Footer'
import PublicNavbar from '../components/Layout/PublicNavbar'
import Breadcrumb from '../components/Breadcrumb'

/* ═══════════════════════════════════════════════════
   DỮ LIỆU 3 DỊCH VỤ CỐT LÕI
═══════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: '01',
    title: 'Tư vấn & Phát triển Phần mềm',
    desc: 'Chúng tôi tư vấn và phát triển các phần mềm chuyên biệt theo từng đặc thù của doanh nghiệp, giúp tối ưu quy trình vận hành và nâng cao hiệu quả kinh doanh.',
    img: '/dichvu/1.png',
    href: '/dichvu/tuvan-phattrien',
    features: [
      'Tư vấn giải pháp công nghệ',
      'Phân tích & thiết kế hệ thống',
      'Phát triển phần mềm theo yêu cầu',
      'Bảo trì và nâng cấp hệ thống',
    ],
  },
  {
    id: '02',
    title: 'Gia công giải pháp công nghệ',
    desc: 'Cung cấp dịch vụ gia công phần mềm chuyên nghiệp, linh hoạt, hội tụ đội ngũ kỹ thuật giàu kinh nghiệm, đáp ứng nhu cầu đa dạng của doanh nghiệp.',
    img: '/dichvu/3.png',
    href: '/dichvu/giaicong-congnghe',
    features: [
      'Gia công phần mềm theo yêu cầu',
      'Đội ngũ kỹ thuật giàu kinh nghiệm',
      'Quy trình quản lý minh bạch',
      'Đảm bảo chất lượng và tiến độ',
    ],
  },
  {
    id: '03',
    title: 'Xây dựng Website',
    desc: 'Thiết kế và xây dựng website chuyên nghiệp, hiện đại, tốc độ, tương thích mọi thiết bị, giúp doanh nghiệp nâng cao thương hiệu trực tuyến.',
    img: '/dichvu/2.png',
    href: '/dichvu/xaydung-website',
    features: [
      'Thiết kế website theo yêu cầu',
      'Chuẩn SEO - Tối ưu hiệu suất',
      'Tương thích mọi thiết bị',
      'Bảo mật & hỗ trợ kỹ thuật',
    ],
  },
]

/* ═══════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════ */
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicNavbar />

      <main className="flex-1">

        {/* ══════════════════════════════════════════
            1. HERO BANNER — ảnh nền 7.png
        ══════════════════════════════════════════ */}
        <section
          className="relative w-full overflow-hidden"
          style={{
            backgroundImage: "url('/dichvu/7.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay gradient trắng → trong suốt, nhường ảnh laptop bên phải */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent z-0" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 md:pt-28 pb-10">
            <div className="max-w-lg">
              <Breadcrumb items={[
                { label: 'Trang chủ', path: '/' },
                { label: 'Dịch vụ' },
              ]} />
              {/* Tiêu đề */}
              <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4 text-[#073F6E]">
                <span className="text-[#3ea54a]">DỊCH VỤ</span> CỦA CHÚNG TÔI
              </h1>

              {/* Mô tả */}
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Chúng tôi cung cấp các giải pháp công nghệ toàn diện giúp doanh nghiệp
                tối ưu vận hành và bứt phá tăng trưởng.
              </p>

              {/* Nút CTA viên thuốc */}
              <a
                href="/lienhe"
                className="inline-block rounded-full bg-[#3ea54a] px-6 py-2.5
                           text-white font-bold text-sm tracking-wide
                           hover:bg-[#2b7534] transition-colors duration-200 shadow-md"
              >
                LIÊN HỆ NGAY
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. LƯỚI 3 DỊCH VỤ CỐT LÕI
        ══════════════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          {/* Tiêu đề khối */}
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-black text-[#073F6E] text-center uppercase">
              GIẢI PHÁP CÔNG NGHỆ PHÙ HỢP VỚI MỌI NHU CẦU DOANH NGHIỆP
            </h2>
            <div className="w-16 h-1 bg-[#3ea54a] mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100
                           flex flex-col
                           hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Số thứ tự — nền xanh dương sẫm */}
                <div className="mb-4">
                  <span className="inline-flex w-10 h-10 rounded-full bg-[#073F6E] items-center justify-center text-white text-sm font-extrabold">
                    {svc.id}
                  </span>
                </div>

                {/* Tiêu đề dịch vụ — xanh dương sẫm */}
                <h3 className="text-[17px] font-extrabold text-[#073F6E] mb-3 leading-snug">
                  {svc.title}
                </h3>

                {/* Mô tả */}
                <p className="text-[13px] text-slate-500 leading-relaxed mb-5">
                  {svc.desc}
                </p>

                {/* Ảnh minh họa */}
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-44 object-cover rounded-xl mb-5"
                />

                {/* Checklist tính năng — tick xanh lá, chữ xám */}
                <ul className="space-y-2.5 mb-6 flex-1">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-[#3ea54a] shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9
                             10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[13px] text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Link xem chi tiết — xanh dương sẫm */}
                <a
                  href={svc.href}
                  className="text-sm font-bold text-[#073F6E] hover:underline flex items-center gap-1 mt-auto"
                >
                  Xem chi tiết →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. VÌ SAO CHỌN THE ALAB?
        ══════════════════════════════════════════ */}
        <section className="bg-slate-50 py-16 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center mb-2">
              <h2 className="text-2xl font-black text-[#073F6E] text-center uppercase">
                Vì sao chọn THE ALAB?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

              {/* Ô 1: Đội ngũ chuyên nghiệp */}
              <div className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100
                              hover:shadow-md transition-all duration-300">
                <img src="/dichvu/logo1.png" className="h-16 w-auto object-contain mb-4 mx-auto" alt="Đội ngũ chuyên nghiệp" />
                <h3 className="text-base font-bold text-[#073F6E] mb-2">Đội ngũ chuyên nghiệp</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Kinh nghiệm thực chiến trong nhiều lĩnh vực và dự án đa dạng.
                </p>
              </div>

              {/* Ô 2: Giải pháp tối ưu */}
              <div className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100
                              hover:shadow-md transition-all duration-300">
                <img src="/dichvu/logo2.png" className="h-16 w-auto object-contain mb-4 mx-auto" alt="Giải pháp tối ưu" />
                <h3 className="text-base font-bold text-[#073F6E] mb-2">Giải pháp tối ưu</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Đưa ra giải pháp phù hợp giúp doanh nghiệp tiết kiệm chi phí và nâng cao hiệu quả.
                </p>
              </div>

              {/* Ô 3: Chất lượng đảm bảo */}
              <div className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100
                              hover:shadow-md transition-all duration-300">
                <img src="/dichvu/logo3.png" className="h-16 w-auto object-contain mb-4 mx-auto" alt="Chất lượng đảm bảo" />
                <h3 className="text-base font-bold text-[#073F6E] mb-2">Chất lượng đảm bảo</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Quy trình phát triển chuẩn quốc tế, đảm bảo chất lượng và tiến độ cam kết.
                </p>
              </div>

              {/* Ô 4: Hỗ trợ tận tâm */}
              <div className="text-center flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100
                              hover:shadow-md transition-all duration-300">
                <img src="/dichvu/logo4.png" className="h-16 w-auto object-contain mb-4 mx-auto" alt="Hỗ trợ tận tâm" />
                <h3 className="text-base font-bold text-[#073F6E] mb-2">Hỗ trợ tận tâm</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  Đồng hành cùng khách hàng 24/7 trong suốt quá trình triển khai và vận hành.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. CTA BANNER ĐÁY
        ══════════════════════════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div
            className="bg-gradient-to-r from-[#032e42] to-[#3ea54a] rounded-xl p-8
                        flex flex-col md:flex-row items-center justify-between text-white gap-6"
          >
            {/* Text bên trái */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold leading-snug mb-2">
                Sẵn sàng bắt đầu dự án của bạn?
              </h2>
              <p className="text-white/80 text-[14px] leading-relaxed max-w-md">
                Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận giải pháp phù hợp nhất.
              </p>
            </div>

            {/* Nút viên thuốc trắng bên phải */}
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
