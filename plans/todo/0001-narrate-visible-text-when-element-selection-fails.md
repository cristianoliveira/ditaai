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
ignored wrappers, while Dita's picker can target only DOM `Element`s and CSS
selectors. Users need a low-permission fallback that narrates exact rendered
text without granting Chrome debugger access.

The screenshot behind this task shows useful prose in Chrome's accessibility
tree under several `Ignored` wrappers. `Ignored` means those wrappers carry no
accessibility semantics; the visible text still exists as browser-generated
`StaticText`.

## User story

As a user, when element selection cannot isolate the prose I want, I want to
select or point at visible text and listen to it, so page markup does not block
narration.

## Current behavior and constraints

- `content/picker/picker.ts` uses `elementFromPoint()` and walks only elements.
  It cannot select DOM text nodes or browser accessibility nodes.
- `content/paragraph-extractor.ts` falls back to generic containers only when
  the entire document has no semantic readable blocks. A mixed page can
  therefore contain generic prose that extraction misses.
- `entrypoints/content.ts` already supports **Listen from here** for native text
  selections, but only uses the selection to locate a start word in existing
  chunks; it then narrates the page from there. It cannot narrate text absent
  from those chunks and cannot limit narration to the selected range.
- `contextMenus` permission already exists, so a selection action needs no new
  manifest permission.
- Exact AX-tree access would require `chrome.debugger` + experimental CDP
  Accessibility APIs. Do not make that high-trust, Chrome-only path part of
  this task.

Investigation report:
`/Users/cristianoliveira/.agents/reports/18-08-26/a11y-static-text-investigation.md`.

## Design

Create one DOM-based rendered-text source reused by two progressively disclosed
fallbacks:

```text
native Selection ─┐
                  ├─> RenderedTextSource ─> ParagraphSegment[] ─> chunks/playback
point + caret  ───┘
```

### `content/rendered-text-source.ts`

Pure DOM adapter with injected `Document`/`Range` inputs. It returns ordered,
non-empty `ParagraphSegment`s whose element is only the visual/highlight anchor.
Text comes from the selected/rendered range, not from broad ancestor
`textContent`.

Rules:

- preserve document order;
- collapse whitespace through existing text-processing path;
- exclude `script`, `style`, controls, Dita UI, hidden content, and
  `[aria-hidden="true"]` subtrees;
- include nested inline text (`em`, `span`, links) once;
- never mutate page DOM while extracting;
- return an explicit empty result when no narratable text exists.

### Slice 1 — Listen to selection

Add a selection context-menu action, **Listen to selection**. Background passes
`selectionText`; content script resolves the live `Range` when available and
builds chunks only from that range. If live range is unavailable, use the
passed text with a conservative source-element anchor. Existing **Listen from
here** behavior remains unchanged.

This is the smallest feedback-producing slice and validates whether text-range
narration solves real pages before picker complexity is added.

### Slice 2 — Pick text

Add an explicit **Pick text** fallback from the widget/picker. On pointer move
or click:

1. use standard `document.caretPositionFromPoint(x, y)`;
2. fall back to Chrome's `caretRangeFromPoint(x, y)`;
3. require a text-node position;
4. expand deterministically to a rendered block/range;
5. preview exact text before confirmation;
6. narrate the confirmed range without converting it into a CSS selector.

Use a `Range`/text-node overlay for feedback. Do not claim persistence across
reloads in this first version: DOM ranges are ephemeral and a text fingerprint
locator needs separate product validation.

## Implementation steps — TDD

1. **Characterize the gap**
   - Add fixture with one semantic `<p>` elsewhere and target prose in generic
     wrappers, matching the screenshot's mixed semantic/generic shape.
   - Prove current normal extraction omits target prose.
   - Add E2E fixture exposing visible text below generic/AX-ignored wrappers.

2. **Build rendered text source**
   - Write failing happy-path tests: one selected text node, range spanning
     inline elements, multiple adjacent nodes, stable document order.
   - Write failing unhappy-path tests: collapsed/empty range, whitespace,
     hidden/`aria-hidden`, controls, script/style, Dita UI.
   - Implement `RenderedTextSource` with early returns and injected DOM inputs.

3. **Add Listen to selection**
   - Add background context-menu item and message method.
   - Route message in content composition root to rendered text source and
     existing sequencer.
   - Tests: exact selected text only; missing live selection fallback; empty
     selection does nothing; existing Listen from here remains unchanged.
   - E2E: select generic-wrapper prose, invoke action, assert first/only fake
     reader segments and visible playback state.

4. **Add point-to-text resolution**
   - Extract small `textPositionFromPoint(doc, x, y)` adapter so standard and
     fallback browser APIs are unit-testable.
   - Tests: standard result, WebKit fallback, element-node/no-result rejection,
     nested inline target.
   - Implement deterministic block expansion from clicked text position.

5. **Wire Pick text UI**
   - Add explicit mode/action; keep current element picker default.
   - Show exact narration preview and range highlight before confirm.
   - Cancel/Escape clears temporary ranges and listeners without changing saved
     CSS scope.
   - Tests: enter, preview, confirm, cancel, repeated sessions, no listener or
     highlight leaks.

6. **Regression and documentation gate**
   - Run focused unit/E2E checks throughout, then external watcher final gate.
   - Update `src/content/AGENTS.md` and `src/entrypoints/AGENTS.md` with source,
     ownership, and message flow.
   - Record whether screenshot-shaped fixture is solved without debugger access.

## Acceptance criteria

- [ ] User can invoke **Listen to selection** and hear only selected rendered text.
- [ ] Selection works when prose lives in generic wrappers while another part
      of page contains semantic blocks.
- [ ] User can enter **Pick text**, click visible prose, preview exact narration,
      confirm, and hear it.
- [ ] Nested inline formatting is narrated once and in document order.
- [ ] Hidden content, controls, scripts/styles, `aria-hidden`, and Dita UI are
      never narrated by fallback.
- [ ] Empty/no-text selections fail visibly or no-op safely; playback state is
      not corrupted.
- [ ] Existing CSS element picker, saved read scope, **Listen from here**,
      pronunciation menu, highlighting, and start-point behavior stay green.
- [ ] No `debugger`/`automation` permission or CDP dependency is added.
- [ ] Happy and unhappy paths have deterministic unit tests and screenshot-shaped
      E2E coverage.
- [ ] Relevant AGENTS.md module guidance is updated.

## Risks and decisions

- `innerText` alone is not a stable source contract and can trigger layout;
  extraction should be range/text-node based with explicit visibility checks.
- CSS generated content and closed shadow roots may still differ from Chrome's
  exact AX `StaticText`. Capture concrete failures before considering CDP.
- Highlighting text split across nodes needs multiple `Range` rects; keep this
  separate from playback source logic.
- Do not persist an ephemeral Range as a CSS selector. Persistence/text
  fingerprinting is out of scope until interaction proves valuable.

## Out of scope

- `chrome.debugger`, `chrome.automation`, or direct AX-tree consumption
- persistent text-range scopes across reload/navigation
- OCR/canvas/PDF text extraction
- changing default page-wide semantic extraction beyond regression fixtures
- replacing existing CSS element selection

