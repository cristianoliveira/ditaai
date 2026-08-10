import { describe, expect, it, vi } from 'vitest';
import { OffscreenSupertonicReader } from './offscreen-supertonic-reader';

function selectionStore(voiceId: string | null = 'F2') {
  return {
    load: vi.fn().mockResolvedValue(voiceId),
    save: vi.fn(),
  };
}

function chromeApi() {
  return {
    runtime: {
      getURL: vi.fn((path: string) => `chrome-extension://test/${path}`),
      getContexts: vi.fn().mockResolvedValue([]),
      sendMessage: vi.fn(),
    },
    offscreen: {
      createDocument: vi.fn().mockResolvedValue(undefined),
    },
  };
}

describe('OffscreenSupertonicReader', () => {
  it('creates offscreen document before checking installed voices', async () => {
    const chrome = chromeApi();
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true, available: true });
    const subject = new OffscreenSupertonicReader(chrome, selectionStore());

    await expect(subject.isAvailable()).resolves.toBe(true);

    expect(chrome.offscreen.createDocument).toHaveBeenCalledWith({
      url: 'offscreen.html',
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Play installed text-to-speech voices',
    });
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'isAvailable',
      args: ['F2'],
    });
  });

  it('forwards speech preparation to offscreen document', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true });
    const subject = new OffscreenSupertonicReader(chrome, selectionStore());

    await subject.prepare('next paragraph', {
      rate: 1.2,
      pitch: 0.8,
      volume: 0.4,
      resumeFromChar: 3,
      onBoundary: vi.fn(),
    });

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'prepare',
      args: ['F2', 'next paragraph', { rate: 1.2, pitch: 0.8, volume: 0.4, resumeFromChar: 3 }],
    });
  });

  it('forwards serializable speech options to offscreen document', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true });
    const subject = new OffscreenSupertonicReader(chrome, selectionStore());

    await subject.speak('hello', {
      rate: 1.2,
      pitch: 0.8,
      volume: 0.4,
      resumeFromChar: 3,
      onBoundary: vi.fn(),
    });

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'speak',
      args: ['F2', 'hello', { rate: 1.2, pitch: 0.8, volume: 0.4, resumeFromChar: 3 }],
    });
  });

  it('surfaces offscreen playback errors', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: false, error: 'Voice failed' });
    const subject = new OffscreenSupertonicReader(chrome, selectionStore(null));

    await expect(subject.speak('hello')).rejects.toThrow('Voice failed');
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'speak',
      args: [null, 'hello', undefined],
    });
  });
});
