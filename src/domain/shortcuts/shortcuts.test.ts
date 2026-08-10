import { describe, expect, it } from 'vitest';
import {
  DEFAULT_SHORTCUTS,
  SHORTCUT_ACTIONS,
  SHORTCUT_ACTION_LABELS,
  comboFromEvent,
  comboMatchesEvent,
  findConflicts,
  mergeShortcuts,
  normalizeCombo,
} from './shortcuts';

function keyEvent(overrides: Partial<KeyboardEvent> = {}): KeyboardEvent {
  return {
    key: 'p',
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    repeat: false,
    ...overrides,
  } as KeyboardEvent;
}

describe('normalizeCombo', () => {
  it('normalizes modifier order and case to a canonical form', () => {
    expect(normalizeCombo('alt+shift+p')).toBe('Alt+Shift+P');
    expect(normalizeCombo('Shift+Alt+P')).toBe('Alt+Shift+P');
    expect(normalizeCombo('CTRL+p')).toBe('Control+P');
  });

  it('maps common aliases', () => {
    expect(normalizeCombo('cmd+p')).toBe('Meta+P');
    expect(normalizeCombo('ctrl+shift+left')).toBe('Control+Shift+ArrowLeft');
    expect(normalizeCombo('space')).toBe('Space');
  });

  it('returns null for invalid combos', () => {
    expect(normalizeCombo('')).toBeNull();
    expect(normalizeCombo('alt++shift')).toBeNull();
    expect(normalizeCombo('P+Q')).toBeNull();
    expect(normalizeCombo('+P')).toBeNull();
  });
});

describe('comboMatchesEvent', () => {
  it('requires every modifier to be held exactly', () => {
    const combo = normalizeCombo('Alt+Shift+P');
    expect(combo).toBe('Alt+Shift+P');
    expect(comboMatchesEvent('Alt+Shift+P', keyEvent({ altKey: true, shiftKey: true }))).toBe(true);
    expect(comboMatchesEvent('Alt+Shift+P', keyEvent({ altKey: true }))).toBe(false);
    expect(comboMatchesEvent('Alt+Shift+P', keyEvent({ shiftKey: true }))).toBe(false);
    expect(
      comboMatchesEvent('Alt+Shift+P', keyEvent({ altKey: true, shiftKey: true, ctrlKey: true })),
    ).toBe(false);
  });

  it('matches letters case-insensitively', () => {
    expect(comboMatchesEvent('Alt+P', keyEvent({ altKey: true, key: 'P' }))).toBe(true);
    expect(comboMatchesEvent('Alt+P', keyEvent({ altKey: true, key: 'p' }))).toBe(true);
  });

  it('matches special keys by event.key', () => {
    expect(
      comboMatchesEvent(
        'Alt+Shift+ArrowLeft',
        keyEvent({ altKey: true, shiftKey: true, key: 'ArrowLeft' }),
      ),
    ).toBe(true);
    expect(
      comboMatchesEvent(
        'Alt+Shift+ArrowLeft',
        keyEvent({ altKey: true, shiftKey: true, key: 'ArrowRight' }),
      ),
    ).toBe(false);
    expect(comboMatchesEvent('Space', keyEvent({ key: ' ' }))).toBe(true);
  });

  it('distinguishes Meta from Control', () => {
    expect(comboMatchesEvent('Meta+P', keyEvent({ metaKey: true }))).toBe(true);
    expect(comboMatchesEvent('Meta+P', keyEvent({ ctrlKey: true }))).toBe(false);
  });
});

describe('comboFromEvent', () => {
  function fromCode(
    code: string,
    mods: Partial<Pick<KeyboardEvent, 'ctrlKey' | 'altKey' | 'shiftKey' | 'metaKey'>> = {},
  ) {
    return comboFromEvent({
      code,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      ...mods,
    });
  }

  it('builds a canonical combo from the physical code and held modifiers', () => {
    expect(fromCode('KeyP', { altKey: true, shiftKey: true })).toBe('Alt+Shift+P');
    expect(fromCode('Space', { altKey: true, shiftKey: true })).toBe('Alt+Shift+Space');
    expect(fromCode('ArrowLeft', { altKey: true, shiftKey: true })).toBe('Alt+Shift+ArrowLeft');
    expect(fromCode('Digit5', { altKey: true, shiftKey: true })).toBe('Alt+Shift+5');
  });

  it('returns null for modifier keys and unknown codes', () => {
    expect(fromCode('ShiftLeft', { shiftKey: true })).toBeNull();
    expect(fromCode('AltLeft', { altKey: true })).toBeNull();
    expect(fromCode('ControlLeft', { ctrlKey: true })).toBeNull();
    expect(fromCode('MetaLeft', { metaKey: true })).toBeNull();
    expect(fromCode('Semicolon')).toBeNull();
    expect(fromCode('')).toBeNull();
  });
});

describe('defaults', () => {
  it('binds a keyboard shortcut for focusing playback controls', () => {
    expect(DEFAULT_SHORTCUTS.focusWidget).toBe('Alt+Shift+F');
    expect(SHORTCUT_ACTION_LABELS.focusWidget).toBe('Focus playback controls');
  });

  it('covers every action', () => {
    for (const action of SHORTCUT_ACTIONS) {
      expect(DEFAULT_SHORTCUTS[action]).toBeTruthy();
    }
  });

  it('has no duplicate combos', () => {
    expect(findConflicts(DEFAULT_SHORTCUTS)).toEqual([]);
  });

  it('defaults are canonical', () => {
    for (const combo of Object.values(DEFAULT_SHORTCUTS)) {
      expect(normalizeCombo(combo)).toBe(combo);
    }
  });
});

describe('findConflicts', () => {
  it('reports combos bound to more than one action', () => {
    const map = {
      ...DEFAULT_SHORTCUTS,
      stop: DEFAULT_SHORTCUTS.togglePlay,
    };
    const conflicts = findConflicts(map);
    expect(conflicts).toHaveLength(1);
    expect(conflicts[0]?.combo).toBe(DEFAULT_SHORTCUTS.togglePlay);
    expect(conflicts[0]?.actions.sort()).toEqual(['stop', 'togglePlay']);
  });

  it('returns [] when all combos are unique', () => {
    expect(findConflicts({ togglePlay: 'Alt+P', stop: 'Alt+S' })).toEqual([]);
  });
});

describe('mergeShortcuts', () => {
  it('fills missing actions with defaults', () => {
    const merged = mergeShortcuts({ togglePlay: 'alt+p' });
    expect(merged.togglePlay).toBe('Alt+P');
    expect(merged.stop).toBe(DEFAULT_SHORTCUTS.stop);
    expect(merged.toggleWidget).toBe(DEFAULT_SHORTCUTS.toggleWidget);
  });

  it('drops unknown actions and invalid combos, keeping valid overrides', () => {
    const merged = mergeShortcuts({
      togglePlay: 'alt+p',
      stop: 'not a combo',
      volumeUp: 'Alt+Shift+ArrowUp',
      deleteEverything: 'Alt+X',
    });
    expect(merged.togglePlay).toBe('Alt+P');
    expect(merged.stop).toBe(DEFAULT_SHORTCUTS.stop);
    expect(merged.volumeUp).toBe('Alt+Shift+ArrowUp');
  });

  it('returns all defaults for empty input', () => {
    const merged = mergeShortcuts(undefined);
    expect(merged).toEqual(DEFAULT_SHORTCUTS);
  });

  it('ignores non-object input', () => {
    expect(mergeShortcuts('garbage')).toEqual(DEFAULT_SHORTCUTS);
    expect(mergeShortcuts(null)).toEqual(DEFAULT_SHORTCUTS);
  });
});
