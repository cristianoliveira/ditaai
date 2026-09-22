import type { SequencerState } from '../domain/audio/sequencer';
import type { BoundaryEvent, SpeakOptions } from '../domain/audio/text-reader';
import {
  type JumpDirection,
  type JumpStrategy,
  createParagraphJumper,
  paragraphIndexForSegment,
} from '../domain/playback/jump';
import type { Logger } from '../lib/logger';
import type { ParagraphOption } from '../ui/widget';
import { describeBoundary } from './boundary-diagnostics';
import { type Chunk, paragraphBreakpoints, paragraphOptions, paragraphSearchTexts } from './chunks';

type WordPosition = { index: number; char: number };

export interface PageSequencer {
  onSegmentChange?: (index: number) => void;
  load(segments: string[], startIndex?: number, startChar?: number): void;
  play(options?: SpeakOptions): Promise<void>;
  pause(): void;
  resume(): void;
  stop(): void;
  seek(target: number): void;
  setRate(rate: number): void;
  setVolume(volume: number): void;
  getState(): SequencerState;
}

interface PlayerWidget {
  setParagraphs(options: ParagraphOption[] | null, searchTexts?: readonly string[]): void;
  setCurrentParagraph(index: number): void;
  setRate(rate: number): void;
  setVolume(volume: number): void;
}

interface PagePlayerDependencies {
  sequencer: PageSequencer;
  getChunks(): Chunk[];
  getWidget(): PlayerWidget | null;
  highlight: {
    clear(element: Element): void;
    clearParagraph(element: Element): void;
    highlightParagraph(element: Element): void;
    highlightWord(element: Element, charIndex: number, charLength: number): void;
  };
  marker: { mark(element: Element): void; clear(element: Element): void };
  saveRate(rate: number): Promise<void>;
  saveVolume(volume: number): Promise<void>;
  log: Pick<Logger, 'info'>;
}

const SLIDER_RESTART_MS = 200;

export class PagePlayer {
  private chunks: Chunk[] = [];
  private activeElement: Element | null = null;
  private markedStart: Element | null = null;
  private currentIndex = 0;
  private breakpoints: number[] = [];
  private paragraphJumper: JumpStrategy = createParagraphJumper([]);
  private rate = 1;
  private volume = 1;
  private highlightWordsEnabled = true;
  private sliderRestartTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private readonly deps: PagePlayerDependencies) {}

  get currentSegmentIndex(): number {
    return this.currentIndex;
  }

  get playbackRate(): number {
    return this.rate;
  }

  get playbackVolume(): number {
    return this.volume;
  }

  get wordsHighlighted(): boolean {
    return this.highlightWordsEnabled;
  }

  get chunkList(): readonly Chunk[] {
    return this.chunks;
  }

  /** Discover paragraphs without starting audio, so the idle widget can search. */
  prepareParagraphs(): void {
    this.loadParagraphMetadata();
  }

  setRate(rate: number): void {
    this.rate = clampRate(rate);
  }

  setVolume(volume: number): void {
    this.volume = clampVolume(volume);
  }

  setHighlightWordsEnabled(enabled: boolean): void {
    this.highlightWordsEnabled = enabled;
    if (!enabled && this.activeElement) this.deps.highlight.clear(this.activeElement);
  }

  play(fromElement?: Element | null, word?: WordPosition): void {
    this.chunks = this.deps.getChunks();
    const texts = this.chunks.map((chunk) => chunk.text);
    if (texts.length === 0) return;

    const { startIndex, startChar, marker } = this.resolveStart(fromElement, word, texts.length);
    this.setStartMarker(marker);
    this.logSegments(texts);

    this.deps.sequencer.load(texts, startIndex, startChar);
    this.loadParagraphMetadata();
    this.deps
      .getWidget()
      ?.setCurrentParagraph(paragraphIndexForSegment(this.breakpoints, startIndex));
    this.deps.sequencer.onSegmentChange = (index) => this.onSegmentChange(index, texts);

    void this.deps.sequencer.play({
      rate: this.rate,
      volume: this.volume,
      onBoundary: (event) => this.onBoundary(event),
    });
  }

  startFrom(element: Element | null, word?: WordPosition): void {
    if (!this.deps.sequencer.getState().playing) {
      this.deps.sequencer.stop();
      this.clearAllHighlights();
      this.play(element, word);
      return;
    }

    const index = word
      ? word.index
      : element
        ? this.chunks.findIndex((chunk) => chunk.element === element)
        : -1;
    if (index < 0) return;
    this.setStartMarker(this.chunks[index]?.element ?? element);
    this.deps.sequencer.seek(index);
  }

  pause(): void {
    this.deps.sequencer.pause();
  }

  resume(): void {
    this.deps.sequencer.resume();
  }

  stop(): void {
    this.deps.sequencer.stop();
  }

  toggle(): void {
    const state = this.deps.sequencer.getState();
    if (state.playing) {
      this.pause();
      return;
    }
    if (state.paused) {
      this.resume();
      return;
    }
    this.play();
  }

  jump(direction: JumpDirection): void {
    const target = this.paragraphJumper.jump(this.currentIndex, direction, this.chunks.length);
    if (target !== this.currentIndex) this.deps.sequencer.seek(target);
  }

  jumpToParagraph(paragraphIndex: number): void {
    if (paragraphIndex < 0) return;
    if (this.breakpoints.length === 0) this.loadParagraphMetadata();
    const target = this.breakpoints[paragraphIndex];
    if (target === undefined) return;
    const state = this.deps.sequencer.getState();
    if (!state.playing && !state.paused) {
      this.play(this.chunks[target]?.element ?? null);
      return;
    }
    this.deps.sequencer.seek(target);
  }

  private loadParagraphMetadata(): void {
    this.chunks = this.deps.getChunks();
    this.breakpoints = paragraphBreakpoints(this.chunks);
    this.paragraphJumper = createParagraphJumper(this.breakpoints);
    this.deps
      .getWidget()
      ?.setParagraphs(
        paragraphOptions(this.chunks, this.breakpoints),
        paragraphSearchTexts(this.chunks, this.breakpoints),
      );
  }

  /** Apply a rate live (slider input): playback follows at once, and a mounted
   * widget stays in sync. Persistence is a separate committed decision — see
   * `commitRate`. */
  applyRate(rate: number): void {
    this.rate = clampRate(rate);
    this.deps.getWidget()?.setRate(this.rate);
    this.deps.log.info(`applyRate ${JSON.stringify({ rate: this.rate })}`);
    this.scheduleRestart(() => this.deps.sequencer.setRate(this.rate));
  }

  /** Persist the committed rate. The caller awaits it, so a reload immediately
   * after the change cannot outrun the write. */
  commitRate(): Promise<void> {
    return this.deps.saveRate(this.rate);
  }

  applyVolume(volume: number): void {
    this.volume = clampVolume(volume);
    this.deps.getWidget()?.setVolume(this.volume);
    this.deps.log.info(`applyVolume ${JSON.stringify({ volume: this.volume })}`);
    this.scheduleRestart(() => this.deps.sequencer.setVolume(this.volume));
  }

  /** Persist the committed volume. Awaited by the caller, like `commitRate`. */
  commitVolume(): Promise<void> {
    return this.deps.saveVolume(this.volume);
  }

  adjustVolume(delta: number): void {
    this.applyVolume(this.volume + delta);
  }

  clearAllHighlights(): void {
    if (!this.activeElement) return;
    this.deps.highlight.clear(this.activeElement);
    this.deps.highlight.clearParagraph(this.activeElement);
    this.activeElement = null;
  }

  clearStartMarker(): void {
    this.setStartMarker(null);
  }

  private resolveStart(
    fromElement: Element | null | undefined,
    word: WordPosition | undefined,
    total: number,
  ): { startIndex: number; startChar: number; marker: Element | null } {
    if (word) {
      const startIndex = Math.max(0, Math.min(word.index, total - 1));
      return {
        startIndex,
        startChar: Math.max(0, word.char),
        marker: this.chunks[startIndex]?.element ?? null,
      };
    }

    const foundIndex = fromElement
      ? this.chunks.findIndex((chunk) => chunk.element === fromElement)
      : -1;
    return {
      startIndex: Math.max(0, foundIndex),
      startChar: 0,
      marker: foundIndex >= 0 && fromElement ? fromElement : null,
    };
  }

  private setStartMarker(element: Element | null): void {
    if (this.markedStart && this.markedStart !== element) this.deps.marker.clear(this.markedStart);
    if (element) this.deps.marker.mark(element);
    this.markedStart = element;
  }

  private onSegmentChange(index: number, texts: string[]): void {
    this.currentIndex = index;
    this.deps.getWidget()?.setCurrentParagraph(paragraphIndexForSegment(this.breakpoints, index));
    this.clearAllHighlights();
    this.activeElement = this.chunks[index]?.element ?? null;
    if (this.activeElement) this.deps.highlight.highlightParagraph(this.activeElement);
    this.deps.log.info(
      `segment ${JSON.stringify({ index, chars: texts[index]?.length ?? 0, rate: this.rate, volume: this.volume })}`,
    );
  }

  private onBoundary(event: BoundaryEvent): void {
    const chunk = this.chunks[this.currentIndex];
    this.deps.log.info(
      `boundary ${JSON.stringify(describeBoundary(chunk?.text ?? '', this.currentIndex, event))}`,
    );
    if (!this.highlightWordsEnabled || !this.activeElement || !chunk) return;
    this.deps.highlight.highlightWord(
      this.activeElement,
      event.charIndex + chunk.base,
      event.charLength,
    );
  }

  private logSegments(texts: string[]): void {
    this.deps.log.info(
      `segments ${JSON.stringify({ count: texts.length, totalChars: texts.reduce((sum, text) => sum + text.length, 0), first: texts[0]?.slice(0, 80) })}`,
    );
  }

  private scheduleRestart(restart: () => void): void {
    if (this.sliderRestartTimer) clearTimeout(this.sliderRestartTimer);
    this.sliderRestartTimer = setTimeout(() => {
      this.sliderRestartTimer = null;
      restart();
    }, SLIDER_RESTART_MS);
  }
}

function clampRate(rate: number): number {
  return Math.min(2, Math.max(0.5, rate));
}

function clampVolume(volume: number): number {
  return Math.min(1, Math.max(0, volume));
}
