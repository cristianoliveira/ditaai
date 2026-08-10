// Speaks text segments in sequence through a TextReader.
// Pause/resume works by cancelling the current utterance and re-speaking
// from the exact word position (tracked via boundary events).

import type { BoundaryEvent, SpeakOptions, TextReader } from './text-reader';

export interface SequencerState {
  current: number;
  total: number;
  playing: boolean;
  paused: boolean;
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
  private volume: number | undefined;
  private restarting = false;
  /** Promise of the currently running play loop, or null when idle. Used by the
   * re-entrancy guard so a second play() (e.g. a repeated click before the
   * prior loop unwound) never runs concurrently with the first — two loops
   * would race reader.speak() on the same segment ("Session already started"). */
  private currentPlay: Promise<void> | null = null;

  /** Called when the active segment changes. */
  onSegmentChange?: (index: number) => void;
  /** Called when the active play loop ends without being superseded — natural
   * completion or an explicit stop(). Not fired for pause, and not fired for a
   * loop displaced by a newer play(): the newer loop owns the idle transition.
   * Lets the UI go idle exactly once per playback session even when play() is
   * re-entered (e.g. starting a new segment mid-session). */
  onIdle?: () => void;

  constructor(private reader: TextReader) {}

  load(segments: string[], startIndex = 0): void {
    this.segments = segments;
    this.index = segments.length === 0 ? 0 : Math.max(0, Math.min(startIndex, segments.length - 1));
    this.playing = false;
    this.stopped = false;
    this.paused = false;
    this.seeking = false;
    this.lastCharIndex = 0;
    this.resumeCharIndex = 0;
    this.rate = undefined;
    this.volume = undefined;
    this.restarting = false;
  }

  getState(): SequencerState {
    return {
      current: this.index,
      total: this.segments.length,
      playing: this.playing,
      paused: this.paused,
    };
  }

  async play(options?: SpeakOptions): Promise<void> {
    // Re-entrancy guard. play() can be invoked again while a previous loop is
    // still in flight (the content script's playAction runs load → play on a
    // second click before the first stop()/speak resolved). Two concurrent
    // loops would both read this.index and call reader.speak() on the same
    // segment, racing the installed voice ("Session already started"). Tear
    // the prior loop down and await its exit before starting a new one.
    while (this.currentPlay) {
      const previous = this.currentPlay;
      // Supersede: the prior loop is no longer active, so its own completion
      // must not signal idle — the newer loop owns that transition.
      this.currentPlay = null;
      this.stopped = true;
      this.reader.stop();
      this.resolveResume?.();
      this.resolveResume = null;
      await previous.catch(() => {});
    }

    const done = this.runLoop(options);
    this.currentPlay = done;
    try {
      await done;
      // Natural end (or stop): this loop is still the active one, so it owns
      // the idle transition. A superseded loop has currentPlay !== done and
      // stays silent, leaving the newer loop in charge.
      if (this.currentPlay === done) this.onIdle?.();
    } finally {
      if (this.currentPlay === done) this.currentPlay = null;
    }
  }

  private async runLoop(options?: SpeakOptions): Promise<void> {
    this.stopped = false;
    this.paused = false;
    this.playing = true;
    this.seeking = false;
    this.rate = options?.rate;
    this.volume = options?.volume;

    while (this.index < this.segments.length && !this.stopped) {
      const segment = this.segments[this.index];
      if (!segment) break;

      this.onSegmentChange?.(this.index);

      // Wrap onBoundary to track word position for precise resume
      const speakOptions: SpeakOptions = {
        ...options,
        rate: this.rate,
        volume: this.volume,
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
      if (this.restarting) {
        this.restarting = false;
        continue; // rate/volume changed during prepare — re-speak with new options
      }
      // Pause can land during the async prepare gap — the reader had nothing to
      // cancel yet, so gate here instead of speaking a segment the user paused.
      if (this.paused) {
        this.resumeCharIndex = this.lastCharIndex;
        await this.waitWhilePaused();
        if (this.stopped) break;
        continue; // re-speak the same segment once resumed
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
      if (this.restarting) {
        this.restarting = false;
        continue; // rate/volume changed mid-segment — re-speak from the last word
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
    this.volume = undefined;
    this.restarting = false;
    this.playing = false;
  }

  /** Update the speaking rate. While playing, cancels the current utterance
   * and re-speaks the current segment from the last spoken word so the new
   * rate is heard immediately. */
  setRate(rate: number): void {
    this.rate = rate;
    this.restartFromCurrentWord();
  }

  /** Update the speaking volume (0–1). While playing, cancels the current
   * utterance and re-speaks the current segment from the last spoken word so
   * the new volume is heard immediately. */
  setVolume(volume: number): void {
    this.volume = volume;
    this.restartFromCurrentWord();
  }

  /** Re-speak the current segment from the last word boundary so a changed
   * rate/volume applies right away. No-op when not actively playing. */
  private restartFromCurrentWord(): void {
    if (!this.playing) return;
    this.resumeCharIndex = this.lastCharIndex;
    this.restarting = true;
    this.reader.stop(); // cancel current utterance → speak promise resolves
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
