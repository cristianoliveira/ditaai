#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";

const files = [
  "background-wrapper.js",
  "background/guard.js",
  "content/chunk-324T2OUF.js",
  "piper-local-voice.js"
];

for (const directory of ["dev", "test"]) {
  const entries = await readdir(directory);
  files.push(...entries.filter((entry) => entry.endsWith(".mjs")).map((entry) => `${directory}/${entry}`));
}

for (const file of files.sort()) {
  execFileSync(process.execPath, ["--check", file], { stdio: "inherit" });
}

for (const file of ["manifest.json", "package.json"]) {
  JSON.parse(await readFile(file, "utf8"));
}

console.log(`Lint passed: ${files.length} scripts and 2 JSON files`);
