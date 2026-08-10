import { describe, expect, it } from 'vitest';
import { isFatalOnnxError } from './onnx-errors';

describe('isFatalOnnxError', () => {
  it.each([
    'memory access out of bounds',
    'Error: memory access out of bounds',
    'RuntimeError: memory access out of bounds',
    'unreachable executed',
    'out of memory',
    'WebAssembly.RuntimeError: out of memory',
  ])('classifies WASM/ONNX trap %j as fatal', (message) => {
    expect(isFatalOnnxError(new Error(message))).toBe(true);
    expect(isFatalOnnxError(message)).toBe(true);
  });

  it.each([
    'No installed voice is ready',
    'Installed voice unavailable',
    'Offscreen voice unavailable',
    'Could not establish connection. Receiving end does not exist.',
    'Voice failed',
    'inference failed',
  ])('does not classify transient error %j as fatal', (message) => {
    expect(isFatalOnnxError(new Error(message))).toBe(false);
  });

  it('handles non-error inputs', () => {
    expect(isFatalOnnxError(undefined)).toBe(false);
    expect(isFatalOnnxError(null)).toBe(false);
    expect(isFatalOnnxError({})).toBe(false);
  });
});
