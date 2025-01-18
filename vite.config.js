import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://asexcellent-services-backend.onrender.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''), // Only if necessary
      },
    },
  },
})