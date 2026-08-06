import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { disableLoginGate } from "../dev/disable-login-gate.mjs";

const enabledLifecycle = '{name:"force-login",lifecycles:["init","toggle-force-login"],config:{}}';
const disabledLifecycle = '{name:"force-login",lifecycles:[],config:{}}';
const keyboardGate = 'if(jp||(jp=(await re("/auth/get-user"))?.user),!jp||!Ls(jp)){tt("toggle-force-login");return}';

test("patch disables both playback login lifecycles and keyboard login gate", () => {
  const source = `${enabledLifecycle};${enabledLifecycle};${keyboardGate};keep-me`;
  const patched = disableLoginGate(source);

  assert.equal(patched.includes(enabledLifecycle), false);
  assert.equal(patched.split(disabledLifecycle).length - 1, 2);
  assert.equal(patched.includes(keyboardGate), false);
  assert.match(patched, /keep-me/);
});

test("patch rejects unknown Speechify bundle shape", () => {
  assert.throws(() => disableLoginGate("changed bundle"), /Expected 2 force-login lifecycles/);
});

test("loaded content bundle has anonymous local playback enabled", async () => {
  const source = await readFile(new URL("../content/chunk-324T2OUF.js", import.meta.url), "utf8");
  const manifest = JSON.parse(await readFile(new URL("../manifest.json", import.meta.url), "utf8"));

  assert.equal(source.includes(enabledLifecycle), false);
  assert.equal(source.split(disabledLifecycle).length - 1, 2);
  assert.equal(source.includes(keyboardGate), false);
  assert.equal(manifest.version, "14.3.2");
});
