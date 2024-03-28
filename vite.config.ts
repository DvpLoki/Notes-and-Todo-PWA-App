import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Notes-and-Todo-PWA-App",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "noteMe",
        short_name: "Noteme",
        description: "Note making and todo app",
        theme_color: "#ffffff",
        display: "standalone",
        orientation: "natural",
        display_override: ["window-controls-overlay"],
        edge_side_panel: {
          preferred_width: 480,
        },
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
