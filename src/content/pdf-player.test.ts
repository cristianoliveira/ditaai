// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { SequencerState } from '../domain/audio/sequencer';
import type { BoundaryEvent, SpeakOptions } from '../domain/audio/text-reader';
import type { PdfTextDocument } from '../infra/pdf/pdf-document';
// happy-dom provides the DOM the viewer renders into.
import { PdfPlayer, type PdfSequencer } from './pdf-player';

function fakeSequencer(): PdfSequencer & {
  speakOptions: SpeakOptions[];
  loaded: string[][];
  emitBoundary(event: BoundaryEvent): void;
  emitSegmentChange(index: number): void;
  state: SequencerState;
} {
  const speakOptions: SpeakOptions[] = [];
  const loaded: string[][] = [];
  const listeners: { boundary?: SpeakOptions['onBoundary']; segment?: (i: number) => void } = {};
  const sequencer = {
    state: { current: 0, total: 0, playing: false, paused: false } as SequencerState,
    speakOptions,
    loaded,
    onSegmentChange: undefined as ((index: number) => void) | undefined,
    load(segments: string[], startIndex = 0) {
      loaded.push(segments);
      sequencer.state = {
        current: startIndex,
        total: segments.length,
        playing: false,
        paused: false,
      };
    },
    async play(options?: SpeakOptions) {
      speakOptions.push(options ?? {});
      listeners.boundary = options?.onBoundary;
      sequencer.state = { ...sequencer.state, playing: true };
    },
    pause: vi.fn(() => {
      sequencer.state = { ...sequencer.state, playing: false, paused: true };
    }),
    resume: vi.fn(),
    stop: vi.fn(() => {
      sequencer.state = { ...sequencer.state, playing: false };
    }),
    seek: vi.fn((target: number) => {
      sequencer.state = { ...sequencer.state, current: target };
    }),
    setRate: vi.fn(),
    getState: () => sequencer.state,
    emitBoundary(event: BoundaryEvent) {
      listeners.boundary?.(event);
    },
    emitSegmentChange(index: number) {
      sequencer.onSegmentChange?.(index);
    },
  } as PdfSequencer & {
    speakOptions: SpeakOptions[];
    loaded: string[][];
    state: SequencerState;
    emitBoundary(event: BoundaryEvent): void;
    emitSegmentChange(index: number): void;
  };
  return sequencer;
}

function viewerElements(): {
  root: HTMLElement;
  status: HTMLElement;
  position: HTMLElement;
  pages: HTMLElement;
} {
  const root = document.createElement('main');
  root.id = 'pdf-reader';
  root.setAttribute('data-pdf-state', 'loading');
  const status = document.createElement('p');
  status.id = 'pdf-status';
  const position = document.createElement('output');
  position.id = 'pdf-page-position';
  const pages = document.createElement('div');
  pages.id = 'pdf-pages';
  root.append(status, position, pages);
  document.body.append(root);
  return { root, status, position, pages };
}

function twoPageDocument(): PdfTextDocument {
  return {
    pageCount: 2,
    pages: [
      { pageNumber: 1, text: 'Orchid opens the story.' },
      { pageNumber: 2, text: 'Cedar closes the story.' },
    ],
  };
}

describe('PdfPlayer', () => {
  let sequencer: ReturnType<typeof fakeSequencer>;
  let elements: ReturnType<typeof viewerElements>;
  let player: PdfPlayer;

  beforeEach(() => {
    document.body.replaceChildren();
    sequencer = fakeSequencer();
    elements = viewerElements();
    player = new PdfPlayer(sequencer, { elements, saveRate: vi.fn(async () => {}) });
  });

  it('renders readable pages in document order and reports the page position', () => {
    player.show(twoPageDocument());

    const sections = elements.pages.querySelectorAll('section');
    expect(sections).toHaveLength(2);
    expect(sections[0]?.textContent).toBe('Orchid opens the story.');
    expect(sections[1]?.getAttribute('data-page-number')).toBe('2');
    expect(elements.root.getAttribute('data-pdf-state')).toBe('ready');
    expect(elements.position.textContent).toBe('Page 1 of 2');

    player.play();
    expect(sequencer.loaded[0]).toEqual(['Orchid opens the story.', 'Cedar closes the story.']);
  });

  it('speaks each page once and tracks the spoken word', async () => {
    player.show(twoPageDocument());
    player.play();

    await vi.waitFor(() => expect(sequencer.speakOptions).toHaveLength(1));
    sequencer.emitSegmentChange(1);
    expect(elements.position.textContent).toBe('Page 2 of 2');
    expect(sequencer.speakOptions[0]?.onBoundary).toBeTypeOf('function');

    sequencer.state = { current: 1, total: 2, playing: true, paused: false };
    sequencer.emitBoundary({ charIndex: 0, charLength: 5 });
    const activeWord = elements.pages.querySelector('mark[data-active-word]');
    expect(activeWord?.textContent).toBe('Cedar');
  });

  it('stops narration and clears highlights', async () => {
    player.show(twoPageDocument());
    player.play();
    await vi.waitFor(() => expect(sequencer.speakOptions).toHaveLength(1));
    sequencer.state = { current: 0, total: 2, playing: true, paused: false };
    sequencer.emitBoundary({ charIndex: 0, charLength: 6 });
    expect(elements.pages.querySelector('mark[data-active-word]')).not.toBeNull();

    player.stop();

    expect(sequencer.stop).toHaveBeenCalled();
    expect(elements.pages.querySelector('mark[data-active-word]')).toBeNull();
    expect(elements.position.textContent).toBe('Page 1 of 2');
    expect(elements.status.textContent).toBe('Ready to listen');
  });

  it('skips empty pages instead of narrating silence', () => {
    player.show({
      pageCount: 3,
      pages: [
        { pageNumber: 1, text: 'Only this page speaks.' },
        { pageNumber: 2, text: '' },
        { pageNumber: 3, text: 'Then this one.' },
      ],
    });

    expect(sequencer.loaded[0]).toBeUndefined();

    player.play();
    expect(sequencer.loaded[0]).toEqual(['Only this page speaks.', 'Then this one.']);
    expect(elements.position.textContent).toBe('Page 1 of 3');
  });

  it('shows a clear non-speaking state for failures', () => {
    player.fail('This PDF is damaged or uses an unsupported format.');

    expect(elements.root.getAttribute('data-pdf-state')).toBe('error');
    expect(elements.status.getAttribute('role')).toBe('alert');
    expect(elements.status.textContent).toContain('damaged');
    expect(elements.pages.children).toHaveLength(0);
    expect(sequencer.loaded).toHaveLength(0);
  });

  it('returns to idle with a finished status when narration ends naturally', async () => {
    player.show(twoPageDocument());
    const finished = player.play();
    await vi.waitFor(() => expect(sequencer.speakOptions).toHaveLength(1));

    sequencer.state = { current: 1, total: 2, playing: false, paused: false };
    await finished;

    expect(elements.status.textContent).toBe('Finished');
    expect(elements.pages.querySelector('mark[data-active-word="true"]')).toBeNull();
  });

  it('keeps the paused status when playback is suspended before the end', async () => {
    player.show(twoPageDocument());
    const finished = player.play();
    await vi.waitFor(() => expect(sequencer.speakOptions).toHaveLength(1));

    player.pause();
    await finished;

    expect(elements.status.textContent).toBe('Paused');
  });

  it('jumps to the next and previous page while playing', async () => {
    player.show(twoPageDocument());
    player.play();
    await vi.waitFor(() => expect(sequencer.speakOptions).toHaveLength(1));

    player.jump('forward');
    expect(sequencer.seek).toHaveBeenCalledWith(1);

    player.jump('backward');
    expect(sequencer.seek).toHaveBeenCalledWith(0);
  });

  it('starts playback at the target page when a jump happens while idle', async () => {
    player.show(twoPageDocument());

    player.jump('forward');

    await vi.waitFor(() => expect(sequencer.loaded[0]).toBeDefined());
    expect(sequencer.loaded[0]?.length).toBe(2);
    expect(sequencer.state.current).toBe(1);
    expect(sequencer.seek).not.toHaveBeenCalled();
  });

  it('starts from a selected page and clamps rates to the shared range', async () => {
    player.show(twoPageDocument());
    const second = elements.pages.querySelectorAll('section')[1];
    if (!second) throw new Error('second page section missing');
    const range = document.createRange();
    range.selectNodeContents(second);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    expect(player.selectedIndex()).toBe(1);

    player.applyRate(9);
    expect(player.currentRate).toBe(2);
    expect(sequencer.setRate).toHaveBeenCalledWith(2);
  });

  it('ignores selections outside the rendered document', () => {
    player.show(twoPageDocument());
    const outside = document.createElement('div');
    document.body.append(outside);
    const range = document.createRange();
    range.selectNodeContents(outside);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    expect(player.selectedIndex()).toBeNull();
  });

  it('persists the applied rate through the injected store', async () => {
    const saveRate = vi.fn(async () => {});
    const persisting = new PdfPlayer(sequencer, { elements, saveRate });

    persisting.applyRate(1.5);
    await persisting.commitRate();

    expect(saveRate).toHaveBeenCalledWith(1.5);
  });

  describe('with page rendering', () => {
    function renderingPlayer(options?: {
      failPages?: number[];
    }): {
      player: PdfPlayer;
      renderPage: ReturnType<typeof vi.fn>;
      cancelRender: ReturnType<typeof vi.fn>;
    } {
      const renderPage = vi.fn(
        (pageNumber: number, _canvas: HTMLCanvasElement, layer: HTMLElement) => {
          if (options?.failPages?.includes(pageNumber)) return Promise.reject(new Error('boom'));
          const text = pageNumber === 1 ? 'Orchid opens the story.' : 'Cedar closes the story.';
          for (const part of text.split(' the ')) {
            const span = document.createElement('span');
            span.textContent = `${part} `;
            layer.append(span);
          }
          return Promise.resolve();
        },
      );
      const cancelRender = vi.fn();
      const rendering = new PdfPlayer(sequencer, {
        elements,
        saveRate: vi.fn(async () => {}),
        renderPage,
        cancelRender,
      });
      return { player: rendering, renderPage, cancelRender };
    }

    it('shows accessible text first, then paints the window around the current page', async () => {
      const { player } = renderingPlayer();
      player.show(twoPageDocument());

      // Text is immediately present for screen readers and early narration.
      expect(elements.pages.querySelectorAll('p.pdf-page-text')).toHaveLength(2);
      await vi.waitFor(() => expect(player.paintedPages).toEqual([1, 2]));
      expect(elements.pages.querySelector('.textLayer span')).not.toBeNull();
      expect(elements.pages.querySelector('p.pdf-page-text')).toBeNull();
    });

    it('evicts far pages so canvas memory stays bounded', async () => {
      const { player, cancelRender } = renderingPlayer();
      player.show({
        pageCount: 4,
        pages: [
          { pageNumber: 1, text: 'Orchid opens the story.' },
          { pageNumber: 2, text: 'Birch continues the story.' },
          { pageNumber: 3, text: 'Cedar closes the story.' },
          { pageNumber: 4, text: 'Elm ends the story.' },
        ],
      });
      await vi.waitFor(() => expect(player.paintedPages).toEqual([1, 2]));

      player.jump('forward');
      sequencer.state = { current: 1, total: 4, playing: true, paused: false };
      sequencer.emitSegmentChange(1);
      await vi.waitFor(() => expect(player.paintedPages).toEqual([1, 2, 3]));

      player.jump('forward');
      sequencer.state = { current: 2, total: 4, playing: true, paused: false };
      sequencer.emitSegmentChange(2);
      await vi.waitFor(() => expect(player.paintedPages).toEqual([2, 3, 4]));

      expect(cancelRender).toHaveBeenCalledWith(1);
      const first = elements.pages.querySelector('section[data-page-number="1"]');
      expect(first?.querySelector('p.pdf-page-text')).not.toBeNull();
      expect(first?.querySelector('canvas')).toBeNull();
    });

    it('highlights the spoken word inside the painted text layer', async () => {
      const { player } = renderingPlayer();
      player.show(twoPageDocument());
      await vi.waitFor(() => expect(player.paintedPages).toEqual([1, 2]));
      player.play();
      await vi.waitFor(() => expect(sequencer.speakOptions).toHaveLength(1));

      sequencer.state = { current: 0, total: 2, playing: true, paused: false };
      sequencer.emitBoundary({ charIndex: 0, charLength: 6 });

      const mark = elements.pages.querySelector('.textLayer mark[data-active-word="true"]');
      expect(mark?.textContent).toBe('Orchid');
    });

    it('keeps accessible-text highlighting when a page fails to paint', async () => {
      const { player } = renderingPlayer({ failPages: [1] });
      player.show(twoPageDocument());
      await vi.waitFor(() => expect(player.paintedPages).toEqual([2]));
      player.play();
      await vi.waitFor(() => expect(sequencer.speakOptions).toHaveLength(1));

      sequencer.state = { current: 0, total: 2, playing: true, paused: false };
      sequencer.emitBoundary({ charIndex: 0, charLength: 6 });

      const mark = elements.pages
        .querySelector('section[data-page-number="1"]')
        ?.querySelector('mark[data-active-word="true"]');
      expect(mark?.textContent).toBe('Orchid');
      expect(mark?.closest('.textLayer')).toBeNull();
    });
  });
});
