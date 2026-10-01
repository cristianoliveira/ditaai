import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import workerUrl from 'pdfjs-dist/legacy/build/pdf.worker.mjs?url';
import type { TextItem } from 'pdfjs-dist/types/src/display/api';

// The bundled worker keeps parsing off the UI thread in the extension. Node
// test runtimes have no browser Worker, so they fall back to pdf.js' fake
// in-thread worker instead.
if (typeof window !== 'undefined') {
  GlobalWorkerOptions.workerSrc = workerUrl;
}

export const MAX_PDF_BYTES = 20 * 1024 * 1024;
export const MAX_PDF_PAGES = 200;
const PDF_READ_TIMEOUT_MS = 20_000;

export type PdfDocumentErrorCode =
  | 'unsupported-url'
  | 'not-pdf'
  | 'too-large'
  | 'too-many-pages'
  | 'timed-out'
  | 'unavailable'
  | 'password-protected'
  | 'malformed'
  | 'no-text';

export class PdfDocumentError extends Error {
  constructor(
    readonly code: PdfDocumentErrorCode,
    message: string,
  ) {
    super(message);
    this.name = 'PdfDocumentError';
  }
}

export interface PdfTextPage {
  pageNumber: number;
  text: string;
}

export interface PdfTextDocument {
  pageCount: number;
  pages: PdfTextPage[];
}

type PdfJsDocument = Awaited<ReturnType<typeof getDocument>['promise']>;
type TextMarkedContentStub = { type: string };

export function isHttpPdfUrl(rawUrl: string | undefined): boolean {
  if (!rawUrl) return false;
  try {
    const url = new URL(rawUrl);
    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      !url.username &&
      !url.password &&
      url.pathname.toLowerCase().endsWith('.pdf')
    );
  } catch {
    return false;
  }
}

export async function loadPdfDocument(
  rawUrl: string,
  fetcher: typeof fetch = fetch,
): Promise<PdfTextDocument> {
  const url = validatePdfUrl(rawUrl);
  const controller = new AbortController();
  let timeout: ReturnType<typeof setTimeout> | undefined;
  let loadingTask: ReturnType<typeof getDocument> | undefined;
  const timedOut = new Promise<never>((_resolve, reject) => {
    timeout = setTimeout(() => {
      controller.abort();
      void loadingTask?.destroy();
      reject(new PdfDocumentError('timed-out', 'PDF reading timed out. Try a smaller document.'));
    }, PDF_READ_TIMEOUT_MS);
  });

  const work = async (): Promise<PdfTextDocument> => {
    try {
      const response = await fetcher(url.href, {
        credentials: 'include',
        redirect: 'error',
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new PdfDocumentError(
          'unavailable',
          'This PDF could not be opened. Check access and try again.',
        );
      }
      if (!response.headers.get('content-type')?.toLowerCase().includes('application/pdf')) {
        throw new PdfDocumentError('not-pdf', 'The address did not return a PDF document.');
      }
      const contentLength = Number(response.headers.get('content-length'));
      if (Number.isFinite(contentLength) && contentLength > MAX_PDF_BYTES) {
        throw new PdfDocumentError('too-large', 'This PDF is too large to read here.');
      }

      const bytes = await readBoundedBody(response, controller.signal);
      if (!hasPdfHeader(bytes)) {
        throw new PdfDocumentError('not-pdf', 'The address did not return a readable PDF.');
      }

      loadingTask = getDocument({
        data: bytes,
        stopAtErrors: true,
        enableXfa: false,
        disableAutoFetch: true,
        useWorkerFetch: false,
      });
      return await extractPages(await loadingTask.promise);
    } catch (error) {
      if (error instanceof PdfDocumentError) throw error;
      if (controller.signal.aborted) {
        throw new PdfDocumentError('timed-out', 'PDF reading timed out. Try again.');
      }
      if (isPasswordError(error)) {
        throw new PdfDocumentError(
          'password-protected',
          'Password-protected PDFs are not supported.',
        );
      }
      if (error instanceof TypeError) {
        throw new PdfDocumentError(
          'unavailable',
          'This PDF could not be opened from this address.',
        );
      }
      throw new PdfDocumentError('malformed', 'This PDF is damaged or uses an unsupported format.');
    }
  };

  try {
    return await Promise.race([work(), timedOut]);
  } finally {
    if (timeout !== undefined) clearTimeout(timeout);
    await loadingTask?.destroy();
  }
}

function validatePdfUrl(rawUrl: string): URL {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new PdfDocumentError('unsupported-url', 'Only HTTP and HTTPS PDF links are supported.');
  }
  if (
    (url.protocol !== 'http:' && url.protocol !== 'https:') ||
    url.username.length > 0 ||
    url.password.length > 0
  ) {
    throw new PdfDocumentError('unsupported-url', 'Only HTTP and HTTPS PDF links are supported.');
  }
  return url;
}

async function readBoundedBody(response: Response, signal: AbortSignal): Promise<Uint8Array> {
  if (!response.body) {
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (bytes.byteLength > MAX_PDF_BYTES) {
      throw new PdfDocumentError('too-large', 'This PDF is too large to read here.');
    }
    return bytes;
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let byteLength = 0;
  try {
    while (true) {
      if (signal.aborted)
        throw new PdfDocumentError('timed-out', 'PDF reading timed out. Try again.');
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;
      byteLength += value.byteLength;
      if (byteLength > MAX_PDF_BYTES) {
        await reader.cancel();
        throw new PdfDocumentError('too-large', 'This PDF is too large to read here.');
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(byteLength);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function hasPdfHeader(bytes: Uint8Array): boolean {
  return (
    bytes.length >= 5 &&
    bytes[0] === 0x25 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x44 &&
    bytes[3] === 0x46 &&
    bytes[4] === 0x2d
  );
}

async function extractPages(pdf: PdfJsDocument): Promise<PdfTextDocument> {
  if (pdf.numPages > MAX_PDF_PAGES) {
    throw new PdfDocumentError('too-many-pages', 'This PDF has too many pages to read here.');
  }

  const pages: PdfTextPage[] = [];
  let containsText = false;
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const text = content.items
      .filter(isTextItem)
      .map((item) => `${item.str}${item.hasEOL ? '\n' : ' '}`)
      .join('')
      .replace(/\s+/g, ' ')
      .trim();
    if (text) containsText = true;
    pages.push({ pageNumber, text });
    page.cleanup();
  }
  if (!containsText) {
    throw new PdfDocumentError(
      'no-text',
      'No selectable text was found. Scanned PDFs are not supported.',
    );
  }
  return { pageCount: pdf.numPages, pages };
}

function isTextItem(item: TextItem | TextMarkedContentStub): item is TextItem {
  return 'str' in item && 'hasEOL' in item;
}

function isPasswordError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'name' in error &&
    error.name === 'PasswordException'
  );
}
