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
    // rollupOptions: {
    //   // make sure to externalize deps that shouldn't be bundled
    //   // into your library
    //   external: ['lit'],
    //   // output: {
    //   //   // Provide global variables to use in the UMD build
    //   //   // for externalized deps
    //   //   globals: {
    //   //     vue: 'Vue',
    //   //   },
    //   // },
    // },
  },
})