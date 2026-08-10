# Architecture — Dita

Chrome extension (MV3) that reads pages aloud with local TTS voices.

## Principles

- **External deps at boundaries only.** Business logic (`domain/`) imports nothing from `infra/`. Infrastructure adapters implement domain ports.
- **Co-located tests.** Every module has a `.test.ts` alongside it. No separate `tests/` folder.
- **Composition root wires everything.** `entrypoints/background.ts` and `entrypoints/content.ts` are the only places that create concrete instances and wire them together.
- **One obvious way.** No competing config formats, no multiple linters, no ambiguity.

## Layer diagram

```
┌──────────────────────────────────────┐
│  entrypoints/                        │
│  background.ts  content.ts           │  ← WXT auto-discovers these
│  offscreen/  voices/                 │  ← composition roots
├──────────────┬───────────────────────┤
│  domain/     │  infra/               │
│  audio/      │  audio/               │  ← TTS adapters
│  playback/   │  chrome/              │  ← Chrome API wrappers
│  messaging/  │  voices/              │  ← cache download/install
│  document/   │                       │
│  selection/  │                       │
│  tts/ voices/│                       │
├──────────────┴───────────────────────┤
│  lib/                                │
│  types.ts  events.ts                 │  ← Zero-dependency shared code
└──────────────────────────────────────┘
```

## Dependency direction

```
entrypoints ──► domain ──► lib
entrypoints ──► infra ──► lib
infra ──► domain  (implements domain ports)
domain ──X infra   (never imports infra)
```

`domain/` defines interfaces (ports). `infra/` implements them. `entrypoints/`
wires concrete instances. The rule is pinned by `src/domain/layering.test.ts`,
which fails if any `domain/` file imports from `infra/` or `content/`.

## Key design decisions

- **Audio goes through the `TextReader` port.** `InstalledVoiceReader` in
  `infra/audio/` prefers a locally installed Supertonic voice and falls back to
  browser `speechSynthesis`. Adding a new TTS backend means adding another
  `TextReader` implementation.
- **Installed-voice audio lives in an offscreen document.** The offscreen doc
  loads ONNX models + voice styles from Cache Storage, synthesizes with
  onnxruntime-web (WASM), and relays word boundaries back to the content tab
  (offscreen → service worker → content) so highlighting keeps working.
- **Two playback paths.** *Widget-driven*: the content script owns the
  `SegmentSequencer` and highlights words directly. *Controller-driven*
  (`playTab`/`playText` through the background router): the background
  `PlaybackController` tracks state only; actual audio still runs in content.
- **Tab lifecycle guards installed-voice playback.** The offscreen document
  outlives its tab, so closing/refreshing the speaking tab must stop audio via
  the background (see `tab-lifecycle-watcher.ts` + `domain/playback/speaking-tab.ts`).
- **`TtsProvider` is a domain port for future backends.** `domain/tts/` is the
  foundation for cloud/HTTP providers. The active local path implements the
  `TextReader` port instead.
- **`VoiceRegistry` is pure domain.** It knows about voices but not about audio
  rendering. Providers are mapped by key at composition time.
- **Chrome messaging adapter filters noise.** The "Receiving end does not exist"
  error from `chrome.tabs.sendMessage` is swallowed — a known benign rejection
  from polling tabs whose content script is gone.

## Config precedence

1. Defaults (in code)
2. WXT config (`wxt.config.ts`)
3. `.env` file (loaded by WXT)
4. Environment variables

## Quality gates

All run locally and in CI (identical commands):

```bash
just check     # lint + typecheck + test
just lint      # biome check src/
just typecheck # tsc --noEmit
just test      # vitest run
```

## File structure

```
src/
  entrypoints/          # WXT entry points (auto-discovered)
    background.ts       # Service worker: router wiring, boundary relay, tab lifecycle
    content.ts          # Content script: widget + extraction + sequencing + highlighting
    offscreen/          # Installed-voice host: ONNX synthesis + boundary relay
    voices/             # Voices management page (download from HuggingFace → Cache Storage)
  domain/
    audio/              # TextReader port + SegmentSequencer (word-level pause/resume)
    playback/           # Playback state machine, speaking-tab rule, jump strategies
    messaging/          # Runtime message router (ports injected by background)
    document/           # Text cleanup/splitting (pure strings)
    selection/          # CSS-selector paragraph filtering
    tts/                # TtsProvider port + voice registry (cloud/HTTP foundation)
    voices/             # Voice catalog + installer port
  content/              # Page-level UI: widget, highlighter, paragraph affordance, picker
  infra/
    audio/              # speechSynthesis + Supertonic ONNX + installed-voice adapters
    chrome/             # runtime/messaging wrappers, offscreen bridge, tab lifecycle
    voices/             # download-to-cache, cache-storage installer
    piper/              # legacy HTTP Piper client (unwired, kept for reference only)
  lib/
    types.ts            # Shared types + Result monad
    events.ts           # Typed event emitter
```

## Anti-patterns (DO NOT)

- Do NOT import `infra/` from `domain/`.
- Do NOT create a `tests/` folder — tests are co-located.
- Do NOT add competing config formats (only biome.json for lint/format, tsconfig.json for TS).
- Do NOT amend commits; history only moves forward.
