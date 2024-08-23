import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: "192.168.0.10",
  //   port: 3001
  // },
  plugins: [react()]
})