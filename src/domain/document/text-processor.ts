// Pure text processing — no DOM dependency.
// Cleans and filters text segments before passing to TTS.

export interface TextSegment {
  text: string;
  tag: string;
}

/** Leaves room for language tags and Unicode normalization below model's 1000-token limit. */
export const MAX_TEXT_SEGMENT_LENGTH = 900;

/** Collapse whitespace, trim, drop empty segments, and bound speech input size. */
export function prepareSegments(segments: TextSegment[]): string[] {
  return segments.flatMap((segment) => {
    const text = collapseWhitespace(segment.text).trim();
    return text ? splitText(text) : [];
  });
}

/** Split text at sentence or word boundaries, hard-splitting only when necessary. */
export function splitText(text: string, maxLength = MAX_TEXT_SEGMENT_LENGTH): string[] {
  if (maxLength < 1) throw new RangeError('maxLength must be positive');

  const chunks: string[] = [];
  let remaining = text.trim();
  while (remaining.length > maxLength) {
    const window = remaining.slice(0, maxLength + 1);
    let splitAt = lastSentenceBoundary(window);
    if (splitAt === 0) splitAt = window.lastIndexOf(' ', maxLength);
    if (splitAt <= 0) splitAt = maxLength;

    chunks.push(remaining.slice(0, splitAt).trim());
    remaining = remaining.slice(splitAt).trim();
  }

  if (remaining) chunks.push(remaining);
  return chunks;
}

/** Collapse runs of whitespace (including newlines) into a single space. */
export function collapseWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ');
}

function lastSentenceBoundary(text: string): number {
  let boundary = 0;
  for (const match of text.matchAll(/[.!?;:](?=\s)/g)) boundary = (match.index ?? -1) + 1;
  return boundary;
}
