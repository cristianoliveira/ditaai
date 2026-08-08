import type { Result } from '../../lib/types';

// Domain port: defines what a TTS provider must do.
// Concrete implementations live in src/infra/.
export interface TtsProvider {
  synthesize(text: string, rate?: number): Promise<Result<ArrayBuffer>>;
}

export interface SynthesizeParams {
  text: string;
  voiceUri: string;
  rate?: number;
}

// Domain logic: picks the right provider for a given voice URI.
// Pure — no side effects, no imports from infra.
export function synthesizeWith(
  providers: Map<string, TtsProvider>,
  params: SynthesizeParams,
): Promise<Result<ArrayBuffer>> {
  const provider = providers.get(params.voiceUri);
  if (!provider) {
    return Promise.resolve({
      ok: false,
      error: new Error(`No provider for voice: ${params.voiceUri}`),
    });
  }
  return provider.synthesize(params.text, params.rate);
}
