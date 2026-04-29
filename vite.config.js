import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/connor-ged/',
  build: { outDir: 'dist' }
});
