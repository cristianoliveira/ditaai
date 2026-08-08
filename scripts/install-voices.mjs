#!/usr/bin/env node
/**
 * Download Supertonic voice files from HuggingFace to a local directory.
 *
 * Usage:
 *   node scripts/install-voices.mjs              # download all voices + engine
 *   node scripts/install-voices.mjs M1 F3        # download specific voices
 *   node scripts/install-voices.mjs --engine     # download only shared engine assets
 *
 * Files are saved to: voices/supertonic/
 *   - onnx/          shared ONNX models + config
 *   - voice_styles/   per-voice JSON style files
 */
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

const HF_BASE = "https://huggingface.co/Supertone/supertonic-3/resolve/main";
const OUT_DIR = join(process.cwd(), "voices", "supertonic");

const ENGINE_ASSETS = [
  "duration_predictor.onnx",
  "text_encoder.onnx",
  "vector_estimator.onnx",
  "vocoder.onnx",
  "tts.json",
  "unicode_indexer.json",
];

const VOICES = [
  "M1", "M2", "M3", "M4", "M5",
  "F1", "F2", "F3", "F4", "F5",
];

async function download(url, dest) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed: ${response.status} ${url}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(dest, buffer);
  const sizeMB = (buffer.byteLength / 1024 / 1024).toFixed(1);
  console.log(`  ✓ ${dest.replace(OUT_DIR + "/", "")} (${sizeMB} MB)`);
  return buffer.byteLength;
}

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function main() {
  const args = process.argv.slice(2);
  const engineOnly = args.includes("--engine");
  const requestedVoices = args.filter((a) => !a.startsWith("--"));
  const voices = requestedVoices.length > 0 ? requestedVoices : VOICES;

  console.log(`Dita voice installer`);
  console.log(`  output: ${OUT_DIR}/`);
  console.log("");

  await ensureDir(join(OUT_DIR, "onnx"));
  await ensureDir(join(OUT_DIR, "voice_styles"));

  let totalBytes = 0;

  // Always download shared engine assets
  console.log("Engine assets (shared):");
  for (const asset of ENGINE_ASSETS) {
    const dest = join(OUT_DIR, "onnx", asset);
    totalBytes += await download(`${HF_BASE}/onnx/${asset}`, dest);
  }
  console.log("");

  if (!engineOnly) {
    console.log(`Voice styles (${voices.length}):`);
    for (const voiceId of voices) {
      if (!VOICES.includes(voiceId)) {
        console.log(`  ⚠ Unknown voice: ${voiceId} (skipping)`);
        continue;
      }
      const dest = join(OUT_DIR, "voice_styles", `${voiceId}.json`);
      totalBytes += await download(`${HF_BASE}/voice_styles/${voiceId}.json`, dest);
    }
  }

  const totalMB = (totalBytes / 1024 / 1024).toFixed(1);
  console.log("");
  console.log(`Done. ${totalMB} MB downloaded to ${OUT_DIR}/`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
