import path from 'node:path';
import { defineWxtModule } from 'wxt/modules';

const ONNX_WASM_FILE = 'ort-wasm-simd-threaded.jsep.wasm';

export default defineWxtModule((wxt) => {
  wxt.hooks.hook('build:publicAssets', (_wxt, files) => {
    files.push({
      absoluteSrc: path.resolve('node_modules/onnxruntime-web/dist', ONNX_WASM_FILE),
      relativeDest: ONNX_WASM_FILE,
    });
  });
});
