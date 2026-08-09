// Service worker entry point.
// Composition root: wires domain + infra together.

import { createMessageRouter } from '../domain/messaging/router';
import { PlaybackController } from '../domain/playback/playback-controller';
import { patchSendMessageCallback } from '../infra/chrome/messaging';
import { OffscreenSupertonicReader } from '../infra/chrome/offscreen-supertonic-reader';
import { attachRuntimeListener, fetchTabText, resolveActiveTab } from '../infra/chrome/runtime';

export default defineBackground(() => {
  // Guard: swallow noisy "Receiving end does not exist" errors
  patchSendMessageCallback();

  const controller = new PlaybackController();
  const installedReader = new OffscreenSupertonicReader();
  const router = createMessageRouter(controller, {
    fetchTabText,
    resolveActiveTab,
    installedReader,
  });
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

  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg?.dest === 'background' && msg.method === 'openVoicesPage') {
      const url = chrome.runtime.getURL('voices.html');
      chrome.tabs.create({ url }).then(() => sendResponse({ ok: true }));
      return true;
    }
    return false;
  });

  console.log('[dita] background ready');
});
