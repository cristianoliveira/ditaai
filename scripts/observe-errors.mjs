#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import { readRecentEvents } from './observability.mjs';

const eventsPath = path.resolve(
  process.cwd(),
  process.env.DITA_OBSERVABILITY_DIR ?? '.tmp/observability',
  'current/events.jsonl',
);
const limitArg = process.argv.find((arg) => arg.startsWith('--limit='));
const limit = Number.parseInt(limitArg?.split('=')[1] ?? '50', 10);

try {
  const events = await readRecentEvents(eventsPath, {
    limit: Number.isFinite(limit) ? limit : 50,
    levels: ['warn', 'error'],
  });

  if (events.length === 0) {
    console.log('No warnings or errors in current observability session.');
    process.exit(0);
  }

  for (const event of events) {
    const location = event.url ? ` ${event.url}` : '';
    console.log(
      `${event.timestamp} ${event.level.toUpperCase()} ${event.source}/${event.kind}${location}\n  ${event.message}`,
    );
  }
} catch (error) {
  console.error(`Cannot read observability events at ${eventsPath}`);
  console.error(error instanceof Error ? error.message : String(error));
  console.error('Start a session with: just observe');
  process.exit(1);
}
