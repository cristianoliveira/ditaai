/** Minimal pdf.js page surface the renderer needs (unit-testable). */
export interface RenderablePdfPage {
  getViewport(params: { scale: number }): { width: number; height: number };
  render(params: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
    transform?: number[];
  }): { cancel(): void; promise: Promise<void> };
  streamTextContent(params?: { disableNormalization?: boolean }): ReadableStream;
  cleanup?(): void;
}

export interface TextLayerLike {
  render(): Promise<unknown>;
  cancel?(): void;
}

export type TextLayerFactory = abstract new (...args: never[]) => TextLayerLike;

/** Wraps the real pdf.js TextLayer export for dependency injection. */
export function pdfTextLayerFactory(textLayerCtor: unknown): TextLayerFactory {
  return textLayerCtor as TextLayerFactory;
}

export interface PdfPageRenderDeps {
  /** A single TextLayer factory (pdf.js export) — injectable for tests. */
  createTextLayer: TextLayerFactory;
  maxDevicePixelRatio?: number;
  maxCanvasWidth?: number;
}

export const DEFAULT_MAX_CANVAS_WIDTH = 1200;
const DEFAULT_MAX_DEVICE_PIXEL_RATIO = 2;

/**
 * Renders one PDF page to a canvas plus an aligned, selectable text layer.
 * A page owns exactly one active render: re-rendering cancels the previous
 * task, and cancel() aborts an in-flight render when its page is evicted —
 * this is the memory/cancellation bound for low-end devices.
 */
export class PdfPageRenderer {
  private active: { cancel(): void } | null = null;
  private textLayer: TextLayerLike | null = null;

  constructor(
    private readonly page: RenderablePdfPage,
    private readonly deps: PdfPageRenderDeps,
  ) {}

  async renderInto(
    canvas: HTMLCanvasElement,
    layer: HTMLElement,
    containerWidth: number,
  ): Promise<void> {
    this.cancel();
    const base = this.page.getViewport({ scale: 1 });
    const maxCanvasWidth = this.deps.maxCanvasWidth ?? DEFAULT_MAX_CANVAS_WIDTH;
    const scale = Math.max(0.1, Math.min(containerWidth / base.width, maxCanvasWidth / base.width));
    const viewport = this.page.getViewport({ scale });
    const ratio = Math.min(
      window.devicePixelRatio || 1,
      this.deps.maxDevicePixelRatio ?? DEFAULT_MAX_DEVICE_PIXEL_RATIO,
    );

    canvas.width = Math.floor(viewport.width * ratio);
    canvas.height = Math.floor(viewport.height * ratio);
    canvas.style.width = `${Math.floor(viewport.width)}px`;
    canvas.style.height = `${Math.floor(viewport.height)}px`;
    layer.replaceChildren();
    layer.setAttribute('role', 'presentation');

    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas 2D context unavailable');
    const task = this.page.render({
      canvasContext: context,
      viewport,
      transform: ratio === 1 ? undefined : [ratio, 0, 0, ratio, 0, 0],
    });
    this.active = task;
    try {
      await task.promise;
      const textLayer = new (
        this.deps.createTextLayer as new (params: {
          textContentSource: ReadableStream;
          container: HTMLElement;
          viewport: unknown;
        }) => TextLayerLike
      )({
        textContentSource: this.page.streamTextContent({ disableNormalization: true }),
        container: layer,
        viewport,
      });
      if (this.active !== task) {
        textLayer.cancel?.();
        return;
      }
      this.textLayer = textLayer;
      // Set CSS scaling before textLayer.render() so the font-size calc
      // is deterministic from the first render frame.
      if (layer.parentElement) {
        layer.parentElement.style.setProperty('--scale-factor', String(scale));
      }
      await textLayer.render();
    } finally {
      if (this.active === task) this.active = null;
      this.page.cleanup?.();
    }
  }

  /** Abort an in-flight render; safe to call repeatedly. */
  cancel(): void {
    this.textLayer?.cancel?.();
    this.textLayer = null;
    this.active?.cancel();
    this.active = null;
  }
}
