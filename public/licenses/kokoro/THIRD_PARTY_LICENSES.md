# Kokoro runtime notices

Dita includes the following runtime packages for local Kokoro inference:

- `kokoro-js` 1.2.1 — Apache-2.0.
- `@huggingface/transformers` 3.8.1 — Apache-2.0.
- `onnxruntime-web` 1.27.x — MIT.
- `phonemizer` 1.2.1 — Apache-2.0 package metadata; it uses eSpeak NG phonemization.

The corresponding Apache-2.0 and MIT license texts are included in this directory. The Kokoro 82M model and voice embeddings are separate downloads, not bundled files; model publisher license metadata identifies the pinned artifacts as Apache-2.0.

**Release clearance is not complete.** The `phonemizer` package metadata does not settle the license and notice obligations for its bundled eSpeak NG runtime/data or the complete dependency bundle. Verify the exact packaged assets and notices before external distribution. See `docs/KOKORO-VOICES.md` for model provenance and the open clearance item.
