import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it, vi } from 'vitest';
import { MAX_PDF_BYTES, PdfDocumentError, isHttpPdfUrl, loadPdfDocument } from './pdf-document';

const fixturesDirectory = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../../e2e/fixtures',
);

async function fixture(name: string): Promise<Uint8Array> {
  return new Uint8Array(await readFile(path.join(fixturesDirectory, name)));
}

function pdfResponse(bytes: Uint8Array): Response {
  return new Response(bytes, {
    headers: { 'content-type': 'application/pdf' },
  });
}

describe('isHttpPdfUrl', () => {
  it('accepts direct HTTP(S) PDF URLs with query strings', () => {
    expect(isHttpPdfUrl('https://example.test/report.PDF?download=1')).toBe(true);
    expect(isHttpPdfUrl('http://localhost/report.pdf')).toBe(true);
  });

  it('rejects non-PDF, unsupported, and credential-bearing URLs', () => {
    expect(isHttpPdfUrl('https://example.test/article')).toBe(false);
    expect(isHttpPdfUrl('file:///tmp/report.pdf')).toBe(false);
    expect(isHttpPdfUrl('https://user:secret@example.test/report.pdf')).toBe(false);
    expect(isHttpPdfUrl('not a URL')).toBe(false);
  });
});

describe('loadPdfDocument', () => {
  it('extracts readable text from each page in page order', async () => {
    const bytes = await fixture('two-page-text.pdf');
    const fetcher = vi.fn().mockResolvedValue(pdfResponse(bytes));

    const document = await loadPdfDocument('https://example.test/two-page-text.pdf', fetcher);

    expect(document.pageCount).toBe(2);
    expect(document.pages.map((page) => page.pageNumber)).toEqual([1, 2]);
    expect(document.pages[0]?.text).toContain('Orchid opens the story.');
    expect(document.pages[1]?.text).toContain('Cedar closes the story.');
    expect(fetcher).toHaveBeenCalledWith(
      'https://example.test/two-page-text.pdf',
      expect.objectContaining({ credentials: 'include', redirect: 'error' }),
    );
  });

  it('rejects image-only PDFs without returning narration text', async () => {
    const fetcher = vi.fn().mockResolvedValue(pdfResponse(await fixture('image-only.pdf')));

    await expect(
      loadPdfDocument('https://example.test/image-only.pdf', fetcher),
    ).rejects.toMatchObject({
      code: 'no-text',
      message: expect.stringContaining('Scanned PDFs are not supported'),
    });
  });

  it('rejects malformed PDF bytes', async () => {
    const fetcher = vi.fn().mockResolvedValue(pdfResponse(await fixture('corrupt.pdf')));

    await expect(
      loadPdfDocument('https://example.test/corrupt.pdf', fetcher),
    ).rejects.toMatchObject({
      code: 'not-pdf',
    });
  });

  it('rejects redirected or inaccessible requests with a safe error', async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(null, { status: 401 }));

    await expect(
      loadPdfDocument('https://example.test/private.pdf', fetcher),
    ).rejects.toMatchObject({
      code: 'unavailable',
      message: expect.not.stringContaining('example.test'),
    });
    expect(fetcher).toHaveBeenCalledWith(
      'https://example.test/private.pdf',
      expect.objectContaining({ redirect: 'error' }),
    );
  });

  it('rejects responses over the byte limit before reading the body', async () => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response(null, {
        headers: {
          'content-type': 'application/pdf',
          'content-length': String(MAX_PDF_BYTES + 1),
        },
      }),
    );

    await expect(loadPdfDocument('https://example.test/large.pdf', fetcher)).rejects.toMatchObject({
      code: 'too-large',
    });
  });

  it('rejects responses that are not served as PDF', async () => {
    const fetcher = vi.fn().mockResolvedValue(
      new Response('<html>login required</html>', {
        headers: { 'content-type': 'text/html' },
      }),
    );

    await expect(loadPdfDocument('https://example.test/report.pdf', fetcher)).rejects.toMatchObject(
      {
        code: 'not-pdf',
      },
    );
  });

  it('rejects unsupported URL schemes without fetching', async () => {
    const fetcher = vi.fn();

    await expect(loadPdfDocument('file:///private/report.pdf', fetcher)).rejects.toBeInstanceOf(
      PdfDocumentError,
    );
    expect(fetcher).not.toHaveBeenCalled();
  });
});
