import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        contact: path.resolve(__dirname, 'src/contact.html'),
        courses: path.resolve(__dirname, 'src/courses.html'),
        coursesdetail: path.resolve(__dirname, 'src/courses-details.html'),
        login: path.resolve(__dirname, 'src/login.html'),
        signup: path.resolve(__dirname, 'src/signup.html'),
      },
    },
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}