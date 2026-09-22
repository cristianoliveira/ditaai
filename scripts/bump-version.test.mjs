import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const script = path.join(rootDir, 'scripts/bump-version.mjs');

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'bump-version-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await writeFile(path.join(root, 'package.json'), JSON.stringify({ version: '1.2.3-hash-123' }));
  await writeFile(
    path.join(root, 'wxt.config.ts'),
    "export default { manifest: { version: '1.2.3', version_name: '1.2.3-hash-123' } };\n",
  );
  execFileSync('git', ['init', '-q'], { cwd: root });
  execFileSync('git', ['config', 'user.name', 'Test'], { cwd: root });
  execFileSync('git', ['config', 'user.email', 'test@example.com'], { cwd: root });
  execFileSync('git', ['add', '.'], { cwd: root });
  execFileSync('git', ['commit', '-qm', 'fixture'], { cwd: root });
  return root;
}

async function bump(root, version) {
  return spawnSync(process.execPath, [script, ...(version ? [version] : [])], {
    cwd: root,
    encoding: 'utf8',
  });
}

test('bumps a routine dev version when manifest base is already current', async (t) => {
  const root = await fixture(t);
  const result = await bump(root);
  assert.equal(result.status, 0, result.stderr);
  const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
  const config = await readFile(path.join(root, 'wxt.config.ts'), 'utf8');
  assert.match(pkg.version, /^1\.2\.3-[a-f0-9]+-\d+$/);
  assert.match(config, /version: '1\.2\.3'/);
  assert.ok(config.includes(`version_name: '${pkg.version}'`));
});

test('updates package, manifest, and display version for a new base', async (t) => {
  const root = await fixture(t);
  const result = await bump(root, '2.0.0');
  assert.equal(result.status, 0, result.stderr);
  const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
  const config = await readFile(path.join(root, 'wxt.config.ts'), 'utf8');
  assert.match(pkg.version, /^2\.0\.0-[a-f0-9]+-\d+$/);
  assert.match(config, /version: '2\.0\.0'/);
  assert.ok(config.includes(`version_name: '${pkg.version}'`));
});

test('rejects invalid or absent manifest version without partially writing files', async (t) => {
  const root = await fixture(t);
  const originalPackage = await readFile(path.join(root, 'package.json'), 'utf8');
  await writeFile(path.join(root, 'wxt.config.ts'), 'export default { manifest: {} };\n');
  const originalConfig = await readFile(path.join(root, 'wxt.config.ts'), 'utf8');
  const result = await bump(root, '2.0.0');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Could not find numeric manifest version/);
  assert.equal(await readFile(path.join(root, 'package.json'), 'utf8'), originalPackage);
  assert.equal(await readFile(path.join(root, 'wxt.config.ts'), 'utf8'), originalConfig);
});

test('rejects invalid base version without changing files', async (t) => {
  const root = await fixture(t);
  const originalPackage = await readFile(path.join(root, 'package.json'), 'utf8');
  const originalConfig = await readFile(path.join(root, 'wxt.config.ts'), 'utf8');
  const result = await bump(root, 'v2.0.0');
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Invalid base version/);
  assert.equal(await readFile(path.join(root, 'package.json'), 'utf8'), originalPackage);
  assert.equal(await readFile(path.join(root, 'wxt.config.ts'), 'utf8'), originalConfig);
});
