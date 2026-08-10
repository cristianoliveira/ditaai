// Content script entry — runs at document_idle.
// Page-level composition root: widget UI + text extraction + playback + highlighting.

import { describeBoundary } from '../content/boundary-diagnostics';
import { FakeBoundaryReader } from '../content/fake-reader';
import {
  clearHighlight,
  clearParagraph,
  clearStartPoint,
  highlightParagraph,
  highlightWord,
  markStartPoint,
} from '../content/highlighter';
import { extractParagraphs } from '../content/paragraph-extractor';
import { ParagraphStartAffordance } from '../content/paragraph-start-affordance';
import { Picker } from '../content/picker/picker';
import { PronunciationPopover } from '../content/pronunciation-popover';
import { ShortcutController } from '../content/shortcuts';
import { DitaWidget } from '../content/widget';
import { SegmentSequencer } from '../domain/audio/sequencer';
import type { TextReader } from '../domain/audio/text-reader';
import {
  type Substitutions,
  applySubstitutions,
  sanitizeSubstitutions,
} from '../domain/document/substitutions';
import { collapseWhitespace, splitText } from '../domain/document/text-processor';
import {
  type JumpDirection,
  type JumpStrategy,
  createParagraphJumper,
} from '../domain/playback/jump';
import { filterParagraphs } from '../domain/selection/selection';
import { DEFAULT_SHORTCUTS, type ShortcutAction } from '../domain/shortcuts/shortcuts';
import { InstalledVoiceReader } from '../infra/audio/installed-voice-reader';
import { SpeechSynthesisReader } from '../infra/audio/speech-synthesis-reader';
import { ChromeDomainSelectorStorage } from '../infra/chrome/domain-selector-storage';
import { RuntimeInstalledVoiceReader } from '../infra/chrome/runtime-installed-voice-reader';
import { ChromeShortcutStorage } from '../infra/chrome/shortcut-storage';
import { ChromeSubstitutionStorage, SUBSTITUTIONS_KEY } from '../infra/chrome/substitution-storage';
import type { ParagraphSegment } from '../lib/types';

/** A spoken chunk and its source paragraph. `base` is the chunk's offset within
 * collapseWhitespace(element.textContent).trim(), so word boundaries (which are
 * chunk-relative) can be translated back to full-paragraph offsets for the
 * highlighter. Keeps chunk <-> element aligned even when a paragraph splits. */
interface Chunk {
  text: string;
  element: Element;
  base: number;
}

function buildChunks(doc: Document, substitutions: Substitutions = {}): Chunk[] {
  const paragraphs: ParagraphSegment[] = extractParagraphs(doc);
  const chunks: Chunk[] = [];
  for (const paragraph of paragraphs) {
    const cleaned = collapseWhitespace(paragraph.text).trim();
    if (!cleaned) continue;
    let searchFrom = 0;
    for (const text of splitText(cleaned)) {
      const found = cleaned.indexOf(text, searchFrom);
      const base = found === -1 ? searchFrom : found;
      chunks.push({
        text: applySubstitutions(text, substitutions),
        element: paragraph.element,
        base,
      });
      searchFrom = base + text.length;
    }
  }
  return chunks;
}

/** First chunk index of each paragraph — used as jump breakpoints. */
function paragraphBreakpoints(chunks: Chunk[]): number[] {
  if (chunks.length === 0) return [];
  const breaks = [0];
  for (let i = 1; i < chunks.length; i++) {
    const prev = chunks[i - 1];
    const curr = chunks[i];
    if (prev && curr && curr.element !== prev.element) breaks.push(i);
  }
  return breaks;
}

const HIGHLIGHT_PREF = 'highlightWords';

async function loadHighlightEnabled(): Promise<boolean> {
  const stored = await chrome.storage.local.get(HIGHLIGHT_PREF);
  return stored[HIGHLIGHT_PREF] !== false;
}

async function saveHighlightEnabled(enabled: boolean): Promise<void> {
  await chrome.storage.local.set({ [HIGHLIGHT_PREF]: enabled });
}

const RATE_PREF = 'playbackRate';

function clampRate(rate: number): number {
  return Math.min(2, Math.max(0.5, rate));
}

async function loadPlaybackRate(): Promise<number> {
  const stored = await chrome.storage.local.get(RATE_PREF);
  const value = stored[RATE_PREF];
  return typeof value === 'number' ? clampRate(value) : 1;
}

async function savePlaybackRate(rate: number): Promise<void> {
  await chrome.storage.local.set({ [RATE_PREF]: clampRate(rate) });
}

const VOLUME_PREF = 'playbackVolume';

function clampVolume(volume: number): number {
  return Math.min(1, Math.max(0, volume));
}

/** Volume step for keyboard shortcuts (0.1 = 10%). */
const VOLUME_STEP = 0.1;

async function loadPlaybackVolume(): Promise<number> {
  const stored = await chrome.storage.local.get(VOLUME_PREF);
  const value = stored[VOLUME_PREF];
  return typeof value === 'number' ? clampVolume(value) : 1;
}

async function savePlaybackVolume(volume: number): Promise<void> {
  await chrome.storage.local.set({ [VOLUME_PREF]: clampVolume(volume) });
}

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main() {
    // biome-ignore lint/complexity/useLiteralKeys: TS index signature requires bracket notation
    const isTestMode = document.documentElement.dataset['ditaTestReader'] === 'fake';
    const reader: TextReader = isTestMode
      ? new FakeBoundaryReader()
      : new InstalledVoiceReader(new RuntimeInstalledVoiceReader(), new SpeechSynthesisReader());
    const sequencer = new SegmentSequencer(reader);

    let widget: DitaWidget | null = null;
    let chunks: Chunk[] = [];
    let activeElement: Element | null = null;
    let currentIndex = 0;
    let paragraphJumper: JumpStrategy = createParagraphJumper([]);
    let highlightWordsEnabled = true;
    let playbackRate = 1;
    let playbackVolume = 1;
    let substitutions: Substitutions = {};
    const selectorStore = new ChromeDomainSelectorStorage();
    const substitutionStore = new ChromeSubstitutionStorage();
    const hostname = window.location.hostname;
    let activeSelector: string | null = null;
    let readableElements: Set<Element> = new Set();
    let markedStart: Element | null = null;
    const startAffordance = new ParagraphStartAffordance({
      isReadable: (el) => readableElements.has(el),
      onStartFrom: startFromParagraph,
    });

    void loadHighlightEnabled().then((value) => {
      highlightWordsEnabled = value;
    });
    void loadPlaybackRate().then((value) => {
      playbackRate = value;
    });
    void loadPlaybackVolume().then((value) => {
      playbackVolume = value;
    });
    void selectorStore.load(hostname).then((selector) => {
      if (selector) {
        activeSelector = selector;
        console.info(`[dita] restored selector for ${hostname}: ${selector}`);
      }
    });
    void substitutionStore.load().then((dict) => {
      substitutions = dict;
    });

    // Keep the in-memory dict fresh when storage changes (this tab or another),
    // so a substitution saved from the popover applies immediately.
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== 'local') return;
      if (changes[SUBSTITUTIONS_KEY]) {
        substitutions = sanitizeSubstitutions(changes[SUBSTITUTIONS_KEY].newValue);
      }
    });

    function clearAllHighlights(): void {
      if (activeElement) {
        clearHighlight(activeElement);
        clearParagraph(activeElement);
        activeElement = null;
      }
    }

    /** Recompute the set of readable paragraph elements (after selector changes).
     * Mirrors buildChunksFiltered exactly — including its container-selector
     * fallback — so the start affordance matches what playback will actually read. */
    function refreshReadable(): void {
      readableElements = new Set(buildChunksFiltered(document).map((c) => c.element));
    }

    /** Show/clear the persistent start-point marker. */
    function setStartMarker(element: Element | null): void {
      if (markedStart && markedStart !== element) clearStartPoint(markedStart);
      if (element) markStartPoint(element);
      markedStart = element;
    }

    function buildChunksFiltered(doc: Document): Chunk[] {
      const allChunks = buildChunks(doc, substitutions);
      if (!activeSelector) return allChunks;

      // First try: filter paragraphs that match the selector.
      const paragraphs: ParagraphSegment[] = extractParagraphs(doc);
      const filtered = filterParagraphs(paragraphs, activeSelector);
      const elementSet = new Set(filtered.map((p) => p.element));
      const matched = allChunks.filter((chunk) => elementSet.has(chunk.element));

      if (matched.length > 0) return matched;

      // Fallback: extract text directly from elements matching the selector.
      try {
        const elements = doc.querySelectorAll(activeSelector);
        const chunks: Chunk[] = [];
        for (const el of elements) {
          const rawText = el.textContent ?? '';
          const cleaned = collapseWhitespace(rawText).trim();
          if (!cleaned) continue;
          let searchFrom = 0;
          for (const text of splitText(cleaned)) {
            const found = cleaned.indexOf(text, searchFrom);
            const base = found === -1 ? searchFrom : found;
            chunks.push({ text: applySubstitutions(text, substitutions), element: el, base });
            searchFrom = base + text.length;
          }
        }
        console.info(
          `[dita] fallback extraction ${JSON.stringify({
            selector: activeSelector,
            elements: elements.length,
            chunks: chunks.length,
          })}`,
        );
        return chunks;
      } catch {
        console.warn(`[dita] invalid selector for fallback: ${activeSelector}`);
        return [];
      }
    }

    function playAction(fromElement?: Element | null): void {
      chunks = buildChunksFiltered(document);
      const texts = chunks.map((chunk) => chunk.text);
      if (texts.length === 0) return;

      const foundIndex = fromElement
        ? chunks.findIndex((chunk) => chunk.element === fromElement)
        : -1;
      const startIndex = Math.max(0, foundIndex);
      setStartMarker(foundIndex >= 0 && fromElement ? fromElement : null);

      console.info(
        `[dita] segments ${JSON.stringify({
          count: texts.length,
          totalChars: texts.reduce((n, t) => n + t.length, 0),
          first: texts[0]?.slice(0, 80),
        })}`,
      );

      sequencer.load(texts, startIndex);
      paragraphJumper = createParagraphJumper(paragraphBreakpoints(chunks));

      sequencer.onSegmentChange = (index) => {
        currentIndex = index;
        clearAllHighlights();
        activeElement = chunks[index]?.element ?? null;
        if (activeElement) highlightParagraph(activeElement);
        // Keep the widget's "current/total" counter in sync on every segment,
        // including the first one when playback starts from an already-mounted
        // widget (mountWidget only sets it once, at mount time).
        widget?.setProgress(index + 1, texts.length);
        console.info(
          `[dita] segment ${JSON.stringify({ index, chars: texts[index]?.length ?? 0 })}`,
        );
      };

      widget?.setState('playing');
      void sequencer
        .play({
          rate: playbackRate,
          volume: playbackVolume,
          onBoundary: (event) => {
            const chunk = chunks[currentIndex];
            console.info(
              `[dita] boundary ${JSON.stringify(
                describeBoundary(chunk?.text ?? '', currentIndex, event),
              )}`,
            );
            if (highlightWordsEnabled && activeElement && chunk) {
              highlightWord(activeElement, event.charIndex + chunk.base, event.charLength);
            }
          },
        })
        .then(() => {
          clearAllHighlights();
          setStartMarker(null);
          widget?.setState('idle');
        });
    }

    /** Begin (or restart) reading from a specific paragraph element. */
    function startFromParagraph(element: Element): void {
      if (sequencer.getState().playing) {
        const idx = chunks.findIndex((c) => c.element === element);
        if (idx >= 0) {
          setStartMarker(element);
          sequencer.seek(idx);
        }
        return;
      }
      sequencer.stop();
      clearAllHighlights();
      playAction(element);
    }

    // ── Shared playback controls (widget buttons + keyboard shortcuts) ──────

    function pausePlayback(): void {
      sequencer.pause();
      widget?.setState('paused');
    }

    function resumePlayback(): void {
      sequencer.resume();
      widget?.setState('playing');
    }

    function stopPlayback(): void {
      sequencer.stop();
      clearAllHighlights();
      setStartMarker(null);
      widget?.setState('idle');
    }

    function jumpPlayback(direction: JumpDirection): void {
      const target = paragraphJumper.jump(currentIndex, direction, chunks.length);
      if (target !== currentIndex) sequencer.seek(target);
    }

    /** Idle → play; playing → pause; paused → resume. */
    function togglePlay(): void {
      const state = sequencer.getState();
      if (state.playing) pausePlayback();
      else if (state.paused) resumePlayback();
      else playAction();
    }

    const SLIDER_RESTART_MS = 200;
    let sliderRestartTimer: ReturnType<typeof setTimeout> | null = null;

    /** Coalesce rapid slider drags into one live restart, so dragging the
     * volume or rate slider doesn't cancel-and-respeak on every input tick. */
    function scheduleSliderRestart(restart: () => void): void {
      if (sliderRestartTimer) clearTimeout(sliderRestartTimer);
      sliderRestartTimer = setTimeout(() => {
        sliderRestartTimer = null;
        restart();
      }, SLIDER_RESTART_MS);
    }

    function applyVolume(volume: number): void {
      playbackVolume = clampVolume(volume);
      void savePlaybackVolume(playbackVolume);
      widget?.setVolume(playbackVolume);
      scheduleSliderRestart(() => sequencer.setVolume(playbackVolume));
    }

    function applyRate(rate: number): void {
      playbackRate = clampRate(rate);
      void savePlaybackRate(playbackRate);
      scheduleSliderRestart(() => sequencer.setRate(playbackRate));
    }

    function adjustVolume(delta: number): void {
      applyVolume(playbackVolume + delta);
    }

    /** Build a widget wired to the current-closure callbacks. */
    function buildWidget(): DitaWidget {
      return new DitaWidget(
        {
          onPlay: playAction,
          onPause: pausePlayback,
          onResume: resumePlayback,
          onJump: (direction) => jumpPlayback(direction),
          onStop: stopPlayback,
          onClose: () => {
            sequencer.stop();
            clearAllHighlights();
            setStartMarker(null);
            unmountWidget();
          },
          onSettings: () => {
            chrome.runtime.sendMessage({
              dest: 'background',
              method: 'openVoicesPage',
              args: [],
            });
          },
          onSelect: async () => {
            if (!widget) return;
            unmountWidget();
            const picker = new Picker();
            const selector = await picker.enter(activeSelector ?? undefined);
            if (selector) {
              activeSelector = selector;
              void selectorStore.save(hostname, selector);
            } else {
              activeSelector = null;
              void selectorStore.clear(hostname);
            }
            mountWidget();
          },
          onToggleHighlight: (enabled) => {
            highlightWordsEnabled = enabled;
            void saveHighlightEnabled(enabled);
            if (!enabled && activeElement) clearHighlight(activeElement);
          },
          onChangeRate: (rate) => applyRate(rate),
          onChangeVolume: (volume) => applyVolume(volume),
        },
        { highlightEnabled: highlightWordsEnabled, rate: playbackRate, volume: playbackVolume },
      );
    }

    function mountWidget(): void {
      widget = buildWidget();
      widget.mount();
      // Playback may already be running (started via keyboard shortcut) — the
      // fresh widget must reflect it instead of showing an idle state.
      const state = sequencer.getState();
      if (state.playing || state.paused) {
        widget.setState(state.playing ? 'playing' : 'paused');
        widget.setProgress(state.current + 1, state.total);
      }
      refreshReadable();
      startAffordance.enable();
    }

    function unmountWidget(): void {
      widget?.unmount();
      widget = null;
      startAffordance.disable();
    }

    function toggleWidget(): void {
      if (widget?.isMounted()) {
        reader.stop();
        clearAllHighlights();
        setStartMarker(null);
        unmountWidget();
        return;
      }

      mountWidget();
    }

    // ── Keyboard shortcuts ──────────────────────────────────────────────────
    // Same playback functions as the widget, so behavior is identical either
    // way. The stored keymap (user-editable on the voices page) is merged over
    // defaults when loaded.
    const shortcutActions: Record<ShortcutAction, () => void> = {
      togglePlay,
      stop: stopPlayback,
      jumpPrev: () => jumpPlayback('backward'),
      jumpNext: () => jumpPlayback('forward'),
      volumeUp: () => adjustVolume(VOLUME_STEP),
      volumeDown: () => adjustVolume(-VOLUME_STEP),
      toggleWidget,
    };
    const shortcutController = new ShortcutController(shortcutActions, DEFAULT_SHORTCUTS);
    void new ChromeShortcutStorage().load().then((map) => shortcutController.update(map));

    let pronunciationPopover: PronunciationPopover | null = null;

    function showPronunciationPopover(word: string): void {
      pronunciationPopover?.unmount();
      pronunciationPopover = new PronunciationPopover({
        word,
        spoken: substitutions[word] ?? undefined,
        onPreview: (_word, spoken) => {
          void reader.speak(spoken, { volume: playbackVolume });
        },
        onSave: (word, spoken) => {
          substitutions = { ...substitutions, [word]: spoken };
          void substitutionStore.save(substitutions);
          pronunciationPopover?.unmount();
          pronunciationPopover = null;
        },
        onCancel: () => {
          pronunciationPopover?.unmount();
          pronunciationPopover = null;
        },
      });
      pronunciationPopover.mount();
    }

    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      if (msg?.dest !== 'contentScript') return false;
      if (msg.method === 'getText') {
        const built = buildChunksFiltered(document);
        sendResponse({ texts: built.map((chunk) => chunk.text) });
        return false;
      }
      if (msg.method === 'toggleWidget') {
        toggleWidget();
        sendResponse({ ok: true });
        return false;
      }
      if (msg.method === 'pronounceSelection') {
        const word = typeof msg.args?.[0] === 'string' ? msg.args[0].trim() : '';
        if (word) showPronunciationPopover(word);
        sendResponse({ ok: true });
        return false;
      }
      return false;
    });
  },
});
