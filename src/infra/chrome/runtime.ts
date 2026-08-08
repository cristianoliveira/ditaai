// Chrome runtime messaging adapter.
// Wires chrome.runtime.onMessage to the domain message router.

import type {
  ActiveTabResolver,
  RuntimeMessage,
  TabTextFetcher,
} from '../../domain/messaging/router';

export function attachRuntimeListener(
  router: (msg: RuntimeMessage) => unknown | Promise<unknown>,
): void {
  chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
    const result = router(msg as RuntimeMessage);
    if (result instanceof Promise) {
      result.then(
        (value) => sendResponse(value),
        (error) => sendResponse({ ok: false, error: String(error) }),
      );
      return true; // keep the message channel open for async response
    }
    sendResponse(result);
    return false;
  });
}

/** Resolves the currently active tab id. */
export const resolveActiveTab: ActiveTabResolver = async (): Promise<number> => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) throw new Error('No active tab found');
  return tab.id;
};
export const fetchTabText: TabTextFetcher = async (tabId: number): Promise<string[]> => {
  const response = await chrome.tabs.sendMessage(tabId, {
    dest: 'contentScript',
    method: 'getText',
    args: [],
  });
  if (response && Array.isArray(response.texts)) {
    return response.texts;
  }
  return [];
};
