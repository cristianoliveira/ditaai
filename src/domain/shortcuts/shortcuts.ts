// Keyboard shortcuts for narration control. Pure — no DOM, no Chrome APIs.
// The content script dispatches keydown events against combos matched here.

export const SHORTCUT_ACTIONS = [
  'togglePlay',
  'stop',
  'jumpPrev',
  'jumpNext',
  'volumeUp',
  'volumeDown',
  'toggleWidget',
  'focusWidget',
] as const;

export type ShortcutAction = (typeof SHORTCUT_ACTIONS)[number];

/** Canonical combo, e.g. `"Alt+Shift+P"`. Modifiers first (fixed order), then the key. */
export type KeyCombo = string;

/** Full keymap — every action bound to a canonical combo. */
export type ShortcutMap = Record<ShortcutAction, KeyCombo>;

export const SHORTCUT_ACTION_LABELS: Record<ShortcutAction, string> = {
  togglePlay: 'Play / Pause',
  stop: 'Stop',
  jumpPrev: 'Previous paragraph',
  jumpNext: 'Next paragraph',
  volumeUp: 'Volume up',
  volumeDown: 'Volume down',
  toggleWidget: 'Show / hide widget',
  focusWidget: 'Focus playback controls',
};

export const DEFAULT_SHORTCUTS: ShortcutMap = {
  togglePlay: 'Alt+Shift+P',
  stop: 'Alt+Shift+S',
  jumpPrev: 'Alt+Shift+ArrowLeft',
  jumpNext: 'Alt+Shift+ArrowRight',
  volumeUp: 'Alt+Shift+ArrowUp',
  volumeDown: 'Alt+Shift+ArrowDown',
  toggleWidget: 'Alt+Shift+W',
  focusWidget: 'Alt+Shift+F',
};

const MODIFIER_ORDER = ['Control', 'Alt', 'Shift', 'Meta'] as const;

/** Named keys whose canonical combo name equals their physical event.code. */
const NAMED_CODES = new Set([
  'Space',
  'Enter',
  'Tab',
  'Backspace',
  'Delete',
  'Insert',
  'Home',
  'End',
  'PageUp',
  'PageDown',
  'Escape',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
]);

const MODIFIER_ALIASES: Record<string, string> = {
  ctrl: 'Control',
  control: 'Control',
  alt: 'Alt',
  option: 'Alt',
  shift: 'Shift',
  meta: 'Meta',
  cmd: 'Meta',
  command: 'Meta',
  win: 'Meta',
  windows: 'Meta',
};

/** Named keys that `event.key` reports in this exact form (plus aliases). */
const KEY_ALIASES: Record<string, string> = {
  space: 'Space',
  esc: 'Escape',
  escape: 'Escape',
  enter: 'Enter',
  return: 'Enter',
  tab: 'Tab',
  backspace: 'Backspace',
  delete: 'Delete',
  home: 'Home',
  end: 'End',
  pageup: 'PageUp',
  pagedown: 'PageDown',
  insert: 'Insert',
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight',
};

/** Parse a user-supplied combo into canonical form, or null when invalid. */
export function normalizeCombo(input: string): KeyCombo | null {
  const parts = input.split('+').map((part) => part.trim());
  if (parts.length === 0 || parts.some((part) => part === '')) return null;

  const modifiers = new Set<string>();
  let key: string | null = null;
  for (const raw of parts) {
    const alias = MODIFIER_ALIASES[raw.toLowerCase()];
    if (alias) {
      modifiers.add(alias);
      continue;
    }
    if (key !== null) return null; // more than one non-modifier key
    key = normalizeKey(raw);
  }
  if (key === null) return null;

  const mods = MODIFIER_ORDER.filter((mod) => modifiers.has(mod));
  return [...mods, key].join('+');
}

function normalizeKey(raw: string): string | null {
  const trimmed = raw.trim();
  if (trimmed === '') return null;
  const alias = KEY_ALIASES[trimmed.toLowerCase()];
  if (alias) return alias;
  if (trimmed.length === 1) return trimmed.toUpperCase();
  // Named keys like "ArrowLeft" or "F5" — anything else (spaces, punctuation)
  // is not a real key name.
  return /^[A-Za-z][A-Za-z0-9]*$/.test(trimmed) ? trimmed : null;
}

/** Physical-code name for a canonical combo key, or null when unmappable. */
function codeOf(comboKey: string): string | null {
  if (/^[A-Z]$/.test(comboKey)) return `Key${comboKey}`;
  if (/^\d$/.test(comboKey)) return `Digit${comboKey}`;
  if (/^F\d{1,2}$/.test(comboKey)) return comboKey;
  if (NAMED_CODES.has(comboKey)) return comboKey;
  return null;
}

/** Canonical combo key from a physical event.code, or null when unmappable. */
function keyFromCode(code: string): string | null {
  const letter = /^Key([A-Z])$/.exec(code);
  if (letter) return letter[1] ?? null;
  const digit = /^Digit(\d)$/.exec(code);
  if (digit) return digit[1] ?? null;
  if (/^F\d{1,2}$/.test(code)) return code;
  if (NAMED_CODES.has(code)) return code;
  return null;
}

/** Does a keydown event press exactly this combo (modifiers + key)? */
export function comboMatchesEvent(
  combo: KeyCombo,
  event: Pick<KeyboardEvent, 'key' | 'code' | 'ctrlKey' | 'altKey' | 'shiftKey' | 'metaKey'>,
): boolean {
  const parts = combo.split('+');
  const comboKey = parts.at(-1) ?? '';
  const mods = parts.slice(0, -1);

  const pressed = {
    Control: event.ctrlKey,
    Alt: event.altKey,
    Shift: event.shiftKey,
    Meta: event.metaKey,
  };
  if (mods.some((mod) => !pressed[mod as keyof typeof pressed])) return false;
  if (
    Object.keys(pressed).some((mod) => !mods.includes(mod) && pressed[mod as keyof typeof pressed])
  ) {
    return false;
  }

  // Physical-key match first: on macOS, Option changes event.key ("π" for
  // Option+P), so key-based matching would silently fail. event.code stays
  // layout- and Option-independent.
  const code = codeOf(comboKey);
  if (code !== null && code === event.code) return true;

  // Fallback for synthetic events without a code and unmappable keys.
  if (comboKey === 'Space') return event.key === ' ';
  if (comboKey.length === 1) return event.key.toUpperCase() === comboKey;
  return event.key === comboKey;
}

/** Build a canonical combo from a real keydown event (for capture UIs). Uses
 * the physical code so Option/layout quirks don't distort the binding.
 * Modifier-only presses yield null — the user still has to choose a key. */
export function comboFromEvent(
  event: Pick<KeyboardEvent, 'code' | 'ctrlKey' | 'altKey' | 'shiftKey' | 'metaKey'>,
): KeyCombo | null {
  const mods = [
    event.ctrlKey && 'Control',
    event.altKey && 'Alt',
    event.shiftKey && 'Shift',
    event.metaKey && 'Meta',
  ].filter(Boolean) as string[];
  const key = keyFromCode(event.code);
  if (key === null) return null;
  return normalizeCombo([...mods, key].join('+'));
}

/** Combos bound to more than one action — must not exist in a saved keymap. */
export function findConflicts(
  map: Partial<Record<ShortcutAction, KeyCombo>>,
): Array<{ combo: KeyCombo; actions: ShortcutAction[] }> {
  const byCombo = new Map<KeyCombo, ShortcutAction[]>();
  for (const [action, combo] of Object.entries(map) as Array<[ShortcutAction, KeyCombo]>) {
    const list = byCombo.get(combo) ?? [];
    list.push(action);
    byCombo.set(combo, list);
  }
  return [...byCombo.entries()]
    .filter(([, actions]) => actions.length > 1)
    .map(([combo, actions]) => ({ combo, actions }));
}

/** Merge a possibly partial/stale stored map over defaults. Unknown actions
 * and invalid combos are dropped; every action ends up with a valid combo. */
export function mergeShortcuts(
  stored: unknown,
  defaults: ShortcutMap = DEFAULT_SHORTCUTS,
): ShortcutMap {
  const merged = { ...defaults };
  if (typeof stored !== 'object' || stored === null) return merged;
  for (const action of SHORTCUT_ACTIONS) {
    const value = (stored as Record<string, unknown>)[action];
    if (typeof value !== 'string') continue;
    const normalized = normalizeCombo(value);
    if (normalized !== null) merged[action] = normalized;
  }
  return merged;
}
