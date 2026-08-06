#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const enabledLifecycle = '{name:"force-login",lifecycles:["init","toggle-force-login"],config:{}}';
const disabledLifecycle = '{name:"force-login",lifecycles:[],config:{}}';
const keyboardGate = 'if(jp||(jp=(await re("/auth/get-user"))?.user),!jp||!Ls(jp)){tt("toggle-force-login");return}';
const anonymousKeyboard = 'jp||(jp=(await re("/auth/get-user"))?.user);';

const count = (source, value) => source.split(value).length - 1;

export function disableLoginGate(source) {
  const enabledCount = count(source, enabledLifecycle);
  const disabledCount = count(source, disabledLifecycle);
  if (!((enabledCount === 2 && disabledCount === 0) || (enabledCount === 0 && disabledCount === 2))) {
    throw new Error(`Expected 2 force-login lifecycles, found enabled=${enabledCount} disabled=${disabledCount}`);
  }

  let patched = source.replaceAll(enabledLifecycle, disabledLifecycle);
  const keyboardCount = count(patched, keyboardGate);
  const anonymousKeyboardCount = count(patched, anonymousKeyboard);
  if (!((keyboardCount === 1 && anonymousKeyboardCount === 0) || (keyboardCount === 0 && anonymousKeyboardCount === 1))) {
    throw new Error(`Expected 1 keyboard login gate, found enabled=${keyboardCount} disabled=${anonymousKeyboardCount}`);
  }
  patched = patched.replace(keyboardGate, anonymousKeyboard);
  return patched;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const bundlePath = fileURLToPath(new URL("../content/chunk-324T2OUF.js", import.meta.url));
  const source = await readFile(bundlePath, "utf8");
  const patched = disableLoginGate(source);
  await writeFile(bundlePath, patched);
  console.log(`Disabled login gate in ${bundlePath}`);
}
