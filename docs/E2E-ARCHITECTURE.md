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
5. **Talk to requesters, not `chrome.*`.** Tests use requester/page-object
   clients. Chrome API access never appears inline in a spec.
6. **Fail on uncaught errors.** The harness collects page/worker errors; every
   spec asserts the error list is empty (minus documented benign logs).

## Structure

```
e2e/
├── playwright.config.ts   # runner: testDir ./tests, testMatch **/*.pw.ts, chromium only
├── helpers/
│   ├── extension.ts       # launchExtensionContext: stage + --load-extension + id discovery + error capture
│   ├── fake-tts.ts        # installFakeTts: route provider origins to local fixture pages
│   └── fixture-server.ts  # static HTML pages (articles, empty, pdf) served over http
├── fixtures/              # fake-tts.html, article.html, empty.html — deterministic peers
├── requesters/
│   ├── service-worker.ts  # chrome.runtime.sendMessage client (serviceWorker dest)
│   └── settings.ts        # chrome.storage.local client (seed voices/settings)
├── pages/
│   ├── popup.page.ts      # popup UI page object
│   └── player.page.ts     # player runtime page object
├── types/
│   └── messages.ts        # shared message + state contracts (mirror src/domain/messaging)
└── tests/
    └── extension/
        ├── startup.pw.ts       # manifest loads, SW boots, pages serve, no errors
        ├── playback.pw.ts      # play text → pause → resume → stop with fake TTS
        ├── play-tab.pw.ts      # content-script injection reads a fixture page
        └── error-path.pw.ts    # empty page, missing voice, provider failure
```

## The harness contract

`launchExtensionContext()` is the single entry point. Every spec uses it:

```ts
const harness = await launchExtensionContext();
try {
  const { context, extensionId, errors } = harness;
  // ... drive the extension via requesters/page objects ...
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

The default Piper provider talks to `http://127.0.0.1:17493`. In E2E we route
that origin to a local fixture page that fulfills the provider contract:
returns a fixed-length silent WAV, records start/stop, emits boundary events.
No real Piper process, no model files, no audio output.

```ts
await installFakeTts(context);  // before driving playback
```

This lets us assert the full pipeline — service worker → player → provider →
audio runtime — without external dependencies.

## Requesters (test → extension)

Tests never call `chrome.*` directly. Each extension surface has a requester:

- **`ServiceWorkerRequester`** — `chrome.runtime.sendMessage` from an extension
  page. Methods: `playTab`, `playText`, `pause`, `resume`, `stop`,
  `getPlaybackState`.
- **`SettingsRequester`** — `chrome.storage.local` get/set from an extension
  page. Seeds voice selection and settings before playback.

Both require a page on the extension origin
(`chrome-extension://<id>/...`) so `chrome.runtime` / `chrome.storage` are
available.

## Message contract

`e2e/types/messages.ts` mirrors `src/domain/messaging.ts`. When the extension's
message shape changes, both change together. The contract:

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
just test:e2e      # playwright test (headless)
just test:e2e:ui   # interactive UI mode
```

E2E is separate from unit tests (`just test`). CI runs both:
`just check && just test:e2e`.

## What each spec proves

| Spec | Proves |
| --- | --- |
| `startup.pw.ts` | Manifest loads, SW boots, extension pages serve, zero uncaught errors |
| `playback.pw.ts` | Full play → pause → resume → stop cycle through fake TTS |
| `play-tab.pw.ts` | Content-script injection reads a real fixture page and plays it |
| `error-path.pw.ts` | Empty page / missing voice / provider failure handled gracefully |

## Anti-patterns (DO NOT)

- Do NOT use `page.waitForTimeout` to wait for async work — poll on state.
- Do NOT call `chrome.*` inline in specs — use a requester or page object.
- Do NOT hardcode the extension id — resolve it from the worker URL.
- Do NOT run real TTS or hit the network in E2E — route to fakes.
- Do NOT share browser context across specs — one `launchExtensionContext` per test.
