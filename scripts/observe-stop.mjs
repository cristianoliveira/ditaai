#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import { setTimeout } from 'node:timers/promises';
import { readSessionStatus, requestSessionStop } from './observability-session.mjs';

const sessionPath = path.resolve(
  process.cwd(),
  process.env.DITA_OBSERVABILITY_DIR ?? '.tmp/observability',
  'current/session.json',
);

try {
  const current = await readSessionStatus(sessionPath);
  const result = requestSessionStop(current);
  if (result === 'already-stopped') {
    console.log(JSON.stringify({ result, session: current }, null, 2));
    process.exit(0);
  }

  for (let attempt = 0; attempt < 50; attempt += 1) {
    await setTimeout(100);
    const session = await readSessionStatus(sessionPath);
    if (!session.alive) {
      console.log(JSON.stringify({ result: 'stopped', session }, null, 2));
      process.exit(0);
    }
  }

  console.log(
    JSON.stringify(
      {
        result: 'timeout',
        message: 'Observer did not stop within 5 seconds',
        pid: current.pid,
      },
      null,
      2,
    ),
  );
  process.exit(1);
} catch (error) {
  console.log(
    JSON.stringify(
      {
        result: 'error',
        message: error instanceof Error ? error.message : String(error),
      },
      null,
      2,
    ),
  );
  process.exit(1);
}
