// Content script entry — runs at document_idle.
// Page-level composition root: widget UI + text extraction + playback + highlighting.

import { FakeBoundaryReader } from '../content/fake-reader';
import { clearHighlight, highlightWord } from '../content/highlighter';
import { DitaWidget } from '../content/widget';
import { SegmentSequencer } from '../domain/audio/sequencer';
import type { TextReader } from '../domain/audio/text-reader';
import type { TextSegment } from '../domain/document/text-processor';
import { prepareSegments } from '../domain/document/text-processor';
import { InstalledVoiceReader } from '../infra/audio/installed-voice-reader';
import { SpeechSynthesisReader } from '../infra/audio/speech-synthesis-reader';
import { RuntimeInstalledVoiceReader } from '../infra/chrome/runtime-installed-voice-reader';

const READABLE_SELECTORS = 'article, p, h1, h2, h3, h4, h5, h6, li, blockquote';
const IGNORE_SELECTORS = 'script, style, nav, footer, header, aside, noscript';

interface ExtractedSegment extends TextSegment {
  element: Element;
}

function extractSegments(doc: Document): ExtractedSegment[] {
  const elements = doc.querySelectorAll(READABLE_SELECTORS);
  const ignored = new Set(doc.querySelectorAll(IGNORE_SELECTORS));

  const segments: ExtractedSegment[] = [];
  for (const el of elements) {
    if (ignored.has(el) || el.closest(IGNORE_SELECTORS)) continue;
    segments.push({ text: el.textContent ?? '', tag: el.tagName.toLowerCase(), element: el });
  }
  return segments;
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
    let segments: ExtractedSegment[] = [];
    let activeElement: Element | null = null;

    function clearAllHighlights(): void {
      if (activeElement) {
        clearHighlight(activeElement);
        activeElement = null;
      }
    }

    function toggleWidget(): void {
      if (widget?.isMounted()) {
        widget.unmount();
        reader.stop();
        clearAllHighlights();
        widget = null;
        return;
      }

      widget = new DitaWidget({
        onPlay: () => {
          segments = extractSegments(document);
          const texts = prepareSegments(segments);
          if (texts.length === 0) return;

          sequencer.load(texts);

          sequencer.onSegmentChange = (index) => {
            clearAllHighlights();
            activeElement = segments[index]?.element ?? null;
          };

          widget?.setState('playing');
          void sequencer
            .play({
              onBoundary: (event) => {
                if (activeElement) {
                  highlightWord(activeElement, event.charIndex, event.charLength);
                }
              },
            })
            .then(() => {
              clearAllHighlights();
              widget?.setState('idle');
            });
        },
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
      });
      widget.mount();
    }

    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      if (msg?.dest !== 'contentScript') return false;
      if (msg.method === 'getText') {
        const segs = extractSegments(document);
        sendResponse({ texts: prepareSegments(segs) });
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
