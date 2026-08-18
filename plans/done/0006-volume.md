---
id: TASK-0006
title: "Volume control from widget (both TTS paths)"
status: done
depends_on: []
priority: normal
tags: []
---

> **Done.** Verified shipped: widget volume slider, Sequencer.setVolume, SpeakOptions.volume, GainNode chain in supertonic reader. Original plan below.

## Volume

As a user, I want to control the narration volume from the widget so I can
adjust loudness without leaving the page.

## Acceptance Criteria

- Volume slider in the widget (0–100%), persisted per extension (not per page)
- Volume applies from the next segment (Option A: consistent with rate; no
  live gain, no port changes)
- Both TTS paths honor volume: browser `speechSynthesis` (`utterance.volume`)
  and installed Supertonic ONNX (GainNode in the audio graph)
- Volume survives widget close/reopen and extension restarts
- `volume` flows through the message boundary (`serializableOptions` +
  `preparationKey`) so prepared speech is never keyed on stale volume

## Design

`SpeakOptions.volume?: number` (0–1), mirroring `rate`:

```
Widget slider ──► content.ts (VOLUME_PREF in chrome.storage.local)
                ──► Sequencer.setVolume() ──► speak(segment, { volume })
```

Unlike rate, changing volume does NOT stop playback — the current segment
finishes at the old volume, the next segment picks up the new one.

## Implementation steps (TDD)

1. `domain/audio/text-reader.ts` — add `volume?: number` to `SpeakOptions`
2. `domain/audio/sequencer.ts` — store `volume`, `setVolume()`, inject into
   speak options, reset on `load()`/`stop()`
   → `sequencer.test.ts`: mirror `setRate` test ("applies setVolume to the
   next segment while playing")
3. `infra/audio/speech-synthesis-reader.ts` — `utterance.volume = options.volume`
   (use `!= null` — 0 is a valid volume)
4. `infra/audio/supertonic-onnx-reader.ts` — GainNode chain
   `source → gain → destination` per speak; extend `audioContext()` mock with
   `createGain`
   → `supertonic-onnx-reader.test.ts`: gain value + connect chain
5. `infra/audio/installed-voice-reader.ts` — `serializableOptions` +
   `preparationKey` include volume
6. `infra/chrome/offscreen-supertonic-reader.ts` + `runtime-installed-voice-reader.ts`
   — `serializableOptions` include volume
   → extend existing tests for volume round-trip
7. `content/widget.ts` — volume slider (0–100), label, `onChangeVolume`
   callback, `volume` option
   → `widget.test.ts`: mirror rate slider tests
8. `entrypoints/content.ts` — `VOLUME_PREF`, `clampVolume`, load/save,
   `playbackVolume` in `sequencer.play()` + widget options,
   `onChangeVolume` → save + `setVolume` (no stop)
9. Update `AGENTS.md` module docs (domain/audio, infra, content/widget)

## Out of scope

- Mute toggle (slider to 0 covers it)
- Live mid-segment gain (Option B) — per-segment contract chosen (Option A)
