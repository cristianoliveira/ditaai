import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const script = path.join(path.dirname(fileURLToPath(import.meta.url)), 'package-cws-release.mjs');

async function fixture(t, version = '1.2.3') {
  const root = await mkdtemp(path.join(os.tmpdir(), 'cws-package-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const extensionDir = path.join(root, 'dist/chrome-mv3');
  await mkdir(extensionDir, { recursive: true });
  await writeFile(
    path.join(extensionDir, 'manifest.json'),
    JSON.stringify({
      manifest_version: 3,
      version,
      version_name: `${version}-hash-123`,
      name: 'test',
    }),
  );
  await writeFile(path.join(extensionDir, 'index.html'), 'release');
  return { root, extensionDir, archive: path.join(root, '.tmp/cws-release.zip') };
}

test('packages when the built manifest matches the requested version', async (t) => {
  const { root, archive } = await fixture(t);
  const result = spawnSync(process.execPath, [script, '1.2.3'], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const names = execFileSync('unzip', ['-Z1', archive], { encoding: 'utf8' }).trim().split('\n');
  assert.ok(names.includes('manifest.json'));
  const manifest = JSON.parse(
    execFileSync('unzip', ['-p', archive, 'manifest.json'], { encoding: 'utf8' }),
  );
  assert.equal(manifest.version, '1.2.3');
});

test('rejects a requested version that differs from the built manifest', async (t) => {
  const { root } = await fixture(t, '1.2.2');
  const result = spawnSync(process.execPath, [script, '1.2.3'], { cwd: root, encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /does not match requested release version/);
});

test('rejects a display version from another release', async (t) => {
  const { root, extensionDir } = await fixture(t);
  await writeFile(
    path.join(extensionDir, 'manifest.json'),
    JSON.stringify({ manifest_version: 3, version: '1.2.3', version_name: '1.2.2-hash-123' }),
  );
  const result = spawnSync(process.execPath, [script, '1.2.3'], { cwd: root, encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /version_name does not match release/);
});

test('replaces a stale archive rather than retaining removed entries', async (t) => {
  const { root, archive } = await fixture(t);
  await mkdir(path.dirname(archive), { recursive: true });
  const staleDir = path.join(root, 'stale');
  await mkdir(staleDir);
  await writeFile(path.join(staleDir, 'stale.txt'), 'old');
  execFileSync('zip', ['-q', archive, 'stale.txt'], { cwd: staleDir });

  const result = spawnSync(process.execPath, [script, '1.2.3'], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  const names = execFileSync('unzip', ['-Z1', archive], { encoding: 'utf8' }).trim().split('\n');
  assert.ok(!names.includes('stale.txt'));
  assert.ok(names.includes('manifest.json'));
});
