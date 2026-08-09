// Element selection domain: builds CSS selector candidates for picker UI,
// and filters paragraph segments by a confirmed selector.

import type { ParagraphSegment } from '../../content/paragraph-extractor';

/**
 * Generate a list of CSS selector candidates for an element, sorted from
 * most-broad (highest match count) to most-specific (fewest matches).
 *
 * Algorithm:
 *  1. Element tag
 *  2. tag.class for each class on the element
 *  3. Combined classes (e.g. div.commtext.c00)
 *  4. Parent > child paths, walking up to 3 ancestor levels
 */
export function buildCandidates(element: Element): string[] {
  const candidates: string[] = [];
  const root = element.ownerDocument;

  const tag = element.tagName.toLowerCase();

  // 1) Bare tag
  addUnique(candidates, tag);

  // 2) Tag + each individual class (always include, even if broad)
  const classes = [...element.classList];
  for (const cls of classes) {
    addUnique(candidates, `${tag}.${cls}`);
  }

  // 3) Tag + all classes combined (most specific class-based selector)
  if (classes.length >= 2) {
    const allClasses = classes.map((c) => `.${c}`).join('');
    addUnique(candidates, `${tag}${allClasses}`);
  }

  // 4) Walk up ancestors, building parent > child paths.
  // Start with the most specific descriptor for the target element.
  const bestClass = classes.length > 0 ? `.${classes[0]}` : '';
  const elementDesc = `${tag}${bestClass}`;
  const parts: string[] = [elementDesc];
  let current: Element | null = element.parentElement;

  for (let level = 0; level < 3 && current; level++) {
    const parentTag = current.tagName.toLowerCase();
    const parentId = current.id ? `#${current.id}` : '';

    if (parentId) {
      parts.unshift(parentTag + parentId);
      addUnique(candidates, parts.join(' > '));
      break;
    }

    const parentClass = current.classList.length > 0 ? current.classList[0] : '';
    const parentSelector = parentClass ? `${parentTag}.${parentClass}` : parentTag;
    parts.unshift(parentSelector);
    addUnique(candidates, parts.join(' > '));

    current = current.parentElement;
  }

  // 5) ID-based selector if element or ancestor has an ID
  const idEl = element.id ? element : element.closest('[id]');
  if (idEl?.id) {
    const idSelector = `#${idEl.id}`;
    addUnique(candidates, idSelector);
  }

  // Ensure at least 2 candidates
  if (candidates.length < 2 && element.parentElement) {
    const parentTag = element.parentElement.tagName.toLowerCase();
    addUnique(candidates, `${parentTag} > ${tag}`);
  }

  // Sort by match count descending (broadest first, most-specific last)
  const withCounts = candidates.map((sel) => ({
    sel,
    count: safeMatchCount(root, sel),
  }));

  // Valid selectors first (descending count), invalid at the end
  return withCounts
    .sort((a, b) => {
      if (a.count < 0 && b.count < 0) return 0;
      if (a.count < 0) return 1;
      if (b.count < 0) return -1;
      return b.count - a.count;
    })
    .map((c) => c.sel)
    .slice(0, 10);
}

function safeMatchCount(root: Document | null, selector: string): number {
  if (!root) return -1;
  try {
    return root.querySelectorAll(selector).length;
  } catch {
    return -1;
  }
}

/**
 * Filter paragraph segments to only those whose element matches a CSS selector.
 * Used after the user confirms a picker selection — only matching paragraphs
 * are passed to the sequencer.
 */
export function filterParagraphs(
  paragraphs: ParagraphSegment[],
  selector: string,
): ParagraphSegment[] {
  // Validate selector syntax
  document.querySelectorAll(selector); // throws if invalid

  return paragraphs.filter((p) => p.element.matches(selector));
}

function addUnique(list: string[], item: string): void {
  if (!list.includes(item)) {
    list.push(item);
  }
}
