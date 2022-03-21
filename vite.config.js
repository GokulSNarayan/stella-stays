import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import prefresh from '@prefresh/vite';

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [prefresh()],
  alias: {
    react: 'preact/compat',
  },
  base: '/',
  publicDir: 'public'
})
