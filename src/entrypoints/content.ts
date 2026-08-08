// Content script entry — runs at document_idle.
// Page-level composition root: widget UI + text extraction + playback.

import { DitaWidget } from '../content/widget';
import { SegmentSequencer } from '../domain/audio/sequencer';
import type { TextSegment } from '../domain/document/text-processor';
import { prepareSegments } from '../domain/document/text-processor';
import { SpeechSynthesisReader } from '../infra/audio/speech-synthesis-reader';

const READABLE_SELECTORS = 'article, p, h1, h2, h3, h4, h5, h6, li, blockquote';
const IGNORE_SELECTORS = 'script, style, nav, footer, header, aside, noscript';

function extractText(doc: Document): string[] {
  const elements = doc.querySelectorAll(READABLE_SELECTORS);
  const ignored = new Set(doc.querySelectorAll(IGNORE_SELECTORS));

  const segments: TextSegment[] = [];
  for (const el of elements) {
    if (ignored.has(el) || el.closest(IGNORE_SELECTORS)) continue;
    segments.push({ text: el.textContent ?? '', tag: el.tagName.toLowerCase() });
  }
  return prepareSegments(segments);
}

export default defineContentScript({
  matches: ['<all_urls>'],
  runAt: 'document_idle',
  main() {
    const reader = new SpeechSynthesisReader();
    const sequencer = new SegmentSequencer(reader);

    let widget: DitaWidget | null = null;

    function toggleWidget(): void {
      if (widget?.isMounted()) {
        widget.unmount();
        reader.stop();
        widget = null;
        return;
      }

      widget = new DitaWidget({
        onPlay: () => {
          const texts = extractText(document);
          if (texts.length === 0) return;
          sequencer.load(texts);
          widget?.setState('playing');
          void sequencer.play().then(() => {
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
          widget?.setState('idle');
        },
        onClose: () => {
          sequencer.stop();
          widget?.unmount();
          widget = null;
        },
      });
      widget.mount();
    }

    // Background sends toggleWidget when user clicks the extension icon
    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      if (msg?.dest !== 'contentScript') return false;
      if (msg.method === 'getText') {
        sendResponse({ texts: extractText(document) });
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
