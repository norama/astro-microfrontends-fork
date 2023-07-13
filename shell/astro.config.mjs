import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'solid-microfrontends': path.resolve(__dirname, '../app-c/dist/bundle.js'),
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
