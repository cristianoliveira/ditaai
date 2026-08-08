// Content script entry — runs at document_idle.
// Extracts readable text from the page and responds to background queries.

import { type TextSegment, prepareSegments } from '../domain/document/text-processor';

/** Tags we consider readable content, in document order. */
const READABLE_SELECTORS = 'article, p, h1, h2, h3, h4, h5, h6, li, blockquote';

/** Tags we skip entirely. */
const IGNORE_SELECTORS = 'script, style, nav, footer, header, aside, noscript';

function extractSegments(doc: Document): TextSegment[] {
  const elements = doc.querySelectorAll(READABLE_SELECTORS);
  const ignored = new Set(doc.querySelectorAll(IGNORE_SELECTORS));

  const segments: TextSegment[] = [];
  for (const el of elements) {
    if (ignored.has(el) || el.closest(IGNORE_SELECTORS)) continue;
    segments.push({ text: el.textContent ?? '', tag: el.tagName.toLowerCase() });
  }
  return segments;
}

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main() {
    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      if (msg?.dest !== 'contentScript') return false;
      if (msg.method === 'getText') {
        const segments = extractSegments(document);
        sendResponse({ texts: prepareSegments(segments) });
        return false;
      }
      return false;
    });
  },
});
