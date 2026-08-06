// Installs before background/main.js evaluates (imported first by background-wrapper.js).
// Speechify's minified background code pings tabs via a Hermes bridge
// (tabs.sendMessage, callback style) and rejects when the tab has no content-script
// listener ("Receiving end does not exist"): tabs like about:blank, chrome:// pages
// and PDFs. Event handlers such as tabs.onHighlighted never catch those rejections,
// so they flood the extension errors page as uncaught promise rejections.
//
// Fix: swallow the rejection for promise-style calls; for callback-style calls,
// answer with Speechify's own "tab could not answer" convention
// ({ meta: { isSuccess: true }, body: {} }, same shape the all-tabs branch produces),
// so Hermes bridge calls resolve instead of rejecting.
const api = globalThis.browser ?? chrome;
const sendMessage = api.tabs.sendMessage.bind(api.tabs);
api.tabs.sendMessage = (tabId, message, options, callback) => {
  if (typeof options === "function") {
    callback = options;
    options = undefined;
  }
  if (typeof callback === "function") {
    const answered = (response) => {
      const lastError = api.runtime.lastError;
      if (!response && lastError && String(lastError.message).includes("Receiving end does not exist")) {
        callback({ meta: { isSuccess: true }, body: {} });
        return;
      }
      callback(response);
    };
    return sendMessage(tabId, message, options, answered);
  }
  return sendMessage(tabId, message, options).catch((error) => {
    if (!String(error?.message ?? error).includes("Receiving end does not exist")) throw error;
  });
};
