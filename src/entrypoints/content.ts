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
import { nearestReadable } from '../content/nearest-readable';
import { extractParagraphs } from '../content/paragraph-extractor';
import { Picker } from '../content/picker/picker';
import { ShortcutController } from '../content/shortcuts';
import { locateWord } from '../content/word-locator';
import { buildTreeIndex, orderedStaticText } from '../domain/accessibility/tree';
import { DEFAULT_AUDIO_BUFFER_SECONDS } from '../domain/audio/buffer';
import { SegmentSequencer } from '../domain/audio/sequencer';
import type { TextReader } from '../domain/audio/text-reader';
import { simplifyLinks } from '../domain/document/links';
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
  paragraphIndexForSegment,
} from '../domain/playback/jump';
import type { ReadScope } from '../domain/selection/read-scope';
import { filterParagraphs } from '../domain/selection/selection';
import { DEFAULT_SHORTCUTS, type ShortcutAction } from '../domain/shortcuts/shortcuts';
import { InstalledVoiceReader } from '../infra/audio/installed-voice-reader';
import { SpeechSynthesisReader } from '../infra/audio/speech-synthesis-reader';
import {
  AUDIO_BUFFER_SECONDS_KEY,
  ChromeAudioBufferStorage,
} from '../infra/chrome/audio-buffer-storage';
import { ChromeDomainSelectorStorage } from '../infra/chrome/domain-selector-storage';
import { ChromeLinksStorage, SIMPLIFY_LINKS_KEY } from '../infra/chrome/links-storage';
import { RuntimeAccessibilityTree } from '../infra/chrome/runtime-accessibility-tree';
import { RuntimeInstalledVoiceReader } from '../infra/chrome/runtime-installed-voice-reader';
import { ChromeShortcutStorage } from '../infra/chrome/shortcut-storage';
import { ChromeSubstitutionStorage, SUBSTITUTIONS_KEY } from '../infra/chrome/substitution-storage';
import { logInteraction } from '../lib/interaction-logger';
import { logger } from '../lib/logger';
import type { ParagraphSegment } from '../lib/types';
import { ParagraphStartAffordance } from '../ui/paragraph-start-affordance';
import { PronunciationManager, type PronunciationManagerEntry } from '../ui/pronunciation-manager';
import { PronunciationPopover } from '../ui/pronunciation-popover';
import { DitaWidget } from '../ui/widget';
import type { ParagraphOption } from '../ui/widget';

/** A spoken chunk and its source paragraph. `base` is the chunk's offset within
 * collapseWhitespace(element.textContent).trim(), so word boundaries (which are
 * chunk-relative) can be translated back to full-paragraph offsets for the
 * highlighter. Keeps chunk <-> element aligned even when a paragraph splits. */
interface Chunk {
  text: string;
  element: Element;
  base: number;
}

function buildChunks(
  doc: Document,
  substitutions: Substitutions = {},
  linksEnabled = true,
): Chunk[] {
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
        text: applySubstitutions(linksEnabled ? simplifyLinks(text) : text, substitutions),
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

/** Dropdown entries for the paragraph picker — one per paragraph, labeled with
 * a short preview of its first spoken chunk. */
function paragraphOptions(chunks: Chunk[], breakpoints: number[]): ParagraphOption[] {
  const PREVIEW = 60;
  return breakpoints.map((start, i) => {
    const preview = (chunks[start]?.text ?? '').slice(0, PREVIEW).trim();
    return { value: i, label: preview ? `¶ ${i + 1} — ${preview}` : `¶ ${i + 1}` };
  });
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

const PRONUNCIATIONS_ENABLED_PREF = 'pronunciationsEnabled';

async function loadPronunciationsEnabled(): Promise<boolean> {
  const stored = await chrome.storage.local.get(PRONUNCIATIONS_ENABLED_PREF);
  return stored[PRONUNCIATIONS_ENABLED_PREF] !== false; // default on
}

async function savePronunciationsEnabled(enabled: boolean): Promise<void> {
  await chrome.storage.local.set({ [PRONUNCIATIONS_ENABLED_PREF]: enabled });
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
    const audioBufferStore = new ChromeAudioBufferStorage();
    sequencer.setBufferSeconds(DEFAULT_AUDIO_BUFFER_SECONDS);
    void audioBufferStore.load().then((seconds) => {
      sequencer.setBufferSeconds(seconds);
      logger.info('audio-buffer:loaded', { seconds });
    });
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName !== 'local') return;
      const seconds = changes[AUDIO_BUFFER_SECONDS_KEY]?.newValue;
      if (typeof seconds !== 'number') return;
      sequencer.setBufferSeconds(seconds);
      logger.info('audio-buffer:changed', { seconds });
    });
    // Single source of truth for widget state. The sequencer emits every
    // observable transition here; this is the ONLY place that reflects playback
    // state into the widget. Driving the widget from anywhere else (a per-play
    // .then(), each control handler, …) is what let a superseded loop flip it
    // back to idle mid-session. Idle also owns DOM teardown (highlights + start
    // marker) so it runs exactly once per session.
    sequencer.onStateChange = (state) => {
      logger.info('playback:state-changed', state);
      widget?.reflect(state);
      if (!state.playing && !state.paused) {
        clearAllHighlights();
        setStartMarker(null);
      }
    };
    sequencer.onBufferChange = (state) => {
      logger.info('audio-buffer:progress', state);
      widget?.setBufferProgress(
        state.loading && state.targetSeconds > 0
          ? state.bufferedSeconds / state.targetSeconds
          : null,
      );
    };

    let widget: DitaWidget | null = null;
    let chunks: Chunk[] = [];
    let activeElement: Element | null = null;
    let currentIndex = 0;
    let currentBreakpoints: number[] = [];
    let paragraphJumper: JumpStrategy = createParagraphJumper([]);
    let highlightWordsEnabled = true;
    let playbackRate = 1;
    let playbackVolume = 1;
    let substitutions: Substitutions = {};
    let pronunciationsEnabled = true;
    let linksEnabled = true;
    const selectorStore = new ChromeDomainSelectorStorage();
    const accessibilityPort = new RuntimeAccessibilityTree();
    const substitutionStore = new ChromeSubstitutionStorage();
    const linksStore = new ChromeLinksStorage();
    const hostname = window.location.hostname;
    let activeSelector: string | null = null;
    let activeScope: ReadScope | null = null;
    let activeAccessibilityText: string[] | null = null;
    let readableElements: Set<Element> = new Set();
    let markedStart: Element | null = null;
    const startAffordance = new ParagraphStartAffordance({
      isReadable: (el) => readableElements.has(el),
      onStartFrom: (element) => {
        logInteraction(logger, 'page', 'start-from-position', {
          segmentIndex: chunks.findIndex((chunk) => chunk.element === element),
        });
        startFromPosition(element);
      },
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
    void selectorStore.load(hostname).then(async (scope) => {
      activeScope = scope;
      if (scope?.source === 'dom') {
        activeSelector = scope.selector;
        logger.info(`restored selector for ${hostname}: ${scope.selector}`);
        return;
      }
      if (scope?.source !== 'accessibility') return;
      try {
        const snapshot = await accessibilityPort.open();
        const index = buildTreeIndex(snapshot.nodes);
        const matches = snapshot.nodes.filter((node) => {
          const text = orderedStaticText(index, node.id);
          return (
            text.length === scope.locator.staticCount &&
            text.join(' ').replace(/\s+/g, ' ').trim().startsWith(scope.locator.firstStaticPrefix)
          );
        });
        const text = matches[0] ? orderedStaticText(index, matches[0].id) : [];
        if (text.length === 0) throw new Error('Saved accessibility scope no longer resolves');
        activeAccessibilityText = text;
        activeSelector = scope.anchorSelector;
        logger.info(`restored accessibility scope for ${hostname}`);
      } catch (error) {
        activeAccessibilityText = null;
        logger.warn(`accessibility scope unavailable: ${String(error)}`);
      } finally {
        await accessibilityPort.close().catch(() => {});
      }
    });
    void substitutionStore.load().then((dict) => {
      substitutions = dict;
    });
    void loadPronunciationsEnabled().then((value) => {
      pronunciationsEnabled = value;
    });
    void linksStore.load().then((value) => {
      linksEnabled = value;
    });

    // Keep the in-memory dict fresh when storage changes (this tab or another),
    // so a substitution saved from the popover applies immediately.
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== 'local') return;
      if (changes[SUBSTITUTIONS_KEY]) {
        substitutions = sanitizeSubstitutions(changes[SUBSTITUTIONS_KEY].newValue);
        refreshOpenManager();
      }
      if (changes[PRONUNCIATIONS_ENABLED_PREF]) {
        pronunciationsEnabled = changes[PRONUNCIATIONS_ENABLED_PREF].newValue !== false;
        refreshOpenManager();
      }
      if (changes[SIMPLIFY_LINKS_KEY]) {
        linksEnabled = changes[SIMPLIFY_LINKS_KEY].newValue !== false;
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
      if (activeScope?.source === 'accessibility' && activeAccessibilityText) {
        const anchor = (() => {
          try {
            return doc.querySelector(activeScope.anchorSelector);
          } catch {
            return null;
          }
        })();
        if (!anchor) return [];
        const cleaned = collapseWhitespace(activeAccessibilityText.join(' ')).trim();
        return splitText(cleaned).map((text, index, parts) => ({
          text: applySubstitutions(
            linksEnabled ? simplifyLinks(text) : text,
            pronunciationsEnabled ? substitutions : {},
          ),
          element: anchor,
          base: parts.slice(0, index).join('').length,
        }));
      }

      const allChunks = buildChunks(doc, pronunciationsEnabled ? substitutions : {}, linksEnabled);
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
            chunks.push({
              text: applySubstitutions(
                linksEnabled ? simplifyLinks(text) : text,
                pronunciationsEnabled ? substitutions : {},
              ),
              element: el,
              base,
            });
            searchFrom = base + text.length;
          }
        }
        logger.info(
          `fallback extraction ${JSON.stringify({
            selector: activeSelector,
            elements: elements.length,
            chunks: chunks.length,
          })}`,
        );
        return chunks;
      } catch {
        logger.warn(`invalid selector for fallback: ${activeSelector}`);
        return [];
      }
    }

    function playAction(
      fromElement?: Element | null,
      word?: { index: number; char: number },
    ): void {
      chunks = buildChunksFiltered(document);
      const texts = chunks.map((chunk) => chunk.text);
      if (texts.length === 0) return;

      // Start position: an explicit word (char-precise) wins over a paragraph.
      let startIndex: number;
      let startChar: number;
      let marker: Element | null = null;
      if (word) {
        startIndex = Math.max(0, Math.min(word.index, texts.length - 1));
        startChar = Math.max(0, word.char);
        marker = chunks[startIndex]?.element ?? null;
      } else {
        const foundIndex = fromElement
          ? chunks.findIndex((chunk) => chunk.element === fromElement)
          : -1;
        startIndex = Math.max(0, foundIndex);
        startChar = 0;
        marker = foundIndex >= 0 && fromElement ? fromElement : null;
      }
      setStartMarker(marker);

      logger.info(
        `segments ${JSON.stringify({
          count: texts.length,
          totalChars: texts.reduce((n, t) => n + t.length, 0),
          first: texts[0]?.slice(0, 80),
        })}`,
      );

      sequencer.load(texts, startIndex, startChar);
      currentBreakpoints = paragraphBreakpoints(chunks);
      paragraphJumper = createParagraphJumper(currentBreakpoints);
      widget?.setParagraphs(paragraphOptions(chunks, currentBreakpoints));
      widget?.setCurrentParagraph(paragraphIndexForSegment(currentBreakpoints, startIndex));

      sequencer.onSegmentChange = (index) => {
        currentIndex = index;
        widget?.setCurrentParagraph(paragraphIndexForSegment(currentBreakpoints, index));
        clearAllHighlights();
        activeElement = chunks[index]?.element ?? null;
        if (activeElement) highlightParagraph(activeElement);
        logger.info(
          `segment ${JSON.stringify({
            index,
            chars: texts[index]?.length ?? 0,
            rate: playbackRate,
            volume: playbackVolume,
          })}`,
        );
      };

      void sequencer.play({
        rate: playbackRate,
        volume: playbackVolume,
        onBoundary: (event) => {
          const chunk = chunks[currentIndex];
          logger.info(
            `boundary ${JSON.stringify(describeBoundary(chunk?.text ?? '', currentIndex, event))}`,
          );
          if (highlightWordsEnabled && activeElement && chunk) {
            highlightWord(activeElement, event.charIndex + chunk.base, event.charLength);
          }
        },
      });
    }

    /** Begin (or restart) reading from a paragraph, or a precise word within it. */
    function startFromPosition(
      element: Element | null,
      word?: { index: number; char: number },
    ): void {
      if (sequencer.getState().playing) {
        const idx = word
          ? word.index
          : element
            ? chunks.findIndex((c) => c.element === element)
            : -1;
        if (idx >= 0) {
          setStartMarker(chunks[idx]?.element ?? element);
          sequencer.seek(idx);
        }
        return;
      }
      sequencer.stop();
      clearAllHighlights();
      playAction(element, word);
    }

    // ── Shared playback controls (widget buttons + keyboard shortcuts) ──────

    function pausePlayback(): void {
      sequencer.pause();
    }

    function resumePlayback(): void {
      sequencer.resume();
    }

    function stopPlayback(): void {
      sequencer.stop();
    }

    // Real document unload (refresh, navigating away, close). Same-document /
    // SPA navigations do NOT fire pagehide, so a thrashing third-party widget
    // won't cut playback here. This replaces the old chrome.tabs.onUpdated
    // 'loading' stop, which couldn't tell churn from a real unload.
    window.addEventListener('pagehide', () => {
      const state = sequencer.getState();
      if (state.playing || state.paused) stopPlayback();
    });

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
      logger.info(`applyVolume ${JSON.stringify({ volume: playbackVolume })}`);
      scheduleSliderRestart(() => {
        logger.info(`restart(volume) ${JSON.stringify({ volume: playbackVolume })}`);
        sequencer.setVolume(playbackVolume);
      });
    }

    function applyRate(rate: number): void {
      playbackRate = clampRate(rate);
      void savePlaybackRate(playbackRate);
      logger.info(`applyRate ${JSON.stringify({ rate: playbackRate })}`);
      scheduleSliderRestart(() => {
        logger.info(`restart(rate) ${JSON.stringify({ rate: playbackRate })}`);
        sequencer.setRate(playbackRate);
      });
    }

    function adjustVolume(delta: number): void {
      applyVolume(playbackVolume + delta);
    }

    /** Build a widget wired to the current-closure callbacks. */
    function buildWidget(): DitaWidget {
      return new DitaWidget(
        {
          onPlay: () => {
            logInteraction(logger, 'widget', 'play');
            playAction();
          },
          onPause: () => {
            logInteraction(logger, 'widget', 'pause');
            pausePlayback();
          },
          onResume: () => {
            logInteraction(logger, 'widget', 'resume');
            resumePlayback();
          },
          onJump: (direction) => {
            logInteraction(logger, 'widget', 'jump', { direction, currentSegment: currentIndex });
            jumpPlayback(direction);
          },
          onJumpToParagraph: (paragraphIndex) => {
            const start = currentBreakpoints[paragraphIndex] ?? 0;
            logInteraction(logger, 'widget', 'jump-to-paragraph', {
              paragraphIndex,
              targetSegment: start,
            });
            sequencer.seek(start);
          },
          onStop: () => {
            logInteraction(logger, 'widget', 'stop');
            stopPlayback();
          },
          onClose: () => {
            logInteraction(logger, 'widget', 'close');
            sequencer.stop();
            clearAllHighlights();
            setStartMarker(null);
            unmountWidget();
          },
          onSettings: () => {
            logInteraction(logger, 'widget', 'open-configuration');
            chrome.runtime.sendMessage({
              dest: 'background',
              method: 'openVoicesPage',
              args: [],
            });
          },
          onDictionary: () => {
            logInteraction(logger, 'widget', 'open-dictionary');
            showPronunciationManager();
          },
          onSelect: async () => {
            logInteraction(logger, 'widget', 'select-reading-area');
            if (!widget) return;
            unmountWidget();
            const picker = new Picker(accessibilityPort);
            const result = await picker.enterScope(activeSelector ?? undefined);
            // Cancel/Esc/✕ resolve to null — leave any existing selection
            // intact. The Clear-selection control is the explicit way to
            // remove a saved selector.
            if (typeof result === 'string') {
              activeScope = { source: 'dom', selector: result };
              activeAccessibilityText = null;
              activeSelector = result;
              void selectorStore.save(hostname, activeScope);
            } else if (result?.source === 'accessibility') {
              activeScope = result;
              activeSelector = result.anchorSelector;
              try {
                const snapshot = await accessibilityPort.open();
                const index = buildTreeIndex(snapshot.nodes);
                const match = snapshot.nodes.find((node) => {
                  const text = orderedStaticText(index, node.id);
                  return (
                    text.length === result.locator.staticCount &&
                    text
                      .join(' ')
                      .replace(/\s+/g, ' ')
                      .trim()
                      .startsWith(result.locator.firstStaticPrefix)
                  );
                });
                activeAccessibilityText = match ? orderedStaticText(index, match.id) : null;
                if (!activeAccessibilityText?.length)
                  throw new Error('Accessibility selection is empty');
                await selectorStore.save(hostname, result);
              } catch (error) {
                activeAccessibilityText = null;
                logger.warn(`accessibility selection failed: ${String(error)}`);
              } finally {
                await accessibilityPort.close().catch(() => {});
              }
            }
            refreshReadable();
            mountWidget();
          },
          onClearSelection: () => {
            logInteraction(logger, 'widget', 'clear-reading-area');
            void selectorStore.clear(hostname);
            activeScope = null;
            activeAccessibilityText = null;
            activeSelector = null;
            widget?.setSelection(null);
            refreshReadable();
          },
          onToggleHighlight: (enabled) => {
            logInteraction(logger, 'widget', 'toggle-highlight', { enabled });
            highlightWordsEnabled = enabled;
            void saveHighlightEnabled(enabled);
            if (!enabled && activeElement) clearHighlight(activeElement);
          },
          onChangeRate: (rate) => {
            logInteraction(logger, 'widget', 'change-rate', { rate });
            applyRate(rate);
          },
          onChangeVolume: (volume) => {
            logInteraction(logger, 'widget', 'change-volume', { volume });
            applyVolume(volume);
          },
        },
        {
          highlightEnabled: highlightWordsEnabled,
          rate: playbackRate,
          volume: playbackVolume,
          selection: activeSelector,
        },
      );
    }

    function mountWidget(): void {
      widget = buildWidget();
      widget.mount();
      // Playback may already be running (started via keyboard shortcut) — the
      // fresh widget must reflect current sequencer state instead of idle.
      widget.reflect(sequencer.getState());
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

    /** Open the widget when needed and focus its first playback control. */
    function focusWidget(): void {
      if (!widget?.isMounted()) mountWidget();
      widget?.focus();
    }

    // ── Keyboard shortcuts ──────────────────────────────────────────────────
    // Same playback functions as the widget, so behavior is identical either
    // way. The stored keymap (user-editable on the voices page) is merged over
    // defaults when loaded.
    const shortcutActions: Record<ShortcutAction, () => void> = {
      togglePlay: () => {
        logInteraction(logger, 'keyboard', 'toggle-play', { ...sequencer.getState() });
        togglePlay();
      },
      stop: () => {
        logInteraction(logger, 'keyboard', 'stop');
        stopPlayback();
      },
      jumpPrev: () => {
        logInteraction(logger, 'keyboard', 'jump', { direction: 'backward' });
        jumpPlayback('backward');
      },
      jumpNext: () => {
        logInteraction(logger, 'keyboard', 'jump', { direction: 'forward' });
        jumpPlayback('forward');
      },
      volumeUp: () => {
        logInteraction(logger, 'keyboard', 'change-volume', { direction: 'up' });
        adjustVolume(VOLUME_STEP);
      },
      volumeDown: () => {
        logInteraction(logger, 'keyboard', 'change-volume', { direction: 'down' });
        adjustVolume(-VOLUME_STEP);
      },
      toggleWidget: () => {
        logInteraction(logger, 'keyboard', 'toggle-widget');
        toggleWidget();
      },
      focusWidget: () => {
        logInteraction(logger, 'keyboard', 'focus-widget');
        focusWidget();
      },
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

    let pronunciationManager: PronunciationManager | null = null;

    function managerEntries(): PronunciationManagerEntry[] {
      return Object.entries(substitutions).map(([word, spoken]) => ({ word, spoken }));
    }

    function refreshOpenManager(): void {
      if (pronunciationManager?.isMounted()) {
        pronunciationManager.update(managerEntries(), pronunciationsEnabled);
      }
    }

    function showPronunciationManager(): void {
      pronunciationManager?.unmount();
      pronunciationManager = new PronunciationManager({
        entries: managerEntries(),
        enabled: pronunciationsEnabled,
        onAdd: (word, spoken) => {
          substitutions = { ...substitutions, [word]: spoken };
          void substitutionStore.save(substitutions);
          refreshOpenManager();
        },
        onDelete: (word) => {
          const next = { ...substitutions };
          delete next[word];
          substitutions = next;
          void substitutionStore.save(substitutions);
          refreshOpenManager();
        },
        onPreview: (spoken) => {
          void reader.speak(spoken, { volume: playbackVolume });
        },
        onToggleEnabled: (enabled) => {
          pronunciationsEnabled = enabled;
          void savePronunciationsEnabled(enabled);
          refreshOpenManager();
        },
        onClose: () => {
          pronunciationManager?.unmount();
          pronunciationManager = null;
        },
      });
      pronunciationManager.mount();
    }

    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      if (msg?.dest !== 'contentScript') return false;
      if (msg.method === 'getText') {
        const built = buildChunksFiltered(document);
        sendResponse({ texts: built.map((chunk) => chunk.text) });
        return false;
      }
      if (msg.method === 'toggleWidget') {
        logInteraction(logger, 'browser-action', 'toggle-widget');
        toggleWidget();
        sendResponse({ ok: true });
        return false;
      }
      if (msg.method === 'startFromContext') {
        // Right-click "Listen from here". Resolve the paragraph from the live
        // selection (reliable) or, when nothing is selected, from the
        // right-clicked element via targetElementId. If text is selected, start
        // at that word (char-precise) inside the paragraph; otherwise at the
        // paragraph. Resolution is scoped by any active picker selector because
        // buildChunksFiltered already filters to it.
        if (!widget?.isMounted()) mountWidget();
        const built = buildChunksFiltered(document);
        const readable = built.map((c) => c.element);

        let paragraph: Element | null = null;
        let selectionText = '';
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
          selectionText = sel.toString();
          const node = sel.getRangeAt(0).startContainer;
          const startEl =
            node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
          if (startEl) paragraph = nearestReadable(startEl, readable);
        }
        if (!paragraph) {
          const targetElementId = msg.args?.[0];
          const target =
            typeof targetElementId === 'number'
              ? (
                  chrome.contextMenus as unknown as {
                    getTargetElement(id: number): Element | null;
                  }
                ).getTargetElement(targetElementId)
              : null;
          if (target) paragraph = nearestReadable(target, readable);
          if (typeof msg.args?.[1] === 'string') selectionText = msg.args[1];
        }

        const word =
          paragraph && selectionText.trim() ? locateWord(built, selectionText, paragraph) : null;
        logInteraction(logger, 'context-menu', 'start-from-position', {
          segmentIndex: word?.index,
          charIndex: word?.char,
        });
        startFromPosition(paragraph, word ?? undefined);
        sendResponse({ ok: true });
        return false;
      }
      if (msg.method === 'openWidget') {
        if (!widget?.isMounted()) mountWidget();
        sendResponse({ ok: true });
        return false;
      }
      if (msg.method === 'getPlaybackState') {
        sendResponse(sequencer.getState());
        return false;
      }
      if (msg.method === 'togglePlay') {
        logInteraction(logger, 'popup', 'toggle-play', { ...sequencer.getState() });
        togglePlay();
        sendResponse(sequencer.getState());
        return false;
      }
      if (msg.method === 'pausePlayback') {
        logInteraction(logger, 'popup', 'pause');
        pausePlayback();
        sendResponse(sequencer.getState());
        return false;
      }
      if (msg.method === 'resumePlayback') {
        logInteraction(logger, 'popup', 'resume');
        resumePlayback();
        sendResponse(sequencer.getState());
        return false;
      }
      if (msg.method === 'stopPlayback') {
        logInteraction(logger, 'popup', 'stop');
        stopPlayback();
        sendResponse(sequencer.getState());
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
