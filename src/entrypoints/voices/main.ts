/**
 * Voices management page logic.
 *
 * Lists all Supertonic voices, shows installation status,
 * and provides download/install functionality via Cache Storage.
 */

import { SUPERTONIC_ENGINE_ASSETS, SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { resolveSelectedVoiceId } from '../../domain/voices/selection';
import { sourceUrl } from '../../domain/voices/voice';
import { ChromeVoiceSelectionStorage } from '../../infra/chrome/voice-selection-storage';
import { downloadToCache } from '../../infra/voices/download-to-cache';
import { type VoiceCardState, renderVoiceCard } from './voice-card';

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

// ── State ────────────────────────────────────────────────────────────

const state = new Map<string, VoiceCardState>();
const selectionStore = new ChromeVoiceSelectionStorage();
let selectedVoiceId: string | null = null;

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

  const storedVoiceId = await selectionStore.load();
  const installedVoiceIds = SUPERTONIC_VOICES.filter((voice) => state.get(voice.id)?.installed).map(
    (voice) => voice.id,
  );
  selectedVoiceId = resolveSelectedVoiceId(storedVoiceId, installedVoiceIds);
  console.info('[dita][voice-selection][page] loaded', {
    storedVoiceId,
    installedVoiceIds,
    resolvedVoiceId: selectedVoiceId,
  });
  if (selectedVoiceId && selectedVoiceId !== storedVoiceId) {
    await selectionStore.save(selectedVoiceId);
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

    voicesGrid.append(
      renderVoiceCard(voice, s, voice.id === selectedVoiceId, downloadVoice, selectVoice),
    );
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

// ── Selection and download logic ────────────────────────────────────

function selectVoice(voiceId: string): void {
  if (!state.get(voiceId)?.installed) {
    console.warn('[dita][voice-selection][page] rejected unavailable voice', { voiceId });
    return;
  }
  const previousVoiceId = selectedVoiceId;
  selectedVoiceId = voiceId;
  console.info('[dita][voice-selection][page] selected', { previousVoiceId, voiceId });
  renderVoices();
  void selectionStore.save(voiceId).then(() => {
    console.info('[dita][voice-selection][page] persisted', { voiceId });
  });
}

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
    if (!selectedVoiceId) selectVoice(voiceId);
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
