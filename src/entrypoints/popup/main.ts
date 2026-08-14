import { closeOnPointerLeave } from './close-on-pointer-leave';
import { PopupPlayer } from './player';

async function activeTabId(): Promise<number> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) throw new Error('No active tab');
  return tab.id;
}

async function main(): Promise<void> {
  const tabId = await activeTabId();
  const player = new PopupPlayer(
    (method) =>
      chrome.tabs.sendMessage(tabId, {
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
