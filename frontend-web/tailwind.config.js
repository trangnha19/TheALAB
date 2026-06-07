/** @type {import('tailwindcss').Config} */
export default {
  // Quét toàn bộ file JSX/JS trong src/ để Tailwind không bị sót class
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      // ── Bảng màu thương hiệu The ALAB ──
      colors: {
        // Xanh lá cây chủ đạo: logo, nút CTA, badge active, dải bản quyền
        'alab-green': '#3ea54a',
        // Xanh dương đậm: sidebar, tiêu đề lớn, nền hero
        'alab-navy':  '#0a2540',
      },

      // ── Font chữ: Inter — chuẩn giao diện công nghệ ──
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
      },

      // ── Đổ bóng tùy chỉnh ──
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.10), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
      },

      // ── Animation ──
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
      },
    },
  },

  plugins: [
    // Plugin hỗ trợ class prose cho render HTML từ database
    require('@tailwindcss/typography'),
  ],
}
