const SAMPLE_BATCH_SIZE = 512;

const calculateRMS = (samples) => {
  let sum = 0;
  for (let i = 0; i < samples.length; i++) {
    sum += samples[i] * samples[i];
  }
  return Math.sqrt(sum / samples.length);
};

class AudioBufferProcessor extends AudioWorkletProcessor {
  constructor() {
    super();

    this.batchBuffer = new Float32Array(SAMPLE_BATCH_SIZE);
    this.batchOffset = 0;
    this.rmsReportInterval = 16;
    this.framesSinceLastReport = 0;

    this.port.onmessage = (event) => {
      if (event.data?.type === 'flush') {
        this.flushSamples();
      }
    };
  }

  process(inputs) {
    const input = inputs[0];
    if (!input || !input.length || !input[0]) {
      return true;
    }

    const inputChannel = input[0];

    this.framesSinceLastReport++;
    if (this.framesSinceLastReport >= this.rmsReportInterval) {
      const rms = calculateRMS(inputChannel);
      this.port.postMessage({
        type: 'audio-level',
        level: rms,
      });
      this.framesSinceLastReport = 0;
    }

    for (let i = 0; i < inputChannel.length; i++) {
      this.batchBuffer[this.batchOffset++] = inputChannel[i];

      if (this.batchOffset === SAMPLE_BATCH_SIZE) {
        this.flushSamples();
      }
    }

    return true;
  }

  flushSamples() {
    if (this.batchOffset === 0) {
      return;
    }

    const samples = this.batchBuffer.slice(0, this.batchOffset);
    this.port.postMessage({
      type: 'samples',
      samples,
      sampleRate: sampleRate,
    });
    this.batchOffset = 0;
  }
}

registerProcessor('audio-buffer-processor', AudioBufferProcessor);
