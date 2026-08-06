import assert from "node:assert/strict";
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import test from "node:test";

async function importWrapperWith(mockChrome, mainSource = "globalThis.__mainLoaded = true;") {
  const dir = await mkdtemp(join(tmpdir(), "bg-wrapper-"));
  await mkdir(join(dir, "background"), { recursive: true });
  await copyFile(new URL("../background-wrapper.js", import.meta.url), join(dir, "background-wrapper.js"));
  await copyFile(new URL("../background/guard.js", import.meta.url), join(dir, "background", "guard.js"));
  await writeFile(join(dir, "background", "main.js"), mainSource);
  const previous = globalThis.chrome;
  globalThis.chrome = mockChrome;
  try {
    await import(`${pathToFileURL(join(dir, "background-wrapper.js")).href}?t=${Date.now()}`);
    return mockChrome;
  } finally {
    if (previous === undefined) delete globalThis.chrome;
    else globalThis.chrome = previous;
    await rm(dir, { recursive: true, force: true });
  }
}

test("background service worker is wrapped to guard messaging", async () => {
  const manifest = JSON.parse(await readFile(new URL("../manifest.json", import.meta.url), "utf8"));
  assert.equal(manifest.background.service_worker, "background-wrapper.js");
  assert.equal(manifest.background.type, "module");
});

test("guard installs before Speechify main.js evaluates", async () => {
  const chromeMock = {
    runtime: { getURL: () => "chrome-extension://test/background/main.js" },
    tabs: { sendMessage: async () => ({}) }
  };
  delete globalThis.__mainSawPatched;
  await importWrapperWith(
    chromeMock,
    "globalThis.__mainSawPatched = chrome.tabs.sendMessage.toString().includes('Receiving end does not exist');"
  );
  assert.equal(globalThis.__mainSawPatched, true);
  delete globalThis.__mainSawPatched;
});

test("wrapper loads Speechify main.js", async () => {
  const chromeMock = {
    runtime: { getURL: () => "chrome-extension://test/background/main.js" },
    tabs: { sendMessage: async () => ({}) }
  };
  delete globalThis.__mainLoaded;
  await importWrapperWith(chromeMock);
  assert.equal(globalThis.__mainLoaded, true);
  delete globalThis.__mainLoaded;
});

test("wrapper swallows Receiving end errors from tabs.sendMessage", async () => {
  const chromeMock = {
    runtime: { getURL: () => "chrome-extension://test/background/main.js" },
    tabs: {
      sendMessage: async () => {
        throw new Error("Could not establish connection. Receiving end does not exist.");
      }
    }
  };
  const chrome = await importWrapperWith(chromeMock);
  await assert.doesNotReject(() => chrome.tabs.sendMessage(1, { type: "ping" }));
});

test("wrapper rethrows unrelated tabs.sendMessage errors", async () => {
  const chromeMock = {
    runtime: { getURL: () => "chrome-extension://test/background/main.js" },
    tabs: {
      sendMessage: async () => { throw new Error("boom"); }
    }
  };
  const chrome = await importWrapperWith(chromeMock);
  await assert.rejects(() => chrome.tabs.sendMessage(1, { type: "ping" }), /boom/);
});

test("callback style answers receiving-end failures with an empty success", async () => {
  const runtime = { getURL: () => "chrome-extension://test/background/main.js", lastError: undefined };
  const chromeMock = {
    runtime,
    tabs: {
      sendMessage: (_tabId, _message, _options, callback) => {
        runtime.lastError = { message: "Could not establish connection. Receiving end does not exist." };
        callback(undefined);
        runtime.lastError = undefined;
      }
    }
  };
  const chrome = await importWrapperWith(chromeMock);
  const seen = [];
  chrome.tabs.sendMessage(1, { type: "hermes" }, (response) => seen.push(response));
  assert.deepEqual(seen, [{ meta: { isSuccess: true }, body: {} }]);
});

test("callback style passes real responses through unchanged", async () => {
  const runtime = { getURL: () => "chrome-extension://test/background/main.js", lastError: undefined };
  const real = { meta: { isSuccess: true }, body: { ok: 1 } };
  const chromeMock = {
    runtime,
    tabs: {
      sendMessage: (_tabId, _message, _options, callback) => callback(real)
    }
  };
  const chrome = await importWrapperWith(chromeMock);
  const seen = [];
  chrome.tabs.sendMessage(1, { type: "hermes" }, (response) => seen.push(response));
  assert.deepEqual(seen, [real]);
});

test("callback style leaves unrelated lastError failures untouched", async () => {
  const runtime = { getURL: () => "chrome-extension://test/background/main.js", lastError: undefined };
  const chromeMock = {
    runtime,
    tabs: {
      sendMessage: (_tabId, _message, _options, callback) => {
        runtime.lastError = { message: "Message length exceeded maximum allowed length." };
        callback(undefined);
        runtime.lastError = undefined;
      }
    }
  };
  const chrome = await importWrapperWith(chromeMock);
  const seen = [];
  chrome.tabs.sendMessage(1, { type: "hermes" }, (response) => {
    seen.push({ response, lastError: runtime.lastError?.message });
  });
  assert.deepEqual(seen, [{ response: undefined, lastError: "Message length exceeded maximum allowed length." }]);
});
