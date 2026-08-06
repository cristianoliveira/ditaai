# Speechify with local Piper voices

Development copy of Speechify 14.3.2 with **Amy (Piper Local)** from `~/other/pi-speak/voices`.

## Run

1. Start local voice companion:

   ```sh
   npm run voice-server
   ```

2. Open `brave://extensions`.
3. Enable **Developer mode**.
4. Choose **Load unpacked** and select this directory.
5. Reload the development extension after code changes.
6. Open Speechify voice picker and select **Amy (Piper Local)** under English voices.

Keep voice companion running while using Amy. Existing voices do not need it.

Amy emits word-boundary events so Speechify highlighting follows spoken text. Piper does not provide exact word timestamps, so boundaries are distributed across measured WAV duration and may drift slightly around long punctuation pauses.

Local playback works without signing in. Speechify cloud and premium services still enforce their own authentication and subscription requirements.

## Verify

```sh
npm test
curl http://127.0.0.1:17493/health
```

Piper endpoint binds only to `127.0.0.1` and accepts browser requests only from extension origins. Text sent to Amy stays local.

## Development files

- `piper-local-voice.js` — adds Amy to browser voice list and intercepts its playback.
- `dev/piper-server.mjs` — invokes local `piper` executable and returns WAV audio.
- `voices/` — copied ONNX model and Piper configuration.
- `test/piper-local.test.mjs` — bridge/server contract tests.

This repository contains packaged/minified Speechify production code rather than original source. Store verification metadata, store update URL, and original extension key were removed so Brave can load this as independent unpacked extension.
