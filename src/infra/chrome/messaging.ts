// Chrome extension messaging adapter.
// Wraps chrome.tabs.sendMessage with error filtering.

const RECEIVING_END_DOES_NOT_EXIST =
  'Could not establish connection. Receiving end does not exist.';

export interface SendMessageResult {
  success: boolean;
  response?: unknown;
}

export async function sendMessageToTab(
  tabId: number,
  message: unknown,
): Promise<SendMessageResult> {
  try {
    const response = await chrome.tabs.sendMessage(tabId, message);
    return { success: true, response };
  } catch (error) {
    if (error instanceof Error && error.message.includes(RECEIVING_END_DOES_NOT_EXIST)) {
      return { success: false };
    }
    throw error;
  }
}

// Also patch the callback-style API used by legacy code
export function patchSendMessageCallback(): void {
  const original = chrome.tabs.sendMessage;
  // @ts-expect-error — patching for backward compat
  chrome.tabs.sendMessage = (
    tabId: number,
    message: unknown,
    callback?: (response: unknown) => void,
  ) => {
    if (typeof callback === 'function') {
      original(tabId, message).then(
        (response) => callback(response),
        (error) => {
          if (error instanceof Error && error.message.includes(RECEIVING_END_DOES_NOT_EXIST)) {
            return;
          }
          throw error;
        },
      );
    } else {
      return original(tabId, message);
    }
  };
}
