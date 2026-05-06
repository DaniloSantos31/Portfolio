import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks(id) {
  if (id.includes('node_modules')) {
    if (id.includes('lucide-react')) {
      return 'icons';
    }
    if (id.includes('react')) {
      return 'vendor';
    }
    return 'vendor';
  }
}
      }
    }
  }
})
