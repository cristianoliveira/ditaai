// Content script entry — runs at document_start.
// Patches speechSynthesis to route Piper voices through local server.

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_start',
  main() {
    console.log('[dita] content script loaded');
  },
});
