import { simplifyLinks } from '../domain/document/links';
import { type Substitutions, applySubstitutions } from '../domain/document/substitutions';
import { collapseWhitespace, splitText } from '../domain/document/text-processor';
import type { ParagraphSegment } from '../lib/types';
import type { ParagraphOption } from '../ui/widget';
import { extractParagraphs } from './paragraph-extractor';

/** A spoken chunk and its source paragraph. `base` is the chunk's offset within
 * collapseWhitespace(element.textContent).trim(), so word boundaries (which are
 * chunk-relative) can be translated back to full-paragraph offsets for the
 * highlighter. Keeps chunk <-> element aligned even when a paragraph splits. */
export interface Chunk {
  text: string;
  element: Element;
  base: number;
}

export function buildChunks(
  doc: Document,
  substitutions: Substitutions = {},
  linksEnabled = true,
): Chunk[] {
  const paragraphs: ParagraphSegment[] = extractParagraphs(doc);
  const chunks: Chunk[] = [];
  for (const paragraph of paragraphs) {
    const cleaned = collapseWhitespace(paragraph.text).trim();
    if (!cleaned) continue;
    let searchFrom = 0;
    for (const text of splitText(cleaned)) {
      const found = cleaned.indexOf(text, searchFrom);
      const base = found === -1 ? searchFrom : found;
      chunks.push({
        text: applySubstitutions(linksEnabled ? simplifyLinks(text) : text, substitutions),
        element: paragraph.element,
        base,
      });
      searchFrom = base + text.length;
    }
  }
  return chunks;
}

/** First chunk index of each paragraph — used as jump breakpoints. */
export function paragraphBreakpoints(chunks: Chunk[]): number[] {
  if (chunks.length === 0) return [];
  const breaks = [0];
  for (let i = 1; i < chunks.length; i++) {
    const prev = chunks[i - 1];
    const curr = chunks[i];
    if (prev && curr && curr.element !== prev.element) breaks.push(i);
  }
  return breaks;
}

/** Dropdown entries for the paragraph picker — one per paragraph, labeled with
 * a short preview of its first spoken chunk. */
export function paragraphOptions(chunks: Chunk[], breakpoints: number[]): ParagraphOption[] {
  const previewLength = 60;
  return breakpoints.map((start, index) => {
    const preview = (chunks[start]?.text ?? '').slice(0, previewLength).trim();
    return { value: index, label: preview ? `¶ ${index + 1} — ${preview}` : `¶ ${index + 1}` };
  });
}
