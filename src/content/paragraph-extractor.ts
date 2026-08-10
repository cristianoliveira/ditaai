// Paragraph-level extraction: non-overlapping leaf content blocks.
// DOM-only. Called from the content-script composition root.
//
// "Leaf block" = a readable element that contains no other readable element.
// This drops containers (article, ul, section) so the same text is never
// segmented twice, and keeps real paragraphs / list items / headings.
// Whitespace-only blocks are dropped here so segment indices stay 1:1 with
// the cleaned spoken chunks (see text-processor splitText).

const READABLE_SELECTORS = 'article, p, h1, h2, h3, h4, h5, h6, li, blockquote';
const GENERIC_CONTENT_SELECTORS = 'main, [role="main"], section, div';
const IGNORE_SELECTORS =
  'script, style, nav, footer, header, aside, noscript, [aria-hidden="true"]';
const CONTROL_SELECTORS = 'button, input, select, textarea';

import type { ParagraphSegment } from '../lib/types';

export function extractParagraphs(root: ParentNode = document): ParagraphSegment[] {
  const semanticBlocks = extractLeafBlocks(root, READABLE_SELECTORS);
  if (semanticBlocks.length > 0) return semanticBlocks;

  return extractLeafBlocks(root, GENERIC_CONTENT_SELECTORS).filter(hasNarratableText);
}

function extractLeafBlocks(root: ParentNode, selectors: string): ParagraphSegment[] {
  return [...root.querySelectorAll(selectors)]
    .filter((element) => !element.querySelector(selectors))
    .filter((element) => !element.closest(IGNORE_SELECTORS))
    .filter((element) => (element.textContent ?? '').trim() !== '')
    .map((element) => ({
      text: element.textContent ?? '',
      tag: element.tagName.toLowerCase(),
      element,
    }));
}

/** Reject containers whose only text belongs to form controls. Linked prose remains narratable. */
function hasNarratableText(segment: ParagraphSegment): boolean {
  const copy = segment.element.cloneNode(true) as Element;
  for (const control of copy.querySelectorAll(CONTROL_SELECTORS)) control.remove();
  return (copy.textContent ?? '').trim() !== '';
}
