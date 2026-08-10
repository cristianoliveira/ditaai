// Page-level keyboard shortcuts. Listens for keydown on the document and
// dispatches bound actions. Keys inside editable fields are ignored so typing
// is never hijacked.

import type { ShortcutAction, ShortcutMap } from '../domain/shortcuts/shortcuts';
import { comboMatchesEvent } from '../domain/shortcuts/shortcuts';

export class ShortcutController {
  private map: ShortcutMap;
  private readonly onKeyDown = (event: Event): void => {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.repeat) return;
    if (isEditableTarget(keyboardEvent.target)) return;

    for (const action of Object.keys(this.map) as ShortcutAction[]) {
      if (comboMatchesEvent(this.map[action], keyboardEvent)) {
        keyboardEvent.preventDefault();
        this.actions[action]();
        return;
      }
    }
  };

  constructor(
    private readonly actions: Record<ShortcutAction, () => void>,
    map: ShortcutMap,
    private readonly target: EventTarget = document,
  ) {
    this.map = map;
    this.enable();
  }

  enable(): void {
    this.target.addEventListener('keydown', this.onKeyDown);
  }

  disable(): void {
    this.target.removeEventListener('keydown', this.onKeyDown);
  }

  /** Apply a newly loaded/edited keymap without re-wiring the listener. */
  update(map: ShortcutMap): void {
    this.map = map;
  }
}

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target instanceof HTMLInputElement) return true;
  if (target instanceof HTMLTextAreaElement) return true;
  if (target instanceof HTMLSelectElement) return true;
  return target.isContentEditable;
}
