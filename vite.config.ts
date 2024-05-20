/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { resolve } from "path";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './packages'),
    },
  },
  plugins: [
    react()
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'lnktr-ui',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
