import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: true,
  base: process.env.NODE_ENV === 'production' ? '/Image-Carousel/' : '/',
  plugins: [
    vue(),
  ],
})
