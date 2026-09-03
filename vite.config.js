import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server: {
    cors: true,
    port: 5001,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Big Slider Card',
      fileName: 'big-slider-card',
      formats: ['es'],
    },
  },
})