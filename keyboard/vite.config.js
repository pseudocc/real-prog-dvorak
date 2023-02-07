import { defineConfig } from 'vite';
import path from 'node:path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'x.js'),
      formats: ['es'],
    },
    outDir: './lib'
  },
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "styles"),
    },
  },
  css: {
    modules: {
      localsConvention: "dashesOnly",
      generateScopedName: "[hash:base64:3]",
    },
  }
});