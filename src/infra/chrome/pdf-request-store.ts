import { logger } from '../../lib/logger';

export const PDF_REQUEST_KEY = 'pdfViewerRequest';
const PDF_REQUEST_TTL_MS = 5 * 60 * 1000;

export interface PdfViewerRequest {
  url: string;
  expiresAt: number;
}

/** Port: one-use handoff of a PDF URL from the popup to the reader page. */
export interface PdfRequestStore {
  save(rawUrl: string): Promise<string>;
  consume(requestId: string): Promise<string | null>;
  /** Clear a viewer's claim — used on unload or when another viewer takes over. */
  clear(requestId: string): Promise<void>;
}

/**
 * chrome.storage.session-backed store. The source PDF URL never appears in the
 * reader page URL; the request id is a random, single-use key with a short TTL,
 * so a copied or leaked viewer URL cannot re-fetch the document later.
 */
export class SessionStoragePdfRequestStore implements PdfRequestStore {
  constructor(
    private readonly session: Pick<typeof chrome.storage.session, 'get' | 'set' | 'remove'> = chrome
      .storage.session,
    private readonly randomId: () => string = () => crypto.randomUUID(),
    private readonly now: () => number = () => Date.now(),
  ) {}

  async save(rawUrl: string): Promise<string> {
    const requestId = this.randomId();
    await this.session.set({
      [PDF_REQUEST_KEY]: {
        id: requestId,
        url: rawUrl,
        expiresAt: this.now() + PDF_REQUEST_TTL_MS,
      } satisfies PdfViewerRequest & { id: string },
    });
    return requestId;
  }

  async consume(requestId: string): Promise<string | null> {
    const stored = await this.session.get(PDF_REQUEST_KEY);
    const request = stored[PDF_REQUEST_KEY] as (PdfViewerRequest & { id: string }) | undefined;
    await this.session.remove(PDF_REQUEST_KEY);
    if (!request || request.id !== requestId || request.expiresAt < this.now()) return null;
    return request.url;
  }

  async clear(requestId: string): Promise<void> {
    try {
      const stored = await this.session.get(PDF_REQUEST_KEY);
      const request = stored[PDF_REQUEST_KEY] as (PdfViewerRequest & { id: string }) | undefined;
      if (request?.id === requestId) await this.session.remove(PDF_REQUEST_KEY);
    } catch (error) {
      logger.warn('[pdf-reader] failed to clear viewer request', error);
    }
  }
}
