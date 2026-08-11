import type { Logger } from './logger';

export type InteractionSurface =
  | 'widget'
  | 'keyboard'
  | 'popup'
  | 'page'
  | 'context-menu'
  | 'browser-action';

/** Emit one consistently shaped record for a user-triggered action. */
export function logInteraction(
  logger: Logger,
  surface: InteractionSurface,
  action: string,
  details: Record<string, unknown> = {},
): void {
  logger.info(`interaction:${action}`, { surface, ...details });
}
