import { FakeBoundaryReader } from '../../content/fake-reader';
// DitaAi-owned PDF reading view. Composition root only: claims the one-use
// request, extracts text locally with PDF.js, renders pages, and narrates with
// the browser's local speech synthesis (word boundaries are native, so the
// spoken-word highlight works without a background relay).
import { PdfPlayer, type PdfSequencer } from '../../content/pdf-player';
import { SegmentSequencer } from '../../domain/audio/sequencer';
import { SpeechSynthesisReader } from '../../infra/audio/speech-synthesis-reader';
import { SessionStoragePdfRequestStore } from '../../infra/chrome/pdf-request-store';
import { PdfDocumentError, isHttpPdfUrl, loadPdfDocument } from '../../infra/pdf/pdf-document';
import { logger } from '../../lib/logger';

const REQUEST_ID_PARAM = 'request';

async function main(): Promise<void> {
  const root = document.getElementById('pdf-reader');
  const status = document.getElementById('pdf-status');
  const position = document.getElementById('pdf-page-position');
  const pages = document.getElementById('pdf-pages');
  if (!root || !status || !position || !pages) throw new Error('PDF reader DOM is missing');

  const store = new SessionStoragePdfRequestStore();
  const requestId = new URLSearchParams(location.search).get(REQUEST_ID_PARAM);
  const reader =
    new URLSearchParams(location.search).get('testReader') === 'fake'
      ? new FakeBoundaryReader()
      : new SpeechSynthesisReader();
  const sequencer: PdfSequencer = new SegmentSequencer(reader);
  const player = new PdfPlayer(sequencer, { root, status, position, pages });

  const unload = (): void => {
    sequencer.stop();
    if (requestId) void store.clear(requestId);
  };
  window.addEventListener('pagehide', unload, { once: true });

  const play = document.querySelector<HTMLButtonElement>('[data-action="play"]');
  const pause = document.querySelector<HTMLButtonElement>('[data-action="pause"]');
  const stop = document.querySelector<HTMLButtonElement>('[data-action="stop"]');
  play?.addEventListener('click', () => player.play());
  pause?.addEventListener('click', () => player.pause());
  stop?.addEventListener('click', () => player.stop());

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
