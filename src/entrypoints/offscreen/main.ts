import type { SpeakOptions } from '../../domain/audio/text-reader';
import { SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { resolveSelectedVoiceId } from '../../domain/voices/selection';
import { sourceUrl } from '../../domain/voices/voice';
import {
  areModelAssetsInstalled,
  loadModelAssets,
  loadVoiceStyleBuffer,
  openCache,
} from '../../infra/audio/cache-loader';
import { isFatalOnnxError } from '../../infra/audio/onnx-errors';
import { configureOnnxRuntime } from '../../infra/audio/onnx-runtime';
import { SupertonicOnnxReader } from '../../infra/audio/supertonic-onnx-reader';

configureOnnxRuntime((path) => chrome.runtime.getURL(path));

let reader: SupertonicOnnxReader | null = null;
let readerVoiceId: string | null = null;
let readerInitialization: Promise<SupertonicOnnxReader> | null = null;

function log(event: string, details?: Record<string, unknown>): void {
  console.info(`[dita][installed-voice][offscreen] ${event}`, details ?? '');
}

async function findInstalledVoiceId(selectedVoiceId: string | null): Promise<string | null> {
  const cache = await openCache();
  const installedVoiceIds: string[] = [];
  for (const voice of SUPERTONIC_VOICES) {
    if (await cache.match(sourceUrl(voice.source))) installedVoiceIds.push(voice.id);
  }
  const resolvedVoiceId = resolveSelectedVoiceId(selectedVoiceId, installedVoiceIds);
  log('selection:resolve', { selectedVoiceId, installedVoiceIds, resolvedVoiceId });
  return resolvedVoiceId;
}

async function isAvailable(selectedVoiceId: string | null): Promise<boolean> {
  const modelAssetsInstalled = await areModelAssetsInstalled();
  const voiceId = await findInstalledVoiceId(selectedVoiceId);
  log('availability:resolved', { modelAssetsInstalled, voiceId });
  return modelAssetsInstalled && voiceId !== null;
}

async function getReader(selectedVoiceId: string | null): Promise<SupertonicOnnxReader> {
  const voiceId = await findInstalledVoiceId(selectedVoiceId);
  if (!voiceId || !(await areModelAssetsInstalled())) {
    throw new Error('No installed voice is ready');
  }
  if (reader && readerVoiceId === voiceId) {
    log('reader:reuse', { voiceId });
    return reader;
  }
  if (readerInitialization) {
    log('reader:await-initialization');
    await readerInitialization;
    return getReader(selectedVoiceId);
  }

  reader?.stop();
  reader = null;
  readerVoiceId = null;
  log('reader:initialize', { voiceId });
  readerInitialization = createReader(voiceId).finally(() => {
    readerInitialization = null;
  });
  reader = await readerInitialization;
  readerVoiceId = voiceId;
  log('reader:ready', { voiceId });
  return reader;
}

async function createReader(voiceId: string): Promise<SupertonicOnnxReader> {
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
  const selectedVoiceId = typeof args[0] === 'string' ? args[0] : null;
  if (method === 'isAvailable') {
    return { ok: true, available: await isAvailable(selectedVoiceId) };
  }
  if (method === 'prepare') {
    const [, text, options] = args as [string | null, string, SpeakOptions | undefined];
    log('prepare:start', { selectedVoiceId, textLength: text.length });
    const r = await getReader(selectedVoiceId);
    await r.prepare(text, options);
    log('prepare:complete', { textLength: text.length });
    return { ok: true };
  }
  if (method === 'speak') {
    const [, text, options] = args as [string | null, string, SpeakOptions | undefined];
    log('speak:start', { selectedVoiceId, textLength: text.length });
    const r = await getReader(selectedVoiceId);
    r.onBoundary = (event) => {
      chrome.runtime.sendMessage({
        dest: 'serviceWorker',
        method: 'installedVoiceBoundary',
        args: [event],
      });
    };
    r.onBoundarySchedule = (schedule) => {
      chrome.runtime.sendMessage({
        dest: 'serviceWorker',
        method: 'installedVoiceBoundarySchedule',
        args: [schedule],
      });
    };
    try {
      await r.speak(text, options);
    } finally {
      r.onBoundary = undefined;
      r.onBoundarySchedule = undefined;
    }
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
      // A fatal WASM/ONNX trap corrupts the runtime for this whole document, so
      // flag it and let the service worker recreate the document (the only
      // reliable WASM-heap reset) and retry once.
      //
      // Deliberately do NOT dispose/null the reader here: the offscreen handles
      // prepare (lookahead) and speak concurrently on the SAME reader instance.
      // Releasing its sessions or closing its AudioContext from one handler's
      // error path would pull the rug from under a still-live inference in
      // another handler (`Cannot read properties of null (reading '…')`). When
      // the service worker closes this document, Chrome tears the whole context
      // down atomically — reader, sessions, audio and WASM heap included — so
      // cleanup is both safe and automatic.
      const fatal = isFatalOnnxError(error);
      console.error(`[dita][installed-voice][offscreen] ${method}:failed`, {
        durationMs: Date.now() - startedAt,
        error: detail,
      });
      sendResponse({ ok: false, error: detail, fatal });
    },
  );
  return true;
});
