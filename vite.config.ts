import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        anfrage: resolve(__dirname, 'pages/anfrage.html'),
        datenschutz: resolve(__dirname, 'pages/datenschutz.html'),
        preistabelle: resolve(__dirname, 'pages/preistabelle.html')
      }
    }

  }
})
