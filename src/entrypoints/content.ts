// Content script entry — runs at document_idle.
// Page-level composition root: widget UI + text extraction + playback + highlighting.

import { describeBoundary } from '../content/boundary-diagnostics';
import { FakeBoundaryReader } from '../content/fake-reader';
import {
  clearHighlight,
  clearParagraph,
  highlightParagraph,
  highlightWord,
} from '../content/highlighter';
import { type ParagraphSegment, extractParagraphs } from '../content/paragraph-extractor';
import { Picker } from '../content/picker/picker';
import { DitaWidget } from '../content/widget';
import { SegmentSequencer } from '../domain/audio/sequencer';
import type { TextReader } from '../domain/audio/text-reader';
import { collapseWhitespace, splitText } from '../domain/document/text-processor';
import { filterParagraphs } from '../domain/selection/selection';
import { InstalledVoiceReader } from '../infra/audio/installed-voice-reader';
import { SpeechSynthesisReader } from '../infra/audio/speech-synthesis-reader';
import { RuntimeInstalledVoiceReader } from '../infra/chrome/runtime-installed-voice-reader';

/** A spoken chunk and its source paragraph. `base` is the chunk's offset within
 * collapseWhitespace(element.textContent).trim(), so word boundaries (which are
 * chunk-relative) can be translated back to full-paragraph offsets for the
 * highlighter. Keeps chunk <-> element aligned even when a paragraph splits. */
interface Chunk {
  text: string;
  element: Element;
  base: number;
}

function buildChunks(doc: Document): Chunk[] {
  const paragraphs: ParagraphSegment[] = extractParagraphs(doc);
  const chunks: Chunk[] = [];
  for (const paragraph of paragraphs) {
    const cleaned = collapseWhitespace(paragraph.text).trim();
    if (!cleaned) continue;
    let searchFrom = 0;
    for (const text of splitText(cleaned)) {
      const found = cleaned.indexOf(text, searchFrom);
      const base = found === -1 ? searchFrom : found;
      chunks.push({ text, element: paragraph.element, base });
      searchFrom = base + text.length;
    }
  }
  return chunks;
}

const HIGHLIGHT_PREF = 'highlightWords';
const DOMAIN_SELECTORS_KEY = 'domainSelectors';

async function loadHighlightEnabled(): Promise<boolean> {
  const stored = await chrome.storage.local.get(HIGHLIGHT_PREF);
  return stored[HIGHLIGHT_PREF] !== false;
}

async function saveHighlightEnabled(enabled: boolean): Promise<void> {
  await chrome.storage.local.set({ [HIGHLIGHT_PREF]: enabled });
}

async function loadDomainSelector(): Promise<string | null> {
  const stored = await chrome.storage.local.get(DOMAIN_SELECTORS_KEY);
  const map: Record<string, string> = stored[DOMAIN_SELECTORS_KEY] ?? {};
  return map[window.location.hostname] ?? null;
}

async function saveDomainSelector(selector: string): Promise<void> {
  const stored = await chrome.storage.local.get(DOMAIN_SELECTORS_KEY);
  const map: Record<string, string> = stored[DOMAIN_SELECTORS_KEY] ?? {};
  map[window.location.hostname] = selector;
  await chrome.storage.local.set({ [DOMAIN_SELECTORS_KEY]: map });
}

async function clearDomainSelector(): Promise<void> {
  const stored = await chrome.storage.local.get(DOMAIN_SELECTORS_KEY);
  const map: Record<string, string> = stored[DOMAIN_SELECTORS_KEY] ?? {};
  delete map[window.location.hostname];
  await chrome.storage.local.set({ [DOMAIN_SELECTORS_KEY]: map });
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
    let highlightWordsEnabled = true;
    let activeSelector: string | null = null;

    // Restore saved selector for this domain on init.
    void loadHighlightEnabled().then((value) => {
      highlightWordsEnabled = value;
    });
    void loadDomainSelector().then((selector) => {
      if (selector) {
        activeSelector = selector;
        console.info(`[dita] restored selector for ${window.location.hostname}: ${selector}`);
      }
    });

    function clearAllHighlights(): void {
      if (activeElement) {
        clearHighlight(activeElement);
        clearParagraph(activeElement);
        activeElement = null;
      }
    }

    function buildChunksFiltered(doc: Document): Chunk[] {
      const allChunks = buildChunks(doc);
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
            chunks.push({ text, element: el, base });
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

    function playAction(): void {
      chunks = buildChunksFiltered(document);
      const texts = chunks.map((chunk) => chunk.text);
      if (texts.length === 0) return;

      console.info(
        `[dita] segments ${JSON.stringify({
          count: texts.length,
          totalChars: texts.reduce((n, t) => n + t.length, 0),
          first: texts[0]?.slice(0, 80),
        })}`,
      );

      sequencer.load(texts);

      sequencer.onSegmentChange = (index) => {
        currentIndex = index;
        clearAllHighlights();
        activeElement = chunks[index]?.element ?? null;
        if (activeElement) highlightParagraph(activeElement);
        console.info(
          `[dita] segment ${JSON.stringify({ index, chars: texts[index]?.length ?? 0 })}`,
        );
      };

      widget?.setState('playing');
      void sequencer
        .play({
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
          widget?.setState('idle');
        });
    }

    /** Build a widget wired to the current-closure callbacks. */
    function buildWidget(): DitaWidget {
      return new DitaWidget(
        {
          onPlay: playAction,
          onPause: () => {
            sequencer.pause();
            widget?.setState('paused');
          },
          onResume: () => {
            sequencer.resume();
            widget?.setState('playing');
          },
          onStop: () => {
            sequencer.stop();
            clearAllHighlights();
            widget?.setState('idle');
          },
          onClose: () => {
            sequencer.stop();
            clearAllHighlights();
            widget?.unmount();
            widget = null;
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
            widget.unmount();
            const picker = new Picker();
            const selector = await picker.enter();
            if (selector) {
              activeSelector = selector;
              void saveDomainSelector(selector);
            } else {
              // Cancelled — clear stored selector for this domain
              activeSelector = null;
              void clearDomainSelector();
            }
            widget = buildWidget();
            widget.mount();
          },
          onToggleHighlight: (enabled) => {
            highlightWordsEnabled = enabled;
            void saveHighlightEnabled(enabled);
            if (!enabled && activeElement) clearHighlight(activeElement);
          },
        },
        { highlightEnabled: highlightWordsEnabled },
      );
    }

    function toggleWidget(): void {
      if (widget?.isMounted()) {
        widget.unmount();
        reader.stop();
        clearAllHighlights();
        widget = null;
        return;
      }

      widget = buildWidget();
      widget.mount();
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
      return false;
    });
  },
});
