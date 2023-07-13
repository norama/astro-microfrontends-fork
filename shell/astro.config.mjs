import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import path from 'path'
import { fileURLToPath } from 'url'

// loads solid microfrontends from source if true
const MF_DEV = true

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mfPath = MF_DEV ? '../app-c/src/mf.js' : '../app-c/dist/bundle.js'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'solid-microfrontends': path.resolve(__dirname, mfPath),
      },
    },
  },
  integrations: [
    react(),
    solidJs(),
    {
      name: 'importmap-externals',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if (target === 'client') {
            vite.build.rollupOptions['external'] = [
              'react',
              'react-dom',
              'solid-js',
              'solid-microfrontends',
            ]
          }
        },
      },
    },
  ],
})
