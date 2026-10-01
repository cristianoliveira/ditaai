import type { SequencerState } from '../domain/audio/sequencer';
import type { SpeakOptions } from '../domain/audio/text-reader';
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
  setRate(rate: number): void;
  getState(): SequencerState;
}

interface PdfPlayerElements {
  root: HTMLElement;
  status: HTMLElement;
  position: HTMLElement;
  pages: HTMLElement;
}

/**
 * Narration controller for the extension-owned PDF reading view. Pages become
 * section elements; each page is one spoken segment, so highlighting and the
 * page position read straight from the sequencer callbacks.
 */
export class PdfPlayer {
  private sections: HTMLElement[] = [];
  private pageNumbers: number[] = [];
  private segments: string[] = [];
  private totalPages = 0;
  private rate = 1;
  private mounted = false;

  constructor(
    private readonly sequencer: PdfSequencer,
    private readonly elements: PdfPlayerElements,
  ) {}

  get pageCount(): number {
    return this.pageNumbers.length;
  }

  get segmentTexts(): readonly string[] {
    return this.segments;
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
    this.setState('ready');
    this.setStatus('Ready to listen');
    this.updatePosition(0);
  }

  play(): void {
    if (!this.mounted || this.segments.length === 0) return;
    this.clearWordHighlights();
    this.sequencer.onSegmentChange = (index) => this.onSegmentChange(index);
    this.sequencer.load(this.segments);
    void this.sequencer.play({
      rate: this.rate,
      onBoundary: (event) => this.onBoundary(event),
    });
    this.setStatus('Reading this document');
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
    this.sequencer.stop();
    this.clearWordHighlights();
    this.updatePosition(0);
    this.setStatus('Ready to listen');
  }

  setRate(rate: number): void {
    this.rate = rate;
    this.sequencer.setRate(rate);
  }

  /** Reflect a failed load: clear pages, never fabricate narration. */
  fail(message: string): void {
    this.clearPages();
    this.mounted = false;
    this.elements.root.setAttribute('data-pdf-state', 'error');
    this.elements.status.setAttribute('role', 'alert');
    this.elements.status.textContent = message;
    this.elements.position.textContent = '';
  }

  private setState(state: 'loading' | 'ready' | 'error'): void {
    this.elements.root.setAttribute('data-pdf-state', state);
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
  }

  private clearWordHighlights(): void {
    for (const section of this.sections) clearHighlight(section);
  }
}
