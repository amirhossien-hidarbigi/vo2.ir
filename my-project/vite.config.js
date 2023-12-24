// vite.config.js
import { defineConfig } from "vite";
import { createProxyMiddleware } from "http-proxy-middleware";

export default defineConfig({
  plugins: [],
  server: {
    proxy: {
      "/api": {
        target: "https://vo2.ir",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
        optimizeDeps: {
          include: ["jalali-react-datepicker"],
        },
      },
    },
  },
});
