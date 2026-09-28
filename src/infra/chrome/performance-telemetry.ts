const ALLOWED_EVENTS = new Set([
  'cache:loaded',
  'reader:initialize',
  'reader:ready',
  'prepare:complete',
  'speak:complete',
  'audio.source:scheduled',
  'models:ready',
  'inference:complete',
]);

const ALLOWED_FIELDS = new Set([
  'durationMs',
  'modelAssetCount',
  'modelBytes',
  'voiceBytes',
  'sampleCount',
  'durationSum',
  'textLength',
]);

interface RuntimeMessageEvent {
  addListener(
    listener: (
      message: unknown,
      sender: unknown,
      sendResponse: (response: unknown) => void,
    ) => boolean,
  ): void;
}

/** Owns the dedicated offscreen-to-service-worker performance message route. */
export function attachPerformanceTelemetryListener(
  event: RuntimeMessageEvent,
  log: (line: string) => void,
): void {
  event.addListener((message, _sender, sendResponse) => {
    if (!isTelemetryMessage(message)) return false;

    const [name, details] = message.args ?? [];
    if (typeof name === 'string' && ALLOWED_EVENTS.has(name)) {
      const metrics = sanitizeMetrics(details);
      log(`[installed-voice][telemetry] ${name} ${JSON.stringify(metrics)}`);
    }

    sendResponse({ ok: true });
    return true;
  });
}

function isTelemetryMessage(message: unknown): message is {
  dest: 'performanceTelemetry';
  method: 'installedVoiceTelemetry';
  args?: unknown[];
} {
  return (
    typeof message === 'object' &&
    message !== null &&
    'dest' in message &&
    message.dest === 'performanceTelemetry' &&
    'method' in message &&
    message.method === 'installedVoiceTelemetry'
  );
}

function sanitizeMetrics(value: unknown): Record<string, number> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) return {};
  return Object.fromEntries(
    Object.entries(value).filter(
      ([key, metric]) =>
        ALLOWED_FIELDS.has(key) && typeof metric === 'number' && Number.isFinite(metric),
    ),
  );
}
