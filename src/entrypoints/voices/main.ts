/**
 * Voices management page logic.
 *
 * Lists all Supertonic voices, shows installation status,
 * and provides download/install functionality via Cache Storage.
 */

import { SUPERTONIC_ENGINE_ASSETS, SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { sourceUrl } from '../../domain/voices/voice';

const CACHE_NAME = 'dita-voices';

// ── DOM refs ─────────────────────────────────────────────────────────

const engineStatus = document.getElementById('engine-status')!;
const voicesGrid = document.getElementById('voices-grid')!;
const statusBar = document.getElementById('status-bar')!;

// ── Cache helpers ────────────────────────────────────────────────────

async function openCache(): Promise<Cache> {
  return await caches.open(CACHE_NAME);
}

async function isInCache(url: string): Promise<boolean> {
  const cache = await openCache();
  return (await cache.match(url)) !== undefined;
}

async function downloadToCache(url: string, onProgress?: (pct: number) => void): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Download failed: ${response.status} ${url}`);

  const contentLength = Number(response.headers.get('content-length') ?? '0');
  const reader = response.body?.getReader();
  if (!reader || !contentLength) {
    // Stream not available — fall back to simple put
    const cache = await openCache();
    await cache.put(url, response);
    onProgress?.(100);
    return;
  }

  const chunks: Uint8Array[] = [];
  let received = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      chunks.push(value);
      received += value.length;
      onProgress?.(Math.round((received / contentLength) * 100));
    }
  }

  const totalLength = chunks.reduce((sum, c) => sum + c.length, 0);
  const buffer = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    buffer.set(chunk, offset);
    offset += chunk.length;
  }

  const cachedResponse = new Response(buffer, {
    status: 200,
    headers: { 'content-type': response.headers.get('content-type') ?? 'application/octet-stream' },
  });

  const cache = await openCache();
  await cache.put(url, cachedResponse);
  onProgress?.(100);
}

// ── State ────────────────────────────────────────────────────────────

interface VoiceState {
  voiceId: string;
  installed: boolean;
  downloading: boolean;
  progress: number;
}

const state = new Map<string, VoiceState>();

// ── Render ───────────────────────────────────────────────────────────

async function refresh(): Promise<void> {
  const _cache = await openCache();

  // Check engine assets
  let engineReady = true;
  for (const asset of SUPERTONIC_ENGINE_ASSETS.assets) {
    const url = sourceUrl(asset.source);
    if (!(await isInCache(url))) {
      engineReady = false;
      break;
    }
  }

  if (engineReady) {
    engineStatus.className = 'ready';
    engineStatus.textContent = '✅ Engine ready — all model files installed.';
  } else {
    engineStatus.className = '';
    engineStatus.textContent =
      '⬇️ Engine models not installed. Download any voice to install automatically.';
  }

  // Check voice states
  for (const voice of SUPERTONIC_VOICES) {
    const url = sourceUrl(voice.source);
    const installed = await isInCache(url);
    const current = state.get(voice.id);
    state.set(voice.id, {
      voiceId: voice.id,
      installed,
      downloading: current?.downloading ?? false,
      progress: current?.progress ?? (installed ? 100 : 0),
    });
  }

  renderVoices();
  updateStatusBar();
}

function updateStatusBar(): void {
  const installed = [...state.values()].filter((s) => s.installed).length;
  const total = SUPERTONIC_VOICES.length;
  const downloading = [...state.values()].filter((s) => s.downloading).length;
  const engineReady = engineStatus.classList.contains('ready');

  statusBar.innerHTML = '';

  if (downloading > 0) {
    statusBar.innerHTML = `<div class="status-bar warn">⬇️ Downloading ${downloading} voice(s)…</div>`;
    return;
  }

  if (installed === total && engineReady) {
    statusBar.innerHTML = `<div class="status-bar ok">✅ All ${total} voices installed and ready.</div>`;
  } else if (!engineReady) {
    statusBar.innerHTML = `<div class="status-bar warn">Engine assets need to be installed. Click any download button.</div>`;
  }
}

function renderVoices(): void {
  voicesGrid.innerHTML = '';

  for (const voice of SUPERTONIC_VOICES) {
    const s = state.get(voice.id);
    if (!s) continue;

    const card = document.createElement('div');
    card.className = 'voice-card';

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = `${voice.gender === 'male' ? '♂' : '♀'} ${voice.name}`;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `Supertonic · ${voice.language}`;

    const size = document.createElement('div');
    size.className = 'size';
    size.textContent = '~300 KB';

    card.append(name, meta, size);

    if (s.installed) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-installed';
      btn.textContent = '✓ Installed';
      btn.disabled = true;
      card.append(btn);
    } else if (s.downloading) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-download loading';
      btn.textContent = `Downloading ${s.progress}%`;
      btn.disabled = true;
      card.append(btn);

      const bar = document.createElement('div');
      bar.className = 'progress-bar';
      const fill = document.createElement('div');
      fill.className = 'fill';
      fill.style.width = `${s.progress}%`;
      bar.append(fill);
      card.append(bar);
    } else {
      const btn = document.createElement('button');
      btn.className = 'btn btn-download';
      btn.textContent = 'Download';
      btn.addEventListener('click', () => downloadVoice(voice.id));
      card.append(btn);
    }

    voicesGrid.append(card);
  }

  // Download all button
  const allInstalled = [...state.values()].every((s) => s.installed);
  if (!allInstalled) {
    const btnAll = document.createElement('button');
    btnAll.className = 'btn btn-download-all';
    btnAll.textContent = '⬇️ Download All Voices';
    btnAll.addEventListener('click', downloadAll);
    voicesGrid.append(btnAll);
  }
}

// ── Download logic ───────────────────────────────────────────────────

async function downloadVoice(voiceId: string): Promise<void> {
  const voice = SUPERTONIC_VOICES.find((v) => v.id === voiceId);
  if (!voice) return;

  // Mark as downloading
  const current = state.get(voiceId)!;
  state.set(voiceId, { ...current, downloading: true, progress: 0 });
  renderVoices();

  try {
    const _cache = await openCache();

    // Download engine assets first if missing
    for (const asset of SUPERTONIC_ENGINE_ASSETS.assets) {
      const assetUrl = sourceUrl(asset.source);
      if (!(await isInCache(assetUrl))) {
        await downloadToCache(assetUrl);
      }
    }

    // Download voice style
    const voiceUrl = sourceUrl(voice.source);
    await downloadToCache(voiceUrl, (pct) => {
      const s = state.get(voiceId);
      if (s) state.set(voiceId, { ...s, progress: pct });
      renderVoices();
    });

    state.set(voiceId, { voiceId, installed: true, downloading: false, progress: 100 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    console.error(`Download failed for ${voiceId}:`, msg);
    state.set(voiceId, { voiceId, installed: false, downloading: false, progress: 0 });
  }

  renderVoices();
  updateStatusBar();
}

async function downloadAll(): Promise<void> {
  for (const voice of SUPERTONIC_VOICES) {
    const s = state.get(voice.id);
    if (s && !s.installed) {
      await downloadVoice(voice.id);
    }
  }
}

// ── Init ─────────────────────────────────────────────────────────────

refresh();
