/**
 * Supertonic ONNX inference engine. Ported from supertonic/web/helper.js.
 *
 * Runs text → speech entirely in-browser via onnxruntime-web.
 * No external server needed.
 */

import * as ort from 'onnxruntime-web';

// ── Types ────────────────────────────────────────────────────────────

export interface TtsConfig {
  ae: { sample_rate: number; base_chunk_size: number };
  ttl: { chunk_compress_factor: number; latent_dim: number };
}

// ── Unicode Text Processor ──────────────────────────────────────────

const AVAILABLE_LANGS = [
  'en', 'ko', 'ja', 'ar', 'bg', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi',
  'fr', 'hi', 'hr', 'hu', 'id', 'it', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro',
  'ru', 'sk', 'sl', 'sv', 'tr', 'uk', 'vi', 'na',
];

function isValidLang(lang: string): boolean {
  return AVAILABLE_LANGS.includes(lang);
}

class UnicodeProcessor {
  constructor(private indexer: number[]) {}

  call(textList: string[], langList: string[]) {
    const processed = textList.map((text, i) =>
      this.preprocessText(text, langList[i]!),
    );
    const lens = processed.map((t) => t.length);
    const maxLen = Math.max(...lens);

    const textIds = processed.map((text) => {
      const row = new Array(maxLen).fill(0);
      for (let j = 0; j < text.length; j++) {
        const cp = text.codePointAt(j) ?? 0;
        row[j] = cp < this.indexer.length ? this.indexer[cp]! : -1;
      }
      return row;
    });

    return { textIds, textMask: lengthToMask(lens, maxLen) };
  }

  private preprocessText(text: string, lang: string): string {
    text = text.normalize('NFKD');
    text = text.replace(
      /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]+/gu,
      '',
    );

    const repl: Record<string, string> = {
      '\u2013': '-', '\u2011': '-', '\u2014': '-',
      _: ' ', '\u201C': '"', '\u201D': '"',
      '\u2018': "'", '\u2019': "'", '\u00B4': "'", '`': "'",
      '[': ' ', ']': ' ', '|': ' ', '/': ' ', '#': ' ',
      '\u2192': ' ', '\u2190': ' ',
    };
    for (const [k, v] of Object.entries(repl)) text = text.replaceAll(k, v);

    text = text.replace(/[♥☆♡©\\]/g, '');
    for (const [k, v] of Object.entries({
      '@': ' at ', 'e.g.,': 'for example, ', 'i.e.,': 'that is, ',
    })) text = text.replaceAll(k, v);

    text = text.replace(/ ,/g, ',');
    text = text.replace(/ \./g, '.');
    text = text.replace(/ !/g, '!');
    text = text.replace(/ \?/g, '?');
    text = text.replace(/ ;/g, ';');
    text = text.replace(/ :/g, ':');
    text = text.replace(/ '/g, "'");

    while (text.includes('""')) text = text.replace('""', '"');
    while (text.includes("''")) text = text.replace("''", "'");
    while (text.includes('``')) text = text.replace('``', '`');

    text = text.replace(/\s+/g, ' ').trim();
    if (!/[.!?;:,'"')\]}…」。』】〉》›»]$/.test(text)) text += '.';
    if (!isValidLang(lang))
      throw new Error(`Invalid lang: ${lang}. Available: ${AVAILABLE_LANGS.join(', ')}`);

    return `<${lang}>${text}</${lang}>`;
  }
}

// ── Mask helpers ─────────────────────────────────────────────────────

function lengthToMask(lengths: number[], maxLen: number): number[][][] {
  return lengths.map((len) => {
    const row = new Array(maxLen).fill(0);
    for (let j = 0; j < Math.min(len, maxLen); j++) row[j] = 1;
    return [row];
  });
}

// ── Style ────────────────────────────────────────────────────────────

class Style {
  constructor(
    public ttl: ort.Tensor,
    public dp: ort.Tensor,
  ) {}
}

// ── Helpers ──────────────────────────────────────────────────────────

interface LatentResult {
  xt: number[][][];
  latentMask: number[][][];
}

function sampleNoisyLatent(
  duration: number[],
  sampleRate: number,
  baseChunkSize: number,
  chunkCompress: number,
  latentDim: number,
): LatentResult {
  const bsz = duration.length;
  const maxDur = Math.max(...duration);
  const wavLengths = duration.map((d) => Math.floor(d * sampleRate));
  const chunkSize = baseChunkSize * chunkCompress;
  const latentLen = Math.floor(
    (Math.floor(maxDur * sampleRate) + chunkSize - 1) / chunkSize,
  );
  const latentDimVal = latentDim * chunkCompress;

  const xt: number[][][] = [];
  for (let b = 0; b < bsz; b++) {
    const batch: number[][] = [];
    for (let d = 0; d < latentDimVal; d++) {
      const row: number[] = [];
      for (let t = 0; t < latentLen; t++) {
        const u1 = Math.max(0.0001, Math.random());
        const u2 = Math.random();
        row.push(Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2));
      }
      batch.push(row);
    }
    xt.push(batch);
  }

  const latentLengths = wavLengths.map((len) =>
    Math.floor((len + chunkSize - 1) / chunkSize),
  );
  const latentMask = lengthToMask(latentLengths, latentLen);

  for (let b = 0; b < bsz; b++) {
    for (let d = 0; d < latentDimVal; d++) {
      for (let t = 0; t < latentLen; t++) {
        const val = xt[b]?.[d]?.[t];
        const mask = latentMask[b]?.[0]?.[t];
        if (val !== undefined && mask !== undefined) {
          xt[b]![d]![t] = val * mask;
        }
      }
    }
  }

  return { xt, latentMask };
}

function toTensor(
  type: 'float32' | 'int64',
  data: Float32Array | BigInt64Array | number[],
  shape: number[],
): ort.Tensor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return new ort.Tensor(type as never, data as never, shape);
}

// ── Inference Engine ─────────────────────────────────────────────────

export class TextToSpeech {
  private textProcessor: UnicodeProcessor;
  private dpOrt: ort.InferenceSession;
  private textEncOrt: ort.InferenceSession;
  private vectorEstOrt: ort.InferenceSession;
  private vocoderOrt: ort.InferenceSession;
  sampleRate: number;
  private cfg: TtsConfig;

  constructor(
    cfgs: TtsConfig,
    textProcessor: UnicodeProcessor,
    dpOrt: ort.InferenceSession,
    textEncOrt: ort.InferenceSession,
    vectorEstOrt: ort.InferenceSession,
    vocoderOrt: ort.InferenceSession,
  ) {
    this.cfg = cfgs;
    this.textProcessor = textProcessor;
    this.dpOrt = dpOrt;
    this.textEncOrt = textEncOrt;
    this.vectorEstOrt = vectorEstOrt;
    this.vocoderOrt = vocoderOrt;
    this.sampleRate = cfgs.ae.sample_rate;
  }

  async infer(
    textList: string[],
    langList: string[],
    style: Style,
    totalStep: number,
    speed = 1.05,
  ): Promise<{ wav: number[]; duration: number[] }> {
    const bsz = textList.length;
    const { textIds, textMask } = this.textProcessor.call(textList, langList);
    const textLen = textIds[0]?.length ?? 0;

    // Duration predictor
    const dpOut = await this.dpOrt.run({
      text_ids: toTensor('int64', new BigInt64Array(textIds.flat().map((x) => BigInt(x))), [bsz, textLen]),
      style_dp: style.dp,
      text_mask: toTensor('float32', new Float32Array(textMask.flat(2)), [bsz, 1, textMask[0]?.[0]?.length ?? 0]),
    });
    const duration = Array.from(
      (dpOut['duration'] as ort.Tensor).data as Float32Array,
    );
    for (let i = 0; i < duration.length; i++) {
      const val = duration[i];
      if (val !== undefined) duration[i] = val / speed;
    }

    // Text encoder
    const teOut = await this.textEncOrt.run({
      text_ids: toTensor('int64', new BigInt64Array(textIds.flat().map((x) => BigInt(x))), [bsz, textLen]),
      style_ttl: style.ttl,
      text_mask: toTensor('float32', new Float32Array(textMask.flat(2)), [bsz, 1, textMask[0]?.[0]?.length ?? 0]),
    });
    const textEmb = teOut['text_emb'] as ort.Tensor;

    // Noisy latent
    const { xt: initialXt, latentMask } = sampleNoisyLatent(
      duration, this.sampleRate,
      this.cfg.ae.base_chunk_size,
      this.cfg.ttl.chunk_compress_factor,
      this.cfg.ttl.latent_dim,
    );

    let xt = initialXt;
    const latentLen = xt[0]?.[0]?.length ?? 0;
    const latentDim = xt[0]?.length ?? 0;

    const latentMaskFlat = new Float32Array(latentMask.flat(2));
    const lmTensor = toTensor('float32', latentMaskFlat, [bsz, 1, latentMask[0]?.[0]?.length ?? 0]);

    const totalStepTensor = toTensor('float32', new Float32Array(bsz).fill(totalStep), [bsz]);

    // Denoising loop
    for (let step = 0; step < totalStep; step++) {
      const veOut = await this.vectorEstOrt.run({
        noisy_latent: toTensor('float32', new Float32Array(xt.flat(2)), [bsz, latentDim, latentLen]),
        text_emb: textEmb,
        style_ttl: style.ttl,
        latent_mask: lmTensor,
        text_mask: toTensor('float32', new Float32Array(textMask.flat(2)), [bsz, 1, textMask[0]?.[0]?.length ?? 0]),
        current_step: toTensor('float32', new Float32Array(bsz).fill(step), [bsz]),
        total_step: totalStepTensor,
      });

      const denoised = Array.from((veOut['denoised_latent'] as ort.Tensor).data as Float32Array);
      const next: number[][][] = [];
      let idx = 0;
      for (let b = 0; b < bsz; b++) {
        const batch: number[][] = [];
        for (let d = 0; d < latentDim; d++) {
          const row: number[] = [];
          for (let t = 0; t < latentLen; t++) row.push(Number(denoised[idx++]));
          batch.push(row);
        }
        next.push(batch);
      }
      xt = next;
    }

    // Vocoder
    const vocOut = await this.vocoderOrt.run({
      latent: toTensor('float32', new Float32Array(xt.flat(2)), [bsz, latentDim, latentLen]),
    });
    const wav = Array.from((vocOut['wav_tts'] as ort.Tensor).data as Float32Array);

    return { wav, duration };
  }
}

// ── Loaders ──────────────────────────────────────────────────────────

export async function loadVoiceStyle(urls: string[]): Promise<Style> {
  const firstResponse = await fetch(urls[0]!);
  const firstStyle = await firstResponse.json();
  const ttlDims: number[] = firstStyle.style_ttl.dims;
  const dpDims: number[] = firstStyle.style_dp.dims;
  const ttlDim1 = ttlDims[1]!;
  const ttlDim2 = ttlDims[2]!;
  const dpDim1 = dpDims[1]!;
  const dpDim2 = dpDims[2]!;

  const bsz = urls.length;
  const ttlFlat = new Float32Array(bsz * ttlDim1 * ttlDim2);
  const dpFlat = new Float32Array(bsz * dpDim1 * dpDim2);

  for (let i = 0; i < bsz; i++) {
    const response = await fetch(urls[i]!);
    const voiceStyle = await response.json();
    ttlFlat.set(voiceStyle.style_ttl.data.flat(Infinity) as number[], i * ttlDim1 * ttlDim2);
    dpFlat.set(voiceStyle.style_dp.data.flat(Infinity) as number[], i * dpDim1 * dpDim2);
  }

  return new Style(
    new ort.Tensor('float32', ttlFlat, [bsz, ttlDim1, ttlDim2]),
    new ort.Tensor('float32', dpFlat, [bsz, dpDim1, dpDim2]),
  );
}

export async function loadTextToSpeech(onnxDir: string): Promise<{ tts: TextToSpeech }> {
  const cfgs = await fetch(`${onnxDir}/tts.json`).then((r) => r.json()) as TtsConfig;
  const indexer = await fetch(`${onnxDir}/unicode_indexer.json`).then((r) => r.json()) as number[];

  const modelFiles = [
    'duration_predictor.onnx',
    'text_encoder.onnx',
    'vector_estimator.onnx',
    'vocoder.onnx',
  ];

  const sessions = await Promise.all(
    modelFiles.map((f) => ort.InferenceSession.create(`${onnxDir}/${f}`)),
  );

  const tts = new TextToSpeech(
    cfgs,
    new UnicodeProcessor(indexer),
    sessions[0]!, sessions[1]!, sessions[2]!, sessions[3]!,
  );
  return { tts };
}

export function writeWav(audioData: Float32Array, sampleRate: number): ArrayBuffer {
  const numChannels = 1;
  const bitsPerSample = 16;
  const dataSize = audioData.length * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  const write = (o: number, s: string) => { for (let i = 0; i < s.length; i++) view.setUint8(o + i, s.charCodeAt(i)); };

  write(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  write(8, 'WAVE');
  write(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * (bitsPerSample / 8), true);
  view.setUint16(32, numChannels * (bitsPerSample / 8), true);
  view.setUint16(34, bitsPerSample, true);
  write(36, 'data');
  view.setUint32(40, dataSize, true);

  const int16 = new Int16Array(audioData.length);
  for (let i = 0; i < audioData.length; i++)
    int16[i] = Math.max(-32768, Math.min(32767, Math.floor((audioData[i] ?? 0) * 32767)));

  new Uint8Array(buffer, 44).set(new Uint8Array(int16.buffer));
  return buffer;
}
