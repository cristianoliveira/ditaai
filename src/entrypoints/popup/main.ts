import { SessionStoragePdfRequestStore } from '../../infra/chrome/pdf-request-store';
import { closeOnPointerLeave } from './close-on-pointer-leave';
import { attemptPdfHandoff, canAttemptPdfHandoff, openPdfReader } from './pdf-handoff';
import { PopupPlayer } from './player';

async function activeTab(): Promise<chrome.tabs.Tab | undefined> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab;
}

async function main(): Promise<void> {
  const tab = await activeTab();

  // Direct PDF URLs have no readable DOM for the page flow; hand off to the
  // DitaAi-owned PDF reader instead of reporting "This page cannot be read".
  if (await openPdfReader(tab?.url, (url) => chrome.tabs.create({ url }))) {
    window.close();
    return;
  }

  if (!tab?.id) throw new Error('No active tab');

  const player = new PopupPlayer(
    (method) =>
      chrome.tabs.sendMessage(tab.id as number, {
        dest: 'contentScript',
        method,
        args: [],
      }),
    async () => {
      await chrome.runtime.sendMessage({ dest: 'background', method: 'openVoicesPage' });
    },
    undefined,
    // Page-first UX: the PDF rescue action appears only when the page really
    // cannot be read (no content script) AND the tab is an eligible http(s)
    // URL — never on ordinary readable HTML pages.
    () => revealPdfRescue(tab.url),
  );
  document.body.append(player.mount());
  await player.refresh();
  // Icon click opens popup + on-page player bar together.
  await player.openPlayerBar();
  // Dismiss the popup when the mouse leaves it; narration keeps playing.
  closeOnPointerLeave(document, () => window.close());
}

/** Reveal the explicit "Read as PDF…" action. The click — not page probing —
 * is the consent; the reader then verifies the link really serves a PDF and
 * shows a clear error when it does not. Hidden by default in popup.html. */
let rescueRevealed = false;
function revealPdfRescue(tabUrl: string | undefined): void {
  const button = document.querySelector<HTMLButtonElement>('#pdf-attempt');
  if (!button || !canAttemptPdfHandoff(tabUrl) || rescueRevealed) return;
  rescueRevealed = true;
  button.hidden = false;
  button.addEventListener('click', () => {
    void attemptPdfHandoff(tabUrl, (url) => chrome.tabs.create({ url })).then((handed) => {
      if (handed) window.close();
    });
  });
}

void main();
