// Speaks text segments in sequence through a TextReader.
// Pure domain — no browser APIs. Testable with a fake reader.

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

  constructor(private reader: TextReader) {}

  load(segments: string[]): void {
    this.segments = segments;
    this.index = 0;
    this.playing = false;
    this.stopped = false;
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
    this.playing = true;

    while (this.index < this.segments.length && !this.stopped) {
      const segment = this.segments[this.index];
      if (!segment) break;
      await this.reader.speak(segment, options);
      if (this.stopped) break;
      this.index++;
    }

    this.playing = false;
  }

  pause(): void {
    this.reader.pause();
    this.playing = false;
  }

  resume(): void {
    this.reader.resume();
    this.playing = true;
  }

  stop(): void {
    this.stopped = true;
    this.reader.stop();
    this.index = 0;
    this.playing = false;
  }
}
