import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import prefresh from '@prefresh/vite';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';


// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
  ],
  alias: {
    react: 'preact/compat',
  },
  base: '/stella-stays',
  publicDir: 'public'
})
