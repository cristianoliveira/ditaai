import { zipSync } from 'fflate';
import { describe, expect, it } from 'vitest';
import { parseKittenVoiceArchive } from './kitten-cache';

function npyFloat32(values: number[], shape: [number, number]): Uint8Array {
  const header = new TextEncoder().encode(
    `{'descr': '<f4', 'fortran_order': False, 'shape': (${shape[0]}, ${shape[1]}), }`,
  );
  const padding = (16 - ((10 + header.length + 1) % 16)) % 16;
  const paddedHeader = new Uint8Array(header.length + padding + 1);
  paddedHeader.set(header);
  paddedHeader.fill(0x20, header.length, header.length + padding);
  paddedHeader[paddedHeader.length - 1] = 0x0a;
  const result = new Uint8Array(10 + paddedHeader.length + values.length * 4);
  result.set([0x93, 0x4e, 0x55, 0x4d, 0x50, 0x59, 1, 0], 0);
  new DataView(result.buffer).setUint16(8, paddedHeader.length, true);
  result.set(paddedHeader, 10);
  const view = new DataView(result.buffer);
  values.forEach((value, index) =>
    view.setFloat32(10 + paddedHeader.length + index * 4, value, true),
  );
  return result;
}

describe('parseKittenVoiceArchive', () => {
  it('reads float32 voice styles from the NPZ archive', () => {
    const archive = zipSync({
      'expr-voice-2-f.npy': npyFloat32([1, 2, 3, 4], [2, 2]),
    });

    const voices = parseKittenVoiceArchive(
      archive.buffer.slice(archive.byteOffset, archive.byteOffset + archive.byteLength),
    );

    const voice = voices['expr-voice-2-f'];
    expect(voice).toMatchObject({ styleCount: 2, styleDim: 2 });
    expect(voice && [...voice.data]).toEqual([1, 2, 3, 4]);
  });

  it('rejects empty or malformed archives instead of silently creating no voice', () => {
    const archive = zipSync({ 'readme.txt': new TextEncoder().encode('no embedding') });

    expect(() => parseKittenVoiceArchive(archive.buffer)).toThrow('contains no embeddings');
  });
});
