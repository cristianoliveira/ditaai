# Kitten Nano voices

Dita supports the eight English speakers bundled with Kitten TTS Nano v0.8:
Bella (female), Jasper (male), Luna (female), Bruno (male), Rosie (female), Hugo (male), Kiki (female), and Leo (male). The ONNX graph and `voices.npz` archive are shared across these aliases; installing one downloads the shared bundle, and each selected alias chooses its matching embedding.

## Model provenance and license

- ONNX export: [`onnx-community/KittenTTS-Nano-v0.8-ONNX`](https://huggingface.co/onnx-community/KittenTTS-Nano-v0.8-ONNX/tree/6078af30aab083436023d04ba845aedd9d1a9206), pinned in `src/domain/voices/catalog.ts` at revision `6078af30aab083436023d04ba845aedd9d1a9206`.
- Base model: [`KittenML/kitten-tts-nano-0.8-fp32`](https://huggingface.co/KittenML/kitten-tts-nano-0.8-fp32).
- Speaker names and gender descriptions: [KittenML voice documentation](https://github.com/KittenML/KittenTTS/blob/main/docs/voices-and-expression.md#built-in-voices).
- Both Hugging Face model records identify the model artifacts as Apache-2.0. This is model-level metadata, not a claim about the separate KittenTTS software package or its dependencies. The app downloads the pinned model at runtime; it does not bundle model weights.

License metadata is provenance supplied by the model publishers, not independent legal advice or a legal review of every artifact and dependency. Recheck the pinned model card and applicable notices before changing the model revision or redistributing model files.

## Release clearance still required

Kitten inference also depends on `phonemizer` 1.2.1, whose package describes itself as an eSpeak NG phonemizer. Its npm metadata declares Apache-2.0, but that does not by itself clear the license and notice obligations for the bundled eSpeak NG runtime/data or the complete dependency bundle shipped in the extension. Treat this as an open release-clearance item; verify the exact packaged assets and notices before external distribution.
