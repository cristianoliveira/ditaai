/**
 * @param {string} extensionDirectory
 */
export async function reloadLoadedExtension(serviceWorker) {
  await serviceWorker.evaluate(() => chrome.runtime.reload()).catch(() => {});
}

export async function requestLoadedBuild(context, serviceWorker) {
  const pageEvent = context.waitForEvent('page', { timeout: 15_000 });
  await serviceWorker.evaluate(async () => {
    await chrome.tabs.create({
      url: chrome.runtime.getURL('popup.html'),
      active: false,
    });
  });
  const page = await pageEvent;
  try {
    await page.waitForLoadState('domcontentloaded');
    return await page.evaluate(() =>
      chrome.runtime.sendMessage({
        dest: 'performanceTelemetry',
        method: 'getBuild',
      }),
    );
  } finally {
    await page.close();
  }
}

export async function runSyntheticAudioProbe(context, serviceWorker) {
  const pageEvent = context.waitForEvent('page', { timeout: 15_000 });
  await serviceWorker.evaluate(async () => {
    await chrome.tabs.create({
      url: chrome.runtime.getURL('popup.html'),
      active: false,
    });
  });
  const page = await pageEvent;
  try {
    await page.waitForLoadState('domcontentloaded');
    return await page.evaluate(async () => {
      const response = await chrome.runtime.sendMessage({
        dest: 'serviceWorker',
        method: 'prepareInstalledVoice',
        args: [
          'The quick brown fox jumps over the lazy dog. Dita synthetic audio diagnostic.',
          { quality: 4 },
        ],
      });
      return { ok: response?.ok === true };
    });
  } finally {
    await page.close();
  }
}

export async function loadedExtensionVersion(serviceWorker) {
  return serviceWorker.evaluate(() => {
    const manifest = chrome.runtime.getManifest();
    return manifest.version_name ?? manifest.version;
  });
}

export function chromiumLaunchArguments(extensionDirectory) {
  return [
    `--disable-extensions-except=${extensionDirectory}`,
    `--load-extension=${extensionDirectory}`,
    '--restore-last-session',
  ];
}

/**
 * Keep Chromium's restored pages intact. An explicit startup URL opens in a new tab.
 *
 * @param {{ newPage: () => Promise<{ goto: (url: string) => Promise<unknown> }> }} context
 * @param {string | undefined} requestedUrl
 */
export async function openRequestedPage(context, requestedUrl) {
  if (!requestedUrl) return;

  const page = await context.newPage();
  await page.goto(requestedUrl);
}
