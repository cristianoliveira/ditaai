import { SessionStoragePdfRequestStore } from '../../infra/chrome/pdf-request-store';
import { isHttpLikeUrl, isHttpPdfUrl } from '../../infra/pdf/pdf-document';

export type OpenTab = (url: string) => Promise<unknown>;

interface PdfRequestStore {
  save(rawUrl: string): Promise<string>;
}

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
  await handoff(tabUrl, opener, store);
  return true;
}

/** Whether the popup may offer the explicit "Read as PDF…" action. Any
 * ordinary HTTP(S) page qualifies — the reader, not this gate, verifies the
 * content actually is a PDF after the user chooses the action. */
export function canAttemptPdfHandoff(tabUrl: string | undefined): boolean {
  return isHttpLikeUrl(tabUrl);
}

/** Explicit user-initiated handoff for URLs the auto-route cannot recognise
 * (e.g. `…/download?id=123` served as `application/pdf`). No probing happens
 * here: the click is the consent, and the reader validates the real content. */
export async function attemptPdfHandoff(
  tabUrl: string | undefined,
  opener: OpenTab,
  store: PdfRequestStore = new SessionStoragePdfRequestStore(),
): Promise<boolean> {
  if (!isHttpLikeUrl(tabUrl) || !tabUrl) return false;
  await handoff(tabUrl, opener, store);
  return true;
}

async function handoff(
  tabUrl: string,
  opener: OpenTab,
  store: PdfRequestStore,
): Promise<void> {
  const requestId = await store.save(tabUrl);
  await opener(chrome.runtime.getURL(`/pdf-reader.html?request=${encodeURIComponent(requestId)}`));
}
