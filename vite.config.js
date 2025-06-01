import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Needed for local + preview hosting
    port: 3000, // Used only for local dev
    allowedHosts: [".onrender.com"], // Accept any Render subdomain
  },
  preview: {
    host: true,
    port: 4173, // default preview port
    allowedHosts: [".onrender.com"], // Allow preview via Render
  },
});
