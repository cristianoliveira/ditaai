import { describe, expect, it, vi } from 'vitest';
import {
  KITTEN_MODEL_GRAPH_BYTES,
  isKittenModelCached,
  isVerifiedKittenModel,
} from './kitten-model';

describe('Kitten model cache validation', () => {
  it('rejects legacy or partial cache entries without verified size metadata', () => {
    expect(isVerifiedKittenModel(new Response('partial model'))).toBe(false);
  });

  it('accepts a completed download only when it carries the pinned graph size', () => {
    const response = new Response('model bytes', {
      headers: { 'x-dita-verified-size': String(KITTEN_MODEL_GRAPH_BYTES) },
    });

    expect(isVerifiedKittenModel(response)).toBe(true);
  });

  it('checks the shared graph cache entry', async () => {
    const match = vi.fn().mockResolvedValue(new Response('partial model'));
    const cache = { match } as unknown as Cache;

    await expect(isKittenModelCached(cache)).resolves.toBe(false);
    expect(match).toHaveBeenCalledOnce();
  });
});
