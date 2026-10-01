import { SessionStoragePdfRequestStore } from '../../infra/chrome/pdf-request-store';
import { isHttpPdfUrl } from '../../infra/pdf/pdf-document';

export type OpenTab = (url: string) => Promise<unknown>;

/**
 * Handle a browser-action activation on a PDF tab: hand the source URL to a
 * DitaAi-owned reader page through a one-use session request and open it in a
 * new tab. Returns false when the tab is not a direct HTTP(S) PDF, so the
 * normal page flow proceeds.
 */
export async function openPdfReader(
  tabUrl: string | undefined,
  opener: OpenTab,
  store: PdfRequestStore = new SessionStoragePdfRequestStore(),
): Promise<boolean> {
  if (!isHttpPdfUrl(tabUrl) || !tabUrl) return false;
  const requestId = await store.save(tabUrl);
  await opener(chrome.runtime.getURL(`/pdf-reader.html?request=${encodeURIComponent(requestId)}`));
  return true;
}

interface PdfRequestStore {
  save(rawUrl: string): Promise<string>;
}
