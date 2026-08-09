// Service worker entry point.
// Composition root: wires domain + infra together.

import { createMessageRouter } from '../domain/messaging/router';
import { PlaybackController } from '../domain/playback/playback-controller';
import { InstalledVoiceBoundaryRelay } from '../infra/chrome/installed-voice-boundary-relay';
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

  // Route installed-voice boundaries from offscreen back to the content tab that
  // asked to speak. Independent of PlaybackController: widget-driven playback
  // never registers a tab with the router, so relying on controller.tabId would
  // silently drop every word boundary (no highlighting, no per-word logging).
  const sendInstalledVoiceTiming = (tabId: number, method: string, timing: unknown) => {
    chrome.tabs
      .sendMessage(tabId, {
        dest: 'contentScript',
        method,
        args: [timing],
      })
      .catch(() => {});
  };
  const boundaryRelay = new InstalledVoiceBoundaryRelay(
    (tabId, event) => sendInstalledVoiceTiming(tabId, 'installedVoiceBoundary', event),
    (tabId, schedule) =>
      sendInstalledVoiceTiming(tabId, 'installedVoiceBoundarySchedule', schedule),
  );

  // Forward word-boundary events from offscreen → the originating content tab.
  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    if (msg?.dest !== 'serviceWorker') return false;
    if (msg.method === 'installedVoiceBoundary') {
      boundaryRelay.deliver(msg.args?.[0]);
      sendResponse({ ok: true });
      return true;
    }
    if (msg.method === 'installedVoiceBoundarySchedule') {
      boundaryRelay.deliverSchedule(msg.args?.[0]);
      sendResponse({ ok: true });
      return true;
    }
    return false;
  });

  attachRuntimeListener(router, {
    onReceived: (_msg, sender) => {
      // The content tab that requested installed-voice speech is the target for
      // its word boundaries. Captured here because only the service worker sees
      // sender.tab.id for content-script messages.
      if (_msg.method === 'speakWithInstalledVoice') boundaryRelay.rememberOrigin(sender.tab?.id);
    },
  });

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
