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
