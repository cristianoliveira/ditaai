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
  pnpm biome check src/ e2e/ scripts/

# Auto-fix formatting
format:
  pnpm biome check --write src/ e2e/ scripts/

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

# Open persistent Chromium in foreground and write live events
observe:
  pnpm observe

# Start persistent Chromium in background (agent-friendly)
observe-start:
  pnpm observe:start

# Show current observability process state
observe-status:
  pnpm observe:status

# Show latest warnings/errors from current observability session
observe-errors:
  pnpm observe:errors

# Stop current observability browser without killing unrelated Chrome processes
observe-stop:
  pnpm observe:stop

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

# Install Supertonic voices from HuggingFace
# Usage: just install-voices [M1 F3 ...] or just install-voices --engine
install-voices +voices='':
  node scripts/install-voices.mjs {{voices}}

# Create zip for store submission
zip:
  pnpm wxt zip

# === Versioning ===

# Bump dev version (vN.N.N-<githash>-<timestamp>)
# Optional: pass a base version, e.g. just bump 1.0.0
bump base_version="":
  node scripts/bump-version.mjs {{base_version}}

# Install git hooks (run once after clone)
setup-hooks:
  git config core.hooksPath .githooks
