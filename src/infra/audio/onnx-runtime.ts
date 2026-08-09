import * as ort from 'onnxruntime-web';

export const ONNX_WASM_FILE = 'ort-wasm-simd-threaded.jsep.wasm';

export function configureOnnxRuntime(resolveExtensionUrl: (path: string) => string): void {
  ort.env.wasm.wasmPaths = {
    wasm: resolveExtensionUrl(ONNX_WASM_FILE),
  };
}
