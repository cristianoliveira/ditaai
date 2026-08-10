// Pure jump strategies for the playback playhead.
//
// A JumpStrategy turns "jump forward/backward from index N" into a target
// segment index. The composition root picks a strategy for the desired
// granularity — paragraph today; chunk, sentence, or time-based later — and
// binds it to the sequencer. Strategies are pure and bounds-clamped, so they
// stay trivially testable and free of playback side effects.

export type JumpDirection = 'forward' | 'backward';

export interface JumpStrategy {
  /** Target segment index for a jump. Pure and bounds-clamped. */
  jump(from: number, direction: JumpDirection, total: number): number;
}

/** Clamp an index to the valid segment range [0, total-1]. */
export function clampSegmentIndex(index: number, total: number): number {
  if (total <= 0) return 0;
  return Math.max(0, Math.min(index, total - 1));
}

/**
 * Jumps between paragraph starts. `breakpoints` are the first segment index of
 * each paragraph (sorted ascending, typically starting at 0).
 *
 * - forward  → next paragraph start (or stay if already in the last one)
 * - backward → current paragraph start when mid-paragraph, else the previous
 *              paragraph start (standard reader UX: two presses to go back one)
 */
export function createParagraphJumper(breakpoints: number[]): JumpStrategy {
  const sorted = [...new Set(breakpoints)].filter((b) => Number.isFinite(b)).sort((a, b) => a - b);

  return {
    jump(from, direction, total) {
      if (sorted.length === 0) return clampSegmentIndex(from, total);

      if (direction === 'forward') {
        const next = sorted.find((b) => b > from);
        return next === undefined ? clampSegmentIndex(from, total) : clampSegmentIndex(next, total);
      }

      let target = 0;
      for (const b of sorted) {
        if (b < from) target = b;
        else break;
      }
      return clampSegmentIndex(target, total);
    },
  };
}
