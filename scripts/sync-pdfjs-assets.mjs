// Copies pdf.js runtime assets (standard fonts) from the pinned pdfjs-dist
// package into WXT's public dir so canvas rendering can paint non-embedded
// fonts. Keeps third-party binaries out of git and in lockstep with the
// locked parser version. Run before `wxt build` (see package.json).
import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'node_modules', 'pdfjs-dist', 'standard_fonts');
const target = path.join(root, 'public', 'pdfjs', 'standard_fonts');

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });
await cp(source, target, { recursive: true });
console.log(`pdf.js standard fonts synced to ${path.relative(root, target)}`);
