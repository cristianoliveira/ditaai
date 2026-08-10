/**
 * Classifies ONNX/WASM errors that leave the inference runtime unrecoverable.
 *
 * `onnxruntime-web` runs models in a WebAssembly linear memory that can grow
 * but never shrink. Once a tensor allocation lands past the memory ceiling the
 * WASM traps (`memory access out of bounds` / `RuntimeError`), and the runtime
 * stays corrupted for every subsequent inference on the same document. Such
 * errors are fatal: the only reliable recovery is to tear the runtime down.
 */
const FATAL_ONNX_PATTERNS = [
  /memory access out of bounds/i,
  /out of memory/i,
  /unreachable executed/i,
  /\bruntimeerror\b/i,
];

export function isFatalOnnxError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : typeof error === 'string' ? error : '';
  if (!message) return false;
  return FATAL_ONNX_PATTERNS.some((pattern) => pattern.test(message));
}
