# Dita quality gates
#
# run: just --list

_default:
  @just --list

# === Quality (local === CI) ===

# Run full quality gate (same as CI)
check:
  just lint
  just typecheck
  just test

# Format + lint
lint:
  pnpm biome check src/ e2e/

# Auto-fix formatting
format:
  pnpm biome check --write src/ e2e/

# TypeScript type checking (src + e2e)
typecheck:
  pnpm tsc --noEmit
  pnpm tsc --noEmit -p e2e/tsconfig.json

# Run all tests
test:
  pnpm vitest run

# Run tests in watch mode
test-watch:
  pnpm vitest

# End-to-end tests (real extension in Chromium, fake TTS)
test-e2e:
  pnpm test:e2e

# End-to-end tests in interactive UI mode
test-e2e-ui:
  pnpm test:e2e:ui

# === Build ===

# Build extension for Chrome
build:
  pnpm wxt build

# Build extension for Firefox
build-firefox:
  pnpm wxt build -b firefox

# Dev mode (auto-reload)
dev:
  pnpm wxt

dev-firefox:
  pnpm wxt -b firefox

# Create zip for store submission
zip:
  pnpm wxt zip
