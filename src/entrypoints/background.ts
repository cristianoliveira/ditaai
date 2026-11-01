// Service worker entry point.
// Composition root: wires domain + infra together.

import { createMessageRouter } from '../domain/messaging/router';
import type { RuntimeMessage } from '../domain/messaging/router';
import { PlaybackController } from '../domain/playback/playback-controller';
import { ChromeDebuggerAccessibilityTree } from '../infra/chrome/debugger-accessibility-tree';
import { InstalledVoiceBoundaryRelay } from '../infra/chrome/installed-voice-boundary-relay';
import { patchSendMessageCallback } from '../infra/chrome/messaging';
import { OffscreenSupertonicReader } from '../infra/chrome/offscreen-supertonic-reader';
import { attachRuntimeListener, fetchTabText, resolveActiveTab } from '../infra/chrome/runtime';
import { watchSpeakingTabLifecycle } from '../infra/chrome/tab-lifecycle-watcher';
import { logger } from '../lib/logger';

export default defineBackground(() => {
  // Guard: swallow noisy "Receiving end does not exist" errors
  patchSendMessageCallback();

  const controller = new PlaybackController();
  const installedReader = new OffscreenSupertonicReader();
  const accessibilityTrees = new Map<number, ChromeDebuggerAccessibilityTree>();

  const closeAccessibilityTree = (tabId: number): void => {
    const tree = accessibilityTrees.get(tabId);
    if (!tree) return;
    accessibilityTrees.delete(tabId);
    void tree.close();
  };

  // Accessibility mode owns a debugger session only for the active picker or
  // evaluation. Every terminal path, including tab lifecycle, closes it.
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg?.dest !== 'background' || !String(msg.method).startsWith('accessibility')) {
      return false;
    }
    const tabId = sender.tab?.id;
    if (typeof tabId !== 'number') {
      sendResponse({ ok: false, error: 'Accessibility requests require a tab' });
      return false;
    }

    const run = async (): Promise<unknown> => {
      if (msg.method === 'accessibilityOpen') {
        closeAccessibilityTree(tabId);
        const tree = new ChromeDebuggerAccessibilityTree(tabId);
        accessibilityTrees.set(tabId, tree);
        try {
          return await tree.open();
        } catch (error) {
          accessibilityTrees.delete(tabId);
          await tree.close();
          throw error;
        }
      }

      const tree = accessibilityTrees.get(tabId);
      if (!tree) throw new Error('Accessibility picker is not open');
      if (msg.method === 'accessibilityRefresh') return tree.refresh();
      if (msg.method === 'accessibilityHitTest')
        return tree.hitTest(msg.args?.[0] as { x: number; y: number });
      if (msg.method === 'accessibilityBounds') return tree.bounds(String(msg.args?.[0] ?? ''));
      if (msg.method === 'accessibilityClose') {
        closeAccessibilityTree(tabId);
        return null;
      }
      throw new Error(`Unknown accessibility method: ${msg.method}`);
    };

    run().then(
      (value) => sendResponse({ ok: true, value }),
      (error) =>
        sendResponse({ ok: false, error: error instanceof Error ? error.message : String(error) }),
    );
    return true;
  });

  chrome.tabs.onRemoved.addListener((tabId) => closeAccessibilityTree(tabId));
  chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.status === 'loading') closeAccessibilityTree(tabId);
  });
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

  // Stop playback when the speaking tab is closed or refreshed. Installed-voice
  // audio lives in the offscreen document, which outlives the tab, so without
  // this it keeps playing after close/refresh (the content script that would
  // normally send stop is gone).
  watchSpeakingTabLifecycle(
    {
      onRemoved: chrome.tabs.onRemoved,
      onUpdated: chrome.tabs.onUpdated,
      onReplaced: chrome.tabs.onReplaced,
    },
    () => ({
      controllerTabId: controller.getState().tabId,
      originTabId: boundaryRelay.originTabId,
    }),
    (tabId) => {
      router({ dest: 'serviceWorker', method: 'stop', args: [] } satisfies RuntimeMessage);
      // Only reach the offscreen doc when installed voice is the active path —
      // otherwise OffscreenSupertonicReader.stop would create an offscreen doc
      // just to send a no-op stop.
      if (tabId === boundaryRelay.originTabId) {
        router({
          dest: 'serviceWorker',
          method: 'stopInstalledVoice',
          args: [],
        } satisfies RuntimeMessage);
      }
      boundaryRelay.clear();
    },
  );

  // Context menu: right-click selected text → open the pronunciation popover in
  // the content tab. removeAll on install keeps the item idempotent across
  // updates (context menus persist, so a bare create would throw on duplicate).
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        id: 'pronounce-selection',
        title: 'Pronounce "%s" as...',
        contexts: ['selection'],
      });
      chrome.contextMenus.create({
        id: 'start-from-here',
        title: '▶ Listen from here',
        contexts: ['page', 'frame', 'selection', 'link', 'image', 'video', 'audio'],
      });
    });
  });
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (!tab?.id) return;
    if (info.menuItemId === 'pronounce-selection') {
      if (!info.selectionText) return;
      chrome.tabs
        .sendMessage(tab.id, {
          dest: 'contentScript',
          method: 'pronounceSelection',
          args: [info.selectionText],
        })
        .catch(() => {});
      return;
    }
    if (info.menuItemId === 'start-from-here') {
      chrome.tabs
        .sendMessage(tab.id, {
          dest: 'contentScript',
          method: 'startFromContext',
          args: [(info as { targetElementId?: number }).targetElementId, info.selectionText],
        })
        .catch(() => {});
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

  logger.info('background ready');
});
