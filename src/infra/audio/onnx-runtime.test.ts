import * as ort from 'onnxruntime-web';
import { afterEach, describe, expect, it } from 'vitest';
import { configureOnnxRuntime } from './onnx-runtime';

describe('configureOnnxRuntime', () => {
  afterEach(() => {
    ort.env.wasm.wasmPaths = undefined;
  });

  it('loads ONNX WebAssembly from extension origin', () => {
    configureOnnxRuntime((path) => `chrome-extension://test/${path}`);

    expect(ort.env.wasm.wasmPaths).toEqual({
      wasm: 'chrome-extension://test/ort-wasm-simd-threaded.jsep.wasm',
    });
  });
});
