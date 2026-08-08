import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  manifest: {
    name: 'Dita',
    version: '0.3.0',
    version_name: '0.3.0-3a29e54-1786184106',
    description: 'Dita aí — read any page aloud',
    permissions: ['storage', 'tabs', 'offscreen'],
    host_permissions: ['<all_urls>'],
    action: {
      default_title: 'Dita — Read aloud',
    },
  },
});
