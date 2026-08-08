import { Buffer } from 'node:buffer';
import type { BrowserContext } from '@playwright/test';

/**
 * Deterministic fake for the local Piper TTS provider.
 *
 * Dita's Piper client talks to http://127.0.0.1:17493. In E2E we route that
 * origin to a fixture handler that returns a fixed silent WAV and records
 * start/stop. No real Piper process, no model files, no audio output.
 */
export async function installFakeTts(context: BrowserContext): Promise<void> {
  // Minimal silent WAV (44 bytes header + 0 data) — valid format, zero duration.
  const SILENT_WAV = Buffer.from([
    0x52,
    0x49,
    0x46,
    0x46, // "RIFF"
    0x24,
    0x00,
    0x00,
    0x00, // chunk size = 36
    0x57,
    0x41,
    0x56,
    0x45, // "WAVE"
    0x66,
    0x6d,
    0x74,
    0x20, // "fmt "
    0x10,
    0x00,
    0x00,
    0x00, // subchunk size = 16
    0x01,
    0x00, // audio format = 1 (PCM)
    0x01,
    0x00, // mono
    0x44,
    0xac,
    0x00,
    0x00, // 44100 Hz
    0x88,
    0x58,
    0x01,
    0x00, // byte rate
    0x02,
    0x00, // block align
    0x10,
    0x00, // 16 bits
    0x64,
    0x61,
    0x74,
    0x61, // "data"
    0x00,
    0x00,
    0x00,
    0x00, // data size = 0
  ]);

  await context.route('http://127.0.0.1:17493/**', async (route) => {
    const url = route.request().url();
    if (url.includes('/health')) {
      await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
      return;
    }
    if (url.includes('/synthesize')) {
      await route.fulfill({
        status: 200,
        contentType: 'audio/wav',
        body: SILENT_WAV,
      });
      return;
    }
    await route.fulfill({ status: 404 });
  });
}
