import { SessionStoragePdfRequestStore } from '../../infra/chrome/pdf-request-store';
import { closeOnPointerLeave } from './close-on-pointer-leave';
import { openPdfReader } from './pdf-handoff';
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
  );
  document.body.append(player.mount());
  await player.refresh();
  // Icon click opens popup + on-page player bar together.
  await player.openPlayerBar();
  // Dismiss the popup when the mouse leaves it; narration keeps playing.
  closeOnPointerLeave(document, () => window.close());
}

void main();
