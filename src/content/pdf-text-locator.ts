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
      const wordText = target.textContent?.slice(start, start + length) ?? '';
      if (!wordText) return;

      // pdf.js positions text-layer spans with precise inline pixel geometry
      // matching the canvas.  Approximate per-character advance using the
      // span's own computed width — close enough for proportional fonts and
      // much more robust than Range.getClientRects (which breaks with the
      // CSS custom-property scaling chain).
      const spanW =
        Number.parseFloat(target.style.width) || target.getBoundingClientRect().width || 0;
      if (spanW <= 0) return;
      const textLen = target.textContent?.length ?? 1;
      const perChar = spanW / textLen;
      const layerRect = layer.getBoundingClientRect();
      const spanRect = target.getBoundingClientRect();

      const mark = document.createElement('mark');
      mark.className = 'dita-word-highlight';
      mark.setAttribute('data-active-word', 'true');
      mark.setAttribute('aria-hidden', 'true');
      mark.style.left = `${spanRect.left - layerRect.left + perChar * start}px`;
      mark.style.top = `${spanRect.top - layerRect.top}px`;
      mark.style.width = `${perChar * length}px`;
      mark.style.height = `${spanRect.height}px`;
      mark.style.color = 'transparent';
      mark.textContent = wordText;
      layer.append(mark);
    },
    clearMarks() {
      for (const mark of Array.from(layer.querySelectorAll('mark.dita-word-highlight'))) {
        mark.remove();
      }
    },
  };
}
