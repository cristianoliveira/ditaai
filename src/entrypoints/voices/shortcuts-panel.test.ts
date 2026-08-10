// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { DEFAULT_SHORTCUTS, SHORTCUT_ACTION_LABELS } from '../../domain/shortcuts/shortcuts';
import { ShortcutsPanel } from './shortcuts-panel';

function pressKeys(keys: Partial<KeyboardEvent>, code: string): void {
  document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, code, ...keys }));
}

function rows(): NodeListOf<HTMLElement> {
  return document.querySelectorAll<HTMLElement>('.shortcut-row');
}

function rowAt(index: number): HTMLElement {
  const row = rows()[index];
  if (!row) throw new Error(`row ${index} missing`);
  return row;
}

function comboCell(row: HTMLElement): HTMLElement {
  const cell = row.querySelector<HTMLElement>('.shortcut-combo');
  if (!cell) throw new Error('combo cell missing');
  return cell;
}

function changeButton(row: HTMLElement): HTMLButtonElement {
  const button = row.querySelector<HTMLButtonElement>('.shortcut-change');
  if (!button) throw new Error('change button missing');
  return button;
}

describe('ShortcutsPanel', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('renders a row per action with label and current combo', () => {
    const panel = new ShortcutsPanel({ onCapture: vi.fn(), onReset: vi.fn() }, DEFAULT_SHORTCUTS);
    document.body.append(panel.mount());

    expect(rows()).toHaveLength(Object.keys(DEFAULT_SHORTCUTS).length);
    const first = rowAt(0);
    expect(first.textContent).toContain(SHORTCUT_ACTION_LABELS.togglePlay);
    expect(comboCell(first).textContent).toBe(DEFAULT_SHORTCUTS.togglePlay);
  });

  it('records a new combo and reports it once a real key is pressed', () => {
    const onCapture = vi.fn();
    const panel = new ShortcutsPanel({ onCapture, onReset: vi.fn() }, DEFAULT_SHORTCUTS);
    document.body.append(panel.mount());

    changeButton(rowAt(1)).click(); // stop

    expect(comboCell(rowAt(1)).textContent).toContain('Press');

    // modifier-only press — still recording, nothing captured
    pressKeys({ key: 'Shift', shiftKey: true }, 'ShiftLeft');
    expect(onCapture).not.toHaveBeenCalled();

    pressKeys({ key: 'x', altKey: true, shiftKey: true }, 'KeyX');
    expect(onCapture).toHaveBeenCalledWith('stop', 'Alt+Shift+X');
  });

  it('cancels recording when the change button is clicked again', () => {
    const panel = new ShortcutsPanel({ onCapture: vi.fn(), onReset: vi.fn() }, DEFAULT_SHORTCUTS);
    document.body.append(panel.mount());

    const row = () => rowAt(0);
    changeButton(row()).click();
    expect(comboCell(row()).textContent).toContain('Press');

    changeButton(row()).click();
    expect(comboCell(row()).textContent).toBe(DEFAULT_SHORTCUTS.togglePlay);
  });

  it('rejects a combo already bound to another action', () => {
    const onCapture = vi.fn();
    const panel = new ShortcutsPanel({ onCapture, onReset: vi.fn() }, DEFAULT_SHORTCUTS);
    document.body.append(panel.mount());

    changeButton(rowAt(1)).click(); // stop
    pressKeys({ key: 'p', altKey: true, shiftKey: true }, 'KeyP'); // togglePlay's combo

    expect(onCapture).not.toHaveBeenCalled();
    expect(comboCell(rowAt(1)).textContent).toContain('Press'); // still recording
    expect(document.querySelector('.shortcut-error')?.textContent).toMatch(/already/i);
  });

  it('rejects an invalid combo', () => {
    const onCapture = vi.fn();
    const panel = new ShortcutsPanel({ onCapture, onReset: vi.fn() }, DEFAULT_SHORTCUTS);
    document.body.append(panel.mount());

    changeButton(rowAt(0)).click();
    pressKeys({ key: '' }, 'Unidentified');

    expect(onCapture).not.toHaveBeenCalled();
    expect(document.querySelector('.shortcut-error')).not.toBeNull();
  });

  it('re-renders with an updated map', () => {
    const onCapture = vi.fn();
    const panel = new ShortcutsPanel({ onCapture, onReset: vi.fn() }, DEFAULT_SHORTCUTS);
    document.body.append(panel.mount());

    panel.update({ ...DEFAULT_SHORTCUTS, togglePlay: 'Alt+Shift+X' });

    expect(comboCell(rowAt(0)).textContent).toBe('Alt+Shift+X');
  });

  it('fires onReset from the reset button', () => {
    const onReset = vi.fn();
    const panel = new ShortcutsPanel({ onCapture: vi.fn(), onReset }, DEFAULT_SHORTCUTS);
    document.body.append(panel.mount());

    const reset = document.querySelector<HTMLButtonElement>('.shortcut-reset');
    if (!reset) throw new Error('reset button missing');
    reset.click();

    expect(onReset).toHaveBeenCalledOnce();
  });
});
