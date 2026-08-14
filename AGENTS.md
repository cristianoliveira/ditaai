# DitaAi

Turns web pages into small, audiobook-like listening experiences. The name
plays on Brazilian Portuguese “dita aí” and Dita + AI. Local-first, private,
fully tested.

## Rules

- Dev version pattern: `vN.N.N-<githash>-<timestamp>` (pre-commit hook auto-bumps)
- Chrome manifest `version` must be strict integers; dev hash goes in `version_name`
- Never amend commits; history only moves forward

## Stack

TypeScript · WXT · Biome · Vitest · Playwright · Nix flake · pnpm

## Commands

- `just check` — lint + typecheck + unit tests
- `just build` — build to `dist/chrome-mv3/`
- `just test-e2e` — E2E (real extension in Chromium)
- `just observe` — foreground headed persistent Chromium
- `just observe-start/status/errors/stop` — agent-friendly browser lifecycle and live events in `.tmp/observability/current/events.jsonl`
- `just bump [1.0.0]` — bump dev version

## Architecture

Ports & adapters. `entrypoints → domain → lib`, `entrypoints → infra → domain`.
Domain never imports infra or Chrome APIs. Tests co-located.

## Module index

Read the per-module `AGENTS.md` when you need details about that area.

| Module | Purpose | Details |
| --- | --- | --- |
| `src/domain/audio/` | TextReader port + segment sequencer (pause/resume at word level) | [AGENTS.md](src/domain/audio/AGENTS.md) |
| `src/domain/playback/` | Playback state machine (STOPPED/PLAYING/PAUSED) | [AGENTS.md](src/domain/playback/AGENTS.md) |
| `src/domain/messaging/` | Runtime message router + injected ports | [AGENTS.md](src/domain/messaging/AGENTS.md) |
| `src/domain/document/` | Text cleaning + splitting (pure strings) | [AGENTS.md](src/domain/document/AGENTS.md) |
| `src/domain/voices/` | Voice catalog, types, installer port (Supertonic presets) | [AGENTS.md](src/domain/voices/AGENTS.md) |
| `src/domain/shortcuts/` | Keyboard shortcut combos: defaults, matching, validation | [AGENTS.md](src/domain/shortcuts/AGENTS.md) |
| `src/domain/selection/` | CSS-selector read scope: candidate generation + paragraph filtering | [AGENTS.md](src/domain/selection/AGENTS.md) |
| `src/infra/` | Chrome API + TTS/audio adapters (speechSynthesis, Supertonic ONNX offscreen) | [AGENTS.md](src/infra/AGENTS.md) |
| `src/content/` | Page-level UI: widget, word highlighter, picker, start-point affordance | [AGENTS.md](src/content/AGENTS.md) |
| `src/entrypoints/` | WXT composition roots: background, content, offscreen, voices | [AGENTS.md](src/entrypoints/AGENTS.md) |
| `src/lib/` | Zero-dependency shared types + typed event emitter | [AGENTS.md](src/lib/AGENTS.md) |
| `src/ui/` | Dumb UI components (props in, handlers out): widget, pronunciation manager/popover, picker panel, start affordance, theme, icons | [AGENTS.md](src/ui/AGENTS.md) |
| `e2e/` | Playwright E2E with deterministic fake TTS | [AGENTS.md](e2e/AGENTS.md) |
