# DitaAi

**DitaAi** is a play on Brazilian Portuguese **“dita aí”** (“say it out”) and
**Dita + AI**.

Turn a web page into a small, audiobook-like listening experience. Local-first,
private, and fully tested.

Open DitaAi and press play to hear the page's meaningful content. Pause, resume,
change speed, move by paragraph, or start from a chosen paragraph while DitaAi
highlights your place. A Supertonic neural voice can run locally through
WebAssembly; browser speech is the built-in fallback.

See [product direction](docs/PRODUCT.md) for promises and boundaries.

## Why

- **Listen instead of read.** DitaAi extracts page content and gives it familiar
  audiobook controls.
- **Local-first narration.** Supertonic ONNX models synthesize on-device in an
  offscreen document. Page text is not sent to a DitaAi server.
- **Ports and adapters.** Domain logic knows nothing about Chrome APIs, network,
  or the DOM. Every seam is testable.
- **No lock-in.** No account required.

## Voices

DitaAi ships with 10 Supertonic presets (M1–M5, F1–F5) from
[Supertone/supertonic-3](https://huggingface.co/Supertone/supertonic-3).

- **In the extension:** open the floating widget → settings (gear) → Voices
  page, then download a voice. Files are stored in Cache Storage
  (`dita-voices`) and read by the offscreen document at playback time.
- **Before installing:** `just install-voices [M1 F3 ...]` downloads voice
  files to `voices/supertonic/` for offline use or packaging.

## Inspirations

These projects inspired us:

- [read-aloud](https://github.com/ken107/read-aloud) — ports & adapters layout,
  deterministic fake-TTS E2E harness, messaging contract.
  
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

Run DitaAi in a persistent headed Chromium while capturing browser and extension
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
