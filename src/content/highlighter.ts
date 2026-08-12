// Word + paragraph highlighting for the content script.
//
// charIndex from the TTS is an offset into the SPOKEN string, which is
// whitespace-collapsed (see text-processor.collapseWhitespace). The DOM holds
// the raw text, so we map collapsed offsets back onto raw text nodes, walking
// "words" (maximal non-whitespace runs) and recording each one's position in
// the collapsed string. This keeps highlight in sync with audio even when the
// raw DOM has newlines, indentation, or inline children.

import { theme } from '../ui/theme';

const HIGHLIGHT_CLASS = 'dita-word-highlight';
const SENTENCE_CLASS = 'dita-sentence-highlight';
const START_CLASS = 'dita-start-point';

const HIGHLIGHT_STYLE = `
  :root .${HIGHLIGHT_CLASS} {
    /* <mark> is a new element: explicitly inherit typography so an active
       word never changes an article heading's size or weight. */
    font: inherit !important;
    line-height: inherit !important;
    letter-spacing: inherit !important;
    text-transform: inherit !important;
    background: ${theme.highlight.fill};
    color: ${theme.highlight.text};
    border-radius: 3px;
    box-shadow: ${theme.highlight.edge};
    transition: background 0.1s ease;
  }
  .${SENTENCE_CLASS} {
    background: ${theme.highlight.paragraph};
    border-radius: 3px;
  }
  .${START_CLASS} {
    box-shadow: inset 4px 0 0 ${theme.highlight.bar};
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

interface WordSegment {
  node: Text;
  start: number;
  end: number;
}

interface Word {
  segments: WordSegment[];
  /** Start offset of this word in the collapsed (whitespace-normalised) string. */
  collapsedStart: number;
  length: number;
}

/** Walk text nodes and group non-whitespace runs into words, tracking each
 * word's offset in the collapsed string (words joined by single spaces). */
function buildWords(root: Element): Word[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const words: Word[] = [];
  let collapsedPos = 0;
  let prevWasSpace = true; // leading whitespace is trimmed
  let current: Word | null = null;

  let node = walker.nextNode() as Text | null;
  while (node) {
    const text = node.data ?? '';
    for (let i = 0; i < text.length; i++) {
      const ch = text[i] ?? '';
      if (/\s/.test(ch)) {
        current = null;
        prevWasSpace = true;
        continue;
      }
      if (prevWasSpace) {
        if (words.length > 0) collapsedPos += 1; // separating space between words
        current = {
          segments: [{ node, start: i, end: i + 1 }],
          collapsedStart: collapsedPos,
          length: 1,
        };
        words.push(current);
      } else if (current) {
        const last: WordSegment | undefined = current.segments[current.segments.length - 1];
        if (last && last.node === node) last.end = i + 1;
        else current.segments.push({ node, start: i, end: i + 1 });
        current.length += 1;
      }
      collapsedPos += 1;
      prevWasSpace = false;
    }
    node = walker.nextNode() as Text | null;
  }
  return words;
}

/** Remove all word highlights from an element and merge the text back. */
export function clearHighlight(element: Element): void {
  const marks = element.querySelectorAll(`.${HIGHLIGHT_CLASS}`);
  for (const mark of marks) {
    const parent = mark.parentNode;
    if (!parent) continue;
    parent.replaceChild(document.createTextNode(mark.textContent ?? ''), mark);
    parent.normalize();
  }
}

/** Highlight the word at a collapsed-string offset, robust to whitespace and
 * inline children. charLength may be 0 (some Chrome builds omit it). */
export function highlightWord(element: Element, charIndex: number, _charLength: number): void {
  injectStyle();
  clearHighlight(element);

  const word = buildWords(element).find(
    (w) => charIndex >= w.collapsedStart && charIndex < w.collapsedStart + w.length,
  );
  if (!word) return;

  let firstMark: HTMLElement | null = null;
  for (const seg of word.segments) {
    if (seg.start === seg.end) continue;
    try {
      const range = document.createRange();
      range.setStart(seg.node, seg.start);
      range.setEnd(seg.node, seg.end);
      const mark = document.createElement('mark');
      mark.className = HIGHLIGHT_CLASS;
      range.surroundContents(mark);
      if (!firstMark) firstMark = mark;
    } catch {
      // range could not be wrapped (e.g. detached node) — skip this segment
    }
  }
  if (firstMark) {
    try {
      firstMark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch {
      // scrollIntoView unsupported in some hosts — ignore
    }
  }
}

/** Mark the element as the active paragraph (orientation highlight). */
export function highlightParagraph(element: Element): void {
  injectStyle();
  element.classList.add(SENTENCE_CLASS);
}

/** Remove the active-paragraph mark from an element. */
export function clearParagraph(element: Element): void {
  element.classList.remove(SENTENCE_CLASS);
}

/** Mark the element as the chosen reading start point (persistent until cleared). */
export function markStartPoint(element: Element): void {
  injectStyle();
  element.classList.add(START_CLASS);
}

/** Remove the start-point mark from an element. */
export function clearStartPoint(element: Element): void {
  element.classList.remove(START_CLASS);
}
