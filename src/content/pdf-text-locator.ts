/**
 * Aligns spoken page text (collapsed whitespace) with PDF.js text-layer spans
 * (DOM order, arbitrary whitespace/split boundaries), so a boundary event can
 * highlight the exact word on the rendered page.
 */

export interface SpanHighlight {
  span: number;
  /** Char offset of the word inside the span's own text. */
  start: number;
  length: number;
}

export interface LayerPort {
  spans(): string[];
  /** Wrap [start, start+length) of spans[index]'s first text node in a mark. */
  markWord(span: number, start: number, length: number): void;
  clearMarks(): void;
}

function collapsePart(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Map a word at [offset, offset+length) in the collapsed page text to the
 * span containing it. Whitespace-only spans are skipped; separators between
 * spans exist in the page text only when the surrounding text does not already
 * provide whitespace. Returns null when the layer text cannot be aligned
 * (caller falls back to no on-page highlight rather than a wrong one).
 */
export function locateWord(
  spans: readonly string[],
  pageText: string,
  offset: number,
  length: number,
): SpanHighlight | null {
  if (length <= 0 || offset < 0 || offset >= pageText.length) return null;

  const parts = spans.map(collapsePart);
  let cursor = 0;
  for (const [index, part] of parts.entries()) {
    if (!part) continue;
    if (pageText[cursor] === ' ' && part[0] !== ' ') cursor += 1;
    const start = cursor;
    if (pageText.slice(start, start + part.length) !== part) return null;
    if (offset < start + part.length) {
      const localStart = Math.max(0, offset - start);
      const localEnd = Math.min(part.length, offset + length - start);
      if (localEnd <= localStart) return null;
      // Confident only when the whole word sits inside one span; a word split
      // across a span boundary would need two marks — highlight nothing
      // instead of guessing.
      if (offset + length > start + part.length) return null;
      return { span: index, start: localStart, length: localEnd - localStart };
    }
    cursor = start + part.length;
  }
  return null;
}

/** DOM adapter for a rendered PDF.js text layer. */
export function domLayer(layer: HTMLElement): LayerPort {
  return {
    spans() {
      return Array.from(layer.querySelectorAll('span'), (node) => node.textContent ?? '');
    },
    markWord(span, start, length) {
      const nodes = layer.querySelectorAll('span');
      const target = nodes[span];
      if (!target) return;
      const text = target.firstChild;
      if (!text || text.nodeType !== Node.TEXT_NODE) return;
      const end = Math.min(start + length, target.textContent?.length ?? 0);
      if (end <= start) return;

      // Overlay the highlight instead of wrapping the text: mutating the span
      // reflows pdf.js' measured text run and misplaces the mark. Range rects
      // track the transformed glyph geometry exactly. The mark carries the
      // word text as invisible content (position absolute removes from flow)
      // so recorders that observe textContent can still detect it.
      const range = document.createRange();
      range.setStart(text, start);
      range.setEnd(text, end);
      const wordText = target.textContent?.slice(start, end) ?? '';

      let layerRect: { left: number; top: number };
      try {
        layerRect = layer.getBoundingClientRect();
      } catch {
        layerRect = { left: 0, top: 0 };
      }

      let rects: Array<{ left: number; top: number; width: number; height: number }>;
      try {
        rects = Array.from(range.getClientRects());
        if (rects.length === 0) {
          const spanRect = target.getBoundingClientRect();
          rects = spanRect.width > 0 && spanRect.height > 0
            ? [spanRect]
            : [{ left: 0, top: 0, width: 1, height: 1 }];
        }
      } catch {
        rects = [{ left: 0, top: 0, width: 1, height: 1 }];
      }

      for (const rect of rects) {
        if (rect.width === 0 || rect.height === 0) continue;
        const mark = document.createElement('mark');
        mark.className = 'dita-word-highlight';
        mark.setAttribute('data-active-word', 'true');
        mark.style.left = `${rect.left - layerRect.left}px`;
        mark.style.top = `${rect.top - layerRect.top}px`;
        mark.style.width = `${rect.width}px`;
        mark.style.height = `${rect.height}px`;
        mark.textContent = wordText;
        layer.append(mark);
      }
    },
    clearMarks() {
      for (const mark of Array.from(layer.querySelectorAll('mark.dita-word-highlight'))) {
        mark.remove();
      }
    },
  };
}
