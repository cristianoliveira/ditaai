import { describe, expect, it, vi } from 'vitest';
import { expectErr } from '../../lib/result-assert';
import { type TtsProvider, synthesizeWith } from './synthesis';

describe('synthesizeWith', () => {
  const makeProvider = (): TtsProvider => ({
    synthesize: vi.fn().mockResolvedValue({ ok: true, value: new ArrayBuffer(8) }),
  });

  it('routes to correct provider by voiceUri', async () => {
    const piper = makeProvider();
    const providers = new Map([['piper:amy', piper]]);
    const result = await synthesizeWith(providers, { text: 'hello', voiceUri: 'piper:amy' });
    expect(result.ok).toBe(true);
    expect(piper.synthesize).toHaveBeenCalledWith('hello', undefined);
  });

  it('returns error for unknown voice', async () => {
    const providers = new Map<string, TtsProvider>();
    const result = await synthesizeWith(providers, { text: 'hello', voiceUri: 'unknown' });
    expect(expectErr(result).message).toContain('No provider for voice');
  });

  it('passes rate to provider', async () => {
    const piper = makeProvider();
    const providers = new Map([['piper:amy', piper]]);
    await synthesizeWith(providers, { text: 'fast', voiceUri: 'piper:amy', rate: 2.0 });
    expect(piper.synthesize).toHaveBeenCalledWith('fast', 2.0);
  });
});
