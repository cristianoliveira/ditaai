import { afterEach, describe, expect, it, vi } from 'vitest';
import { RuntimeInstalledVoiceReader } from './runtime-installed-voice-reader';

describe('RuntimeInstalledVoiceReader', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('asks service worker whether installed voice is available', async () => {
    const sendMessage = vi.fn().mockResolvedValue({ ok: true, available: true });
    vi.stubGlobal('chrome', { runtime: { sendMessage } });
    const subject = new RuntimeInstalledVoiceReader();

    await expect(subject.isAvailable()).resolves.toBe(true);
    expect(sendMessage).toHaveBeenCalledWith({
      dest: 'serviceWorker',
      method: 'isInstalledVoiceAvailable',
      args: [],
    });
  });

  it('sends serializable speech options through service worker', async () => {
    const sendMessage = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('chrome', { runtime: { sendMessage } });
    const subject = new RuntimeInstalledVoiceReader();

    await subject.speak('hello', { rate: 1.2, onBoundary: vi.fn() });

    expect(sendMessage).toHaveBeenCalledWith({
      dest: 'serviceWorker',
      method: 'speakWithInstalledVoice',
      args: ['hello', { rate: 1.2 }],
    });
  });

  it('rejects service worker playback errors', async () => {
    vi.stubGlobal('chrome', {
      runtime: { sendMessage: vi.fn().mockResolvedValue({ ok: false, error: 'Voice failed' }) },
    });
    const subject = new RuntimeInstalledVoiceReader();

    await expect(subject.speak('hello')).rejects.toThrow('Voice failed');
  });
});
