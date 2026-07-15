import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      serverFns: {
        // Server functions are same-origin — CSRF is handled by Vercel's
        // infrastructure. Disable the dev-mode warning.
        disableCsrfMiddlewareWarning: true,
      },
    }),
    nitro(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
    strictPort: true,
  },
});
