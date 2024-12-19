import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react"
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-navigation-menu']
        }
      }
    },
    minify: true,
    target: 'esnext'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
}); 