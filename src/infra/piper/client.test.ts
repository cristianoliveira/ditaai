import { beforeEach, describe, expect, it, vi } from 'vitest';
import { expectErr, expectOk } from '../../lib/result-assert';
import { PiperClient } from './client';

describe('PiperClient', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('returns audio buffer on success', async () => {
    const audioData = new ArrayBuffer(8);
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        arrayBuffer: () => Promise.resolve(audioData),
      }),
    );

    const client = new PiperClient({ baseUrl: 'http://127.0.0.1:17493' });
    const result = await client.synthesize('hello');

    expect(expectOk(result)).toBe(audioData);
  });

  it('returns error on HTTP failure', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
      }),
    );

    const client = new PiperClient({ baseUrl: 'http://127.0.0.1:17493' });
    const result = await client.synthesize('');

    expect(expectErr(result).message).toContain('400');
  });

  it('returns error on network failure', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Connection refused')));

    const client = new PiperClient({ baseUrl: 'http://127.0.0.1:17493' });
    const result = await client.synthesize('hello');

    expect(expectErr(result).message).toContain('Connection refused');
  });
});
