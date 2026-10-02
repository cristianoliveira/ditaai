import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fixturesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'fixtures');

/** Deterministic stall duration for the download timeout route (reader gives
 * up at 20s; the server holds the stream slightly past that, then closes). */
const STALL_MS = 23_000;

/** Serve download-shaped URLs (`/download?id=…`, no file extension) used by
 * the extensionless-PDF acceptance tests. Query param picks the response
 * exactly, so the same path shape can return a real PDF, same-shape HTML,
 * auth failures, oversized bodies, or a stalled stream. */
async function serveDownloadRoute(url: URL, res: http.ServerResponse): Promise<boolean> {
  if (url.pathname !== '/download') return false;
  const id = url.searchParams.get('id') ?? '';

  if (id === 'pdf-text') {
    const body = await fs.readFile(path.join(fixturesDir, 'two-page-text.pdf'));
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
    res.end(body);
    return true;
  }
  if (id === 'html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
      '<!doctype html><html><body><article><p>Download shaped HTML article. ' +
        'It has readable text so normal page playback must keep working.</p></article></body></html>',
    );
    return true;
  }
  if (id === 'blank-html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<!doctype html><html><body></body></html>');
    return true;
  }
  if (id === 'denied') {
    res.writeHead(401, { 'Content-Type': 'text/plain' });
    res.end('Unauthorized');
    return true;
  }
  if (id === 'oversize') {
    // Declare a body larger than the reader's 20MB cap without sending it:
    // the reader must reject on Content-Length before downloading.
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': String(21 * 1024 * 1024),
    });
    res.end();
    return true;
  }
  if (id === 'timeout') {
    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': String(1024 * 1024),
    });
    res.write('%PDF-1.4\n');
    // Hold the stream open past the reader's timeout, then close cleanly.
    const stall = setTimeout(() => res.end(), STALL_MS);
    res.on('close', () => clearTimeout(stall));
    return true;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
  return true;
}

export interface FixtureServer {
  base: string;
  close(): Promise<void>;
}

/**
 * Static file server for fixture HTML pages (articles, empty, pdf).
 * Lets content-script tests load real pages without external network.
 */
export async function startFixtureServer(): Promise<FixtureServer> {
  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      try {
        const url = new URL(req.url ?? '/', 'http://localhost');

        // Chrome auto-requests favicon — return 204 to avoid 404 console noise.
        if (url.pathname === '/favicon.ico') {
          res.writeHead(204);
          res.end();
          return;
        }

        if (await serveDownloadRoute(url, res)) return;

        const filePath = path.join(fixturesDir, url.pathname);
        // Prevent path traversal.
        if (!filePath.startsWith(fixturesDir)) {
          res.writeHead(403);
          res.end('Forbidden');
          return;
        }
        const body = await fs.readFile(filePath);
        const ext = path.extname(filePath);
        const contentType =
          ext === '.html' ? 'text/html' : ext === '.pdf' ? 'application/pdf' : 'text/plain';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(body);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.on('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address();
      if (addr === null || typeof addr === 'string') {
        reject(new Error('cannot determine fixture server port'));
        return;
      }
      resolve({
        base: `http://127.0.0.1:${addr.port}`,
        close: () => new Promise<void>((r) => server.close(() => r())),
      });
    });
  });
}
