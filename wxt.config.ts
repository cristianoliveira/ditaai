import path from 'node:path';
import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  modules: [path.resolve('src/modules/onnx-runtime.ts')],
  manifest: {
    name: 'DitaAi',
    version: '0.3.0',
    version_name: '0.3.0-50a6c6b-1786514181',
    description: 'Turn web pages into private, local audio',
    permissions: ['storage', 'tabs', 'offscreen', 'contextMenus'],
    host_permissions: ['<all_urls>'],
    content_security_policy: {
      extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'",
    },
    action: {
      default_title: 'DitaAi — Listen to this page',
      default_popup: 'popup.html',
    },
  },
});
