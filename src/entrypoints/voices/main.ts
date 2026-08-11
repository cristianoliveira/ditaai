/**
 * Voices management page logic.
 *
 * Lists all Supertonic voices, shows installation status,
 * and provides download/install functionality via Cache Storage.
 */

import { AUDIO_BUFFER_OPTIONS, DEFAULT_AUDIO_BUFFER_SECONDS } from '../../domain/audio/buffer';
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, languageLabel } from '../../domain/audio/languages';
import { DEFAULT_SYNTHESIS_QUALITY, SYNTHESIS_QUALITY_OPTIONS } from '../../domain/audio/quality';
import { DEFAULT_SHORTCUTS } from '../../domain/shortcuts/shortcuts';
import { SUPERTONIC_ENGINE_ASSETS, SUPERTONIC_VOICES } from '../../domain/voices/catalog';
import { resolveSelectedVoiceId } from '../../domain/voices/selection';
import { sourceUrl } from '../../domain/voices/voice';
import { ChromeAudioBufferStorage } from '../../infra/chrome/audio-buffer-storage';
import { ChromeConfigurationTransfer } from '../../infra/chrome/configuration-transfer';
import { ChromeLanguageStorage } from '../../infra/chrome/language-storage';
import { ChromeShortcutStorage } from '../../infra/chrome/shortcut-storage';
import { ChromeSynthesisQualityStorage } from '../../infra/chrome/synthesis-quality-storage';
import { ChromeVoiceRotationStorage } from '../../infra/chrome/voice-rotation-storage';
import { ChromeVoiceSelectionStorage } from '../../infra/chrome/voice-selection-storage';
import { downloadToCache } from '../../infra/voices/download-to-cache';
import { logger } from '../../lib/logger';
import { overallDownloadPercentage } from './download-progress';
import { ShortcutsPanel } from './shortcuts-panel';
import { type VoiceCardState, renderVoiceCard } from './voice-card';

const CACHE_NAME = 'dita-voices';

// ── DOM refs ─────────────────────────────────────────────────────────

const engineStatus = document.getElementById('engine-status')!;
const voicesGrid = document.getElementById('voices-grid')!;
const statusBar = document.getElementById('status-bar')!;
const rotateVoicesInput = document.getElementById('rotate-voices') as HTMLInputElement;
const synthesisQualitySelect = document.getElementById('synthesis-quality') as HTMLSelectElement;
const narrationLanguageSelect = document.getElementById('narration-language') as HTMLSelectElement;
const audioBufferSelect = document.getElementById('audio-buffer-seconds') as HTMLSelectElement;

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
const rotationStore = new ChromeVoiceRotationStorage();
const qualityStore = new ChromeSynthesisQualityStorage();
const languageStore = new ChromeLanguageStorage();
const audioBufferStore = new ChromeAudioBufferStorage();
let selectedVoiceId: string | null = null;
let rotateVoices = false;

// ── Synthesis settings ───────────────────────────────────────────────

for (const option of SYNTHESIS_QUALITY_OPTIONS) {
  const element = document.createElement('option');
  element.value = String(option.steps);
  element.textContent = option.label;
  synthesisQualitySelect.append(element);
}

for (const option of AUDIO_BUFFER_OPTIONS) {
  const element = document.createElement('option');
  element.value = String(option.seconds);
  element.textContent = option.label;
  audioBufferSelect.append(element);
}

for (const entry of SUPPORTED_LANGUAGES) {
  const element = document.createElement('option');
  element.value = entry.code;
  element.textContent = languageLabel(entry.code);
  narrationLanguageSelect.append(element);
}

synthesisQualitySelect.addEventListener('change', () => {
  const steps = Number(synthesisQualitySelect.value);
  void qualityStore.save(steps);
  logger.info('[synthesis-quality][page] saved', { steps });
});

audioBufferSelect.addEventListener('change', () => {
  const seconds = Number(audioBufferSelect.value);
  void audioBufferStore.save(seconds);
  logger.info('[audio-buffer][page] saved', { seconds });
});

narrationLanguageSelect.addEventListener('change', () => {
  const code = narrationLanguageSelect.value;
  void languageStore.save(code);
  logger.info('[narration-language][page] saved', { code });
});

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
  rotateVoices = await rotationStore.load();
  rotateVoicesInput.checked = rotateVoices;
  const [synthesisQuality, narrationLanguage, audioBufferSeconds] = await Promise.all([
    qualityStore.load(),
    languageStore.load(),
    audioBufferStore.load(),
  ]);
  synthesisQualitySelect.value = String(synthesisQuality);
  narrationLanguageSelect.value = narrationLanguage;
  audioBufferSelect.value = String(audioBufferSeconds);
  logger.info('[synthesis-settings][page] loaded', {
    synthesisQuality,
    narrationLanguage,
    audioBufferSeconds,
    defaultQuality: DEFAULT_SYNTHESIS_QUALITY,
    defaultLanguage: DEFAULT_LANGUAGE,
    defaultAudioBufferSeconds: DEFAULT_AUDIO_BUFFER_SECONDS,
  });
  const installedVoiceIds = SUPERTONIC_VOICES.filter((voice) => state.get(voice.id)?.installed).map(
    (voice) => voice.id,
  );
  selectedVoiceId = resolveSelectedVoiceId(storedVoiceId, installedVoiceIds);
  logger.info('[voice-selection][page] loaded', {
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
    logger.warn('[voice-selection][page] rejected unavailable voice', { voiceId });
    return;
  }
  const previousVoiceId = selectedVoiceId;
  selectedVoiceId = voiceId;
  logger.info('[voice-selection][page] selected', { previousVoiceId, voiceId });
  renderVoices();
  void selectionStore.save(voiceId).then(() => {
    logger.info('[voice-selection][page] persisted', { voiceId });
  });
}

async function downloadVoice(voiceId: string): Promise<void> {
  const voice = SUPERTONIC_VOICES.find((v) => v.id === voiceId);
  if (!voice) return;

  // Mark as downloading
  const current = state.get(voiceId)!;
  state.set(voiceId, { ...current, downloading: true, progress: 0 });
  renderVoices();
  updateStatusBar();

  try {
    const missingEngineUrls: string[] = [];
    for (const asset of SUPERTONIC_ENGINE_ASSETS.assets) {
      const assetUrl = sourceUrl(asset.source);
      if (!(await isInCache(assetUrl))) missingEngineUrls.push(assetUrl);
    }

    const downloadUrls = [...missingEngineUrls, sourceUrl(voice.source)];
    for (const [completedFiles, url] of downloadUrls.entries()) {
      await downloadToCache(url, (filePercentage) => {
        const currentState = state.get(voiceId);
        if (!currentState) return;

        const progress = overallDownloadPercentage(
          completedFiles,
          filePercentage,
          downloadUrls.length,
        );
        state.set(voiceId, { ...currentState, progress });
        renderVoices();
      });
    }

    state.set(voiceId, { voiceId, installed: true, downloading: false, progress: 100 });
    if (!selectedVoiceId) selectVoice(voiceId);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    logger.error(`Download failed for ${voiceId}:`, msg);
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

// ── Shortcuts editor ─────────────────────────────────────────────────

const shortcutsList = document.getElementById('shortcuts-list')!;
const shortcutStorage = new ChromeShortcutStorage();
const shortcutsPanel = new ShortcutsPanel(
  {
    onCapture: (action, combo) => {
      void shortcutStorage.load().then((map) => {
        const next = { ...map, [action]: combo };
        void shortcutStorage.save(next).then(() => shortcutsPanel.update(next));
      });
    },
    onReset: () => {
      void shortcutStorage
        .save(DEFAULT_SHORTCUTS)
        .then(() => shortcutsPanel.update(DEFAULT_SHORTCUTS));
    },
  },
  DEFAULT_SHORTCUTS,
);

// ── Init ─────────────────────────────────────────────────────────────

shortcutsList.append(shortcutsPanel.mount());
void shortcutStorage.load().then((map) => shortcutsPanel.update(map));
rotateVoicesInput.addEventListener('change', () => {
  rotateVoices = rotateVoicesInput.checked;
  void rotationStore.save(rotateVoices);
});

// ── Configuration backup ─────────────────────────────────────────────

const configurationTransfer = new ChromeConfigurationTransfer();
const exportConfigurationButton = document.getElementById(
  'export-configuration',
) as HTMLButtonElement;
const importConfigurationButton = document.getElementById(
  'import-configuration',
) as HTMLButtonElement;
const importConfigurationFile = document.getElementById(
  'import-configuration-file',
) as HTMLInputElement;
const configurationStatus = document.getElementById('configuration-status')!;

function showConfigurationStatus(message: string, isError = false): void {
  configurationStatus.textContent = message;
  configurationStatus.className = isError ? 'configuration-status error' : 'configuration-status';
}

exportConfigurationButton.addEventListener('click', async () => {
  try {
    const text = await configurationTransfer.export();
    const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }));
    const download = document.createElement('a');
    download.href = url;
    download.download = 'ditaai-configuration.json';
    download.click();
    URL.revokeObjectURL(url);
    showConfigurationStatus('Configuration exported.');
  } catch (error) {
    logger.error('[configuration] export failed', error);
    showConfigurationStatus('Could not export configuration.', true);
  }
});

importConfigurationButton.addEventListener('click', () => importConfigurationFile.click());
importConfigurationFile.addEventListener('change', async () => {
  const file = importConfigurationFile.files?.[0];
  importConfigurationFile.value = '';
  if (!file) return;

  try {
    await configurationTransfer.import(await file.text());
    const shortcuts = await shortcutStorage.load();
    shortcutsPanel.update(shortcuts);
    await refresh();
    showConfigurationStatus('Configuration imported. Reopen existing pages to apply all settings.');
  } catch (error) {
    logger.error('[configuration] import failed', error);
    showConfigurationStatus('Invalid configuration file. Nothing was imported.', true);
  }
});

refresh();
