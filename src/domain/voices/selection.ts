export interface VoiceSelectionStore {
  load(): Promise<string | null>;
  save(voiceId: string): Promise<void>;
}

/** Resolve a usable voice while preserving catalog order as deterministic fallback. */
export function resolveSelectedVoiceId(
  selectedVoiceId: string | null,
  installedVoiceIds: string[],
): string | null {
  if (selectedVoiceId && installedVoiceIds.includes(selectedVoiceId)) return selectedVoiceId;
  return installedVoiceIds[0] ?? null;
}

/** Keeps the randomly selected voice stable for one page visit. */
export class PageVoiceRotation {
  private voiceId: string | null = null;

  constructor(private readonly random: () => number = Math.random) {}

  resolve(
    selectedVoiceId: string | null,
    installedVoiceIds: string[],
    enabled: boolean,
  ): string | null {
    if (!enabled) {
      this.reset();
      return resolveSelectedVoiceId(selectedVoiceId, installedVoiceIds);
    }
    if (this.voiceId && installedVoiceIds.includes(this.voiceId)) return this.voiceId;
    this.voiceId = resolveRotatingVoiceId(selectedVoiceId, installedVoiceIds, this.random);
    return this.voiceId;
  }

  reset(): void {
    this.voiceId = null;
  }
}

/** Select an installed voice randomly when rotation is configured. */
export function resolveRotatingVoiceId(
  selectedVoiceId: string | null,
  installedVoiceIds: string[],
  random?: () => number,
): string | null {
  if (!random) return resolveSelectedVoiceId(selectedVoiceId, installedVoiceIds);
  const index = Math.min(
    installedVoiceIds.length - 1,
    Math.floor(random() * installedVoiceIds.length),
  );
  return installedVoiceIds[index] ?? null;
}
