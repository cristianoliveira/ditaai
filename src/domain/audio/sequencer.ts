// Speaks text segments in sequence through a TextReader.
// Pause/resume works by cancelling the current utterance and re-speaking
// the same segment on resume — reliable across browsers where
// speechSynthesis.pause()/resume() is buggy.

import type { SpeakOptions, TextReader } from './text-reader';

export interface SequencerState {
  current: number;
  total: number;
  playing: boolean;
}

export class SegmentSequencer {
  private segments: string[] = [];
  private index = 0;
  private playing = false;
  private stopped = false;
  private paused = false;
  private resolveResume: (() => void) | null = null;

  /** Called when the active segment changes. */
  onSegmentChange?: (index: number) => void;

  constructor(private reader: TextReader) {}

  load(segments: string[]): void {
    this.segments = segments;
    this.index = 0;
    this.playing = false;
    this.stopped = false;
    this.paused = false;
  }

  getState(): SequencerState {
    return {
      current: this.index,
      total: this.segments.length,
      playing: this.playing,
    };
  }

  async play(options?: SpeakOptions): Promise<void> {
    this.stopped = false;
    this.paused = false;
    this.playing = true;

    while (this.index < this.segments.length && !this.stopped) {
      const segment = this.segments[this.index];
      if (!segment) break;

      this.onSegmentChange?.(this.index);
      await this.reader.speak(segment, options);

      if (this.stopped) break;

      // If paused mid-segment: wait for resume, then re-speak this segment
      if (this.paused) {
        await this.waitWhilePaused();
        if (this.stopped) break;
        continue; // re-speak current segment, don't advance
      }

      this.index++;
    }

    this.playing = false;
  }

  pause(): void {
    if (!this.playing || this.paused) return;
    this.paused = true;
    this.playing = false;
    this.reader.stop(); // cancel current utterance → speak promise resolves
  }

  resume(): void {
    if (!this.paused) return;
    this.paused = false;
    this.playing = true;
    this.resolveResume?.();
    this.resolveResume = null;
  }

  stop(): void {
    this.stopped = true;
    this.paused = false;
    this.reader.stop();
    this.resolveResume?.();
    this.resolveResume = null;
    this.index = 0;
    this.playing = false;
  }

  private waitWhilePaused(): Promise<void> {
    return new Promise((resolve) => {
      this.resolveResume = resolve;
    });
  }
}
