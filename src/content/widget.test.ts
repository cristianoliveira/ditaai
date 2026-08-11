// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { SequencerState } from '../domain/audio/sequencer';
import { DitaWidget } from './widget';

const noopCallbacks = {
  onPlay: () => {},
  onPause: () => {},
  onResume: () => {},
  onStop: () => {},
  onClose: () => {},
};

function highlightButton(): HTMLButtonElement | null {
  const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
  return root?.querySelector<HTMLButtonElement>('.dita-btn-highlight') ?? null;
}

function rateSlider(): HTMLInputElement | null {
  const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
  return root?.querySelector<HTMLInputElement>('.dita-rate') ?? null;
}

function rateLabel(): HTMLElement | null {
  const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
  return root?.querySelector<HTMLElement>('.dita-rate-label') ?? null;
}

function volumeSlider(): HTMLInputElement | null {
  const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
  return root?.querySelector<HTMLInputElement>('.dita-volume') ?? null;
}

function volumeLabel(): HTMLElement | null {
  const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
  return root?.querySelector<HTMLElement>('.dita-volume-label') ?? null;
}

describe('DitaWidget highlight toggle', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });
  it('renders a word-highlight toggle button, enabled by default', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();

    const btn = highlightButton();
    expect(btn).not.toBeNull();
    expect(btn?.getAttribute('aria-pressed')).toBe('true');
    expect(btn?.getAttribute('aria-label')).toBe('Toggle word highlighting');
  });

  it('clicking toggles the state and notifies the new value', () => {
    const onToggle = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onToggleHighlight: onToggle });
    widget.mount();
    const btn = highlightButton();
    if (!btn) throw new Error('toggle button missing');

    btn.click();
    expect(onToggle).toHaveBeenCalledWith(false);
    expect(btn.getAttribute('aria-pressed')).toBe('false');

    btn.click();
    expect(onToggle).toHaveBeenLastCalledWith(true);
    expect(btn.getAttribute('aria-pressed')).toBe('true');
  });

  it('can be created with highlighting disabled', () => {
    const widget = new DitaWidget(noopCallbacks, { highlightEnabled: false });
    widget.mount();
    expect(highlightButton()?.getAttribute('aria-pressed')).toBe('false');
  });

  it('setHighlightEnabled updates the visual without firing the callback', () => {
    const onToggle = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onToggleHighlight: onToggle });
    widget.mount();
    widget.setHighlightEnabled(false);
    expect(highlightButton()?.getAttribute('aria-pressed')).toBe('false');
    expect(onToggle).not.toHaveBeenCalled();
  });
});

describe('DitaWidget rate slider', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders a speed slider defaulting to 1x', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    expect(rateSlider()?.value).toBe('1');
    expect(rateSlider()?.getAttribute('aria-label')).toBe('Reading speed');
    expect(rateLabel()?.textContent).toBe('1×');
  });

  it('changing the slider notifies the new rate and updates the label', () => {
    const onChangeRate = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onChangeRate });
    widget.mount();
    const slider = rateSlider();
    if (!slider) throw new Error('slider missing');

    slider.value = '1.5';
    slider.dispatchEvent(new Event('input', { bubbles: true }));

    expect(onChangeRate).toHaveBeenCalledWith(1.5);
    expect(rateLabel()?.textContent).toBe('1.5×');
  });

  it('accepts an initial rate', () => {
    const widget = new DitaWidget(noopCallbacks, { rate: 1.5 });
    widget.mount();
    expect(rateSlider()?.value).toBe('1.5');
    expect(rateLabel()?.textContent).toBe('1.5×');
  });
});

describe('DitaWidget volume slider', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders a volume slider defaulting to 100%', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    expect(volumeSlider()?.value).toBe('100');
    expect(volumeSlider()?.getAttribute('aria-label')).toBe('Volume');
    expect(volumeLabel()?.textContent).toBe('100%');
  });

  it('changing the slider notifies the new volume and updates the label', () => {
    const onChangeVolume = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onChangeVolume });
    widget.mount();
    const slider = volumeSlider();
    if (!slider) throw new Error('slider missing');

    slider.value = '40';
    slider.dispatchEvent(new Event('input', { bubbles: true }));

    expect(onChangeVolume).toHaveBeenCalledWith(0.4);
    expect(volumeLabel()?.textContent).toBe('40%');
  });

  it('accepts an initial volume', () => {
    const widget = new DitaWidget(noopCallbacks, { volume: 0.4 });
    widget.mount();
    expect(volumeSlider()?.value).toBe('40');
    expect(volumeLabel()?.textContent).toBe('40%');
  });

  it('setVolume mirrors an external volume change without notifying', () => {
    const onChangeVolume = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onChangeVolume });
    widget.mount();

    widget.setVolume(0.25);

    expect(volumeSlider()?.value).toBe('25');
    expect(volumeLabel()?.textContent).toBe('25%');
    expect(onChangeVolume).not.toHaveBeenCalled();
  });
});

describe('DitaWidget jump buttons', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function jumpButtons(): { prev: HTMLButtonElement | null; next: HTMLButtonElement | null } {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    const btns = root?.querySelectorAll<HTMLButtonElement>('.dita-btn-jump') ?? [];
    return { prev: btns[0] ?? null, next: btns[1] ?? null };
  }

  it('renders previous and next buttons with aria-labels', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();

    const { prev, next } = jumpButtons();
    expect(prev).not.toBeNull();
    expect(next).not.toBeNull();
    expect(prev?.getAttribute('aria-label')).toBe('Previous paragraph');
    expect(next?.getAttribute('aria-label')).toBe('Next paragraph');
  });

  it('previous button fires onJump backward', () => {
    const onJump = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onJump });
    widget.mount();

    jumpButtons().prev?.click();

    expect(onJump).toHaveBeenCalledWith('backward');
  });

  it('next button fires onJump forward', () => {
    const onJump = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onJump });
    widget.mount();

    jumpButtons().next?.click();

    expect(onJump).toHaveBeenCalledWith('forward');
  });
});

describe('DitaWidget.reflect (sequencer → widget mapping)', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function playButton(): HTMLButtonElement | null {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    return root?.querySelector<HTMLButtonElement>('.dita-btn-play') ?? null;
  }

  function progress(): HTMLElement | null {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    return root?.querySelector<HTMLElement>('.dita-progress') ?? null;
  }

  const idle = (over: Partial<SequencerState> = {}): SequencerState => ({
    current: 0,
    total: 10,
    playing: false,
    paused: false,
    ...over,
  });

  it('idle → play icon, "Play page audio", no progress counter', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    widget.reflect(idle());
    expect(playButton()?.getAttribute('aria-label')).toBe('Play page audio');
    expect(playButton()?.querySelector('svg[data-icon="play"]')).not.toBeNull();
    expect(progress()?.textContent).toBe('');
  });

  it('playing → pause icon, "Pause page audio", counter shows current+1/total', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    widget.reflect(idle({ current: 2, total: 10, playing: true }));
    expect(playButton()?.getAttribute('aria-label')).toBe('Pause page audio');
    expect(playButton()?.querySelector('svg[data-icon="pause"]')).not.toBeNull();
    expect(progress()?.textContent).toBe('3/10');
  });

  it('paused → play icon, "Resume page audio", counter retained', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    widget.reflect(idle({ current: 2, total: 10, playing: true }));
    widget.reflect(idle({ current: 2, total: 10, paused: true }));
    expect(playButton()?.getAttribute('aria-label')).toBe('Resume page audio');
    expect(playButton()?.querySelector('svg[data-icon="play"]')).not.toBeNull();
    expect(progress()?.textContent).toBe('3/10');
  });

  it('returning to idle clears the counter', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    widget.reflect(idle({ current: 5, total: 10, playing: true }));
    widget.reflect(idle());
    expect(progress()?.textContent).toBe('');
  });
});

describe('DitaWidget play button', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function playButton(): HTMLButtonElement | null {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    return root?.querySelector<HTMLButtonElement>('.dita-btn-play') ?? null;
  }

  it('renders the play icon as a centered SVG, not a font glyph', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    const btn = playButton();
    // SVG centers deterministically via flex; the ▶ glyph sits off-center in
    // its em box and renders differently per font/platform.
    expect(btn?.querySelector('svg[data-icon="play"]')).not.toBeNull();
    expect(btn?.textContent ?? '').not.toContain('▶');
  });

  it('describes the current playback action to assistive technology', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    expect(playButton()?.getAttribute('aria-label')).toBe('Play page audio');

    widget.setState('playing');
    expect(playButton()?.getAttribute('aria-label')).toBe('Pause page audio');

    widget.setState('paused');
    expect(playButton()?.getAttribute('aria-label')).toBe('Resume page audio');
  });

  it('swaps to a pause SVG while playing and back to play otherwise', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    expect(playButton()?.querySelector('svg[data-icon="play"]')).not.toBeNull();

    widget.setState('playing');
    expect(playButton()?.querySelector('svg[data-icon="pause"]')).not.toBeNull();

    widget.setState('paused');
    expect(playButton()?.querySelector('svg[data-icon="play"]')).not.toBeNull();
  });

  it('fires onPlay from idle, onPause while playing, onResume while paused', () => {
    const onPlay = vi.fn();
    const onPause = vi.fn();
    const onResume = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onPlay, onPause, onResume });
    widget.mount();
    const btn = playButton();
    if (!btn) throw new Error('play button missing');

    btn.click();
    expect(onPlay).toHaveBeenCalled();

    widget.setState('playing');
    btn.click();
    expect(onPause).toHaveBeenCalled();

    widget.setState('paused');
    btn.click();
    expect(onResume).toHaveBeenCalled();
  });
});

describe('DitaWidget keyboard focus', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('moves focus to the play control', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();

    widget.focus();

    const root = document.querySelector('#dita-widget-host')?.shadowRoot;
    expect(root?.activeElement).toBe(root?.querySelector('.dita-btn-play'));
  });

  it('exposes its controls as a named region', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();

    const controls = document
      .querySelector('#dita-widget-host')
      ?.shadowRoot?.querySelector('.dita-widget');
    expect(controls?.getAttribute('role')).toBe('region');
    expect(controls?.getAttribute('aria-label')).toBe('DitaAi playback controls');
  });
});

describe('DitaWidget secondary controls', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('labels icon-only actions by their page-audio purpose', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    const root = document.querySelector('#dita-widget-host')?.shadowRoot;

    expect(root?.querySelector('.dita-btn-stop')?.getAttribute('aria-label')).toBe(
      'Stop page audio',
    );
    expect(root?.querySelector('.dita-btn-settings')?.getAttribute('aria-label')).toBe(
      'Choose narration voice',
    );
    expect(root?.querySelector('.dita-btn-close')?.getAttribute('aria-label')).toBe('Close DitaAi');
  });
});

describe('DitaWidget Select button', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function selectButton(): HTMLButtonElement | null {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    return root?.querySelector<HTMLButtonElement>('.dita-btn-select') ?? null;
  }

  it('renders a Select button', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();

    const btn = selectButton();
    expect(btn).not.toBeNull();
    expect(btn?.getAttribute('aria-label')).toBe('Select what to read');
  });

  it('fires onSelect callback when clicked', () => {
    const onSelect = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onSelect });
    widget.mount();

    selectButton()?.click();
    expect(onSelect).toHaveBeenCalled();
  });
});

describe('DitaWidget selection chip', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function chip(): HTMLElement | null {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    return root?.querySelector<HTMLElement>('.dita-selection-chip') ?? null;
  }

  function chipLabel(): HTMLElement | null {
    return chip()?.querySelector<HTMLElement>('.dita-selection-chip-label') ?? null;
  }

  function removeButton(): HTMLButtonElement | null {
    return chip()?.querySelector<HTMLButtonElement>('.dita-selection-chip-remove') ?? null;
  }

  it('is hidden when no selection is active', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    expect(chip()?.hidden).toBe(true);
  });

  it('shows the active selector text when a selection is given', () => {
    const widget = new DitaWidget(noopCallbacks, { selection: 'article.post' });
    widget.mount();
    expect(chip()?.hidden).toBe(false);
    expect(chipLabel()?.textContent).toBe('article.post');
    expect(removeButton()?.getAttribute('aria-label')).toBe('Clear read selection');
  });

  it('remove control fires onClearSelection', () => {
    const onClearSelection = vi.fn();
    const widget = new DitaWidget(
      { ...noopCallbacks, onClearSelection },
      { selection: 'article.post' },
    );
    widget.mount();
    removeButton()?.click();
    expect(onClearSelection).toHaveBeenCalled();
  });

  it('setSelection updates the label and visibility at runtime', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    expect(chip()?.hidden).toBe(true);

    widget.setSelection('main > div');
    expect(chip()?.hidden).toBe(false);
    expect(chipLabel()?.textContent).toBe('main > div');

    widget.setSelection(null);
    expect(chip()?.hidden).toBe(true);
  });
});

describe('DitaWidget Dictionary button', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function dictButton(): HTMLButtonElement | null {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    return root?.querySelector<HTMLButtonElement>('.dita-btn-dict') ?? null;
  }

  it('renders a Dictionary button with an aria-label', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();

    const btn = dictButton();
    expect(btn).not.toBeNull();
    expect(btn?.getAttribute('aria-label')).toBe('Manage pronunciations');
  });

  it('fires onDictionary callback when clicked', () => {
    const onDictionary = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onDictionary });
    widget.mount();

    dictButton()?.click();
    expect(onDictionary).toHaveBeenCalled();
  });
});

describe('DitaWidget paragraph picker', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  function picker(): HTMLSelectElement | null {
    const root = document.querySelector('#dita-widget-host')?.shadowRoot ?? null;
    return root?.querySelector<HTMLSelectElement>('.dita-paragraphs') ?? null;
  }

  it('is hidden until paragraphs are provided', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    expect(picker()?.hidden).toBe(true);
  });

  it('renders one option per paragraph with an aria-label', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    widget.setParagraphs([
      { value: 0, label: '¶ 1 — First paragraph' },
      { value: 1, label: '¶ 2 — Second paragraph' },
    ]);

    const select = picker();
    expect(select?.hidden).toBe(false);
    expect(select?.getAttribute('aria-label')).toBe('Jump to paragraph');
    expect(select?.options.length).toBe(2);
    expect(select?.options[0]?.textContent).toBe('¶ 1 — First paragraph');
    expect(select?.options[0]?.value).toBe('0');
  });

  it('hides again when set to null', () => {
    const widget = new DitaWidget(noopCallbacks);
    widget.mount();
    widget.setParagraphs([{ value: 0, label: '¶ 1' }]);
    expect(picker()?.hidden).toBe(false);

    widget.setParagraphs(null);
    expect(picker()?.hidden).toBe(true);
  });

  it('fires onJumpToParagraph with the numeric value on change', () => {
    const onJumpToParagraph = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onJumpToParagraph });
    widget.mount();
    widget.setParagraphs([
      { value: 0, label: '¶ 1' },
      { value: 1, label: '¶ 2' },
      { value: 2, label: '¶ 3' },
    ]);
    const select = picker();
    if (!select) throw new Error('picker missing');

    select.value = '2';
    select.dispatchEvent(new Event('change', { bubbles: true }));

    expect(onJumpToParagraph).toHaveBeenCalledWith(2);
  });

  it('setCurrentParagraph updates the selection without firing the callback', () => {
    const onJumpToParagraph = vi.fn();
    const widget = new DitaWidget({ ...noopCallbacks, onJumpToParagraph });
    widget.mount();
    widget.setParagraphs([
      { value: 0, label: '¶ 1' },
      { value: 1, label: '¶ 2' },
      { value: 2, label: '¶ 3' },
    ]);

    widget.setCurrentParagraph(2);

    expect(picker()?.value).toBe('2');
    expect(onJumpToParagraph).not.toHaveBeenCalled();
  });
});
