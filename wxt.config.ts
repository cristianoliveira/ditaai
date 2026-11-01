import path from 'node:path';
import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  modules: [path.resolve('src/modules/onnx-runtime.ts')],
  vite: () => ({ worker: { format: 'es' } }),
  manifest: {
    name: 'DitaAi',
    version: '0.3.0',
    version_name: '0.3.0-45a4ffe-1793603218',
    description: 'Turn web pages into private, local audio',
    permissions: ['storage', 'tabs', 'offscreen', 'contextMenus', 'debugger'],
    host_permissions: ['<all_urls>'],
    content_security_policy: {
      extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'",
    },
    icons: {
      16: '/icons/dita-play-16.png',
      32: '/icons/dita-play-32.png',
      48: '/icons/dita-play-48.png',
      128: '/icons/dita-play-128.png',
    },
    action: {
      default_title: 'DitaAi — Listen to this page',
      default_popup: 'popup.html',
      default_icon: {
        16: '/icons/dita-play-16.png',
        32: '/icons/dita-play-32.png',
      },
    },
  },
});
