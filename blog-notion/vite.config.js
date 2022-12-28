import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        about: resolve(__dirname, 'about/index.html'),
        login: resolve(__dirname, 'login/index.html'),
        dashboard: resolve(__dirname, 'admin/dashboard/index.html')
      },
    },
  },
});
