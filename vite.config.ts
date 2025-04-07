import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/",  // For GitHub Pages with custom domain
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
