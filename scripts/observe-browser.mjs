/**
 * @param {string} extensionDirectory
 */
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
