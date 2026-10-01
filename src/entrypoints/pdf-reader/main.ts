// DitaAi-owned PDF reading view. Composition root only: claims the one-use
// request, extracts text locally with PDF.js, renders pages, and narrates with
// the same reader stack as HTML pages (installed Supertonic voice with
// browser-speech fallback; boundaries are relayed or native, so the
// spoken-word highlight works either way).
import { FakeBoundaryReader } from '../../content/fake-reader';
import { PdfPlayer, type PdfSequencer } from '../../content/pdf-player';
import { SegmentSequencer } from '../../domain/audio/sequencer';
import { InstalledVoiceReader } from '../../infra/audio/installed-voice-reader';
import { SpeechSynthesisReader } from '../../infra/audio/speech-synthesis-reader';
import { SessionStoragePdfRequestStore } from '../../infra/chrome/pdf-request-store';
import { ChromePlaybackRateStore } from '../../infra/chrome/playback-rate-storage';
import { RuntimeInstalledVoiceReader } from '../../infra/chrome/runtime-installed-voice-reader';
import { PdfDocumentError, isHttpPdfUrl, loadPdfDocument } from '../../infra/pdf/pdf-document';
import { logger } from '../../lib/logger';

const REQUEST_ID_PARAM = 'request';

function testReaderRequested(): boolean {
  return new URLSearchParams(location.search).get('testReader') === 'fake';
}

async function main(): Promise<void> {
  const root = document.getElementById('pdf-reader');
  const status = document.getElementById('pdf-status');
  const position = document.getElementById('pdf-page-position');
  const pages = document.getElementById('pdf-pages');
  if (!root || !status || !position || !pages) throw new Error('PDF reader DOM is missing');

  const store = new SessionStoragePdfRequestStore();
  const requestId = new URLSearchParams(location.search).get(REQUEST_ID_PARAM);
  const reader = testReaderRequested()
    ? new FakeBoundaryReader()
    : new InstalledVoiceReader(new RuntimeInstalledVoiceReader(), new SpeechSynthesisReader());
  const sequencer: PdfSequencer = new SegmentSequencer(reader);
  const rateStore = new ChromePlaybackRateStore();
  const player = new PdfPlayer(sequencer, {
    elements: { root, status, position, pages },
    saveRate: (rate) => rateStore.save(rate),
  });

  const unload = (): void => {
    sequencer.stop();
    if (requestId) void store.clear(requestId);
  };
  window.addEventListener('pagehide', unload, { once: true });

  player.applyRate(await rateStore.load());
  const rate = document.querySelector<HTMLInputElement>('[data-role="rate"]');
  if (rate) {
    rate.value = String(player.currentRate);
    rate.addEventListener('input', () => player.applyRate(Number(rate.value)));
    rate.addEventListener('change', () => void player.commitRate());
  }

  const play = document.querySelector<HTMLButtonElement>('[data-action="play"]');
  const pause = document.querySelector<HTMLButtonElement>('[data-action="pause"]');
  const stop = document.querySelector<HTMLButtonElement>('[data-action="stop"]');
  const previous = document.querySelector<HTMLButtonElement>('[data-action="previous"]');
  const next = document.querySelector<HTMLButtonElement>('[data-action="next"]');
  play?.addEventListener('click', () => {
    if (sequencer.getState().paused) {
      player.resume();
      return;
    }
    void player.play(player.selectedIndex() ?? 0);
  });
  pause?.addEventListener('click', () => player.pause());
  stop?.addEventListener('click', () => player.stop());
  previous?.addEventListener('click', () => player.jump('backward'));
  next?.addEventListener('click', () => player.jump('forward'));

  if (!requestId) {
    player.fail('Open this reader from the DitaAi popup on a PDF page.');
    return;
  }

  const sourceUrl = await store.consume(requestId);
  if (!sourceUrl || !isHttpPdfUrl(sourceUrl)) {
    player.fail('This reading request expired. Open the PDF again from the DitaAi popup.');
    return;
  }

  try {
    const pdf = await loadPdfDocument(sourceUrl);
    player.show(pdf);
  } catch (error) {
    if (error instanceof PdfDocumentError) {
      player.fail(error.message);
      return;
    }
    logger.warn('[pdf-reader] unexpected load failure', error);
    player.fail('This PDF could not be opened.');
  }
}

void main();
