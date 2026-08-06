import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { once } from "node:events";
import test from "node:test";
import vm from "node:vm";

import { createPiperServer } from "../dev/piper-server.mjs";

test("development manifest loads bridge before Speechify and has independent identity", async () => {
  const manifest = JSON.parse(await readFile(new URL("../manifest.json", import.meta.url), "utf8"));
  const mainContentScript = manifest.content_scripts.find((entry) => entry.js.includes("content-wrapper.js"));

  assert.equal(manifest.version, "14.3.1");
  assert.deepEqual(mainContentScript.js.slice(0, 2), ["piper-local-voice.js", "content-wrapper.js"]);
  assert.equal("key" in manifest, false);
  assert.equal("update_url" in manifest, false);
});

test("local server synthesizes requested text as WAV", async (t) => {
  const calls = [];
  const server = createPiperServer({
    synthesize: async (request) => {
      calls.push(request);
      return Buffer.from("RIFF-test-wave");
    }
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => server.close());

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/synthesize`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: "Hello from Amy", rate: 1.25 })
  });

  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "audio/wav");
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), Buffer.from("RIFF-test-wave"));
  assert.deepEqual(calls, [{ text: "Hello from Amy", rate: 1.25 }]);
});

test("local server rejects empty text without running Piper", async (t) => {
  let called = false;
  const server = createPiperServer({ synthesize: async () => { called = true; } });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => server.close());

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/synthesize`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: "" })
  });

  assert.equal(response.status, 400);
  assert.equal(called, false);
});

test("local server rejects requests from ordinary websites", async (t) => {
  const server = createPiperServer({ synthesize: async () => Buffer.from("RIFF") });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  t.after(() => server.close());

  const { port } = server.address();
  const response = await fetch(`http://127.0.0.1:${port}/synthesize`, {
    method: "POST",
    headers: { "content-type": "application/json", origin: "https://example.com" },
    body: JSON.stringify({ text: "Do not run" })
  });

  assert.equal(response.status, 403);
});

test("browser bridge exposes Amy and routes only Amy through local server", async () => {
  const source = await readFile(new URL("../piper-local-voice.js", import.meta.url), "utf8");
  const nativeVoice = { name: "Samantha", voiceURI: "Samantha", lang: "en-US" };
  const nativeSpoken = [];
  const fetched = [];
  const played = [];
  let rejectLocalRequest = false;

  class NativeUtterance extends EventTarget {
    constructor(text) {
      super();
      this.text = text;
      this.rate = 1;
      this.voice = null;
    }
  }
  class Audio extends EventTarget {
    constructor(url) { super(); this.url = url; }
    async play() { played.push(this.url); this.dispatchEvent(new Event("ended")); }
    pause() {}
  }

  const speechSynthesis = {
    getVoices: () => [nativeVoice],
    speak: (utterance) => nativeSpoken.push(utterance.text),
    cancel() {}, pause() {}, resume() {}
  };
  const context = vm.createContext({
    Audio,
    Blob,
    Event,
    EventTarget,
    SpeechSynthesisUtterance: NativeUtterance,
    URL: { createObjectURL: () => "blob:amy", revokeObjectURL() {} },
    console,
    fetch: async (url, options) => {
      fetched.push({ url, body: JSON.parse(options.body) });
      if (rejectLocalRequest) throw new Error("server unavailable");
      return { ok: true, blob: async () => new Blob(["RIFF"]) };
    },
    setTimeout,
    speechSynthesis,
    window: null
  });
  context.window = context;
  vm.runInContext(source, context);

  const amy = context.speechSynthesis.getVoices().find((voice) => voice.name === "Amy (Piper Local)");
  assert.ok(amy);

  const local = new context.SpeechSynthesisUtterance("Local text");
  local.voice = amy;
  context.speechSynthesis.speak(local);
  await new Promise((resolve) => setTimeout(resolve, 0));

  const native = new context.SpeechSynthesisUtterance("Native text");
  native.voice = nativeVoice;
  context.speechSynthesis.speak(native);

  assert.deepEqual(fetched, [{
    url: "http://127.0.0.1:17493/synthesize",
    body: { text: "Local text", rate: 1 }
  }]);
  assert.deepEqual(played, ["blob:amy"]);
  assert.deepEqual(nativeSpoken, ["Native text"]);

  rejectLocalRequest = true;
  let localError = false;
  const unavailable = new context.SpeechSynthesisUtterance("No fallback");
  unavailable.voice = amy;
  unavailable.addEventListener("error", () => { localError = true; });
  context.speechSynthesis.speak(unavailable);
  await new Promise((resolve) => setTimeout(resolve, 0));

  assert.equal(localError, true);
  assert.deepEqual(nativeSpoken, ["Native text"]);
});
