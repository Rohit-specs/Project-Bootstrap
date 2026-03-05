import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
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
    port: 8080, // dev server port
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Silence deprecation warnings (true to silence all)
        silenceDeprecationWarnings: true,
      },
    },
  },
});