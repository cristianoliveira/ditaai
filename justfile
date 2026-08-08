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
  pnpm biome check src/

# Auto-fix formatting
format:
  pnpm biome check --write src/

# TypeScript type checking
typecheck:
  pnpm tsc --noEmit

# Run all tests
test:
  pnpm vitest run

# Run tests in watch mode
test-watch:
  pnpm vitest

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
