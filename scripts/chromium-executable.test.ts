import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { findChromiumExecutable } from './chromium-executable.mjs';

const temporaryDirectories: string[] = [];

async function createTemporaryDirectory() {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'dita-chromium-'));
  temporaryDirectories.push(directory);
  return directory;
}

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => fs.rm(directory, { recursive: true, force: true })),
  );
});

describe('findChromiumExecutable', () => {
  it('prefers an explicit executable path', async () => {
    await expect(
      findChromiumExecutable({
        explicitPath: '/custom/chrome-for-testing',
        platform: 'darwin',
        arch: 'arm64',
      }),
    ).resolves.toBe('/custom/chrome-for-testing');
  });

  it('finds Chrome for Testing without depending on Playwright revision', async () => {
    const browsersPath = await createTemporaryDirectory();
    const executable = path.join(
      browsersPath,
      'chromium-1228',
      'chrome-mac-arm64',
      'Google Chrome for Testing.app',
      'Contents/MacOS/Google Chrome for Testing',
    );
    await fs.mkdir(path.dirname(executable), { recursive: true });
    await fs.writeFile(executable, '');

    await expect(
      findChromiumExecutable({ browsersPath, platform: 'darwin', arch: 'arm64' }),
    ).resolves.toBe(executable);
  });

  it('returns undefined when no compatible executable exists', async () => {
    const browsersPath = await createTemporaryDirectory();
    await fs.mkdir(path.join(browsersPath, 'chromium_headless_shell-1228'));

    await expect(
      findChromiumExecutable({
        browsersPath,
        platform: 'darwin',
        arch: 'arm64',
        applicationCandidates: [],
      }),
    ).resolves.toBeUndefined();
  });
});
