import { defineConfig, splitVendorChunkPlugin, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import packageJson from './package.json';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

loadEnv('development', process.cwd(), 'VITE_');

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    ViteImageOptimizer({
      png: { quality: 80 },
    }),
  ],
});
