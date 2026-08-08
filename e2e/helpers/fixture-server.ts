import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const fixturesDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'fixtures');

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
