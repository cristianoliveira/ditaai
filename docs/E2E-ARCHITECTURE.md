# E2E test architecture

How Dita is tested end-to-end: the real extension loaded in Chromium, driven
through its own surfaces, with a deterministic fake TTS engine.

Adapted from `.local/read-aloud/e2e/` — a proven harness pattern for MV3
extension testing.

## Principles

1. **Real extension, not mocks.** Tests load the built `dist/` via
   `--load-extension`. No unit-level shims of the manifest or service worker.
2. **Deterministic by default.** Fake TTS fulfills the provider contract
   synchronously. No real audio, no network, no fixed sleeps.
3. **Observe state, never time.** Assert via `expect.poll` on observable
   extension state (playback state, storage, worker messages). MV3 worker
   suspension is handled by waiting on messages, not `waitForTimeout`.
4. **One concern per spec.** Happy and unhappy paths in separate tests.
5. **Talk to requesters, not `chrome.*`.** Tests use requester clients.
   Chrome API access never appears inline in a spec.
6. **Fail on uncaught errors.** The harness collects page/worker errors; every
   spec asserts the error list is empty (minus documented benign logs).

## Structure

```
e2e/
├── playwright.config.ts   # runner: testDir ./tests, testMatch **/*.pw.ts, chromium only
├── helpers/
│   ├── extension.ts       # launchExtensionContext: stage + --load-extension + id discovery + error capture
│   ├── fixture-server.ts  # static HTML fixture pages over http
│   └── fake-tts.ts        # LEGACY unused: Piper-origin routing to silent WAV (kept for reference)
├── fixtures/              # article.html, empty.html, fake-tts-article.html
├── requesters/
│   ├── service-worker.ts  # chrome.runtime.sendMessage client (serviceWorker dest)
│   └── settings.ts        # chrome.storage.local client (seed voices/settings)
├── types/
│   └── messages.ts        # shared message + state contracts (mirror src/domain/messaging/router.ts)
└── tests/
    └── extension/
        ├── startup.pw.ts           # manifest loads, SW boots, harness page serves, no errors
        ├── playback.pw.ts          # play text → pause → resume → stop via the real SW
        ├── play-tab.pw.ts          # content-script injection reads a fixture page
        ├── widget.pw.ts            # toggleWidget injects a visible widget
        ├── highlight-and-widget.pw.ts  # word highlighting via FakeBoundaryReader
        └── installed-voice.pw.ts   # offscreen reads extension-owned voice cache (seeded)
```

## The harness contract

`launchExtensionContext()` is the single entry point. Every spec uses it:

```ts
const harness = await launchExtensionContext();
try {
  const { context, extensionId, errors } = harness;
  // ... drive the extension via requesters ...
  expect(errors).toEqual([]);
} finally {
  await harness.close();
}
```

It:
1. Stages the built extension (`just build` output) to a temp dir.
2. Launches `chromium.launchPersistentContext` with `--load-extension` (full
   Chromium — the headless shell does not load extensions).
3. Waits for the service worker to register.
4. Resolves the extension id from the worker URL (never hardcoded).
5. Captures `pageerror`, worker `console.error`, and unhandled rejections.
6. Cleans up temp dirs on `close()`.

## Deterministic fake TTS

No real TTS ever runs. Two mechanisms cover the audio paths:

1. **Content-level `FakeBoundaryReader`** (`src/content/fake-reader.ts`).
   Activated when a fixture page's `<html>` has `data-dita-test-reader="fake"`
   (set via `page.addInitScript` before the content script loads). It fires
   synthetic word boundaries on a fixed 50ms interval, so highlighting and
   widget state are testable deterministically.
2. **Seeded voice cache** (`installed-voice.pw.ts`). Writes stub responses for
   the Supertonic engine assets + a voice into the extension's `dita-voices`
   Cache Storage, then asserts the offscreen document reports the voice as
   available (`isInstalledVoiceAvailable` → `true`). No model files, no audio.

## Requesters (test → extension)

Tests never call `chrome.*` directly. Each extension surface has a requester:

- **`ServiceWorkerRequester`** — `chrome.runtime.sendMessage` from an extension
  page. Methods: `playTab`, `playText`, `pause`, `resume`, `stop`,
  `getPlaybackState`, plus installed-voice methods (`isInstalledVoiceAvailable`,
  `speakWithInstalledVoice`, ...).
- **`SettingsRequester`** — `chrome.storage.local` get/set from an extension
  page. Seeds voice selection and settings before playback tests.

Both require a page on the extension origin
(`chrome-extension://<id>/...`, e.g. `harness.html`) so `chrome.runtime` /
`chrome.storage` are available.

## Message contract

`e2e/types/messages.ts` mirrors `src/domain/messaging/router.ts`. When the
extension's message shape changes, both change together. The contract:

```ts
interface RuntimeMessage {
  dest: "serviceWorker" | "contentScript";
  method: string;
  args: unknown[];
}

type PlaybackState = "STOPPED" | "PLAYING" | "PAUSED";
```

## Running

```bash
just build         # stage the extension into dist/
just test-e2e      # playwright test (headless)
just test-e2e:ui   # interactive UI mode
```

E2E is separate from unit tests (`just test`). CI runs both:
`just check && just test-e2e`.

## What each spec proves

| Spec | Proves |
| --- | --- |
| `startup.pw.ts` | Manifest loads, SW boots, harness page serves, zero uncaught errors |
| `playback.pw.ts` | Full play → pause → resume → stop cycle through the real SW |
| `play-tab.pw.ts` | Content-script injection reads a real fixture page and plays it |
| `widget.pw.ts` | `toggleWidget` injects a visible, interactive widget |
| `highlight-and-widget.pw.ts` | Word highlighting + widget state via `FakeBoundaryReader` |
| `installed-voice.pw.ts` | Offscreen doc detects installed voice from seeded cache |

## Anti-patterns (DO NOT)

- Do NOT use `page.waitForTimeout` to wait for async work — poll on state.
- Do NOT call `chrome.*` inline in specs — use a requester or page object.
- Do NOT hardcode the extension id — resolve it from the worker URL.
- Do NOT run real TTS or hit the network in E2E — use the fakes above.
- Do NOT share browser context across specs — one `launchExtensionContext` per test.
