import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000, // Set PORT dynamically
    host: "0.0.0.0", // Required for Render
  },
  define: {
    "process.env.BACKEND_URL": JSON.stringify(
      process.env.BACKEND_URL || "http://localhost:7000"
    ),
  },
});
