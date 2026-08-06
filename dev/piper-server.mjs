#!/usr/bin/env node
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 17493;
const MODEL_PATH = fileURLToPath(new URL("../voices/en_US-amy-medium.onnx", import.meta.url));
const CONFIG_PATH = fileURLToPath(new URL("../voices/en_US-amy-medium.onnx.json", import.meta.url));

function json(response, status, body) {
  response.writeHead(status, { "content-type": "application/json" });
  response.end(JSON.stringify(body));
}

async function readJson(request) {
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 1_000_000) throw new Error("Request is too large");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

export function synthesizeWithPiper({ text, rate = 1 }) {
  return new Promise((resolve, reject) => {
    const lengthScale = 1 / rate;
    const child = spawn("piper", [
      "--model", MODEL_PATH,
      "--config", CONFIG_PATH,
      "--length_scale", String(lengthScale),
      "--output_file", "-",
      "--quiet"
    ], { stdio: ["pipe", "pipe", "pipe"] });
    const stdout = [];
    const stderr = [];
    const timer = setTimeout(() => {
      child.kill("SIGKILL");
      reject(new Error("Piper synthesis timed out"));
    }, 30_000);

    child.stdout.on("data", (chunk) => stdout.push(chunk));
    child.stderr.on("data", (chunk) => stderr.push(chunk));
    child.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (code !== 0) {
        reject(new Error(Buffer.concat(stderr).toString("utf8").trim() || `Piper exited with ${code}`));
        return;
      }
      resolve(Buffer.concat(stdout));
    });
    child.stdin.end(`${text}\n`);
  });
}

export function createPiperServer({ synthesize = synthesizeWithPiper } = {}) {
  return createServer(async (request, response) => {
    const origin = request.headers.origin;
    if (origin && !origin.startsWith("chrome-extension://")) {
      json(response, 403, { error: "Only Brave extensions may use this server" });
      return;
    }
    response.setHeader("access-control-allow-origin", origin ?? "*");
    response.setHeader("access-control-allow-headers", "content-type");
    if (request.method === "OPTIONS") {
      response.writeHead(204);
      response.end();
      return;
    }
    if (request.method === "GET" && request.url === "/health") {
      json(response, 200, { status: "ok", voice: "en_US-amy-medium" });
      return;
    }
    if (request.method !== "POST" || request.url !== "/synthesize") {
      json(response, 404, { error: "Not found" });
      return;
    }

    try {
      const body = await readJson(request);
      const text = typeof body.text === "string" ? body.text.trim() : "";
      const rate = Number(body.rate ?? 1);
      if (!text) {
        json(response, 400, { error: "text is required" });
        return;
      }
      if (!Number.isFinite(rate) || rate < 0.5 || rate > 3) {
        json(response, 400, { error: "rate must be between 0.5 and 3" });
        return;
      }
      const audio = await synthesize({ text, rate });
      response.writeHead(200, {
        "cache-control": "no-store",
        "content-type": "audio/wav",
        "content-length": audio.length
      });
      response.end(audio);
    } catch (error) {
      json(response, 500, { error: error instanceof Error ? error.message : String(error) });
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const host = process.env.PIPER_HOST ?? DEFAULT_HOST;
  const port = Number(process.env.PIPER_PORT ?? DEFAULT_PORT);
  const server = createPiperServer();
  server.listen(port, host, () => {
    console.log(`Amy Piper voice listening at http://${host}:${port}`);
  });
}
