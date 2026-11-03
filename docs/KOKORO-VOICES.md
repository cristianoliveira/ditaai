# Kokoro 82M English voices

Dita supports four English Kokoro presets: Heart, Michael, Emma, and George. Kokoro runs on-device through the pinned Transformers.js/ONNX Runtime stack. The selected preset is stored in extension settings; synthesis does not send page text to a server.

## Install and select

1. Open the Dita widget and choose **Settings → Voices**.
2. Download a Kokoro preset. The first install caches the shared q8 ONNX model (~88 MiB), tokenizer/config, and selected 510 KiB voice embedding. Additional presets add only their own embedding.
3. Choose **Use voice**. Selection is saved in extension storage.

Assets are pinned to `onnx-community/Kokoro-82M-v1.0-ONNX` revision `1939ad2a8e416c0acfeecc08a694d14ef25f2231` and stored in Cache Storage `kokoro-tts-v1`. The installer checks each asset's byte length and SHA-256 before marking it verified. Uninstalling the final Kokoro preset removes the shared model assets; uninstalling one preset preserves the shared model while another verified preset remains.

The SHA-256 values were checked against the pinned Hugging Face resolve endpoint. Small JSON files were downloaded and hashed; LFS object SHA-256 values and sizes were checked in the response metadata.

## Offline and privacy behavior

After a complete install, model and voice data are loaded only from the extension's Cache Storage. Transformers.js remote-model access is disabled for this runtime, and the ONNX backend uses single-threaded WASM. Playback should continue without a network connection. Clearing extension site data removes the cache; reinstalling then requires network access.

To smoke-test offline playback:

1. Install a Kokoro preset while online and verify the card changes to **Use voice**.
2. Disconnect the browser from the network.
3. Start narration on a readable multi-paragraph page and confirm audio plays.
4. Stop and seek, then restart narration. Check `just observe-errors` for failures and confirm no browser-TTS fallback occurred.

Kokoro synthesis buffers a segment before playback. Word highlighting uses estimated punctuation-weighted timing because Kokoro does not emit per-word timestamps. English presets only are catalogued; Portuguese phonemization is not supported by this integration.

## Provenance and license status

- Model and voice artifacts: [pinned Hugging Face revision](https://huggingface.co/onnx-community/Kokoro-82M-v1.0-ONNX/tree/1939ad2a8e416c0acfeecc08a694d14ef25f2231); publisher metadata identifies the artifacts as Apache-2.0.
- Runtime: [`kokoro-js` 1.2.1](https://www.npmjs.com/package/kokoro-js), Transformers.js 3.8.1, ONNX Runtime Web 1.27.0, and `phonemizer` 1.2.1. Third-party notices ship under [`public/licenses/kokoro/`](../public/licenses/kokoro/).

License metadata is provenance, not legal advice or independent clearance. **Release clearance remains open:** `phonemizer` uses eSpeak NG, and its package license does not establish the obligations for bundled eSpeak NG code/data or the complete dependency bundle. Confirm the exact shipped assets and notices before external distribution. Do not treat this integration as license-cleared.
