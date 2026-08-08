/** Port: install, uninstall, and query voices. No browser APIs. */

import type { InstalledVoice, Voice } from './voice';

export type InstallProgress = {
  voiceId: string;
  phase: 'downloading' | 'installed' | 'error';
  bytesDownloaded?: number;
  totalBytes?: number;
  error?: string;
};

export interface VoiceInstaller {
  /** Download a voice file and store it locally. */
  install(voice: Voice): Promise<InstalledVoice>;

  /** Remove a voice from local storage. */
  uninstall(voice: Voice): Promise<void>;

  /** Check whether a voice is already installed. */
  isInstalled(voice: Voice): Promise<boolean>;

  /** List all installed voices. */
  listInstalled(): Promise<InstalledVoice[]>;
}

export function makeProgress(
  voiceId: string,
  phase: InstallProgress['phase'],
  extra?: Partial<InstallProgress>,
): InstallProgress {
  return { voiceId, phase, ...extra };
}
