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
`ChromeAudioBufferStorage`), the loop prepares the current segment and starts
speaking it as soon as that preparation completes. While it speaks, lookahead
fills ahead — up to the configured seconds (estimated via
`audioBufferDurationMs` in `buffer.ts`) or `MAX_BUFFERED_SEGMENTS = 8`.
`onBufferChange` reports only the first segment's preparation gate; background
lookahead stays silent so it cannot delay first audio or leave progress tied to
a detached task. `prepare()` failures are non-fatal — speak continues.

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
  → prepare current segment (only this gates first audio)
  → checkpoint()                      // stop, seek, rate/volume restart, or pause
  → reader.speak(segment, { resumeFromChar, onBoundary }) + fill lookahead
  → checkpoint()                    // same gate after speech resolves
  → advance, or retry the current/newly-seeked segment
```

## Depends on

- `lib/` (`logger` is a value import in `sequencer.ts`; types from `lib/types.ts`)
- A `TextReader` implementation (injected, typically `SpeechSynthesisReader`)
