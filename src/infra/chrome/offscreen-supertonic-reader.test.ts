import { describe, expect, it, vi } from 'vitest';
import { OffscreenSupertonicReader } from './offscreen-supertonic-reader';

function selectionStore(voiceId: string | null = 'F2') {
  return {
    load: vi.fn().mockResolvedValue(voiceId),
    save: vi.fn(),
  };
}

function rotationStore(enabled = false) {
  return { load: vi.fn().mockResolvedValue(enabled) };
}

function qualityStore(steps = 8) {
  return { load: vi.fn().mockResolvedValue(steps), save: vi.fn() };
}

function languageStore(code = 'en') {
  return { load: vi.fn().mockResolvedValue(code), save: vi.fn() };
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
      closeDocument: vi.fn().mockResolvedValue(undefined),
    },
  };
}

function subject(
  chrome: ReturnType<typeof chromeApi>,
  {
    voice = 'F2',
    rotate = false,
    quality = 8,
    language = 'en',
  }: {
    voice?: string | null;
    rotate?: boolean;
    quality?: number;
    language?: string;
  } = {},
): OffscreenSupertonicReader {
  return new OffscreenSupertonicReader(
    chrome,
    selectionStore(voice),
    rotationStore(rotate),
    qualityStore(quality),
    languageStore(language),
  );
}

describe('OffscreenSupertonicReader', () => {
  it('creates offscreen document before checking installed voices', async () => {
    const chrome = chromeApi();
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true, available: true });
    const reader = subject(chrome);

    await expect(reader.isAvailable()).resolves.toBe(true);

    expect(chrome.offscreen.createDocument).toHaveBeenCalledWith({
      url: 'offscreen.html',
      reasons: ['AUDIO_PLAYBACK'],
      justification: 'Play installed text-to-speech voices',
    });
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'isAvailable',
      args: ['F2', { pageVisitId: 'unknown-page-visit', rotateVoices: false }],
    });
  });

  it('forwards speech preparation to offscreen document', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true });
    const reader = subject(chrome);

    await reader.prepare('next paragraph', {
      rate: 1.2,
      pitch: 0.8,
      volume: 0.4,
      resumeFromChar: 3,
      onBoundary: vi.fn(),
    });

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'prepare',
      args: [
        'F2',
        'next paragraph',
        { rate: 1.2, pitch: 0.8, volume: 0.4, quality: 8, language: 'en', resumeFromChar: 3 },
        { pageVisitId: 'unknown-page-visit', rotateVoices: false },
      ],
    });
  });

  it('forwards serializable speech options to offscreen document', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true });
    const reader = subject(chrome);

    await reader.speak('hello', {
      rate: 1.2,
      pitch: 0.8,
      volume: 0.4,
      resumeFromChar: 3,
      onBoundary: vi.fn(),
    });

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'speak',
      args: [
        'F2',
        'hello',
        { rate: 1.2, pitch: 0.8, volume: 0.4, quality: 8, language: 'en', resumeFromChar: 3 },
        { pageVisitId: 'unknown-page-visit', rotateVoices: false },
      ],
    });
  });

  it('applies stored quality and language when options omit them', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true });
    const reader = subject(chrome, { quality: 16, language: 'pt' });

    await reader.speak('hello');

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'speak',
      args: [
        'F2',
        'hello',
        { quality: 16, language: 'pt' },
        { pageVisitId: 'unknown-page-visit', rotateVoices: false },
      ],
    });
  });

  it('lets per-call options override the stored quality and language', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true });
    const reader = subject(chrome, { quality: 16, language: 'pt' });

    await reader.speak('hello', { rate: 1.5, quality: 4, language: 'ja' });

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'speak',
      args: [
        'F2',
        'hello',
        { rate: 1.5, quality: 4, language: 'ja' },
        { pageVisitId: 'unknown-page-visit', rotateVoices: false },
      ],
    });
  });

  it('forwards enabled voice rotation to the offscreen document', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: true });
    const reader = subject(chrome, { rotate: true });

    await reader.speak('hello');

    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'speak',
      args: [
        'F2',
        'hello',
        { quality: 8, language: 'en' },
        { pageVisitId: 'unknown-page-visit', rotateVoices: true },
      ],
    });
  });

  it('surfaces offscreen playback errors', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({ ok: false, error: 'Voice failed' });
    const reader = subject(chrome, { voice: null });

    await expect(reader.speak('hello')).rejects.toThrow('Voice failed');
    expect(chrome.runtime.sendMessage).toHaveBeenCalledWith({
      dest: 'offscreen',
      method: 'speak',
      args: [
        null,
        'hello',
        { quality: 8, language: 'en' },
        { pageVisitId: 'unknown-page-visit', rotateVoices: false },
      ],
    });
  });

  it('recreates the offscreen document and retries once after a fatal WASM error', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([]);
    chrome.runtime.sendMessage
      .mockResolvedValueOnce({
        ok: false,
        fatal: true,
        error: 'memory access out of bounds',
      })
      .mockResolvedValueOnce({ ok: true });
    const reader = subject(chrome);

    await expect(reader.speak('hello')).resolves.toBeUndefined();

    // Fresh WASM heap comes from closing + recreating the offscreen document.
    expect(chrome.offscreen.closeDocument).toHaveBeenCalledOnce();
    expect(chrome.runtime.sendMessage).toHaveBeenCalledTimes(2);
  });

  it('does not recreate the document for a non-fatal error', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({
      ok: false,
      error: 'No installed voice is ready',
    });
    const reader = subject(chrome);

    await expect(reader.speak('hello')).rejects.toThrow('No installed voice is ready');
    expect(chrome.offscreen.closeDocument).not.toHaveBeenCalled();
    expect(chrome.runtime.sendMessage).toHaveBeenCalledOnce();
  });

  it('gives up after recreating once if the fatal error persists', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage.mockResolvedValue({
      ok: false,
      fatal: true,
      error: 'memory access out of bounds',
    });
    const reader = subject(chrome);

    await expect(reader.speak('hello')).rejects.toThrow('memory access out of bounds');
    expect(chrome.offscreen.closeDocument).toHaveBeenCalledOnce();
    expect(chrome.runtime.sendMessage).toHaveBeenCalledTimes(2);
  });

  it('recreates the document when the offscreen channel is lost (sendMessage rejects)', async () => {
    const chrome = chromeApi();
    chrome.runtime.getContexts.mockResolvedValue([{}]);
    chrome.runtime.sendMessage
      .mockRejectedValueOnce(
        new Error('Could not establish connection. Receiving end does not exist.'),
      )
      .mockResolvedValueOnce({ ok: true });
    const reader = subject(chrome);

    await expect(reader.speak('hello')).resolves.toBeUndefined();

    expect(chrome.offscreen.closeDocument).toHaveBeenCalledOnce();
    expect(chrome.runtime.sendMessage).toHaveBeenCalledTimes(2);
  });
});
