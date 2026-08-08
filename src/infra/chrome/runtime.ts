// Chrome runtime messaging adapter.
// Wires chrome.runtime.onMessage to the domain message router.

import type { RuntimeMessage } from '../../domain/messaging/router';

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
