import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { readSessionStatus, requestSessionStop } from './observability-session.mjs';

const temporaryDirectories: string[] = [];

async function createSessionFile(session: Record<string, unknown>) {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'dita-session-'));
  temporaryDirectories.push(directory);
  const sessionPath = path.join(directory, 'session.json');
  await fs.writeFile(sessionPath, JSON.stringify(session));
  return sessionPath;
}

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => fs.rm(directory, { recursive: true, force: true })),
  );
});

describe('readSessionStatus', () => {
  it('reports a missing session without probing a process', async () => {
    const probe = vi.fn();

    await expect(readSessionStatus('/missing/session.json', probe)).resolves.toEqual({
      status: 'missing',
      alive: false,
    });
    expect(probe).not.toHaveBeenCalled();
  });

  it('reports metadata and whether its observer process is alive', async () => {
    const sessionPath = await createSessionFile({
      status: 'ready',
      pid: 42,
      extensionId: 'extension-id',
      eventsPath: '/tmp/events.jsonl',
    });

    await expect(readSessionStatus(sessionPath, () => true)).resolves.toEqual({
      status: 'ready',
      pid: 42,
      alive: true,
      extensionId: 'extension-id',
      eventsPath: '/tmp/events.jsonl',
    });
  });

  it('treats an empty or unparseable session file as missing (stale partial write)', async () => {
    const directory = await fs.mkdtemp(path.join(os.tmpdir(), 'dita-session-'));
    temporaryDirectories.push(directory);
    const sessionPath = path.join(directory, 'session.json');
    await fs.writeFile(sessionPath, '');
    const probe = vi.fn();

    await expect(readSessionStatus(sessionPath, probe)).resolves.toEqual({
      status: 'missing',
      alive: false,
    });
    expect(probe).not.toHaveBeenCalled();
  });
});

describe('requestSessionStop', () => {
  it('does nothing when observer is already stopped', () => {
    const sendSignal = vi.fn();

    expect(requestSessionStop({ status: 'stopped', pid: 42, alive: false }, sendSignal)).toBe(
      'already-stopped',
    );
    expect(sendSignal).not.toHaveBeenCalled();
  });

  it('sends SIGINT only to live observer PID', () => {
    const sendSignal = vi.fn();

    expect(requestSessionStop({ status: 'ready', pid: 42, alive: true }, sendSignal)).toBe(
      'stopping',
    );
    expect(sendSignal).toHaveBeenCalledWith(42, 'SIGINT');
  });
});
