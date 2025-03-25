import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/barborn/",
  define: {
    'process.env.BACKEND_URL': JSON.stringify(process.env.BACKEND_URL || 'http://localhost:7000'),
  },
})