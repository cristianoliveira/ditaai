import { afterEach, describe, expect, it, vi } from 'vitest';

const { createSession } = vi.hoisted(() => ({
  createSession: vi.fn().mockResolvedValue({}),
}));
vi.mock('onnxruntime-web', () => ({
  InferenceSession: { create: createSession },
  Tensor: class {},
}));

import { loadTextToSpeech } from './supertonic-helper';

const encoder = new TextEncoder();
const assets: Record<string, ArrayBuffer> = {
  'tts.json': encoder.encode(
    JSON.stringify({
      ae: { sample_rate: 44_100, base_chunk_size: 512 },
      ttl: { chunk_compress_factor: 2, latent_dim: 8 },
    }),
  ).buffer as ArrayBuffer,
  'unicode_indexer.json': encoder.encode('[0,1]').buffer as ArrayBuffer,
  'duration_predictor.onnx': new ArrayBuffer(1),
  'text_encoder.onnx': new ArrayBuffer(1),
  'vector_estimator.onnx': new ArrayBuffer(1),
  'vocoder.onnx': new ArrayBuffer(1),
};

describe('loadTextToSpeech', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    createSession.mockClear();
  });

  it('prefers WebGPU and keeps WASM fallback when GPU is available', async () => {
    vi.stubGlobal('navigator', { gpu: {} });

    await loadTextToSpeech(assets);

    expect(createSession).toHaveBeenCalledTimes(4);
    expect(createSession).toHaveBeenCalledWith(expect.any(ArrayBuffer), {
      executionProviders: ['webgpu', 'wasm'],
      graphOptimizationLevel: 'all',
    });
  });

  it('uses WASM when WebGPU is unavailable', async () => {
    vi.stubGlobal('navigator', {});

    await loadTextToSpeech(assets);

    expect(createSession).toHaveBeenCalledWith(expect.any(ArrayBuffer), {
      executionProviders: ['wasm'],
      graphOptimizationLevel: 'all',
    });
  });
});
