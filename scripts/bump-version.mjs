#!/usr/bin/env node
/**
 * Bump the dev version using the pattern: vN.N.N-<githash>-<timestamp>
 *
 * Keeps the base semver (N.N.N), updates the git hash + timestamp.
 * Updates both package.json (version) and wxt.config.ts (version_name).
 *
 * Usage:
 *   node scripts/bump-version.mjs          # bump
 *   node scripts/bump-version.mjs 1.2.0    # bump + set base to 1.2.0
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const currentVersion = pkg.version || "0.0.0";

// Allow overriding the base version via CLI arg
const overrideBase = process.argv[2];
const currentBase = currentVersion.replace(/-.*$/, "");
const baseVersion = overrideBase ?? currentBase;
if (!/^\d+\.\d+\.\d+$/.test(baseVersion)) {
  throw new Error(`Invalid base version: ${baseVersion}`);
}

const hash = execSync("git rev-parse --short HEAD").toString().trim();
const timestamp = Math.floor(Date.now() / 1000);
const newVersion = `${baseVersion}-${hash}-${timestamp}`;

// Validate and prepare both files before writing either one.
const config = readFileSync("wxt.config.ts", "utf8");
const manifestVersionPattern = /(manifest:\s*\{[\s\S]*?\bversion:\s*['"])(\d+(?:\.\d+){0,3})(['"])/;
if (!manifestVersionPattern.test(config)) {
  throw new Error("Could not find numeric manifest version in wxt.config.ts");
}
const withManifestVersion = config.replace(
  manifestVersionPattern,
  `$1${baseVersion}$3`,
);
const updatedConfig = withManifestVersion.replace(
  /version_name:\s*"[^"]*"|version_name:\s*'[^']*'/,
  `version_name: '${newVersion}'`,
);

pkg.version = newVersion;
writeFileSync("package.json", JSON.stringify(pkg, null, 2) + "\n");
writeFileSync("wxt.config.ts", updatedConfig);

console.log(`bumped: ${currentVersion} → ${newVersion}`);
