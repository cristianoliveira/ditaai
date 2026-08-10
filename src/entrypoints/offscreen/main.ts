import type { SpeakOptions } from '../../domain/audio/text-reader';
import { SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { PageVoiceRotation } from '../../domain/voices/selection';
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
const pageVoiceRotations = new Map<string, PageVoiceRotation>();
const PAGE_VISIT_VOICES_KEY = 'pageVisitVoices';

function log(event: string, details?: Record<string, unknown>): void {
  console.info(`[dita][installed-voice][offscreen] ${event}`, details ?? '');
}

async function findInstalledVoiceId(
  selectedVoiceId: string | null,
  rotateVoices: boolean,
  pageVisitId: string,
): Promise<string | null> {
  const cache = await openCache();
  const installedVoiceIds: string[] = [];
  for (const voice of SUPERTONIC_VOICES) {
    if (await cache.match(sourceUrl(voice.source))) installedVoiceIds.push(voice.id);
  }
  const persistedVoiceId = rotateVoices ? await loadPageVisitVoice(pageVisitId) : null;
  if (persistedVoiceId && installedVoiceIds.includes(persistedVoiceId)) return persistedVoiceId;

  const rotation = pageVoiceRotations.get(pageVisitId) ?? new PageVoiceRotation();
  pageVoiceRotations.set(pageVisitId, rotation);
  const resolvedVoiceId = rotation.resolve(selectedVoiceId, installedVoiceIds, rotateVoices);
  if (rotateVoices && resolvedVoiceId) await savePageVisitVoice(pageVisitId, resolvedVoiceId);
  log('selection:resolve', { selectedVoiceId, rotateVoices, installedVoiceIds, resolvedVoiceId });
  return resolvedVoiceId;
}

async function loadPageVisitVoice(pageVisitId: string): Promise<string | null> {
  const stored = await chrome.storage.local.get(PAGE_VISIT_VOICES_KEY);
  const voices = stored[PAGE_VISIT_VOICES_KEY];
  if (!voices || typeof voices !== 'object') return null;
  const voiceId = (voices as Record<string, unknown>)[pageVisitId];
  return typeof voiceId === 'string' ? voiceId : null;
}

async function savePageVisitVoice(pageVisitId: string, voiceId: string): Promise<void> {
  const stored = await chrome.storage.local.get(PAGE_VISIT_VOICES_KEY);
  const voices = (stored[PAGE_VISIT_VOICES_KEY] as Record<string, string> | undefined) ?? {};
  await chrome.storage.local.set({
    [PAGE_VISIT_VOICES_KEY]: { ...voices, [pageVisitId]: voiceId },
  });
}

async function isAvailable(
  selectedVoiceId: string | null,
  rotateVoices: boolean,
  pageVisitId: string,
): Promise<boolean> {
  const modelAssetsInstalled = await areModelAssetsInstalled();
  const voiceId = await findInstalledVoiceId(selectedVoiceId, rotateVoices, pageVisitId);
  log('availability:resolved', { modelAssetsInstalled, voiceId });
  return modelAssetsInstalled && voiceId !== null;
}

async function getReader(
  selectedVoiceId: string | null,
  rotateVoices: boolean,
  pageVisitId: string,
): Promise<SupertonicOnnxReader> {
  const voiceId = await findInstalledVoiceId(selectedVoiceId, rotateVoices, pageVisitId);
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
    return getReader(selectedVoiceId, rotateVoices, pageVisitId);
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

interface VoiceContext {
  pageVisitId: string;
  rotateVoices?: boolean;
}

function isVoiceContext(value: unknown): value is VoiceContext {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as VoiceContext).pageVisitId === 'string'
  );
}

async function handleMessage(method: string, args: unknown[]): Promise<unknown> {
  const selectedVoiceId = typeof args[0] === 'string' ? args[0] : null;
  const context = args.at(-1);
  const pageVisitId = isVoiceContext(context) ? context.pageVisitId : 'unknown-page-visit';
  const rotateVoices = isVoiceContext(context) && context.rotateVoices === true;
  if (method === 'isAvailable') {
    return { ok: true, available: await isAvailable(selectedVoiceId, rotateVoices, pageVisitId) };
  }
  if (method === 'prepare') {
    const [, text, options] = args as [string | null, string, SpeakOptions | undefined];
    log('prepare:start', {
      selectedVoiceId,
      textLength: text.length,
      rate: options?.rate ?? null,
      volume: options?.volume ?? null,
      resumeFromChar: options?.resumeFromChar ?? 0,
    });
    const r = await getReader(selectedVoiceId, rotateVoices, pageVisitId);
    await r.prepare(text, options);
    log('prepare:complete', { textLength: text.length });
    return { ok: true };
  }
  if (method === 'speak') {
    const [, text, options] = args as [string | null, string, SpeakOptions | undefined];
    log('speak:start', {
      selectedVoiceId,
      textLength: text.length,
      rate: options?.rate ?? null,
      volume: options?.volume ?? null,
      resumeFromChar: options?.resumeFromChar ?? 0,
    });
    const r = await getReader(selectedVoiceId, rotateVoices, pageVisitId);
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
