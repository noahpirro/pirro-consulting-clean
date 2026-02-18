import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    compression({ algorithm: "gzip", threshold: 1024 }),
    compression({ algorithm: "brotliCompress", threshold: 1024 }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom")) return "vendor-react";
          if (id.includes("node_modules/react/")) return "vendor-react";
          if (id.includes("node_modules/react-router")) return "vendor-router";
          if (id.includes("node_modules/framer-motion")) return "vendor-motion";
          if (id.includes("node_modules/@tanstack")) return "vendor-query";
          if (id.includes("node_modules/react-helmet")) return "vendor-helmet";
          if (id.includes("node_modules/lucide-react")) return "vendor-icons";
        },
      },
    },
    // Bilder unter 8KB inline als Base64
    assetsInlineLimit: 8192,
    // CSS Code-Splitting
    cssCodeSplit: true,
    // Sourcemaps deaktivieren fuer Production
    sourcemap: false,
  },
});
