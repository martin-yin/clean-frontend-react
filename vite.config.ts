import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const pathResolve = (dir: string) => resolve(__dirname, '.', dir)
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8012,
    open: true
  },
  plugins: [
    WindiCSS(),
    react({
      babel: {
        parserOpts: { plugins: ['decorators-legacy'] }
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: /~antd/,
        replacement: pathResolve('node_modules') + '/antd'
      },
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
