import path from 'node:path';
import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  modules: [path.resolve('src/modules/onnx-runtime.ts')],
  manifest: {
    name: 'Dita',
    version: '0.3.0',
    version_name: '0.3.0-3bee088-1786268809',
    description: 'Dita aí — read any page aloud',
    permissions: ['storage', 'tabs', 'offscreen'],
    host_permissions: ['<all_urls>'],
    content_security_policy: {
      extension_pages: "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'",
    },
    action: {
      default_title: 'Dita — Read aloud',
    },
  },
});
