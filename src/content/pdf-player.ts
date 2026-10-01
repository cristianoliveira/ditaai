import type { SequencerState } from '../domain/audio/sequencer';
import type { SpeakOptions } from '../domain/audio/text-reader';
import type { JumpDirection } from '../domain/playback/jump';
import type { PdfTextDocument } from '../infra/pdf/pdf-document';
import { clearHighlight, clearParagraph, highlightParagraph, highlightWord } from './highlighter';
import { type LayerPort, domLayer, locateWord } from './pdf-text-locator';

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
  /** Renders one original page (canvas + text layer) at fit-width scale.
   * Absent in degraded mode: sections keep accessible text only. */
  renderPage?(
    pageNumber: number,
    canvas: HTMLCanvasElement,
    layer: HTMLElement,
    containerWidth: number,
  ): Promise<void>;
  cancelRender?(pageNumber: number): void;
}

interface PdfSection {
  element: HTMLElement;
  /** Accessible text shown until (and after) the page is painted. */
  fallback: HTMLElement;
  layer: HTMLElement | null;
  canvas: HTMLCanvasElement | null;
  page: number;
  painted: boolean;
}

/** How many canvases may stay painted around the current page (low-end bound). */
const RENDER_WINDOW = 1;

/**
 * Narration controller for the extension-owned PDF reading view. Pages render
 * as original PDF pages (canvas + selectable text layer) within a bounded
 * window around the spoken page; each page is one spoken segment, so
 * highlighting and the page position read straight from the sequencer
 * callbacks. Controls mirror HTML playback: play/pause/resume/stop,
 * next/previous page, live rate, and a natural end-of-document idle.
 */
export class PdfPlayer {
  private sections: PdfSection[] = [];
  private segments: string[] = [];
  private totalPages = 0;
  private rate = 1;
  private mounted = false;
  private playToken = 0;
  private renderGeneration = 0;

  constructor(
    private readonly sequencer: PdfSequencer,
    private readonly deps: PdfPlayerDeps,
  ) {}

  private get elements(): PdfPlayerElements {
    return this.deps.elements;
  }

  get pageCount(): number {
    return this.sections.length;
  }

  get segmentTexts(): readonly string[] {
    return this.segments;
  }

  get currentRate(): number {
    return this.rate;
  }

  get paintedPages(): number[] {
    return this.sections.filter((section) => section.painted).map((section) => section.page);
  }

  /** Page index a selection starts in, or null when the selection is outside
   * the rendered document. Lets "Play" honor "start from this passage". */
  selectedIndex(): number | null {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return null;
    const node = selection.getRangeAt(0).startContainer;
    const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
    if (!element) return null;
    const index = this.sections.findIndex((section) => section.element.contains(element));
    return index === -1 ? null : index;
  }

  /** Render readable pages (text first, canvases lazily) and arm playback.
   * Empty pages are skipped so they are not narrated as silence. */
  show(pdf: PdfTextDocument): void {
    this.clearPages();
    this.playToken++;
    for (const page of pdf.pages) {
      if (!page.text) continue;
      const section = document.createElement('section');
      section.setAttribute('data-page-number', String(page.pageNumber));
      section.setAttribute('aria-label', `Page ${page.pageNumber} of ${pdf.pageCount}`);
      const fallback = document.createElement('p');
      fallback.className = 'pdf-page-text';
      fallback.textContent = page.text;
      section.append(fallback);
      this.elements.pages.append(section);
      this.sections.push({
        element: section,
        fallback,
        layer: null,
        canvas: null,
        page: page.pageNumber,
        painted: false,
      });
      this.segments.push(page.text);
    }
    this.mounted = true;
    this.totalPages = pdf.pageCount;
    this.elements.root.setAttribute('data-pdf-state', 'ready');
    this.setStatus('Ready to listen');
    this.updatePosition(0);
    void this.renderAround(0);
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
    this.renderGeneration++;
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
        highlightParagraph(other.element);
        continue;
      }
      clearParagraph(other.element);
    }
    this.updatePosition(index);
    void this.renderAround(index);
  }

  private onBoundary(event: { charIndex: number; charLength: number }): void {
    const index = this.sequencer.getState().current;
    const section = this.sections[index];
    if (!section) return;
    this.clearWordHighlights();

    // Painted page: align the word on the PDF text layer itself. The spoken
    // page text is the collapsed form of the layer's spans.
    if (section.painted && section.layer) {
      const port: LayerPort = domLayer(section.layer);
      const located = locateWord(
        port.spans(),
        this.segments[index] ?? '',
        event.charIndex,
        event.charLength,
      );
      if (located) {
        port.markWord(located.span, located.start, located.length);
        return;
      }
    }
    // Unpainted page (or unalignable layer): highlight the accessible text.
    highlightWord(section.element, event.charIndex, event.charLength);
    for (const mark of section.element.querySelectorAll('mark.dita-word-highlight')) {
      mark.setAttribute('data-active-word', 'true');
    }
  }

  /** Keep at most the pages around `center` painted; everything else reverts
   * to accessible text so canvas memory stays bounded on low-end devices. */
  private async renderAround(center: number): Promise<void> {
    if (!this.deps.renderPage) return;
    const generation = ++this.renderGeneration;
    const lo = Math.max(0, center - RENDER_WINDOW);
    const hi = Math.min(this.sections.length - 1, center + RENDER_WINDOW);

    for (const [index, section] of this.sections.entries()) {
      if (index < lo || index > hi) {
        this.evict(section);
        continue;
      }
      if (section.painted) continue;
      await this.paint(index, generation);
      if (generation !== this.renderGeneration) return; // superseded — stop early
    }
  }

  private async paint(index: number, generation: number): Promise<void> {
    const section = this.sections[index];
    if (!section || !this.deps.renderPage) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'pdf-page-canvas';
    const layer = document.createElement('div');
    layer.className = 'textLayer';
    const wrapper = document.createElement('div');
    wrapper.className = 'pdf-page-render';
    wrapper.append(canvas, layer);
    canvas.width = 0;
    canvas.height = 0;

    try {
      await this.deps.renderPage(section.page, canvas, layer, this.elements.pages.clientWidth || 800);
    } catch {
      canvas.width = 0;
      canvas.height = 0;
      return; // keep accessible text; rendering stays optional
    }
    if (generation !== this.renderGeneration || !this.sections[index]) return;
    if (section.element.contains(section.fallback)) section.fallback.replaceWith(wrapper);
    else section.element.querySelector('.pdf-page-render')?.replaceWith(wrapper);
    section.canvas = canvas;
    section.layer = layer;
    section.painted = true;
  }

  private evict(section: PdfSection): void {
    if (!section.painted) return;
    this.deps.cancelRender?.(section.page);
    section.canvas?.replaceChildren();
    section.canvas = null;
    section.layer = null;
    section.painted = false;
    section.element
      .querySelectorAll('.pdf-page-render')
      .forEach((rendered) => rendered.replaceWith(section.fallback));
  }

  private updatePosition(index: number): void {
    const section = this.sections[index];
    if (!section || this.totalPages === 0) {
      this.elements.position.textContent = '';
      return;
    }
    this.elements.position.textContent = `Page ${section.page} of ${this.totalPages}`;
  }

  private clearPages(): void {
    for (const section of this.sections) this.evict(section);
    this.elements.pages.replaceChildren();
    this.sections = [];
    this.segments = [];
    this.totalPages = 0;
  }

  private clearWordHighlights(): void {
    for (const section of this.sections) {
      clearHighlight(section.element);
      if (section.layer) domLayer(section.layer).clearMarks();
    }
  }
}

function clampRate(rate: number): number {
  return Math.min(2, Math.max(0.5, rate));
}
