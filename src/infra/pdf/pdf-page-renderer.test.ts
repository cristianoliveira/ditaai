// @vitest-environment happy-dom
import { describe, expect, it, vi } from 'vitest';
import {
  type PdfPageRenderDeps,
  PdfPageRenderer,
  type RenderablePdfPage,
} from './pdf-page-renderer';

interface FakePageOptions {
  width?: number;
  height?: number;
  hangRender?: boolean;
}

function fakePage(options: FakePageOptions = {}): RenderablePdfPage & {
  readonly cancelCount: number;
} {
  const width = options.width ?? 612;
  const height = options.height ?? 792;
  let cancelCount = 0;
  let rejectRender: ((error: Error) => void) | null = null;
  return {
    get cancelCount() {
      return cancelCount;
    },
    getViewport: ({ scale }) => ({ width: width * scale, height: height * scale }),
    render: () => {
      const promise = options.hangRender
        ? new Promise<void>((_resolve, reject) => {
            rejectRender = reject;
          })
        : Promise.resolve();
      return {
        cancel: () => {
          cancelCount++;
          rejectRender?.(new Error('Render cancelled'));
        },
        promise,
      };
    },
    streamTextContent: () =>
      new ReadableStream<unknown>({
        start(controller) {
          controller.close();
        },
      }),
  };
}

class TextLayerStub {
  constructor(params: { container: HTMLElement }) {
    (params.container as HTMLElement).dataset['textLayer'] = 'rendered';
  }

  render(): Promise<void> {
    return Promise.resolve();
  }
}

const textLayerStub = TextLayerStub as unknown as PdfPageRenderDeps['createTextLayer'];

function renderer(page: ReturnType<typeof fakePage>): PdfPageRenderer {
  return new PdfPageRenderer(page, { createTextLayer: textLayerStub });
}

/** happy-dom has no canvas implementation — stub a 2D context. */
function paintable(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.getContext = ((contextId: string) =>
    contextId === '2d' ? ({} as CanvasRenderingContext2D) : null) as typeof canvas.getContext;
  return canvas;
}

describe('PdfPageRenderer', () => {
  it('scales to fit the container width and paints canvas + text layer', async () => {
    const page = fakePage();
    const canvas = paintable();
    const layer = document.createElement('div');

    await renderer(page).renderInto(canvas, layer, 306);

    expect(canvas.width).toBe(306);
    expect(canvas.style.width).toBe('306px');
    expect(layer.dataset['textLayer']).toBe('rendered');
    expect(layer.style.getPropertyValue('--scale-factor')).toBe('0.5');
  });

  it('caps the canvas width even for wide containers', async () => {
    const page = fakePage();
    const canvas = paintable();
    const layer = document.createElement('div');

    await new PdfPageRenderer(page, {
      createTextLayer: textLayerStub,
      maxCanvasWidth: 612,
    }).renderInto(canvas, layer, 5000);

    expect(canvas.style.width).toBe('612px');
    expect(layer.style.getPropertyValue('--scale-factor')).toBe('1');
  });

  it('cancels a hung render when cancelled or re-rendered', async () => {
    const page = fakePage({ hangRender: true });
    const painter = renderer(page);
    const canvas = paintable();
    const layer = document.createElement('div');

    const first = painter.renderInto(canvas, layer, 612);
    painter.cancel();

    await expect(first).rejects.toThrow('Render cancelled');
    expect(page.cancelCount).toBe(1);
  });
});
