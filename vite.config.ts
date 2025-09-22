import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // German pages
        'de-index': resolve(__dirname, 'de/index.html'),
        'de-club': resolve(__dirname, 'de/club.html'),
        'de-contact': resolve(__dirname, 'de/contact.html'),
        'de-meetings': resolve(__dirname, 'de/meetings.html'),
        // English pages
        'en-index': resolve(__dirname, 'en/index.html'),
        'en-club': resolve(__dirname, 'en/club.html'),
        'en-contact': resolve(__dirname, 'en/contact.html'),
        'en-meetings': resolve(__dirname, 'en/meetings.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/styles': resolve(__dirname, 'src/styles'),
      '@/utils': resolve(__dirname, 'src/utils'),
      '@/types': resolve(__dirname, 'src/types'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});