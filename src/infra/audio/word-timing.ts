// Word-boundary timing estimate for TTS engines that emit audio without word
// timestamps (e.g. the Supertonic ONNX reader).
//
// Real speech spends time on pauses at punctuation, not just on characters.
// We weight each character by a speaking cost (punctuation costs more) and map
// each word's start to its cumulative-cost fraction of the whole. With no
// punctuation this reduces to flat proportional timing; with punctuation the
// gaps across sentence/clause boundaries stretch, tracking the audio better.

import type { BoundaryEvent } from '../../domain/audio/text-reader';

export interface WordTiming extends BoundaryEvent {
  /** When to fire this word's boundary, as a fraction of total audio (0..1). */
  startFraction: number;
}

/** Speaking cost of a single character; punctuation carries a pause. */
function charCost(ch: string): number {
  if (/[.!?]/.test(ch)) return 5; // sentence end
  if (/[,;:]/.test(ch)) return 3; // clause pause
  return 1; // letters, digits, spaces
}

/** Prefix sums of per-character cost: prefix[i] = cost of text[0..i-1]. */
function prefixCosts(text: string): number[] {
  const prefix = [0];
  let acc = 0;
  for (let i = 0; i < text.length; i++) {
    acc += charCost(text[i] ?? '');
    prefix.push(acc);
  }
  return prefix;
}

/** Compute word boundaries with weighted start fractions for the given text. */
export function computeWordTimings(text: string, offset: number): WordTiming[] {
  const prefix = prefixCosts(text);
  const total = prefix[text.length] || 1;

  const words: WordTiming[] = [];
  for (const match of text.matchAll(/\S+/g)) {
    const rel = match.index ?? 0;
    words.push({
      charIndex: offset + rel,
      charLength: match[0].length,
      startFraction: (prefix[rel] ?? 0) / total,
    });
  }
  return words;
}
