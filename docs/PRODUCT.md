# Product direction — DitaAi

## Goal

DitaAi turns readable web pages and text-based PDFs into a small, audiobook-like
audio experience. A user opens DitaAi, presses play, and listens instead of reading.

## Product promises

- **Page first.** DitaAi narrates the page's meaningful content, not browser or
  site controls.
- **Listen like a short audiobook.** Play, pause, resume, stop, change speed,
  move by paragraph, and start from a chosen paragraph.
- **Works across page structures.** Prefer semantic article content and fall
  back to generic application containers when a page does not use semantic
  HTML. The user can select a narrower reading scope when automatic extraction
  is wrong.
- **Private by default.** Narration runs locally with an installed Supertonic
  voice or the browser's speech engine. Page text is not sent to a DitaAi server.
- **Keep place visible.** Paragraph and word highlighting connect narration to
  its source on the page. For a PDF URL, DitaAi opens its own reading view to
  display the original pages, highlight spoken words, and show page position.
- **Accessible controls.** Every playback action has a clear assistive label.

## Boundaries

- DitaAi narrates existing page text; it does not summarize, rewrite, translate,
  or record a permanent audiobook file.
- Browser-protected pages where Chrome blocks content scripts cannot be read.
  HTTP(S) text-based PDFs use a separate DitaAi reading view; a PDF URL without
  a `.pdf` suffix needs an explicit **Read this link as PDF…** action in the
  popup. Chrome's built-in PDF viewer cannot be highlighted by DitaAi.
- Scanned/image-only and password-protected PDFs, local file URLs, and PDFs
  exceeding reader limits are outside the first PDF dictation release.
- Cloud TTS, accounts, and a standalone local TTS server are not active product
  paths.

Product decisions should strengthen this listening flow before adding provider
or infrastructure options.
