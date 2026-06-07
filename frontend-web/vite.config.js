import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Cấu hình Vite cho dự án TheALAB Frontend.
 * - Frontend chạy tại: http://localhost:1457
 * - Backend Django tại: http://localhost:1451
 * - Proxy: mọi request /api/* sẽ được chuyển tiếp đến backend
 */
export default defineConfig({
  plugins: [react()],
  server: {
    // Cổng chạy frontend
    port: 1457,

    // Proxy API: chuyển tiếp request /api/* tới backend Django
    proxy: {
      '/api': {
        target: 'http://localhost:1451',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
