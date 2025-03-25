import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      data: '/src/data',
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        redirect: '404.html'
      }
    }
  }
})
