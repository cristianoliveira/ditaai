// Service worker entry point.
// Composition root: wires domain + infra together.

import { createMessageRouter } from '../domain/messaging/router';
import { PlaybackController } from '../domain/playback/playback-controller';
import { patchSendMessageCallback } from '../infra/chrome/messaging';
import { attachRuntimeListener, fetchTabText, resolveActiveTab } from '../infra/chrome/runtime';

export default defineBackground(() => {
  // Guard: swallow noisy "Receiving end does not exist" errors
  patchSendMessageCallback();

  const controller = new PlaybackController();
  const router = createMessageRouter(controller, { fetchTabText, resolveActiveTab });
  attachRuntimeListener(router);

  // Action button: click the icon → toggle the widget on the active tab
  chrome.action.onClicked.addListener(async (tab) => {
    if (!tab.id) return;
    try {
      await chrome.tabs.sendMessage(tab.id, {
        dest: 'contentScript',
        method: 'toggleWidget',
        args: [],
      });
    } catch {
      // content script not loaded (chrome:// pages, etc.) — ignore
    }
  });

  console.log('[dita] background ready');
});
