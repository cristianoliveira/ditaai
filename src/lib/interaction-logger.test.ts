import { describe, expect, it, vi } from 'vitest';
import { logInteraction } from './interaction-logger';
import type { Logger } from './logger';

function loggerSpy(): Logger {
  return {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  };
}

describe('logInteraction', () => {
  it('logs a user action with its interaction surface', () => {
    const logger = loggerSpy();

    logInteraction(logger, 'widget', 'pause');

    expect(logger.info).toHaveBeenCalledWith('interaction:pause', { surface: 'widget' });
  });

  it('includes action context without losing the interaction surface', () => {
    const logger = loggerSpy();

    logInteraction(logger, 'keyboard', 'jump', { direction: 'forward', currentSegment: 4 });

    expect(logger.info).toHaveBeenCalledWith('interaction:jump', {
      surface: 'keyboard',
      direction: 'forward',
      currentSegment: 4,
    });
  });
});
