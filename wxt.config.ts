import { defineConfig } from 'wxt';

export default defineConfig({
  srcDir: 'src',
  outDir: 'dist',
  manifest: {
    name: 'Dita',
    version: '0.2.0-4b1b0e3-1786177752',
    description: 'Dita aí — read any page aloud',
    permissions: ['storage', 'tabs', 'offscreen'],
    host_permissions: ['<all_urls>'],
    action: {
      default_title: 'Dita — Read aloud',
    },
  },
});
