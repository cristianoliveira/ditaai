# Phonon voice

DitaAi offers one downloadable English Phonon voice: **Phonon 31m English
(Default)**. The checkpoint is Apache-2.0 licensed and pinned to revision
`8c64b55ec301728e2d1695bfea87a08a267d0c2d` in
[`src/domain/voices/catalog.ts`](../src/domain/voices/catalog.ts). Attribution and
runtime notices ship under [`public/licenses/phonon-tts/`](../public/licenses/phonon-tts/).

## Install and select

1. Open the DitaAi widget, choose **Settings → Voices**.
2. Download **Phonon 31m English (Default)**. The download includes the shared
   config, tokenizer, q8 GGUF model (~61.5 MiB), and voice embedding (~244 KiB);
   expect about 62 MB total.
3. Once installed, choose **Use voice**. DitaAi persists the selected voice.

The first installation needs network access to Hugging Face. DitaAi verifies
expected asset lengths before marking Phonon installed. Incomplete or stale
cached assets are rejected and redownloaded. Uninstalling Phonon removes the
model and its voice data together.

## Offline and privacy behavior

After installation, the worker, single-threaded WebAssembly binaries, model,
tokenizer, config, and voice embedding are read from extension-bundled files or
local Cache Storage. Playback does not fetch executable code or model files from
the network. Page text is synthesized on-device and is not sent to DitaAi or
Phonon servers. Clearing extension site data removes downloaded model assets;
reinstalling then requires network access.

To check offline playback manually:

1. Install the voice while online and confirm the voice card shows **Use voice**.
2. Disconnect from the network or block Hugging Face requests.
3. Start narration on a readable page and confirm audio plays.
4. Check `just observe-errors` for failed requests or runtime errors. A successful
   run should include Phonon synthesis and playback events and no requests for
   Phonon model files.

## Runtime and licenses

The extension bundles [`phonon-tts` 0.6.0](https://www.npmjs.com/package/phonon-tts)
for local inference. The runtime and model are separately licensed: the runtime
is MIT OR Apache-2.0; the model is Apache-2.0. The built extension includes the
applicable license and third-party notices in `licenses/phonon-tts/`.

The runtime worker and WASM are bundled with the extension. Model assets are
separate downloads and are stored in Cache Storage `phonon-tts-v1`.
