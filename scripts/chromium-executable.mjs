import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

/**
 * Find an unpacked-extension-compatible browser without coupling to the exact
 * Playwright browser revision. Nix may bundle a compatible adjacent revision.
 *
 * @param {{
 *   explicitPath?: string,
 *   browsersPath?: string,
 *   platform?: NodeJS.Platform,
 *   arch?: string,
 *   applicationCandidates?: string[],
 * }} options
 */
export async function findChromiumExecutable(options = {}) {
  if (options.explicitPath) return options.explicitPath;

  const platform = options.platform ?? process.platform;
  const arch = options.arch ?? process.arch;
  const applicationCandidates =
    options.applicationCandidates ?? defaultApplicationCandidates(platform);

  const application = await firstExisting(applicationCandidates);
  if (application) return application;
  if (!options.browsersPath) return undefined;

  let browserDirectories;
  try {
    browserDirectories = await fs.readdir(options.browsersPath);
  } catch {
    return undefined;
  }

  const revisions = browserDirectories
    .filter((directory) => /^chromium-\d+$/.test(directory))
    .sort((left, right) => right.localeCompare(left, undefined, { numeric: true }));

  for (const revision of revisions) {
    const root = path.join(options.browsersPath, revision);
    const executable = await firstExisting(
      browserRelativePaths(platform, arch).map((relativePath) => path.join(root, relativePath)),
    );
    if (executable) return executable;
  }
  return undefined;
}

function defaultApplicationCandidates(platform) {
  if (platform !== 'darwin') return [];
  return ['/Applications/Chromium.app/Contents/MacOS/Chromium'];
}

function browserRelativePaths(platform, arch) {
  if (platform === 'darwin') {
    const architecture = arch === 'arm64' ? 'arm64' : 'x64';
    return [
      `chrome-mac-${architecture}/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`,
      'chrome-mac/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing',
      'chrome-mac/Chromium.app/Contents/MacOS/Chromium',
    ];
  }
  if (platform === 'linux') return ['chrome-linux64/chrome', 'chrome-linux/chrome'];
  if (platform === 'win32') return ['chrome-win64/chrome.exe', 'chrome-win/chrome.exe'];
  return [];
}

async function firstExisting(candidates) {
  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // Try next compatible browser location.
    }
  }
  return undefined;
}
