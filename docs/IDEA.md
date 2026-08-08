# Dita — the idea

**Dita aí** — Brazilian Portuguese for "speak it" / "say it out".
A read-out-loud Chrome extension. Local-first, private, fully tested.

## What it does

Click (or hotkey) → Dita reads the page aloud, highlighting each word as it
speaks. Works on articles, docs, PDFs. No account, no cloud round-trip for the
voice.

## Why

- **Local-first TTS.** Text never leaves the machine for the default voice.
  Piper runs on localhost; audio is synthesized on-device.
- **Ports and adapters.** Domain logic knows nothing about Chrome APIs,
  network, or the DOM. Every seam is testable.
- **Testable by construction.** Unit tests run in Node against fakes. E2E tests
  load the real extension in Chromium with a deterministic fake TTS engine —
  no network, no flaky waits, no real audio.
- **No lock-in.** No account required, no cloud round-trip for the voice.

## Inspirations (in `.local/`)

Studied, not copied. These projects shaped our thinking:

| Reference | Inspired |
| --- | --- |
| `read-aloud/` | Ports & adapters layout, deterministic fake-TTS E2E harness, messaging contract |
| `speachify/` | Local Piper server design, `speechSynthesis` bridge pattern, word-boundary emulation |

## Core flows

1. **Activate** — user clicks the action button or hits the hotkey on a tab.
2. **Read** — content script extracts text; service worker picks a voice;
   TTS provider synthesizes audio; player plays it with word highlighting.
3. **Control** — pause / resume / stop / skip, driven from popup or hotkeys.

## Voice providers (pluggable)

Dita treats every voice as a provider behind one domain port:

- **Piper (local, default)** — localhost server, ONNX models, zero network.
- **Native `speechSynthesis`** — browser-built-in voices, passthrough.
- **Cloud TTS (later)** — hosted providers, opt-in, never default.

The domain never imports a provider. The composition root wires them.

## Non-goals (for now)

- No account system, no sync, no cloud library.
- No PDF rendering engine (use the browser's built-in viewer + text extraction).
- No mobile app.
