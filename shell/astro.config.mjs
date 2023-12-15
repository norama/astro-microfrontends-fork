import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import solidJs from '@astrojs/solid-js'
import path from 'path'
import { fileURLToPath } from 'url'

// loads solid microfrontends from source if true
const MF_DEV = false

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mfPathSolid = MF_DEV ? '../mf-solid/src/index.js' : '../mf-solid/dist/bundle.js'
const mfPathReact1 = MF_DEV ? '../mf-react-1/src/index.js' : '../mf-react-1/dist/bundle.js'
const mfPathReact2 = MF_DEV ? '../mf-react-2/src/index.js' : '../mf-react-2/dist/bundle.js'

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        'solid-microfrontends': path.resolve(__dirname, mfPathSolid),
        'react-microfrontend1': path.resolve(__dirname, mfPathReact1),
        'react-microfrontend2': path.resolve(__dirname, mfPathReact2),
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
              'react-microfrontend1',
              'react-microfrontend2',
            ]
          }
        },
      },
    },
  ],
})
