import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 5000, // optional: you can pick any
  },
  // ✅ Fix: redirect all routes to index.html
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  }
})
