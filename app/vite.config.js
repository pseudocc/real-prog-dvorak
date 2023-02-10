import { defineConfig } from "vite";
import path from "node:path";
import acorn from "acorn-private-methods";

const base = "/real-prog-dvorak";

export default defineConfig({
  base: base + "/",
  build: {
    rollupOptions: {
      acornInjectPlugins: [acorn],
    },
  },
  define: {
    __APP__: { base },
  },
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "styles"),
      "@tutor": path.resolve(__dirname, "..", "tutor", "lib"),
      "@keyboard": path.resolve(__dirname, "..", "keyboard", "lib"),
    },
  },
  css: {
    modules: {
      localsConvention: "dashesOnly",
      generateScopedName: "[hash:base64:3]",
    },
  },
});
