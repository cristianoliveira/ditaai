// Keyboard-shortcut editor for the voices page. Renders one row per action;
// clicking Change captures the next key combo. Validation (invalid combos,
// duplicates) happens here — the caller only receives valid, unique combos.

import {
  type KeyCombo,
  SHORTCUT_ACTIONS,
  SHORTCUT_ACTION_LABELS,
  type ShortcutAction,
  type ShortcutMap,
  comboFromEvent,
  findConflicts,
} from '../../domain/shortcuts/shortcuts';

export interface ShortcutsPanelCallbacks {
  onCapture(action: ShortcutAction, combo: KeyCombo): void;
  onReset(): void;
}

const MODIFIER_KEYS = new Set(['Control', 'Alt', 'Shift', 'Meta']);

export class ShortcutsPanel {
  private map: ShortcutMap;
  private recording: ShortcutAction | null = null;
  private error: string | null = null;
  private element: HTMLElement | null = null;
  private readonly onKeyDown = (event: KeyboardEvent): void => {
    if (this.recording === null) return;
    if (MODIFIER_KEYS.has(event.key)) return; // wait for the actual key
    event.preventDefault();
    event.stopPropagation();

    const combo = comboFromEvent(event);
    if (combo === null) {
      this.error = 'Press a valid key combination.';
    } else if (findConflicts({ ...this.map, [this.recording]: combo }).length > 0) {
      this.error = `${combo} is already bound to another action.`;
    } else {
      this.callbacks.onCapture(this.recording, combo);
      this.recording = null;
      this.error = null;
      return;
    }
    this.render();
  };

  constructor(
    private readonly callbacks: ShortcutsPanelCallbacks,
    map: ShortcutMap,
  ) {
    this.map = map;
  }

  mount(): HTMLElement {
    if (this.element) return this.element;
    document.addEventListener('keydown', this.onKeyDown);
    this.render();
    if (!this.element) throw new Error('panel did not render');
    return this.element;
  }

  destroy(): void {
    document.removeEventListener('keydown', this.onKeyDown);
    this.element?.remove();
    this.element = null;
  }

  update(map: ShortcutMap): void {
    this.map = map;
    this.recording = null;
    this.error = null;
    this.render();
  }

  private render(): void {
    const root = document.createElement('div');
    root.className = 'shortcuts-panel';

    const list = document.createElement('div');
    list.className = 'shortcuts-list';
    for (const action of SHORTCUT_ACTIONS) {
      list.append(this.row(action));
    }
    root.append(list);

    if (this.error) {
      const error = document.createElement('div');
      error.className = 'shortcut-error';
      error.textContent = this.error;
      root.append(error);
    }

    const reset = document.createElement('button');
    reset.className = 'btn shortcut-reset';
    reset.textContent = 'Reset to defaults';
    reset.addEventListener('click', () => this.callbacks.onReset());
    root.append(reset);

    this.element?.replaceWith(root);
    this.element = root;
  }

  private row(action: ShortcutAction): HTMLElement {
    const row = document.createElement('div');
    row.className = this.recording === action ? 'shortcut-row recording' : 'shortcut-row';

    const label = document.createElement('span');
    label.className = 'shortcut-action-label';
    label.textContent = SHORTCUT_ACTION_LABELS[action];

    const combo = document.createElement('span');
    combo.className = 'shortcut-combo';
    combo.textContent = this.recording === action ? 'Press keys…' : this.map[action];

    const change = document.createElement('button');
    change.className = 'btn shortcut-change';
    change.textContent = this.recording === action ? 'Cancel' : 'Change';
    change.addEventListener('click', () => {
      this.recording = this.recording === action ? null : action;
      this.error = null;
      this.render();
    });

    row.append(label, combo, change);
    return row;
  }
}
