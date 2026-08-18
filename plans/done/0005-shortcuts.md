---
id: TASK-0005
title: "Keyboard shortcuts (play/pause/jump/volume/widget)"
status: done
depends_on: []
priority: normal
tags: []
---

> **Done.** Verified shipped: domain/shortcuts, ShortcutController, ChromeShortcutStorage, voices page shortcuts-panel + tests. Original plan below.

## Keyboard Shortcuts

As a user, I want to control narration with the keyboard so I can play, pause,
jump, and adjust volume without reaching for the widget.

## Acceptance Criteria

- Shortcuts work on any page (page-level keydown in the content script), even
  when the widget is closed
- Defaults use modifier combos (`Alt+Shift+…`) so typing and page scrolling are
  never hijacked; keys are ignored while focus is in an editable field
- Actions: `togglePlay`, `stop`, `jumpPrev`, `jumpNext`, `volumeUp`,
  `volumeDown`, `toggleWidget`
- Keymap is user-configurable, persisted per extension in `chrome.storage.local`
  under `shortcuts`, and editable from a "Keyboard shortcuts" section on the
  voices page (already reachable via the widget Settings button)
- Combos must be unique — duplicate bindings are rejected at save time
- Volume shortcuts sync the widget slider; playback state and highlights behave
  exactly like the widget controls

## Design

```
domain/shortcuts/          pure: action list, defaults, normalize, match, conflicts
infra/chrome/              ChromeShortcutStorage (load/save/merge with defaults)
content/shortcuts.ts       ShortcutController — document keydown dispatcher
entrypoints/content.ts     wires actions to the same playback functions as the widget
entrypoints/voices/        shortcuts section: capture input + reset-to-defaults
```

Matching is canonical: `normalizeCombo("alt+shift+p")` → `"Alt+Shift+P"`.
`comboMatchesEvent` compares modifiers exactly and the key via `event.key`
(Arrow keys, Space, letters). The controller ignores `event.repeat` and any
target inside `input`/`textarea`/`contenteditable`.

Stored map is merged over defaults (`mergeShortcuts`) so a partial or stale map
never loses an action; unknown actions and invalid combos are dropped.

## Implementation steps (TDD)

1. `domain/shortcuts/shortcuts.ts` — types, `DEFAULT_SHORTCUTS`,
   `normalizeCombo`, `comboMatchesEvent`, `findConflicts`, `mergeShortcuts`
   → `shortcuts.test.ts`: normalize, match (modifiers/arrows/space), default
   uniqueness, merge partial/stale maps, conflict detection
2. `infra/chrome/shortcut-storage.ts` — `ChromeShortcutStorage.load/save`
   → test: loads stored map, falls back to defaults, saves
3. `content/shortcuts.ts` — `ShortcutController` with `enable/disable/update`
   → test: dispatches on match, ignores editable targets + repeats + unknown
   combos, detaches on disable
4. `content/widget.ts` — `setVolume(volume)` to mirror shortcut changes
   → widget test: slider + label update
5. `entrypoints/content.ts` — extract named playback functions used by both
   widget callbacks and shortcut actions; wire controller; volume steps
   → covered by unit tests + E2E wiring check
6. `entrypoints/voices/` — `shortcuts-panel.ts` (capture input, reset) +
   `index.html` section + `main.ts` wiring
   → panel test: capture records combo, duplicate rejected, reset restores defaults
