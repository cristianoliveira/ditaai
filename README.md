# Dita

**Dita aí** — Brazilian Portuguese for "speak it" / "say it out".

A read-out-loud Chrome extension. Local-first, private, fully tested.

Click (or hotkey) → Dita reads the page aloud, highlighting each word as it
speaks. The default voice is a Supertonic neural model running locally via
WebAssembly — text never leaves your machine. Browser speech is the built-in
fallback when no voice is installed.

## Why

- **Local-first TTS.** Supertonic ONNX models synthesize on-device in an
  offscreen document. No cloud round-trip for the voice.
- **Ports and adapters.** Domain logic knows nothing about Chrome APIs, network,
  or the DOM. Every seam is testable.
- **Testable by construction.** Unit tests in Node against fakes. E2E tests load
  the real extension in Chromium with a deterministic fake TTS engine.
- **No lock-in.** No account required.

## Voices

Dita ships with 10 Supertonic presets (M1–M5, F1–F5) from
[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3).

- **In the extension:** open the floating widget → settings (gear) → Voices
  page, then download a voice. Files are stored in Cache Storage
  (`dita-voices`) and read by the offscreen document at playback time.
- **Before installing:** `just install-voices [M1 F3 ...]` downloads voice
  files to `voices/supertonic/` for offline use or packaging.

## Inspirations

Studied, not copied. These projects shaped our thinking:

- [read-aloud](https://github.com/ken107/read-aloud) — ports & adapters layout,
  deterministic fake-TTS E2E harness, messaging contract.
- Local Piper TTS — `speechSynthesis` bridge pattern, word-boundary emulation
  from WAV duration.

## Getting started

```sh
nix develop      # enter dev shell (node, pnpm, just)
pnpm install     # install dependencies
just build       # build the extension into dist/
```

Then load `dist/chrome-mv3/` as an unpacked extension in Chrome.

## Quality gates

```sh
just check       # lint + typecheck + unit tests (same as CI)
just test-e2e    # end-to-end tests (real extension in Chromium)
```

## Local observability

Run Dita in a persistent headed Chromium while capturing browser and extension
activity to local structured logs:

```sh
just observe         # foreground: build, open Chromium, collect events
just observe-start   # background: agent-friendly startup
just observe-status  # report current browser/session state
just observe-errors  # show current warnings and errors
just observe-stop    # stop only the observability browser
```

Captured events include page/service-worker console output, uncaught browser
errors, failed requests, HTTP error responses, navigation, pages, and workers.
Set `DITA_OBSERVE_URL` to open a specific page at startup. Run from `nix develop`
so Playwright can use the bundled Chrome for Testing.

## Structure

```
src/
  domain/        # business logic (no framework deps)
  infra/         # Chrome API + audio adapters (speechSynthesis, Supertonic ONNX, cache)
  content/       # page-level UI: widget, highlighter, picker
  lib/           # zero-dependency shared code
  entrypoints/   # WXT entry points (background, content, offscreen, voices)
e2e/             # Playwright E2E with deterministic fake TTS
docs/            # More context
```
