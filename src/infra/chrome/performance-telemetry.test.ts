import { describe, expect, it, vi } from 'vitest';
import { attachPerformanceTelemetryListener } from './performance-telemetry';

describe('attachPerformanceTelemetryListener', () => {
  it('logs allowlisted numeric metrics in the message text and acknowledges delivery', () => {
    let listener:
      | ((message: unknown, sender: unknown, respond: (value: unknown) => void) => boolean)
      | undefined;
    const event = {
      addListener: vi.fn((value) => {
        listener = value;
      }),
    };
    const log = vi.fn();
    const respond = vi.fn();
    attachPerformanceTelemetryListener(event, log);

    const keepOpen = listener?.(
      {
        dest: 'performanceTelemetry',
        method: 'installedVoiceTelemetry',
        args: [
          'inference:complete',
          { durationMs: 52, sampleCount: 900, pageText: 'private', voiceId: 'F2' },
        ],
      },
      {},
      respond,
    );

    expect(log).toHaveBeenCalledWith(
      '[installed-voice][telemetry] inference:complete {"durationMs":52,"sampleCount":900}',
    );
    expect(respond).toHaveBeenCalledWith({ ok: true });
    expect(keepOpen).toBe(true);
  });

  it('does not claim messages for other destinations', () => {
    let listener:
      | ((message: unknown, sender: unknown, respond: (value: unknown) => void) => boolean)
      | undefined;
    attachPerformanceTelemetryListener(
      {
        addListener: (value) => {
          listener = value;
        },
      },
      vi.fn(),
    );
    const respond = vi.fn();

    const keepOpen = listener?.(
      { dest: 'serviceWorker', method: 'installedVoiceTelemetry' },
      {},
      respond,
    );

    expect(respond).not.toHaveBeenCalled();
    expect(keepOpen).toBe(false);
  });
});
