# ui

**Dumb UI components.** Presentational only — they render and emit
interactions; they never decide.

## Contract (rules for code in this module)

- **Props in, handlers out.** Components take data + callback options
  (`onPlay`, `onSave`, `onStartFrom`, …). They expose the interactions; the
  caller decides what they mean. No methods that read or write app state.
- **No `chrome.*`, no storage, no `logger`, no async persistence.** Persisting
  a setting, opening a page, or fetching a selector is the caller's job — the
  component just fires the handler.
- **No domain logic.** No `domain/` imports except **type-only** imports used
  to type props/handlers (e.g. `SequencerState`, `JumpDirection`).
- **No `infra/` imports, never.** (Not even types.)
- **Pure rendering** where possible: same props → same DOM. Deterministic,
  testable with happy-dom; tests are co-located.
- State allowed: local UI state only (open/closed, hover, focus, form
  drafts). Nothing observable, nothing persisted.

## Files

- `theme.ts` — design tokens (amber palette + stop colors, contrast contract
  in `theme.test.ts`). Pure data.
- `icons.ts` — `PLAY_ICON`/`PAUSE_ICON`/`STOP_ICON` SVG strings +
  `createIconButton(options)` button factory.
- `widget.ts` — `DitaWidget`: floating playback pill (transport, paragraph
  picker, highlight toggle, rate/volume sliders, selection chip). Handler-only
  API: `onPlay/onPause/onResume/onStop/onJump/onJumpToParagraph/onClose/
  onSettings/onSelect/onClearSelection/onToggleHighlight/onChangeRate/
  onChangeVolume`. Reflection via `reflect(state)`, `setBufferProgress()`,
  `setParagraphs()`, `setCurrentParagraph()`, `setSelection()`,
  `setVolume()`.
- `pronunciation-manager.ts` — `PronunciationManager`: dictionary UI
  (entries + enable toggle, add/delete/preview handlers).
- `pronunciation-popover.ts` — `PronunciationPopover`: word → pronunciation
  editor (preview/save/cancel handlers).
- `paragraph-start-affordance.ts` — `ParagraphStartAffordance`: pointer
  affordance on readable paragraphs → `onStartFrom(element)`.

## Depends on

Nothing outside this module except type-only imports from `domain/` and
`lib/` for prop/handler types.
