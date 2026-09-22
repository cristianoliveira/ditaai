// @vitest-environment happy-dom
import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Chunk } from './chunks';
import { PagePlayer, type PageSequencer } from './player-session';

function makeSequencer(playing = false): PageSequencer & { calls: string[] } {
  return {
    calls: [],
    load: vi.fn(),
    play: vi.fn(() => Promise.resolve()),
    pause: vi.fn(),
    resume: vi.fn(),
    stop: vi.fn(),
    seek: vi.fn(),
    setRate: vi.fn(),
    setVolume: vi.fn(),
    getState: vi.fn(() => ({ current: 0, total: 2, playing, paused: false })),
  };
}

function makePlayer(sequencer = makeSequencer()) {
  const first = document.createElement('p');
  const second = document.createElement('p');
  const chunks: Chunk[] = [
    { text: 'first', element: first, base: 0 },
    { text: 'second', element: second, base: 0 },
  ];
  const widget = {
    setParagraphs: vi.fn(),
    setParagraphSearchData: vi.fn(),
    setCurrentParagraph: vi.fn(),
    setRate: vi.fn(),
    setVolume: vi.fn(),
  };
  const marker = { mark: vi.fn(), clear: vi.fn() };
  const saveRate = vi.fn(async () => {});
  const saveVolume = vi.fn(async () => {});
  const player = new PagePlayer({
    sequencer,
    getChunks: () => chunks,
    getWidget: () => widget,
    highlight: {
      clear: vi.fn(),
      clearParagraph: vi.fn(),
      highlightParagraph: vi.fn(),
      highlightWord: vi.fn(),
    },
    marker,
    saveRate,
    saveVolume,
    log: { info: vi.fn() },
  });
  return { player, sequencer, chunks, first, second, widget, marker, saveRate, saveVolume };
}

describe('PagePlayer', () => {
  beforeEach(() => vi.useFakeTimers());

  it('loads chunks and starts at an explicit word position', () => {
    const { player, sequencer, second, widget } = makePlayer();

    player.play(second, { index: 1, char: 3 });

    expect(sequencer.load).toHaveBeenCalledWith(['first', 'second'], 1, 3);
    expect(widget.setParagraphs).toHaveBeenCalledWith(
      [
        { value: 0, label: '¶ 1 — first' },
        { value: 1, label: '¶ 2 — second' },
      ],
      ['first', 'second'],
    );
    expect(widget.setCurrentParagraph).toHaveBeenCalledWith(1);
    expect(sequencer.play).toHaveBeenCalledWith(expect.objectContaining({ rate: 1, volume: 1 }));
  });

  it('seeks instead of restarting when asked to start during playback', () => {
    const sequencer = makeSequencer();
    const { player, second } = makePlayer(sequencer);
    player.play();
    vi.mocked(sequencer.load).mockClear();
    vi.mocked(sequencer.getState).mockReturnValue({
      current: 0,
      total: 2,
      playing: true,
      paused: false,
    });

    player.startFrom(second);

    expect(sequencer.seek).toHaveBeenCalledWith(1);
    expect(sequencer.load).not.toHaveBeenCalled();
  });

  it('toggles idle, playing, and paused playback', () => {
    const { player, sequencer } = makePlayer();

    player.toggle();
    expect(sequencer.load).toHaveBeenCalledOnce();

    vi.mocked(sequencer.getState).mockReturnValue({
      current: 0,
      total: 2,
      playing: true,
      paused: false,
    });
    player.toggle();
    expect(sequencer.pause).toHaveBeenCalledOnce();

    vi.mocked(sequencer.getState).mockReturnValue({
      current: 0,
      total: 2,
      playing: false,
      paused: true,
    });
    player.toggle();
    expect(sequencer.resume).toHaveBeenCalledOnce();
  });

  it('applies rate live without persisting, and reflects it into a mounted widget', () => {
    const { player, sequencer, widget } = makePlayer();

    player.applyRate(1.5);
    player.applyVolume(0.4);
    vi.advanceTimersByTime(200);

    // The widget follows the live value; nothing is written yet.
    expect(widget.setRate).toHaveBeenCalledWith(1.5);
    expect(widget.setVolume).toHaveBeenCalledWith(0.4);
    expect(sequencer.setVolume).toHaveBeenCalledWith(0.4);
  });

  it('persists only the committed value, so an input event cannot race a reload', async () => {
    const { player, saveRate, saveVolume } = makePlayer();

    player.applyRate(1.25);
    player.applyRate(1.5);
    expect(saveRate).not.toHaveBeenCalled();

    await player.commitRate();
    await player.commitVolume();

    // One write, of the latest value, and only when the user committed.
    expect(saveRate).toHaveBeenCalledOnce();
    expect(saveRate).toHaveBeenCalledWith(1.5);
    expect(saveVolume).toHaveBeenCalledOnce();
  });
});

describe('PagePlayer paragraph preparation and idle jumps', () => {
  it('prepareParagraphs exposes paragraph metadata for search without starting audio', () => {
    const { player, sequencer, widget } = makePlayer();

    player.prepareParagraphs();

    expect(widget.setParagraphs).toHaveBeenCalledWith(
      [
        { value: 0, label: '¶ 1 — first' },
        { value: 1, label: '¶ 2 — second' },
      ],
      ['first', 'second'],
    );
    expect(sequencer.load).not.toHaveBeenCalled();
    expect(sequencer.play).not.toHaveBeenCalled();
  });

  it('jumpToParagraph while idle lazily loads metadata and starts at the paragraph', () => {
    const { player, sequencer, second, widget, marker } = makePlayer();

    player.jumpToParagraph(1);

    expect(widget.setParagraphs).toHaveBeenCalledWith(
      [
        { value: 0, label: '¶ 1 — first' },
        { value: 1, label: '¶ 2 — second' },
      ],
      ['first', 'second'],
    );
    expect(sequencer.load).toHaveBeenCalledWith(['first', 'second'], 1, 0);
    expect(sequencer.play).toHaveBeenCalledWith(expect.objectContaining({ rate: 1, volume: 1 }));
    expect(marker.mark).toHaveBeenCalledWith(second);
    expect(sequencer.seek).not.toHaveBeenCalled();
  });

  it('jumpToParagraph while playing seeks to the paragraph start instead of restarting', () => {
    const sequencer = makeSequencer();
    const { player } = makePlayer(sequencer);
    vi.mocked(sequencer.getState).mockReturnValue({
      current: 1,
      total: 2,
      playing: true,
      paused: false,
    });

    player.jumpToParagraph(0);

    expect(sequencer.seek).toHaveBeenCalledWith(0);
    expect(sequencer.play).not.toHaveBeenCalled();
    expect(sequencer.load).not.toHaveBeenCalled();
  });

  it('jumpToParagraph while paused seeks to the paragraph start instead of restarting', () => {
    const sequencer = makeSequencer();
    const { player } = makePlayer(sequencer);
    vi.mocked(sequencer.getState).mockReturnValue({
      current: 1,
      total: 2,
      playing: false,
      paused: true,
    });

    player.jumpToParagraph(0);

    expect(sequencer.seek).toHaveBeenCalledWith(0);
    expect(sequencer.play).not.toHaveBeenCalled();
  });

  it('ignores jumps to invalid paragraph indexes', () => {
    const { player, sequencer, widget } = makePlayer();

    player.jumpToParagraph(-1);
    expect(widget.setParagraphs).not.toHaveBeenCalled();

    player.jumpToParagraph(9);
    expect(sequencer.seek).not.toHaveBeenCalled();
    expect(sequencer.play).not.toHaveBeenCalled();
  });
});
