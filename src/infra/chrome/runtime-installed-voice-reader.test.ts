import { afterEach, describe, expect, it, vi } from 'vitest';
import { RuntimeInstalledVoiceReader } from './runtime-installed-voice-reader';

describe('RuntimeInstalledVoiceReader', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

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

  it('treats a missing service worker receiver as installed voice unavailable', async () => {
    const connectionError = new Error(
      'Could not establish connection. Receiving end does not exist.',
    );
    const sendMessage = vi.fn().mockRejectedValue(connectionError);
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('chrome', { runtime: { sendMessage } });
    const subject = new RuntimeInstalledVoiceReader();

    await expect(subject.isAvailable()).resolves.toBe(false);
    expect(consoleError).not.toHaveBeenCalled();
  });

  it('asks service worker to prepare installed speech', async () => {
    const sendMessage = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('chrome', { runtime: { sendMessage } });
    const subject = new RuntimeInstalledVoiceReader();

    await subject.prepare('next paragraph', { rate: 1.2, volume: 0.4, onBoundary: vi.fn() });

    expect(sendMessage).toHaveBeenCalledWith({
      dest: 'serviceWorker',
      method: 'prepareInstalledVoice',
      args: ['next paragraph', { rate: 1.2, volume: 0.4 }],
    });
  });

  it('does not log optional preparation failures as playback errors', async () => {
    const sendMessage = vi.fn().mockResolvedValue({
      ok: false,
      error: 'Unknown method: prepareInstalledVoice',
    });
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.stubGlobal('chrome', { runtime: { sendMessage } });
    const subject = new RuntimeInstalledVoiceReader();

    await expect(subject.prepare('next paragraph')).rejects.toThrow(
      'Unknown method: prepareInstalledVoice',
    );
    expect(consoleError).not.toHaveBeenCalled();
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
