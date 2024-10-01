import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        //redirect the request to openai, cross the CORS policy(which is *illegal in production, only used in development)
        target: 'https://api.openai.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
