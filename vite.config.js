
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        courses: resolve(__dirname, 'src/courses.html'),
        coursesDetail: resolve(__dirname, 'src/courses-detail.html'),
        contact: resolve(__dirname, 'src/contact.html'),
        login: resolve(__dirname, 'src/login.html'),
        signup: resolve(__dirname, 'src/signup.html')
      }
    }
  }
})
