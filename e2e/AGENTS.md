# e2e

Playwright end-to-end tests. Loads the real built extension in Chromium.

## Structure

```
e2e/
├── helpers/
│   ├── extension.ts      launchExtensionContext: --load-extension + ID discovery + error capture
│   └── fixture-server.ts static HTML pages (article, empty, fake-tts-article) over http
├── fixtures/             article.html, empty.html, fake-tts-article.html
├── requesters/
│   ├── service-worker.ts ServiceWorkerRequester: chrome.runtime.sendMessage
│   └── settings.ts       SettingsRequester: chrome.storage.local
├── types/
│   └── messages.ts       shared contracts (mirror src/domain/messaging/router.ts)
└── tests/extension/
    ├── startup.pw.ts           manifest loads, SW boots, zero errors
    ├── playback.pw.ts          play→pause→resume→stop via real messaging
    ├── play-tab.pw.ts          content-script reads fixture page, plays
    ├── widget.pw.ts            toggleWidget injects visible widget
    ├── highlight-and-widget.pw.ts  word highlighting via FakeBoundaryReader
    └── installed-voice.pw.ts   offscreen detects voice from seeded cache
```

Fake TTS is the content-level `FakeBoundaryReader`
(`src/content/fake-reader.ts`), activated by `data-dita-test-reader="fake"` on
fixture pages; installed-voice tests seed the `dita-voices` cache directly.

## Conventions

- Specs: `*.pw.ts`, one concern per file, happy + unhappy paths
- Tests talk to requesters/page objects, never `chrome.*` inline
- Assert observable state via `expect.poll`, never fixed sleeps
- One `launchExtensionContext` per test (no shared context)
- E2E tsconfig: `lib: ["ESNext"]` (no DOM) to avoid Playwright Worker type conflict

## Running

```sh
just test-e2e        # headless (needs just build first)
just test-e2e-ui     # interactive
```

## Depends on

- `@playwright/test` (`^1.55.1` in package.json; keep in sync with the
  nixpkgs `playwright.browsers` driver, see flake.nix)
- Built extension in `dist/chrome-mv3/`
