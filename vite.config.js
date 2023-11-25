import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checkerboard from 'vite-plugin-checkerboard';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checkerboard()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx'],
  },
});
