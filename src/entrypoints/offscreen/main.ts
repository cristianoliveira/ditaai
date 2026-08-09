import type { SpeakOptions } from '../../domain/audio/text-reader';
import { SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';
import {
  areModelAssetsInstalled,
  loadModelAssets,
  loadVoiceStyleBuffer,
  openCache,
} from '../../infra/audio/cache-loader';
import { configureOnnxRuntime } from '../../infra/audio/onnx-runtime';
import { SupertonicOnnxReader } from '../../infra/audio/supertonic-onnx-reader';

configureOnnxRuntime((path) => chrome.runtime.getURL(path));

let reader: SupertonicOnnxReader | null = null;
let readerInitialization: Promise<SupertonicOnnxReader> | null = null;

function log(event: string, details?: Record<string, unknown>): void {
  console.info(`[dita][installed-voice][offscreen] ${event}`, details ?? '');
}

async function findInstalledVoiceId(): Promise<string | null> {
  const cache = await openCache();
  for (const voice of SUPERTONIC_VOICES) {
    if (await cache.match(sourceUrl(voice.source))) return voice.id;
  }
  return null;
}

async function isAvailable(): Promise<boolean> {
  return (await areModelAssetsInstalled()) && (await findInstalledVoiceId()) !== null;
}

async function getReader(): Promise<SupertonicOnnxReader> {
  if (reader) {
    log('reader:reuse');
    return reader;
  }
  if (readerInitialization) {
    log('reader:await-initialization');
    return readerInitialization;
  }

  log('reader:initialize');
  readerInitialization = createReader().finally(() => {
    readerInitialization = null;
  });
  reader = await readerInitialization;
  log('reader:ready');
  return reader;
}

async function createReader(): Promise<SupertonicOnnxReader> {
  const voiceId = await findInstalledVoiceId();
  if (!voiceId || !(await areModelAssetsInstalled())) {
    throw new Error('No installed voice is ready');
  }

  log('cache:load', { voiceId });
  const cache = await openCache();
  const [modelAssets, voiceStyle] = await Promise.all([
    loadModelAssets(cache),
    loadVoiceStyleBuffer(cache, voiceId),
  ]);
  log('cache:loaded', {
    modelAssetCount: Object.keys(modelAssets).length,
    voiceBytes: voiceStyle.byteLength,
  });
  return new SupertonicOnnxReader({ modelAssets, voiceStyle });
}

async function handleMessage(method: string, args: unknown[]): Promise<unknown> {
  if (method === 'isAvailable') {
    return { ok: true, available: await isAvailable() };
  }
  if (method === 'speak') {
    const [text, options] = args as [string, SpeakOptions | undefined];
    log('speak:start', { textLength: text.length });
    const r = await getReader();
    r.onBoundary = (event) => {
      chrome.runtime.sendMessage({
        dest: 'serviceWorker',
        method: 'installedVoiceBoundary',
        args: [event],
      });
    };
    await r.speak(text, options);
    r.onBoundary = undefined;
    log('speak:complete', { textLength: text.length });
    return { ok: true };
  }
  if (method === 'pause') {
    reader?.pause();
    return { ok: true };
  }
  if (method === 'resume') {
    reader?.resume();
    return { ok: true };
  }
  if (method === 'stop') {
    reader?.stop();
    return { ok: true };
  }
  return { ok: false, error: `Unknown offscreen method: ${method}` };
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.dest !== 'offscreen') return false;

  const method = String(message.method ?? 'unknown');
  const startedAt = Date.now();
  log(`${method}:received`);
  handleMessage(method, message.args ?? []).then(
    (response) => {
      log(`${method}:respond`, { durationMs: Date.now() - startedAt });
      sendResponse(response);
    },
    (error) => {
      const detail = error instanceof Error ? error.message : String(error);
      console.error(`[dita][installed-voice][offscreen] ${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error: detail,
      });
      sendResponse({ ok: false, error: detail });
    },
  );
  return true;
});
