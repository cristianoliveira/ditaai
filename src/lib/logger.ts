// Zero-dependency logger. Adds ISO timestamps and a namespace tag to every
// line. Clock and sink are injectable so tests stay deterministic.

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  timestamp: string;
  namespace: string;
  message: string;
  details?: unknown;
}

export interface Clock {
  now(): Date;
}

export interface LogSink {
  log(entry: LogEntry): void;
}

export interface Logger {
  debug(message: string, details?: unknown): void;
  info(message: string, details?: unknown): void;
  warn(message: string, details?: unknown): void;
  error(message: string, details?: unknown): void;
}

function entry(
  level: LogLevel,
  clock: Clock,
  namespace: string,
  message: string,
  details: unknown,
): LogEntry {
  const base: LogEntry = {
    level,
    timestamp: clock.now().toISOString(),
    namespace,
    message,
  };
  return details === undefined ? base : { ...base, details };
}

export function createLogger(clock: Clock, sink: LogSink, namespace = 'dita'): Logger {
  return {
    debug: (m, d) => sink.log(entry('debug', clock, namespace, m, d)),
    info: (m, d) => sink.log(entry('info', clock, namespace, m, d)),
    warn: (m, d) => sink.log(entry('warn', clock, namespace, m, d)),
    error: (m, d) => sink.log(entry('error', clock, namespace, m, d)),
  };
}

/** Formats an entry as `[timestamp] [namespace] message` and forwards it,
 * with optional details, to the matching `console` method. */
export const consoleSink: LogSink = {
  log({ level, timestamp, namespace, message, details }) {
    const line = `[${timestamp}] [${namespace}] ${message}`;
    console[level](line, details);
  },
};

export const systemClock: Clock = { now: () => new Date() };

export const logger: Logger = createLogger(systemClock, consoleSink);
