// Paragraph-level extraction: non-overlapping leaf content blocks.
// DOM-only. Called from the content-script composition root.
//
// "Leaf block" = a readable element that contains no other readable element.
// This drops containers (article, ul, section) so the same text is never
// segmented twice, and keeps real paragraphs / list items / headings.
// Whitespace-only blocks are dropped here so segment indices stay 1:1 with
// the cleaned spoken chunks (see text-processor splitText).

const READABLE_SELECTORS = 'article, p, h1, h2, h3, h4, h5, h6, li, blockquote';
const IGNORE_SELECTORS = 'script, style, nav, footer, header, aside, noscript';

import type { ParagraphSegment } from '../lib/types';

export function extractParagraphs(root: ParentNode = document): ParagraphSegment[] {
  const blocks = [...root.querySelectorAll(READABLE_SELECTORS)];
  return blocks
    .filter((el) => !el.querySelector(READABLE_SELECTORS)) // leaf blocks only
    .filter((el) => !el.closest(IGNORE_SELECTORS)) // drop nav/footer/header/aside
    .filter((el) => (el.textContent ?? '').trim() !== '') // drop empty (index alignment)
    .map((el) => ({
      text: el.textContent ?? '',
      tag: el.tagName.toLowerCase(),
      element: el,
    }));
}
