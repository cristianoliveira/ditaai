// Paragraph-level extraction: non-overlapping leaf content blocks.
// DOM-only. Called from the content-script composition root.
//
// "Leaf block" = a readable element that contains no other readable element.
// This drops containers (article, ul, section) so the same text is never
// segmented twice, and keeps real paragraphs / list items / headings.
// Whitespace-only blocks are dropped here so segment indices stay 1:1 with
// the cleaned spoken chunks (see text-processor splitText).
//
// Accessible names are also narrated, in document order: image alts and
// aria-labels whose element has no visible text. Elements that already carry
// narratable visible text keep that text (no duplicate narration), and UI
// chrome (form controls, boilerplate, aria-hidden) is skipped.

const READABLE_SELECTORS = 'article, p, h1, h2, h3, h4, h5, h6, li, blockquote';
const GENERIC_CONTENT_SELECTORS = 'main, [role="main"], section, div';
// `<header>` is intentionally NOT here: it is ambiguous. A top-level banner
// header (site masthead) is chrome we skip, but a `<header>` nested inside an
// article/section/main holds the title + byline we want to narrate. See
// `insideIgnoredSubtree` for the banner-only check.
const IGNORE_SELECTORS = 'script, style, nav, footer, aside, noscript, [aria-hidden="true"]';
// Sectioning content that turns a nested `<header>` into a title block rather
// than a site banner (mirrors the HTML5/ARIA `role=banner` rule).
const SECTIONING_ANCESTORS = 'article, section, main, [role="main"], aside, nav';
const CONTROL_SELECTORS = 'button, input, select, textarea';
const IMAGE_SELECTOR = 'img[alt]';
const ACCESSIBLE_NAME_SELECTOR = '[aria-label]';

/** Spoken prefix for image segments, so a terse alt is understood as an image description. */
const IMAGE_LABEL_PREFIX = 'Image:';

import type { ParagraphSegment } from '../lib/types';

export function extractParagraphs(root: ParentNode = document): ParagraphSegment[] {
  const readableBlocks = extractLeafBlocks(root, READABLE_SELECTORS);
  const blocks =
    readableBlocks.length > 0
      ? readableBlocks
      : extractLeafBlocks(root, GENERIC_CONTENT_SELECTORS).filter(hasNarratableText);
  const accessibleNames = extractAccessibleNameSegments(root);
  return mergeByDocumentOrder(blocks, accessibleNames);
}

function extractLeafBlocks(root: ParentNode, selectors: string): ParagraphSegment[] {
  return [...root.querySelectorAll(selectors)]
    .filter((element) => !element.querySelector(selectors))
    .filter((element) => !insideIgnoredSubtree(element))
    .filter((element) => (element.textContent ?? '').trim() !== '')
    .map((element) => ({
      text: element.textContent ?? '',
      tag: element.tagName.toLowerCase(),
      element,
    }));
}

/** Drop chrome: always-ignored subtrees, plus `<header>` ancestors that act as
 * a top-level site banner. A `<header>` nested in article/section/main is a
 * title block and is kept. */
function insideIgnoredSubtree(element: Element): boolean {
  if (element.closest(IGNORE_SELECTORS)) return true;
  for (let node = element.parentElement; node; node = node.parentElement) {
    if (node.tagName.toLowerCase() === 'header' && !node.closest(SECTIONING_ANCESTORS)) {
      return true;
    }
  }
  return false;
}

/** Accessible names worth narrating: image alts and aria-labels that add
 * information the visible text misses. Controls and boilerplate are skipped. */
function extractAccessibleNameSegments(root: ParentNode): ParagraphSegment[] {
  const segments: ParagraphSegment[] = [];

  for (const img of root.querySelectorAll(IMAGE_SELECTOR)) {
    const alt = (img.getAttribute('alt') ?? '').trim();
    if (!alt) continue;
    if (insideIgnoredSubtree(img) || img.closest(CONTROL_SELECTORS)) continue;
    segments.push({ text: `${IMAGE_LABEL_PREFIX} ${alt}`, tag: 'img', element: img });
  }

  for (const element of root.querySelectorAll(ACCESSIBLE_NAME_SELECTOR)) {
    const label = (element.getAttribute('aria-label') ?? '').trim();
    if (!label) continue;
    if (insideIgnoredSubtree(element) || element.matches(CONTROL_SELECTORS)) continue;
    if ((element.textContent ?? '').trim() !== '') continue; // visible text already narratable
    segments.push({ text: label, tag: element.tagName.toLowerCase(), element });
  }

  return segments;
}

/** Merge two DOM-ordered segment lists into a single document-order list. */
function mergeByDocumentOrder(
  first: ParagraphSegment[],
  second: ParagraphSegment[],
): ParagraphSegment[] {
  const merged = [...first, ...second];
  merged.sort((a, b) => compareDocumentPosition(a.element, b.element));
  return merged;
}

/** -1 when a precedes b in document order, +1 when it follows, 0 when equal. */
function compareDocumentPosition(a: Element, b: Element): number {
  if (a === b) return 0;
  const position = a.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
  if (position & Node.DOCUMENT_POSITION_PRECEDING) return 1;
  return 0;
}

/** Reject containers whose only text belongs to form controls. Linked prose remains narratable. */
function hasNarratableText(segment: ParagraphSegment): boolean {
  const copy = segment.element.cloneNode(true) as Element;
  for (const control of copy.querySelectorAll(CONTROL_SELECTORS)) control.remove();
  return (copy.textContent ?? '').trim() !== '';
}
