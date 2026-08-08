import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  manifest: {
    name: 'Dita',
    version: '0.1.0',
    description: 'Chrome extension with local Piper TTS',
    permissions: ['storage', 'tabs', 'offscreen'],
    host_permissions: ['<all_urls>'],
  },
});
