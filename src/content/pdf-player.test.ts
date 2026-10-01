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
    load(segments: string[]) {
      loaded.push(segments);
      sequencer.state = { current: 0, total: segments.length, playing: false, paused: false };
    },
    async play(options?: SpeakOptions) {
      speakOptions.push(options ?? {});
      listeners.boundary = options?.onBoundary;
      sequencer.state = { ...sequencer.state, playing: true };
    },
    pause: vi.fn(),
    resume: vi.fn(),
    stop: vi.fn(() => {
      sequencer.state = { ...sequencer.state, playing: false };
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
    player = new PdfPlayer(sequencer, elements);
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
});
