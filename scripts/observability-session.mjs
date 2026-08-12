import fs from 'node:fs/promises';
import process from 'node:process';

export async function readSessionStatus(sessionPath, probeProcess = isProcessAlive) {
  let session;
  try {
    session = JSON.parse(await fs.readFile(sessionPath, 'utf8'));
  } catch (error) {
    // A session file that is missing, empty, or unparseable (e.g. a stale
    // partial write from an interrupted session) means no readable session is
    // running — report it as missing instead of failing the caller.
    if (error?.code === 'ENOENT' || error instanceof SyntaxError) {
      return { status: 'missing', alive: false };
    }
    throw error;
  }

  const pid = Number.isInteger(session.pid) ? session.pid : undefined;
  return {
    status: session.status ?? 'unknown',
    ...(pid ? { pid } : {}),
    alive: pid ? probeProcess(pid) : false,
    ...(session.extensionId ? { extensionId: session.extensionId } : {}),
    ...(session.eventsPath ? { eventsPath: session.eventsPath } : {}),
  };
}

export function requestSessionStop(session, sendSignal = process.kill) {
  if (!session.alive || !session.pid) return 'already-stopped';
  sendSignal(session.pid, 'SIGINT');
  return 'stopping';
}

export function isProcessAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
}
