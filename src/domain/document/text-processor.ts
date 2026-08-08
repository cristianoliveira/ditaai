// Pure text processing — no DOM dependency.
// Cleans and filters text segments before passing to TTS.

export interface TextSegment {
  text: string;
  tag: string;
}

/** Collapse whitespace, trim, drop empty segments. */
export function prepareSegments(segments: TextSegment[]): string[] {
  return segments.map((s) => collapseWhitespace(s.text).trim()).filter((text) => text.length > 0);
}

/** Collapse runs of whitespace (including newlines) into a single space. */
export function collapseWhitespace(text: string): string {
  return text.replace(/\s+/g, ' ');
}
