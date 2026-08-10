// Architecture guard: domain must stay pure.
//
// Domain modules may only import from `src/lib` (shared types) and other
// domain modules — never from `src/infra` (external adapters) or `src/content`
// (page UI). Regression pin for the domain/selection -> content type-cycle.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve, sep } from 'node:path';
import { describe, expect, it } from 'vitest';

const DOMAIN_DIR = join(import.meta.dirname, '.');

function listTsFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return listTsFiles(full);
    if (entry.endsWith('.ts') && !entry.endsWith('.test.ts')) return [full];
    return [];
  });
}

function importTargets(file: string): string[] {
  const source = readFileSync(file, 'utf8');
  const targets: string[] = [];
  for (const match of source.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
    const specifier = match[1];
    if (specifier) targets.push(specifier);
  }
  return targets;
}

function resolvesUnder(target: string, file: string, forbidden: string): boolean {
  const forbiddenDir = resolve(DOMAIN_DIR, '..', forbidden);
  if (target.startsWith('.')) {
    const resolved = resolve(file, '..', target);
    return resolved.startsWith(`${forbiddenDir}${sep}`);
  }
  return target.includes(`/${forbidden}/`);
}

describe('domain layering', () => {
  it('does not import from infra or content', () => {
    const offenders: string[] = [];
    for (const file of listTsFiles(DOMAIN_DIR)) {
      for (const target of importTargets(file)) {
        if (resolvesUnder(target, file, 'infra') || resolvesUnder(target, file, 'content')) {
          offenders.push(`${file} -> ${target}`);
        }
      }
    }
    expect(offenders).toEqual([]);
  });
});
