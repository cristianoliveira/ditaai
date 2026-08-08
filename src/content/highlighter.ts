// Word-level DOM highlighter.
// Wraps the active word in a <mark> element using charIndex/charLength,
// cleans up the previous mark, and smooth-scrolls to keep it visible.

const HIGHLIGHT_CLASS = 'dita-word-highlight';
const SENTENCE_CLASS = 'dita-sentence-highlight';

const HIGHLIGHT_STYLE = `
  .${HIGHLIGHT_CLASS} {
    background: rgba(108, 92, 231, 0.35);
    border-radius: 3px;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
    transition: background 0.1s ease;
  }
  .${SENTENCE_CLASS} {
    background: rgba(108, 92, 231, 0.12);
    border-radius: 3px;
  }
`;

let styleInjected = false;

function injectStyle(): void {
  if (styleInjected) return;
  const style = document.createElement('style');
  style.textContent = HIGHLIGHT_STYLE;
  document.head.appendChild(style);
  styleInjected = true;
}

/** Remove all existing highlights from an element. */
export function clearHighlight(element: Element): void {
  const marks = element.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
  for (const mark of marks) {
    const parent = mark.parentNode;
    if (!parent) continue;
    parent.replaceChild(document.createTextNode(mark.textContent ?? ''), mark);
    parent.normalize();
  }
}

/**
 * Highlight a word range within an element using charIndex/charLength.
 * Walks text nodes to find the position, wraps it in a <mark>.
 */
export function highlightWord(element: Element, charIndex: number, charLength: number): void {
  injectStyle();
  clearHighlight(element);

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  let currentPos = 0;
  let node = walker.nextNode() as Text | null;

  while (node) {
    const nodeLen = node.textContent?.length ?? 0;
    if (currentPos + nodeLen > charIndex) {
      const startInNode = charIndex - currentPos;
      const endInNode = Math.min(startInNode + charLength, nodeLen);

      try {
        const range = document.createRange();
        range.setStart(node, Math.max(0, startInNode));
        range.setEnd(node, endInNode);

        const mark = document.createElement('mark');
        mark.className = HIGHLIGHT_CLASS;
        range.surroundContents(mark);
        mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch {
        // range crosses element boundary — skip this word
      }
      return;
    }
    currentPos += nodeLen;
    node = walker.nextNode() as Text | null;
  }
}
