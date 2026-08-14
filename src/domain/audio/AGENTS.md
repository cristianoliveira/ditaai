# domain/audio

Speak text through a pluggable reader, with word-level pause/resume.

## Modules

### `text-reader.ts` — the port

`TextReader` interface. Anything that can speak text implements it.
- `speak(text, options?)` → resolves when done
- `SpeakOptions.onBoundary` — word-level `{ charIndex, charLength }`
- `SpeakOptions.resumeFromChar` — speak `text.substring(offset)`, boundaries offset to absolute
- `SpeakOptions.volume` — 0 (mute) to 1, applied per segment (next segment picks it up)

### `sequencer.ts` — SegmentSequencer

Speaks text segments in order via a `TextReader`. Handles pause/resume.

**Pause/resume design:** Chrome's `speechSynthesis.pause()` is unreliable.
Instead: on pause, cancel the utterance (`reader.stop()`) and save the last
boundary word position. On resume, re-speak `text.substring(resumeCharIndex)`.

**Key state:**
- `lastCharIndex` — updated by wrapping `onBoundary`, tracks word position
- `resumeCharIndex` — saved on pause, passed as `resumeFromChar` on re-speak
- `resolveResume` — promise gate that blocks the play loop while paused
- `currentPlay` — promise of the active loop; the re-entrancy guard in `play()` tears it down + awaits it before starting a new one, so two loops can never race `reader.speak()` ("Session already started")
- `rate` / `volume` — updated via `setRate`/`setVolume`, injected into every
  segment's speak options (volume applies from the next segment)

**Prebuffering (audio-buffer feature):** optional lookahead. When
`setBufferSeconds()` is set (persisted under `AUDIO_BUFFER_SECONDS_KEY` via
`ChromeAudioBufferStorage`), the loop calls `reader.prepare(segment)` ahead of
`speak()` — up to the configured seconds (estimated via
`audioBufferDurationMs` in `buffer.ts`) or `MAX_BUFFERED_SEGMENTS = 8`.
The initial fill announces via `onBufferChange`; refill stays silent so
playback UI stays calm. `prepare()` failures are non-fatal — speak continues
without lookahead.

**Callbacks:**
- `onSegmentChange(index)` — per-segment; drives word/paragraph highlighting
- `onStateChange(state)` — **single source of truth for UI reflection**. Fires on
  start, segment advance, pause, resume, stop and natural completion. Wire a
  view to `state` via this (the widget's `reflect(state)`), never from each
  call site. A loop displaced by a newer `play()` is silent on completion, so
  idle emits exactly once per session even under re-entry.

**Flow:**
```
play() → for each segment:
  → onSegmentChange?(index)        // highlighter picks up the element
  → reader.speak(segment, { resumeFromChar, onBoundary })
  → if paused: save position, waitWhilePaused(), re-speak same segment
  → else: advance index
```

## Depends on

- `lib/` (`logger` is a value import in `sequencer.ts`; types from `lib/types.ts`)
- A `TextReader` implementation (injected, typically `SpeechSynthesisReader`)
