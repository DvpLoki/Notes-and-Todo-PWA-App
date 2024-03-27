import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Noteme",
        short_name: "Noteme",
        description: "Note making and todo app",
        theme_color: "#ffffff",
        icons: [
          // {
          //   src: "pwa-192x192.png",
          //   sizes: "192x192",
          //   type: "image/png",
          // },
          // {
          //   src: "pwa-512x512.png",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
        ],
      },
    }),
  ],
});
