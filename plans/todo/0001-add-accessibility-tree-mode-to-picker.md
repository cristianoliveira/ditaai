---
id: TASK-0001
title: Add accessibility-tree mode to picker
status: doing
depends_on: []
priority: high
tags: [accessibility, picker]
---

# Add accessibility-tree mode to picker

## Problem

Dita picker navigates DOM elements and builds CSS selector candidates. Some
pages have deeply nested or semantically unhelpful DOM, while Chrome exposes a
clearer accessibility representation: meaningful ARIA roles/properties and
`StaticText` nodes containing prose.

This is not a paragraph-extraction bug and not a separate text-selection
workflow. User needs current picker enhanced with an accessibility-tree source,
including same kind of live highlighting and narration preview available while
selecting DOM elements.

Screenshot/investigation:

- `/Users/cristianoliveira/Screenshot 2026-08-18 at 08.10.38.png`
- `/Users/cristianoliveira/.agents/reports/18-08-26/a11y-static-text-investigation.md`

## User story

As a user configuring a reading area, I want picker to navigate Chrome
accessibility nodes—including `StaticText` and computed ARIA information—so I
can identify and preview correct content when DOM elements are difficult to
select.

## User experience

Picker gains a source configuration:

```text
Picker source:  [ DOM ] [ Accessibility ]
```

### DOM

Existing behavior remains unchanged:

- hover targets DOM element;
- candidate chips represent CSS selectors;
- arrow keys walk DOM parents, children, and siblings;
- matched elements are highlighted;
- selector and narration preview update live.

### Accessibility

- Hover resolves accessibility node associated with pointer location.
- Picker displays node role, accessible name/value, and relevant computed ARIA
  properties.
- `StaticText` nodes show their spoken text instead of an opaque DOM wrapper.
- Candidate chips represent accessibility node and useful ancestors/children,
  labelled by role and a bounded name/text preview.
- Existing arrow-key model walks accessibility tree:
  - Up / `[` → accessibility parent;
  - Down / `]` → first accessibility child;
  - Left/Right → accessibility siblings.
- Current accessibility node is highlighted on page. If one AX node spans
  multiple text rectangles, all rectangles are shown.
- Picker preview shows exact `StaticText` sequence that confirmation will read,
  plus node count and character count.
- Widening/narrowing, changing candidate, or editing stable DOM anchor refreshes
  highlight and preview immediately.
- Empty accessibility selection is visibly invalid and cannot be confirmed.

Confirm persists Accessibility mode and enough stable locator information to
rebuild selection after reload. Cancel leaves existing saved scope unchanged.

## Technical reality

Normal content scripts cannot read Chrome computed accessibility tree. Exact
`StaticText` and computed accessibility properties require Chrome DevTools
Protocol (CDP) through `chrome.debugger`.

This task therefore intentionally includes:

- manifest `debugger` permission and its user-facing install warning;
- a background-only CDP adapter;
- attach only while accessibility picker/evaluation is active;
- guaranteed detach on confirm, cancel, picker cleanup, tab navigation, and
  errors;
- a clear picker error if DevTools or another debugger already owns tab;
- Chrome-first support. Firefox Accessibility mode is unavailable until it has
  an equivalent adapter; DOM mode continues working.

Do not use undocumented `chrome.automation` allowlisting.

## Architecture

```text
content Picker
    │ typed runtime request (tab is sender identity)
    ▼
background AccessibilityTreePort
    ▼
ChromeDebuggerAccessibilityTree adapter
    │
    ├── DOM.getNodeForLocation
    ├── Accessibility.getPartialAXTree / getFullAXTree when required
    ├── DOM backend-node correlation
    └── DOM.getContentQuads / box model for visual bounds
```

### Domain contract

Add browser-neutral picker types, for example:

```ts
type PickerSource = 'dom' | 'accessibility';

type AccessibilityPickerNode = {
  id: string;                 // session-only AX node id
  backendDOMNodeId?: number;
  role: string;
  name?: string;
  value?: string;
  staticText?: string;
  properties: ReadonlyArray<{ name: string; value: string }>;
  parentId?: string;
  childIds: readonly string[];
  bounds: readonly Rect[];
};
```

CDP shapes stay inside infra adapter. Content receives only normalized types.
Composition root wires port/message flow; domain/content do not call
`chrome.debugger` directly.

### Stable persisted scope

AX node IDs are session-only and must never be persisted.

Persist discriminated scope:

```ts
type ReadScope =
  | { source: 'dom'; selector: string }
  | {
      source: 'accessibility';
      anchorSelector: string;
      locator: AccessibilityLocator;
    };
```

`AccessibilityLocator` is derived from stable evidence available under DOM
anchor, such as role + bounded name/text fingerprint + relative accessibility
path. Exact shape must be proven by spike against screenshot page before public
storage schema is finalized.

Legacy stored selector strings migrate to `{ source: 'dom', selector }` at
storage boundary. Runtime has one representation after migration.

### Preview/playback parity

One accessibility evaluator must produce both picker preview and confirmed
playback text:

```text
Accessibility ReadScope
       │
       ▼
resolveAccessibilityScope(port, scope)
       │
       ├── selected AX subtree
       ├── ordered, deduplicated StaticText
       └── visual bounds
       │
       ├── Picker preview
       └── Playback chunks
```

Preview and playback must never independently reconstruct text.

## Implementation steps — TDD

### 1. CDP feasibility spike

Before changing product contracts, create bounded local spike against page
shape in screenshot:

- attach debugger to observed tab;
- resolve pointer/DOM location to partial AX tree;
- identify `StaticText`, parent/sibling relations, computed properties, and DOM
  correlation;
- obtain usable bounds for element and text nodes;
- detach deterministically;
- record behavior when DevTools is already attached;
- test whether anchor selector + proposed locator resolves same subtree after
  reload.

Success gate: demonstrate one complete hover → AX candidates → bounds → ordered
`StaticText` → reload resolution loop. If stable resolution fails, stop and
revise locator before implementing UI.

### 2. Add normalized accessibility port and fake

- Define browser-neutral `AccessibilityTreePort` and normalized node/result
  types.
- Write contract tests for hit test, parent/child/sibling lookup, subtree text,
  bounds, attach conflict, and detach.
- Build deterministic in-memory fake for picker unit tests.

### 3. Implement Chrome debugger adapter

- Add failing adapter tests around mocked `chrome.debugger` calls.
- Add permission and typed CDP command boundary.
- Normalize roles, names, values, properties, ignored nodes, and `StaticText`.
- Ensure stale async hover responses cannot replace newer pointer result.
- Detach on every terminal/error path; no silent leaked debugger session.

### 4. Extend read-scope storage

- Introduce discriminated `ReadScope` and `AccessibilityLocator`.
- Tests first: legacy string migration, DOM scope round-trip, accessibility
  scope round-trip, malformed value handling, backup/export compatibility.
- Update widget selection label to distinguish DOM and Accessibility scopes.

### 5. Add picker source configuration

- Add DOM/Accessibility control to existing picker panel.
- Source switch preserves picker session and current page location where
  possible.
- DOM mode remains byte-for-behavior compatible.
- Accessibility mode requests normalized AX node under pointer and renders role,
  name/text, properties, and hierarchy candidates.
- Unit tests use fake port: mode switch, stale response suppression, candidate
  navigation, confirm, cancel, attach conflict, empty result.

### 6. Add accessibility highlights and preview

- Render non-interactive overlay rectangles from normalized AX bounds.
- Show exact ordered, deduplicated `StaticText` preview with bounded scroll area.
- Show relevant computed properties without dumping noisy CDP internals.
- Clear overlays/listeners/session on source switch, Preview off, Confirm,
  Cancel, Escape, tab lifecycle, and errors.
- Tests cover multi-rect text, ignored wrappers, no bounds, large subtree caps,
  and repeated picker sessions.

### 7. Wire confirmed playback

- Resolve saved locator through injected accessibility port.
- Build chunks from same evaluator output used by preview.
- Preserve source anchors where available for paragraph/word highlighting;
  degrade visibly rather than highlighting wrong element when no DOM mapping
  exists.
- Tests assert confirmed preview text equals playback chunks exactly.

### 8. E2E and documentation gate

- Add screenshot-shaped page fixture with ignored generic wrappers, nested
  emphasis, links, figures, ARIA-labelled nodes, and `StaticText` prose.
- E2E: open picker, switch Accessibility, navigate hierarchy, inspect preview,
  confirm, play, reload, and replay persisted scope.
- E2E unhappy path: debugger unavailable/conflict returns actionable UI and DOM
  mode remains usable.
- Keep existing picker DOM-mode, playback, highlighting, keyboard, and saved
  scope tests green.
- Update root/content/selection/entrypoint/infra AGENTS.md guidance.

## Acceptance criteria

- [ ] Existing picker offers **DOM / Accessibility** source configuration.
- [ ] Accessibility mode uses Chrome computed accessibility tree, not a DOM-text
      approximation.
- [ ] User can inspect `StaticText`, role, accessible name/value, and relevant
      computed ARIA properties.
- [ ] Accessibility candidate chips and arrow keys navigate AX hierarchy.
- [ ] Selected AX node/text is highlighted similarly to current element
      highlighting, including multi-rectangle text.
- [ ] Preview shows exact ordered text that confirmed playback will receive.
- [ ] Empty/non-narratable accessibility node cannot be confirmed.
- [ ] Saved accessibility scope resolves after reload without persisting AX node
      IDs.
- [ ] Legacy selector strings migrate deterministically to DOM mode.
- [ ] Debugger attaches only when needed and always detaches.
- [ ] Debugger conflict/unsupported browser produces actionable UI; DOM picker
      remains available.
- [ ] Existing DOM picker behavior is unchanged and fully green.
- [ ] Happy/unhappy unit tests and screenshot-shaped E2E coverage are green.

## Risks and explicit decisions

- `debugger` is high-trust permission with prominent install warning. This is a
  deliberate product cost of exact AX access and must be visible in release
  notes/UI.
- DevTools and Dita accessibility picker may not attach simultaneously.
- Accessibility trees are dynamic; request IDs and AX node IDs are ephemeral.
- Cross-origin iframes need explicit frame handling and may be deferred only if
  UI says unsupported rather than silently omitting content.
- Large full trees are expensive. Prefer partial trees and bounded previews;
  full-tree calls require measured justification.
- Accessibility properties may include noise. Present curated user-relevant
  role/name/value/state while retaining structured diagnostics in logs.

## Out of scope

- changing normal paragraph extraction behavior
- separate **Listen to selection** context-menu action
- DOM-rendered-text approximation marketed as accessibility tree
- undocumented `chrome.automation`
- OCR, canvas, or PDF extraction
- Firefox accessibility adapter in first Chrome implementation
