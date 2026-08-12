# Refactor: sequencer runLoop (complexity 17, 90 lines)

## Problem

`SegmentSequencer.runLoop()` (src/domain/audio/sequencer.ts, L129–L218) mixes
per-segment speech, lookahead preparation, and playback-interrupt handling in
one while loop. Complexity 17 comes from 14 `if`s — and 8 of them are two
**identical gate sequences** (stopped → break; seeking → retry; restarting →
retry; paused → wait → retry) that appear after the prepare gap and again
after the speak gap. The gates are subtle (order matters: stopped > seeking >
restarting > paused), so any future change has to be made twice in lockstep —
that is how gate bugs sneak in.

Behavior is fully pinned by sequencer.test.ts (~40 tests, incl. re-entrancy
and state-emission races). Public API must not change: content.ts and popup
depend on `load/play/pause/resume/stop/seek/setRate/setVolume/getState/…`.

## Acceptance Criteria

- `runLoop()` complexity 17 → < 10; gate logic exists **exactly once** in a
  named helper (`checkpoint()`); helpers are private, one obvious way
- Zero behavior change: all existing sequencer tests pass **unchanged**
- 2 new characterization tests added for currently-untested gates
  (seek during prepare, restart during prepare)
- `just check` green; e2e `playback`, `volume-restart`, `widget-progress` green
- `SegmentSequencer` public surface unchanged; no import changes elsewhere

## Design

Extract three private helpers from `runLoop`:

```
SegmentSequencer (public API unchanged)
├── runLoop()                 ← complexity 17 → ~7
│   ├── buildSpeakOptions(options, )   → merged rate/volume/resumeFromChar + boundary wrapper
│   ├── startLookahead(index, options) → prepare next segment: bufferSeconds > 0
│   │                                    ? fire-and-forget prepareBuffer : prepareSegment
│   └── checkpoint(): 'break' | 'retry' | 'continue'
│           stopped           → 'break'
│           seeking           → 'retry'   (flag cleared)
│           restarting        → 'retry'   (flag cleared)
│           paused            → save resumeCharIndex, await waitWhilePaused(),
│                               stopped? 'break' : 'retry'
│           otherwise         → 'continue'
└── prepareBuffer() / bufferFillOutcome()  ← unchanged in this pass
```

Loop body after extraction:

```
while (index < segments.length && !stopped):
  segment = segments[index]; if (!segment) break
  onSegmentChange(index); emitState()
  speakOptions = buildSpeakOptions(options)

  if (initialBufferPending) { initialBufferPending = false; await prepareBuffer(…, true) }
  else await prepareSegment(segment, speakOptions)
  if (await checkpoint() === 'break') break          // retry/continue both fall through to speak

  const speaking = reader.speak(segment, speakOptions)
  startLookahead(index, speakOptions)
  await speaking

  const outcome = await checkpoint()
  if (outcome === 'break') break
  if (outcome === 'retry') continue                  // re-speak same segment
  // 'continue' → segment completed: advance
  resumeCharIndex = 0; lastCharIndex = 0; index++
```

Why this shape:
- **Gates in one place.** The stopped/seeking/restarting/paused precedence
  chain is written once; both await gaps call it.
- **Preserves prepare-vs-speak asymmetry honestly.** After the prepare gap a
  'retry' must *not* advance (falls through to speak); after the speak gap a
  'retry' must not advance either (re-speak), only 'continue' advances. The
  explicit outcome enum keeps that difference visible instead of implicit.
- **No semantics change.** `initialBufferPending` stays in runLoop (it is
  consumed once per play); after-prepare pause still waits then re-prepares
  via the non-announce path (existing behavior, preserved).
- **bufferFillOutcome stays.** Its 6 `if`s are a precedence chain, not a
  random chain — a switch would obscure the ordering. Leave it.

## Implementation steps (TDD)

0. **Baseline.** `just check` green; record `runLoop` complexity via
   `ast_complexity_analyzer` (17).

1. **Characterization tests first** (append to `sequencer.test.ts`, green on
   current code):
   - *seek during initial prepare gap*: delayed `prepare`; `seek(1)` while
     `prepareBuffer` is in flight → playback starts at target segment, no
     premature speak of the prepared one (use `makePrepareDelayedReader`-style
     fake).
   - *setRate during prepare gap*: delayed `prepare`; `setRate(1.5)` mid-
     prepare → the segment is prepared/spoken with the new rate
     (`restarting` gate on the prepare path — currently untested; tests only
     cover restart during speak).
   - assert gate precedence stays: `stop()` during a paused wait still breaks
     (already covered by "stop while paused unblocks the resume promise" —
     leave untouched, it now guards `checkpoint`).

2. **Extract helpers** (`buildSpeakOptions`, `startLookahead`, `checkpoint`)
   in `sequencer.ts`; `runLoop` rewritten per design. Run full suite: all
   existing tests pass unchanged + 2 new ones green.

3. **Measure.** `ast_complexity_analyzer` on `sequencer.ts`: `runLoop` < 10;
   `checkpoint` ≤ 6. If `runLoop` still ≥ 10, move the boundary-wrapper
   closure into `buildSpeakOptions`'s own method (it already is) and
   re-measure before touching anything else.

4. **Docs.** Update `src/domain/audio/AGENTS.md` sequencer section: describe
   `runLoop` as prepare → checkpoint → speak+lookahead → checkpoint → advance.

5. **Full verify.** `just check` + `just test-e2e` (playback, volume-restart,
   widget-progress exercise rate/volume restart + pause/resume paths).

## Out of scope

- `prepareBuffer` (82 lines — mostly structured diagnostics logging; the
  per-segment body could be extracted later, low value now)
- `bufferFillOutcome` if-chain (precedence chain, intentionally left)
- Changing loop semantics (e.g. skipping wasted prepares after seek) —
  would be a behavior change, needs its own story
- `supertonic-helper.ts` DSP math
- Any public API / caller change (content.ts, popup untouched)
