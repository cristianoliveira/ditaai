// Pure text processing — no DOM dependency.
// Cleans and filters text segments before passing to TTS.

export interface TextSegment {
  text: string;
  tag: string;
}

/**
 * Upper bound on chars per TTS segment.
 *
 * Two model constraints meet here:
 *  - hard cap: the model's text encoder takes ~1000 tokens, so we leave room
n *    for language tags and Unicode normalization.
 *  - accuracy cap: the Supertonic duration predictor under-predicts total
 *    audio duration for long utterances, producing uniformly fast speech.
 *    Observed in the wild: segments up to ~430 chars stay accurate (~15
 *    chars/s); a 783-char segment compressed to ~26 chars/s (~1.8x). 300 keeps
 *    every chunk well inside the proven-accurate range while bounding the
 *    number of inference calls.
 */
export const MAX_TEXT_SEGMENT_LENGTH = 300;

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
    const candidate = remaining.slice(0, maxLength + 1);
    let splitAt = lastSentenceBoundary(candidate);
    if (splitAt === 0) splitAt = candidate.lastIndexOf(' ', maxLength);
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
