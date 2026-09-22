import { execFileSync } from 'node:child_process';
import { mkdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';

const version = process.argv[2];
if (!/^\d+\.\d+\.\d+$/.test(version ?? '')) {
  throw new Error('Release version must be numeric MAJOR.MINOR.PATCH');
}

const extensionDir = path.resolve('dist/chrome-mv3');
const manifestPath = path.join(extensionDir, 'manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
if (!manifest.version || !/^\d+(\.\d+){0,3}$/.test(manifest.version)) {
  throw new Error(`Built manifest has invalid version: ${manifest.version}`);
}
if (manifest.version !== version) {
  throw new Error(
    `Built manifest version ${manifest.version} does not match requested release version ${version}; bump source config before tagging`,
  );
}
if (manifest.version_name !== version && !manifest.version_name?.startsWith(`${version}-`)) {
  throw new Error(`Built manifest version_name does not match release ${version}`);
}

const outputDir = path.resolve('.tmp');
await mkdir(outputDir, { recursive: true });
const archivePath = path.join(outputDir, 'cws-release.zip');
await rm(archivePath, { force: true });
execFileSync('zip', ['-qr', archivePath, '.'], { cwd: extensionDir });
const listing = execFileSync('unzip', ['-Z1', archivePath], { encoding: 'utf8' })
  .trim()
  .split('\n');
if (!listing.includes('manifest.json'))
  throw new Error('ZIP must contain manifest.json at its root');
const archivedManifest = JSON.parse(
  execFileSync('unzip', ['-p', archivePath, 'manifest.json'], { encoding: 'utf8' }),
);
if (archivedManifest.version !== version)
  throw new Error('ZIP manifest version does not match requested version');
console.log(`Packaged ${archivePath} (manifest ${version})`);
