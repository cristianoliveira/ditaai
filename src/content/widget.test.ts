// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
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
