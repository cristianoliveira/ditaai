---
id: TASK-0001
title: Narrate visible text when element selection fails
status: todo
depends_on: []
priority: high
tags: []
---

# Narrate visible text when element selection fails

## Problem

Some pages expose article prose as accessibility `StaticText` below semantically
ignored wrappers, while Dita's picker and playback source are based on DOM
elements and semantic paragraph selectors. A user may find the correct visual
area but still get an incomplete narration preview because semantic extraction
cannot see the text shape Chrome exposes to assistive technology.

The fallback belongs inside picker configuration—not in a separate context-menu
workflow. User should keep selecting page areas with existing picker and choose
how Dita extracts text from those areas.

## User story

As a user configuring read area, I want to switch picker from **Elements** to
**Accessible text**, preview exactly what each selector will narrate, and save
that configuration, so I can handle pages whose useful prose appears as
accessibility `StaticText` under ignored wrappers.

## Current behavior and constraints

- `content/picker/picker.ts` resolves pointer targets to elements, builds CSS
  selector candidates, and visually highlights matched elements.
- `content/paragraph-extractor.ts` uses semantic blocks first and generic
  containers only when whole document has no semantic blocks. Mixed pages can
  therefore omit generic-wrapper prose.
- `entrypoints/content.ts:310-357` calculates playback separately from picker.
  Preview and playback must use same source or picker can promise wrong text.
- `DomainSelectorStore` persists only selector string. It cannot persist an
  extraction mode yet.
- Browser accessibility tree is not available to normal content script. Exact
  AX access requires high-trust `chrome.debugger` + experimental CDP. This plan
  uses rendered DOM text that corresponds to normal `StaticText`; UI/documentation
  must not claim bit-for-bit AX parity.

Investigation report:
`/Users/cristianoliveira/.agents/reports/18-08-26/a11y-static-text-investigation.md`.

## Design

### Picker configuration

Add source toggle to picker panel:

```text
Read text from:  [ Elements ] [ Accessible text ]
```

- **Elements** preserves current semantic paragraph behavior and remains default.
- **Accessible text** keeps same element hover, selector input, match count,
  candidate chips, keyboard tree walking, confirm, cancel, and persistence.
- Toggle changes extraction and preview, not how user finds selector.
- Switching mode recomputes preview immediately without losing selected element
  or selector candidates.

Persist one discriminated read scope per hostname:

```ts
type ReadScope =
  | { selector: string; source: 'elements' }
  | { selector: string; source: 'accessible-text' };
```

Migrate legacy stored strings to `{ selector, source: 'elements' }` on read;
do not keep two runtime representations after migration boundary.

### Shared preview/playback source

Extract read-scope evaluation from composition root so picker preview and
playback call same function:

```text
ReadScope + Document
        │
        ▼
evaluateReadScope()
   ├── elements         → current semantic extraction/filter/fallback
   └── accessible-text  → rendered text descendants of selector matches
        │
        ▼
ParagraphSegment[] → chunks → preview and playback
```

`accessible-text` rules:

- query same confirmed selector used by element mode;
- walk visible descendant text nodes in document order;
- group contiguous text into deterministic narratable blocks;
- deduplicate text nodes when broad selector matches nested elements;
- exclude script/style/noscript, controls, Dita UI, hidden content, and
  `[aria-hidden="true"]` subtrees;
- include nested inline text (`em`, `span`, links) exactly once;
- preserve source element anchor for paragraph/word highlighting;
- never mutate page DOM during evaluation.

### Preview like existing element picker

Preview remains part of same picker interaction:

1. Hover target highlights element as today.
2. Selector candidates and match count update as today.
3. Preview panel shows exact normalized narration for current selector + source.
4. In **Elements**, matched element outlines remain current behavior.
5. In **Accessible text**, add text-range overlays from `Range.getClientRects()`
   over text that will be narrated, while keeping selected element outline.
6. Preview reports useful deterministic metadata: matched elements, text blocks,
   and character count. Empty result is visibly invalid and Confirm is disabled.
7. Editing selector, choosing candidate, walking tree, or changing source updates
   both overlays and text preview immediately.

Text preview is bounded/scrollable so panel does not resize unpredictably. It
must show enough beginning/end context to detect over-broad selection without
rendering whole article into picker UI.

## Implementation steps — TDD

1. **Characterize screenshot-shaped gap**
   - Fixture contains semantic block elsewhere plus target prose in generic
     ignored-style wrappers.
   - Prove element source omits target prose and accessible-text source should
     include it.
   - Add nested-selector fixture to pin text-node deduplication.

2. **Introduce `ReadScope` contract and storage migration**
   - Tests first: legacy string loads as element source; both modes round-trip;
     malformed storage returns null/default safely.
   - Change domain port and Chrome adapter to persist object.
   - Update composition root/widget label without behavior change.

3. **Extract shared `evaluateReadScope`**
   - Move current filtered/fallback evaluation out of `content.ts` unchanged for
     element mode.
   - Add tests proving parity, invalid-selector behavior, and no active scope.
   - Inject evaluator into playback and picker; no duplicate preview algorithm.

4. **Build accessible-text evaluator**
   - Happy paths: generic wrappers, nested inline nodes, multiple matches,
     stable document order, source anchors.
   - Unhappy paths: whitespace, duplicate nested matches, hidden/aria-hidden,
     controls, script/style, Dita UI, invalid selector, no visible text.
   - Keep extraction pure; isolate computed-style visibility adapter for tests.

5. **Add picker source configuration**
   - Add Elements/Accessible text toggle to `PickerPanel` options and update API.
   - Mode switch preserves selector and candidates and refreshes count/preview.
   - Confirm returns full `ReadScope`; cancel leaves saved scope unchanged.
   - Old saved scopes open picker in Elements; saved accessible scopes reopen in
     Accessible text.

6. **Add narration preview and text overlays**
   - Render bounded exact-text preview from evaluator output.
   - Build temporary overlay rectangles from text-node Ranges without wrapping
     or changing page DOM.
   - Clear rectangles on selector/mode changes, Preview off, Cancel, Confirm,
     Escape, and picker cleanup.
   - Tests cover stale overlay/listener leaks and empty-preview disabled state.

7. **E2E and documentation gate**
   - Reproduce screenshot shape in E2E fixture.
   - Select same area in Elements then Accessible text; assert previews differ
     and accessible mode fake reader receives previewed text exactly.
   - Reload page and assert source + selector persistence.
   - Keep existing picker, playback, highlighting, start-point tests green.
   - Update selection/content/entrypoint AGENTS.md guidance.

## Acceptance criteria

- [ ] Picker contains **Elements / Accessible text** source configuration.
- [ ] Source can be changed during same picker session without losing selector,
      candidates, or target.
- [ ] Every selector/source change shows bounded exact narration preview before
      confirmation.
- [ ] Accessible-text preview visually marks text ranges similarly to element
      match highlights.
- [ ] Confirm is disabled when selector/source evaluates to no narratable text.
- [ ] Confirmed selector and source persist per hostname and reopen correctly.
- [ ] Legacy selector strings migrate to Elements mode deterministically.
- [ ] Playback text equals confirmed preview text.
- [ ] Generic-wrapper prose is available in Accessible text even when another
      part of page contains semantic blocks.
- [ ] Nested inline and nested selector matches are narrated once, in document
      order.
- [ ] Hidden content, controls, scripts/styles, aria-hidden, and Dita UI are
      excluded.
- [ ] Existing Elements behavior and picker keyboard navigation remain green.
- [ ] No debugger/automation permission or CDP dependency is added.
- [ ] Happy/unhappy unit tests and screenshot-shaped E2E coverage are green.

## Risks and decisions

- Label **Accessible text** describes user intent; implementation approximates
  ordinary AX `StaticText` from rendered DOM. CSS generated content, canvas,
  PDFs, and closed shadow roots may differ from exact Chrome AX tree.
- Computed visibility can trigger layout; evaluate only current selector matches
  and cache within one preview refresh.
- Broad nested selectors can duplicate text unless deduplication is by text-node
  identity before grouping.
- Range overlays may produce many rectangles; cap/merge adjacent rectangles for
  preview performance without changing narration output.
- ReadScope object migration affects storage/export/backup paths; usages must be
  found semantically before editing.

## Out of scope

- separate **Listen to selection** context-menu action
- direct selection of AX nodes or caret-based text picker
- `chrome.debugger`, `chrome.automation`, or CDP accessibility tree
- OCR/canvas/PDF extraction
- changing selector candidate generation or keyboard tree navigation

