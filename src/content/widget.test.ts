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
