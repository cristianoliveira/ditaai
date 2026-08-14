# domain/selection

Element selection domain — the pure half of the read-scope feature: build CSS
selector candidates for the picker, and filter paragraphs by a confirmed
selector. No Chrome APIs; DOM only via injected `Element` arguments.

## `selection.ts`

- `DomainSelectorStore` — port: persists the confirmed read-scope selector per
  hostname. Implemented by `infra/chrome/domain-selector-storage.ts`.
- `buildCandidates(element)` — CSS selector candidates for an element, sorted
  broadest (highest match count) → most specific, capped at 10; invalid
  selectors sink to the end. Used by `content/picker/` for widen/narrow chips.
- `filterParagraphs(paragraphs, selector)` — keep paragraphs whose element
  matches the selector. No pre-validation: `element.matches` throws on invalid
  syntax, so the filter itself guards bad selectors.

## Placement rules

- New read-scope pure logic goes here, not in `content/picker/` (interaction
  overlay) or `infra/chrome/` (persistence).
- The confirmed scope is a single selector string, applied in
  `entrypoints/content.ts` `buildChunksFiltered`: paragraph filter first,
  then fallback extraction from the matching elements.

## Depends on

- `lib/` (`ParagraphSegment` type only)
- DOM `Element` — reads only the owner document of the passed element; never
  queries the page `document` itself.
