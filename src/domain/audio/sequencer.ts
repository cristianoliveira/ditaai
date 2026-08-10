// Speaks text segments in sequence through a TextReader.
// Pause/resume works by cancelling the current utterance and re-speaking
// from the exact word position (tracked via boundary events).

import type { BoundaryEvent, SpeakOptions, TextReader } from './text-reader';

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
  private seeking = false;
  private resolveResume: (() => void) | null = null;
  private lastCharIndex = 0;
  private resumeCharIndex = 0;
  private rate: number | undefined;

  /** Called when the active segment changes. */
  onSegmentChange?: (index: number) => void;

  constructor(private reader: TextReader) {}

  load(segments: string[]): void {
    this.segments = segments;
    this.index = 0;
    this.playing = false;
    this.stopped = false;
    this.paused = false;
    this.seeking = false;
    this.lastCharIndex = 0;
    this.resumeCharIndex = 0;
    this.rate = undefined;
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
    this.seeking = false;
    this.rate = options?.rate;

    while (this.index < this.segments.length && !this.stopped) {
      const segment = this.segments[this.index];
      if (!segment) break;

      this.onSegmentChange?.(this.index);

      // Wrap onBoundary to track word position for precise resume
      const speakOptions: SpeakOptions = {
        ...options,
        rate: this.rate,
        resumeFromChar: this.resumeCharIndex,
        onBoundary: (event: BoundaryEvent) => {
          this.lastCharIndex = event.charIndex + event.charLength;
          options?.onBoundary?.(event);
        },
      };

      await this.prepareSegment(segment, speakOptions);
      if (this.stopped) break;
      if (this.seeking) {
        this.seeking = false;
        continue; // playhead moved during prepare — re-evaluate at the new index
      }

      const speaking = this.reader.speak(segment, speakOptions);
      const nextSegment = this.segments[this.index + 1];
      if (nextSegment) {
        void this.prepareSegment(nextSegment, {
          ...speakOptions,
          resumeFromChar: 0,
        });
      }
      await speaking;

      if (this.stopped) break;
      if (this.seeking) {
        this.seeking = false;
        continue; // playhead moved during speak — re-evaluate at the new index
      }

      // Paused mid-segment: save exact word position, wait for resume
      if (this.paused) {
        this.resumeCharIndex = this.lastCharIndex;
        await this.waitWhilePaused();
        if (this.stopped) break;
        continue; // re-speak from resumeCharIndex
      }

      // Segment completed — reset and advance
      this.resumeCharIndex = 0;
      this.lastCharIndex = 0;
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
    this.seeking = false;
    this.reader.stop();
    this.resolveResume?.();
    this.resolveResume = null;
    this.index = 0;
    this.resumeCharIndex = 0;
    this.lastCharIndex = 0;
    this.rate = undefined;
    this.playing = false;
  }

  /** Update the speaking rate; takes effect on the next segment. */
  setRate(rate: number): void {
    this.rate = rate;
  }

  /**
   * Jump the playhead to a segment index. While playing, cancels the current
   * utterance and continues from the target; while paused, moves the highlight
   * to the target and stays paused (resume continues from there). No-op when
   * idle or with no segments loaded.
   */
  seek(target: number): void {
    if (this.segments.length === 0) return;
    if (!this.playing && !this.paused) return;
    this.index = Math.max(0, Math.min(target, this.segments.length - 1));
    this.resumeCharIndex = 0;
    this.lastCharIndex = 0;
    if (this.paused) {
      this.onSegmentChange?.(this.index); // immediate highlight update
      return;
    }
    this.seeking = true;
    this.reader.stop(); // cancel current utterance → loop re-evaluates at the new index
  }

  private async prepareSegment(segment: string, options: SpeakOptions): Promise<void> {
    try {
      await this.reader.prepare?.(segment, options);
    } catch (error) {
      console.warn('[dita] speech preparation failed; continuing without lookahead', error);
    }
  }

  private waitWhilePaused(): Promise<void> {
    return new Promise((resolve) => {
      this.resolveResume = resolve;
    });
  }
}
