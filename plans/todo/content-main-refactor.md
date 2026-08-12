# Refactor: split content.ts main (complexity 77, 682 lines)

## Problem

`entrypoints/content.ts` `main()` is a god closure: 49 `if`s, complexity 77,
682 lines, ~40 local functions sharing 15 mutable variables (chunks,
activeElement, currentIndex, breakpoints, jumper, prefs, stores, widget,
readableElements, markedStart…). Logic that is unit-testable (playback
orchestration, selector filtering, pronunciation flows, message routing) is
trapped inside the composition root and only covered by e2e.

The codebase pattern already exists for the fix: `content/` is the page-UI
module layer with co-located happy-dom tests (`widget.test.ts`,
`paragraph-extractor.test.ts`, `picker.test.ts`), and `domain/messaging/router.ts`
shows the handler-map pattern. `main()` should be thin wiring; behavior moves
to testable modules.

## Acceptance Criteria

- `just check` green (biome + tsc + vitest) after every step
- `just test-e2e` green after the refactor (playback, widget, widget-progress,
  highlight-and-widget, shortcuts, volume-restart, play-tab all cover moved paths)
- `main()` drops from complexity 77 / 682 lines to < 25 / < ~250 lines
- Each new module has a co-located `.test.ts`; no layering violations
  (layering test only pins `domain/` → `infra/`, so `content/` may keep
  importing domain + infra)
- Behavior parity: no change to widget, picker, shortcuts, pronunciation,
  context menu, or E2E fake-reader mode

## Design

Target: five modules under `src/content/`, mirroring existing structure.
`main()` keeps: stores, prefs, reader/sequencer creation, widget lifecycle
glue, shortcuts, `pagehide`, and state→widget reflection callbacks.

```
entrypoints/content.ts        ← thin composition (~200 lines)
├── content/chunks.ts          ← Chunk type + buildChunks + paragraphBreakpoints + paragraphOptions
├── content/player-session.ts  ← PagePlayer: chunks state, play/startFromPosition/jump/toggle,
│                                pause/resume/stop, rate/volume coalescing, highlights, start marker
├── content/read-scope.ts      ← ReadScope: activeSelector, readableElements, buildChunksFiltered,
│                                selector save/clear, refresh, invalid-selector fallback
├── content/pronunciation-session.ts ← substitutions state, popover + manager lifecycle, persistence
└── content/page-messages.ts   ← createPageMessageHandler(deps) → handler map (router pattern),
                                  replaces the 13-if onMessage chain
```

Dependency flow: `page-messages` → {player, read-scope, pronunciation, widget};
`player`/`read-scope` → `chunks`; `player` → sequencer (injected).

Design notes:
- **Injection, not globals.** Each class takes deps (sequencer, stores,
  getters for prefs, widget getter, highlight fns, logger). No `chrome.*`
  calls inside player-session/read-scope where avoidable; infra chrome
  adapters stay injected like the rest of the codebase.
- **Reflection stays in main.** `sequencer.onStateChange`/`onBufferChange`
  wiring (widget reflect + idle teardown) remains in main — the comment there
  documents it as the single source of truth for widget state. PagePlayer
  only owns sequencer *control* callbacks (`onSegmentChange`, boundary).
- **Handler map, not if-chain.** `page-messages.ts` mirrors
  `domain/messaging/router.ts`: `Record<method, handler>` with a default
  `false` (keep async `sendResponse` semantics per method).
- **E2E fake mode untouched.** `data-dita-test-reader="fake"` path stays in
  main; `PagePlayer` just receives whatever `TextReader` main built.

## Implementation steps (TDD — each step ends green)

0. **Baseline.** `just check` + `just test-e2e` green; record durations.
   → report baseline in `plans/todo/content-main-refactor.md` progress notes.

1. **`content/chunks.ts`** (pure move + new tests)
   Move `Chunk`, `buildChunks`, `paragraphBreakpoints`, `paragraphOptions`
   out of content.ts verbatim; re-export/import in content.ts.
   → new `chunks.test.ts`: base-offset math, substitutions applied, empty
   text skipped, breakpoint boundaries, options preview labels.
   Verify: `just check`; no e2e run needed (pure move).

2. **`content/player-session.ts`** — `PagePlayer` class (biggest step)
   Move: chunks/currentIndex/currentBreakpoints/paragraphJumper/
   activeElement/markedStart/rate/volume state + `playAction`,
   `startFromPosition`, pause/resume/stop, `jumpPlayback`, `togglePlay`,
   `applyRate`/`applyVolume`/`adjustVolume`, slider coalescing,
   `clearAllHighlights`, `setStartMarker`.
   Deps: `{ sequencer, buildChunks, highlightFns, markerFns, widget,
   getRate, getVolume, getSubstitutions, getPronunciationsEnabled, logger }`.
   main() keeps `sequencer.onStateChange/onBufferChange`; PagePlayer keeps
   `onSegmentChange` + boundary callback.
   → `player-session.test.ts` with hand-rolled fake sequencer (load/play/
   pause/resume/stop/seek/setRate/setVolume/getState/onSegmentChange):
   - play builds chunks, picks char-precise start over paragraph
   - startFromPosition seeks when playing, replays when idle
   - toggle: idle→play, playing→pause, paused→resume
   - jump respects paragraph breakpoints; seekToParagraph
   - rate/volume coalescing with fake timers; clamps
   - idle teardown (clear highlights + marker) on stop
   Verify: `just check` + e2e `playback`, `widget-progress`,
   `highlight-and-widget`.

3. **`content/read-scope.ts`** — `ReadScope` class
   Move: activeSelector/readableElements state + `buildChunksFiltered`
   (incl. fallback + invalid-selector catch), `refresh`, selector
   save/clear, `isReadable(el)`.
   Deps: `{ doc, selectorStore, hostname, getSubstitutions,
   getPronunciationsEnabled, logger }`.
   → `read-scope.test.ts` (happy-dom fixture, mirror
   `paragraph-extractor.test.ts`): filtered vs unfiltered, fallback
   extraction, invalid selector → empty + warn, refresh updates set.
   Verify: `just check` + e2e `highlight-and-widget` (uses picker scope?),
   `play-tab`.

4. **`content/pronunciation-session.ts`** — `PronunciationSession`
   Move: substitutions/pronunciationsEnabled state, `showPronunciationPopover`,
   `showPronunciationManager`, `refreshOpenManager`, `managerEntries`.
   Deps: `{ substitutionStore, savePronunciationsEnabled, reader, logger }`.
   → `pronunciation-session.test.ts` (stub PronunciationManager/Popover via
   constructor fakes or vi.mock): save/delete/toggle persist + refresh,
   popover preview uses reader, cancel unmounts.
   Verify: `just check` (unit-only; no e2e for pronunciation — acceptable,
   covered by existing `pronunciation-manager.test.ts` surface + this).

5. **`content/page-messages.ts`** — `createPageMessageHandler(deps)`
   Move the onMessage listener; each method becomes a named handler in a
   map. Keep `startFromContext` resolution logic (selection → nearestReadable
   → targetElementId → locateWord) intact.
   Deps: `{ player, readScope, sequencer, widget: {isMounted, mount,
   unmount, focus}, pronunciation, logInteraction }`.
   → `page-messages.test.ts` with fake deps: each method dispatches to the
   right handler; getText returns filtered texts; startFromContext resolves
   word; unknown method → false; sendResponse called per contract.
   Verify: `just check` + e2e `widget`, `play-tab`, `startup`, `shortcuts`.

6. **Slim `main()`.** Delete moved code; keep wiring. Run full
   `just check` + `just test-e2e`. Measure main() complexity (< 25).
   Update `src/content/AGENTS.md` (module index) + `src/entrypoints/AGENTS.md`
   (content.ts flow now delegates) + root `AGENTS.md` module table if it
   lists files.

## Out of scope

- Splitting `supertonic-helper.ts` DSP math (separate risk profile)
- Moving `icons.ts`/`theme.ts` out of `content/` (popup layering fix —
  candidate for a separate small refactor)
- `playText` unused-params wart in `domain/messaging/router.ts`
- Changing widget reflection wiring or sequencer behavior
- Reducing e2e surface; e2e stays the behavior-parity gate
