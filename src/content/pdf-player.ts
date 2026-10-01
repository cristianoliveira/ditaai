import type { SequencerState } from '../domain/audio/sequencer';
import type { SpeakOptions } from '../domain/audio/text-reader';
import type { JumpDirection } from '../domain/playback/jump';
import type { PdfTextDocument } from '../infra/pdf/pdf-document';
import { clearHighlight, clearParagraph, highlightParagraph, highlightWord } from './highlighter';

/** Minimal sequencer surface the PDF viewer needs (same shape as PagePlayer's). */
export interface PdfSequencer {
  onSegmentChange?: (index: number) => void;
  load(segments: string[], startIndex?: number, startChar?: number): void;
  play(options?: SpeakOptions): Promise<void>;
  pause(): void;
  resume(): void;
  stop(): void;
  seek(target: number): void;
  setRate(rate: number): void;
  getState(): SequencerState;
}

interface PdfPlayerElements {
  root: HTMLElement;
  status: HTMLElement;
  position: HTMLElement;
  pages: HTMLElement;
}

interface PdfPlayerDeps {
  elements: PdfPlayerElements;
  /** Persists the committed rate — shared with HTML playback. */
  saveRate: (rate: number) => Promise<void>;
}

/**
 * Narration controller for the extension-owned PDF reading view. Pages become
 * section elements; each page is one spoken segment, so highlighting and the
 * page position read straight from the sequencer callbacks. Controls mirror
 * HTML playback: play/pause/resume/stop, next/previous page, live rate, and a
 * natural end-of-document idle.
 */
export class PdfPlayer {
  private sections: HTMLElement[] = [];
  private pageNumbers: number[] = [];
  private segments: string[] = [];
  private totalPages = 0;
  private rate = 1;
  private mounted = false;
  private playToken = 0;

  constructor(
    private readonly sequencer: PdfSequencer,
    private readonly deps: PdfPlayerDeps,
  ) {}

  private get elements(): PdfPlayerElements {
    return this.deps.elements;
  }

  get pageCount(): number {
    return this.pageNumbers.length;
  }

  get segmentTexts(): readonly string[] {
    return this.segments;
  }

  get currentRate(): number {
    return this.rate;
  }

  /** Page index a selection starts in, or null when the selection is outside
   * the rendered document. Lets "Play" honor "start from this passage". */
  selectedIndex(): number | null {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return null;
    const node = selection.getRangeAt(0).startContainer;
    const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
    if (!element) return null;
    const index = this.sections.findIndex((section) => section.contains(element));
    return index === -1 ? null : index;
  }

  /** Render readable pages and arm playback. Empty pages are skipped so they
   * are not narrated as silence. */
  show(pdf: PdfTextDocument): void {
    this.clearPages();
    for (const page of pdf.pages) {
      if (!page.text) continue;
      const section = document.createElement('section');
      section.setAttribute('data-page-number', String(page.pageNumber));
      section.setAttribute('aria-label', `Page ${page.pageNumber} of ${pdf.pageCount}`);
      const paragraph = document.createElement('p');
      paragraph.textContent = page.text;
      section.append(paragraph);
      this.elements.pages.append(section);
      this.sections.push(section);
      this.pageNumbers.push(page.pageNumber);
      this.segments.push(page.text);
    }
    this.mounted = true;
    this.totalPages = pdf.pageCount;
    this.elements.root.setAttribute('data-pdf-state', 'ready');
    this.setStatus('Ready to listen');
    this.updatePosition(0);
  }

  async play(fromIndex = 0): Promise<void> {
    if (!this.mounted || this.segments.length === 0) return;
    const token = ++this.playToken;
    this.clearWordHighlights();
    this.sequencer.onSegmentChange = (index) => this.onSegmentChange(index);
    this.sequencer.load(this.segments, Math.max(0, Math.min(fromIndex, this.segments.length - 1)));
    this.setStatus('Reading this document');
    await this.sequencer.play({
      rate: this.rate,
      onBoundary: (event) => this.onBoundary(event),
    });
    if (token !== this.playToken || this.sequencer.getState().paused) return;
    // Natural end of document: return to idle like HTML playback.
    this.clearWordHighlights();
    this.setStatus('Finished');
  }

  pause(): void {
    this.sequencer.pause();
    this.setStatus('Paused');
  }

  resume(): void {
    this.sequencer.resume();
    this.setStatus('Reading this document');
  }

  stop(): void {
    this.playToken++;
    this.sequencer.stop();
    this.clearWordHighlights();
    this.updatePosition(0);
    this.setStatus('Ready to listen');
  }

  /** Move by one reading unit (page). While idle, playback starts at the
   * target — matching HTML paragraph jumping. */
  jump(direction: JumpDirection): void {
    if (!this.mounted || this.segments.length === 0) return;
    const current = this.sequencer.getState().current;
    const target =
      direction === 'forward'
        ? Math.min(current + 1, this.segments.length - 1)
        : Math.max(current - 1, 0);
    if (target === current) return;

    const state = this.sequencer.getState();
    if (!state.playing && !state.paused) {
      void this.play(target);
      return;
    }
    this.sequencer.seek(target);
  }

  /** Apply a rate live; the entrypoint persists it via commitRate. */
  applyRate(rate: number): void {
    this.rate = clampRate(rate);
    this.sequencer.setRate(this.rate);
  }

  commitRate(): Promise<void> {
    return this.deps.saveRate(this.rate);
  }

  /** Reflect a failed load: clear pages, never fabricate narration. */
  fail(message: string): void {
    this.playToken++;
    this.clearPages();
    this.mounted = false;
    this.elements.root.setAttribute('data-pdf-state', 'error');
    this.elements.status.setAttribute('role', 'alert');
    this.elements.status.textContent = message;
    this.elements.position.textContent = '';
  }

  private setStatus(message: string): void {
    this.elements.status.setAttribute('role', 'status');
    this.elements.status.textContent = message;
  }

  private onSegmentChange(index: number): void {
    const section = this.sections[index];
    if (!section) return;
    for (const [position, other] of this.sections.entries()) {
      if (position === index) {
        highlightParagraph(other);
        continue;
      }
      clearParagraph(other);
    }
    this.updatePosition(index);
  }

  private onBoundary(event: { charIndex: number; charLength: number }): void {
    const index = this.sequencer.getState().current;
    const section = this.sections[index];
    if (!section) return;
    clearHighlight(section);
    highlightWord(section, event.charIndex, event.charLength);
    for (const mark of section.querySelectorAll('mark.dita-word-highlight')) {
      mark.setAttribute('data-active-word', 'true');
    }
  }

  private updatePosition(index: number): void {
    const pageNumber = this.pageNumbers[index];
    if (pageNumber === undefined || this.totalPages === 0) {
      this.elements.position.textContent = '';
      return;
    }
    this.elements.position.textContent = `Page ${pageNumber} of ${this.totalPages}`;
  }

  private clearPages(): void {
    this.elements.pages.replaceChildren();
    this.sections = [];
    this.pageNumbers = [];
    this.segments = [];
    this.totalPages = 0;
  }

  private clearWordHighlights(): void {
    for (const section of this.sections) clearHighlight(section);
  }
}

function clampRate(rate: number): number {
  return Math.min(2, Math.max(0.5, rate));
}
