// @vitest-environment happy-dom
import { afterEach, describe, expect, it, vi } from 'vitest';
import type { ShortcutAction, ShortcutMap } from '../domain/shortcuts/shortcuts';
import { DEFAULT_SHORTCUTS } from '../domain/shortcuts/shortcuts';
import { ShortcutController } from './shortcuts';

function press(event: Partial<KeyboardEvent>): void {
  document.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, ...event }));
}

describe('ShortcutController', () => {
  const controllers: ShortcutController[] = [];

  afterEach(() => {
    for (const controller of controllers) controller.disable();
    controllers.length = 0;
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  function createController(
    actions: Partial<Record<ShortcutAction, () => void>>,
    map: ShortcutMap = DEFAULT_SHORTCUTS,
  ): ShortcutController {
    const controller = new ShortcutController(actions as Record<ShortcutAction, () => void>, map);
    controllers.push(controller);
    return controller;
  }

  it('dispatches the action bound to the pressed combo', () => {
    const actions: Partial<Record<ShortcutAction, () => void>> = { togglePlay: vi.fn() };
    void createController(actions);

    press({ key: 'p', altKey: true, shiftKey: true });

    expect(actions.togglePlay).toHaveBeenCalledOnce();
  });

  it('does not dispatch for non-matching combos', () => {
    const actions: Partial<Record<ShortcutAction, () => void>> = {
      togglePlay: vi.fn(),
      stop: vi.fn(),
    };
    void createController(actions);

    press({ key: 'p', altKey: true }); // missing Shift
    press({ key: 'x', altKey: true, shiftKey: true }); // unbound key

    expect(actions.togglePlay).not.toHaveBeenCalled();
    expect(actions.stop).not.toHaveBeenCalled();
  });

  it('ignores key repeats', () => {
    const actions: Partial<Record<ShortcutAction, () => void>> = { volumeUp: vi.fn() };
    void createController(actions);

    press({ key: 'ArrowUp', altKey: true, shiftKey: true, repeat: true });

    expect(actions.volumeUp).not.toHaveBeenCalled();
  });

  it('ignores events inside editable fields', () => {
    const input = document.createElement('input');
    document.body.append(input);
    const actions: Partial<Record<ShortcutAction, () => void>> = { togglePlay: vi.fn() };
    void createController(actions);

    input.dispatchEvent(
      new KeyboardEvent('keydown', { bubbles: true, key: 'p', altKey: true, shiftKey: true }),
    );

    expect(actions.togglePlay).not.toHaveBeenCalled();
  });

  it('ignores events inside contenteditable elements', () => {
    const editor = document.createElement('div');
    editor.contentEditable = 'true';
    document.body.append(editor);
    const actions: Partial<Record<ShortcutAction, () => void>> = { togglePlay: vi.fn() };
    void createController(actions);

    editor.dispatchEvent(
      new KeyboardEvent('keydown', { bubbles: true, key: 'p', altKey: true, shiftKey: true }),
    );

    expect(actions.togglePlay).not.toHaveBeenCalled();
  });

  it('uses an updated keymap after update()', () => {
    const actions: Partial<Record<ShortcutAction, () => void>> = {
      togglePlay: vi.fn(),
      stop: vi.fn(),
    };
    const controller = createController(actions, {
      ...DEFAULT_SHORTCUTS,
      togglePlay: 'Alt+Shift+X',
    });

    controller.update({ ...DEFAULT_SHORTCUTS, togglePlay: 'Alt+Shift+X' });

    press({ key: 'p', altKey: true, shiftKey: true });
    press({ key: 'x', altKey: true, shiftKey: true });

    expect(actions.togglePlay).toHaveBeenCalledOnce();
    expect(actions.stop).not.toHaveBeenCalled();
  });

  it('stops listening after disable()', () => {
    const actions: Partial<Record<ShortcutAction, () => void>> = { togglePlay: vi.fn() };
    const controller = createController(actions);
    controller.disable();

    press({ key: 'p', altKey: true, shiftKey: true });

    expect(actions.togglePlay).not.toHaveBeenCalled();
  });
});
