import type { TtsProvider } from '../../domain/tts/synthesis';
import type { Result } from '../../lib/types';

// Piper HTTP client — talks to the local piper-server.
// This is an infra adapter implementing the TtsProvider domain port.

export interface PiperClientConfig {
  baseUrl: string;
}

export class PiperClient implements TtsProvider {
  constructor(private config: PiperClientConfig) {}

  async synthesize(text: string, rate?: number): Promise<Result<ArrayBuffer>> {
    try {
      const response = await fetch(`${this.config.baseUrl}/synthesize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, rate }),
      });

      if (!response.ok) {
        return {
          ok: false,
          error: new Error(`Piper HTTP ${response.status}: ${response.statusText}`),
        };
      }

      const buffer = await response.arrayBuffer();
      return { ok: true, value: buffer };
    } catch (error) {
      return {
        ok: false,
        error: error instanceof Error ? error : new Error(String(error)),
      };
    }
  }
}
