# content

Page-level UI **logic** injected into the DOM. Shadow DOM isolated.

Owns the smart half of the page UI: extraction, selection, highlighting,
boundary diagnostics, and the E2E fake reader. Presentational components live
in `src/ui/` — `content/` wires them with state, stores, and callbacks.

## `highlighter.ts` — word-level DOM highlighting

- `highlightWord(element, charIndex, charLength)` — walks text nodes via
  TreeWalker, creates Range at the char position, wraps in `<mark>`
- `highlightParagraph` / `clearParagraph` — current-paragraph emphasis
- `markStartPoint` / `clearStartPoint` — persistent "start from here" marker
- `clearHighlight(element)` — unwraps marks, normalizes text nodes
- Smooth-scrolls active word into view
- Style injected once from `ui/theme` tokens (amber fill + edge ring — recolor
  lives in `theme.ts`, never hardcoded here)

## `paragraph-extractor.ts` — DOM → segments

`extractParagraphs(doc) → ParagraphSegment[]` — collects paragraph-level text
with element refs, ready for chunking/splitting. Extraction is semantic-first;
when no semantic blocks exist, it falls back to leaf `main`/`section`/`div`
containers and rejects control-only content.

`<header>` is treated by role, not by tag: a top-level banner header (site
masthead, not nested in article/section/main) is skipped as chrome, but a
`<header>` nested in sectioning content is read — that's the article title +
byline block (mirrors the HTML5/ARIA `role=banner` rule).

## `picker/picker.ts` — select → review → add picker

`Picker` — interactive element-picker overlay with ONE continuous workflow:
no modal panel, the bottom bar stays interactive the whole time. The bar has
`Read area | Ignore` mode toggle, an editable selector input + match count,
candidate chips, and two removable chip lists (Reading / Ignored).

Interaction model — every pick goes through a review step:

1. **Pick** — click page content (or a candidate chip) while the overlay is
   live: the picker pauses and shows the clicked element for review, with its
   candidate chips to widen/narrow the selection (e.g. a cell → `table`).
   **Hover is precision-first:** the element under the cursor is targeted
   directly (low level) — there is no readable-ancestor snapping, so on
   deeply nested pages you start at the exact wrapper and widen. Arrow keys
   (or `[` / `]`) then walk the DOM — `↑`/`[` parent (widen), `↓`/`]` first
   child (drill), `←`/`→` siblings. Click locks the highlighted element.
2. **Preview** — the review shows a live text preview of what the selection
   will actually read (committed ignores excluded); editing the selector
   updates it in place.
3. **Match highlight** — the review highlights **every** element the pending
   selector resolves to (the count badge shows how many), so the user sees
   the whole selection, not just the clicked element; narrowing/editing the
   selector re-highlights live. The picker's own UI is always excluded from
   matches (highlight, count, and text preview) — the modal never highlights
   itself, even for broad selectors like `div`.
3. **Add / Reject** — `Add` commits the reviewed selector to the active
   mode's list; `Reject` discards it. Either way picking re-arms in the same
   session, so the user can pick another block.
4. **Confirm / Cancel** — finish and resolve the `ReadScope`
   (`{ selectors, ignored }`), persisted per hostname via
   `ChromeDomainSelectorStorage`. Escape rejects a review; with no review it
   cancels.
5. **Persistent scope marker** — after confirm, every element the saved
   scope matches keeps a `dita-scope-highlight` marker (ignored subtrees
   excluded) so the page shows the same selection the review did — also
   during playback; cleared via the widget's clear-selection control.

The bar is a hit-shield (`pointer-events: auto`): nothing under the popup
can be selected, and the bar never resizes — fixed width + a bounded,
scrollable chip area (`height: 116px`), so Confirm/Cancel never move.
Ignore mode never snaps: a click picks the raw element under the cursor and
the user widens via ancestor candidate chips.
Confirm is disabled until at least one read block is picked. The scope is
applied in `content.ts` `buildChunksFiltered`: first `filterParagraphs` from
`domain/selection` (paragraphs whose element matches), falling back to direct
extraction from `querySelectorAll(selector)` elements chunked via `splitText`.

## `boundary-diagnostics.ts` — logging

`describeBoundary` — structured boundary event logging for observability.

## `fake-reader.ts` — E2E fake

`FakeBoundaryReader implements TextReader` — fires synthetic word boundaries on
a fixed interval. Activated when `<html data-dita-test-reader="fake">`.

## Depends on

- DOM APIs, plus type-only imports from `domain/` and `lib/` (TextReader,
  ParagraphSegment, JumpDirection). Never imports `infra/`.
- Imports dumb components from `src/ui/` (widget, pronunciation manager +
  popover, start affordance) and wires them.
- Wired from `entrypoints/content.ts`, which maps chunks → elements
