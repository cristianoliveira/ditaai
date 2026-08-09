// Diagnostic helpers that make audio/highlight sync observable.
// Pure string logic — no DOM, no Chrome APIs.

import type { BoundaryEvent } from '../domain/audio/text-reader';

export interface BoundaryDiagnostic {
  segmentIndex: number;
  charIndex: number;
  charLength: number;
  /** Word the TTS actually spoke at this offset, resolved from the segment. */
  word: string;
}

/**
 * Build a stable per-boundary log payload so we can compare the word the TTS
 * spoke against the offset the highlighter received.
 */
export function describeBoundary(
  segment: string,
  segmentIndex: number,
  event: BoundaryEvent,
): BoundaryDiagnostic {
  return {
    segmentIndex,
    charIndex: event.charIndex,
    charLength: event.charLength,
    word: resolveWord(segment, event.charIndex, event.charLength),
  };
}

/** Resolve the spoken word, tolerating Chrome builds that report charLength 0. */
function resolveWord(text: string, charIndex: number, charLength: number): string {
  if (charIndex < 0 || charIndex >= text.length) return '';
  if (charLength > 0) return text.slice(charIndex, charIndex + charLength);
  let end = charIndex;
  while (end < text.length && !/\s/.test(text[end] ?? '')) end++;
  return text.slice(charIndex, end);
}
