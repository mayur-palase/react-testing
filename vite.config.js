import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js', // Or .ts if using TypeScript
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'], // Formats for viewing reports
      exclude: ['node_modules/', 'src/test/setup.js'], // Skip files you don't want to measure
    },
  },
})
