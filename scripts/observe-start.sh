#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$project_root"

observability_root="${DITA_OBSERVABILITY_DIR:-.tmp/observability}"
launcher_log="$observability_root/launcher.log"
launcher_pid_file="$observability_root/launcher.pid"
mkdir -p "$observability_root"

if node scripts/observe-status.mjs >/dev/null 2>&1; then
  node scripts/observe-status.mjs
  exit 0
fi

if [[ -n "${PLAYWRIGHT_BROWSERS_PATH:-}" ]]; then
  nohup just observe >"$launcher_log" 2>&1 &
else
  nohup env CI=true nix develop --command just observe >"$launcher_log" 2>&1 &
fi
launcher_pid=$!
printf '%s\n' "$launcher_pid" >"$launcher_pid_file"

for _ in $(seq 1 120); do
  if node scripts/observe-status.mjs >/dev/null 2>&1; then
    node scripts/observe-status.mjs
    exit 0
  fi
  if ! kill -0 "$launcher_pid" 2>/dev/null; then
    printf 'Observer failed to start. Latest launcher output:\n' >&2
    tail -80 "$launcher_log" >&2
    exit 1
  fi
  sleep 1
done

printf 'Observer startup timed out after 120 seconds. Latest launcher output:\n' >&2
tail -80 "$launcher_log" >&2
exit 1
