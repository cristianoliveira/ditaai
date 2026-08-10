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
