# Architecture — Dita

Chrome extension (MV3) that provides local Piper TTS voices.

## Principles

- **External deps at boundaries only.** Business logic (`domain/`) imports nothing from `infra/`. Infrastructure adapters implement domain ports.
- **Co-located tests.** Every module has a `.test.ts` alongside it. No separate `tests/` folder.
- **Composition root wires everything.** `entrypoints/background.ts` is the only place that creates concrete instances and wires them together.
- **One obvious way.** No competing config formats, no multiple linters, no ambiguity.

## Layer diagram

```
┌──────────────────────────────────────┐
│  entrypoints/                        │
│  background.ts  content.ts  popup/   │  ← WXT auto-discovers these
│  (composition roots)                 │
├──────────────┬───────────────────────┤
│  domain/     │  infra/               │
│  tts/        │  chrome/messaging.ts  │  ← Chrome API wrappers
│  synthesis   │  piper/client.ts      │  ← Piper HTTP adapter
│  voice-reg   │                       │
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

`domain/` defines interfaces (ports). `infra/` implements them. `entrypoints/` wires concrete instances.

## Key design decisions

- **TtsProvider is a domain port.** `PiperClient` in `infra/piper/` implements it. Adding a new TTS backend means adding another implementation of the same interface.
- **VoiceRegistry is pure domain.** It knows about voices but not about audio rendering. Providers are mapped by key at composition time.
- **Chrome messaging adapter filters noise.** The "Receiving end does not exist" error from `chrome.tabs.sendMessage` is swallowed — this is a known benign rejection from the Speechify bundle polling background tabs.

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
    background.ts       # Service worker
    content.ts          # Content script
    popup/              # Popup UI
  domain/
    tts/
      synthesis.ts      # Pure domain: TTS routing logic
      voice-registry.ts # Pure domain: voice management
  infra/
    chrome/
      messaging.ts      # Chrome tabs messaging adapter
    piper/
      client.ts         # Piper HTTP client (implements TtsProvider)
  lib/
    types.ts            # Shared types + Result monad
    events.ts           # Typed event emitter
```

## Anti-patterns (DO NOT)

- Do NOT import `infra/` from `domain/`.
- Do NOT create a `tests/` folder — tests are co-located.
- Do NOT add competing config formats (only biome.json for lint/format, tsconfig.json for TS).
- Do NOT amend commits; history only moves forward.
