#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import { readSessionStatus } from './observability-session.mjs';

const sessionPath = path.resolve(
  process.cwd(),
  process.env.DITA_OBSERVABILITY_DIR ?? '.tmp/observability',
  'current/session.json',
);

try {
  const session = await readSessionStatus(sessionPath);
  console.log(JSON.stringify(session, null, 2));
  process.exit(session.status === 'ready' && session.alive ? 0 : 1);
} catch (error) {
  console.log(
    JSON.stringify(
      {
        status: 'error',
        alive: false,
        message: error instanceof Error ? error.message : String(error),
        sessionPath,
      },
      null,
      2,
    ),
  );
  process.exit(1);
}
