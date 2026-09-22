// Independent hydration for the persisted content preferences.
//
// Why this module exists: the first version loaded rate, volume, highlight and
// the read scope through one `Promise.all` and applied them only after all four
// resolved. One rejection — the read scope is the usual suspect — therefore
// aborted every application, so a stored `playbackRate` of 1.25 never reached
// the player or the widget, which kept showing 1x. Writes were fine; the restore
// silently did nothing, and the rejected promise was never handled.
//
// The contract here is the opposite: each preference is loaded and applied in
// isolation, one failure cannot block another, and the whole run always
// resolves. Failures are reported instead of swallowed.
//
// Values logged for non-sensitive controls (rate, volume, highlight) are plain
// numbers and booleans. Callers must pass a privacy-safe `describe` for anything
// that could carry page content.

export interface PreferenceLoader<T> {
  /** Stable name used in diagnostics. */
  readonly name: string;
  readonly load: () => Promise<T>;
  readonly apply: (value: T) => void | Promise<void>;
  /** Privacy-safe value for the success log. Omit to log only the name. */
  readonly describe?: (value: T) => unknown;
}

export interface PreferenceFailure {
  readonly name: string;
  readonly reason: string;
}

export interface HydrationReport {
  readonly hydrated: readonly string[];
  readonly failed: readonly PreferenceFailure[];
}

export interface HydrationOptions {
  /** Called after every successful apply, so a mounted widget can reflect the
   * value as soon as it is known rather than at the end of the run. */
  readonly onApplied?: (name: string) => void;
}

interface PreferenceLog {
  info(message: string, details?: Record<string, unknown>): void;
  warn(message: string, details?: Record<string, unknown>): void;
}

/**
 * Load and apply every preference independently. Never rejects: a loader that
 * throws is recorded as a failure and the others proceed.
 */
export async function hydratePreferences(
  loaders: readonly PreferenceLoader<unknown>[],
  log: PreferenceLog,
  options: HydrationOptions = {},
): Promise<HydrationReport> {
  const hydrated: string[] = [];
  const failed: PreferenceFailure[] = [];

  await Promise.all(
    loaders.map(async (loader) => {
      try {
        const value = await loader.load();
        await loader.apply(value);
        hydrated.push(loader.name);
        log.info('[prefs] hydrated', {
          name: loader.name,
          ...(loader.describe ? { value: loader.describe(value) } : {}),
        });
        options.onApplied?.(loader.name);
      } catch (error) {
        const reason = error instanceof Error ? error.message : String(error);
        failed.push({ name: loader.name, reason });
        log.warn('[prefs] not hydrated', { name: loader.name, reason });
      }
    }),
  );

  return { hydrated, failed };
}
