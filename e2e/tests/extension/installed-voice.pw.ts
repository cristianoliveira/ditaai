import { expect, test } from '@playwright/test';
import { SUPERTONIC_ENGINE_ASSETS, SUPERTONIC_VOICES } from '../../../src/domain/voices/catalog';
import { sourceUrl } from '../../../src/domain/voices/voice';
import { launchExtensionContext, testHarnessUrl } from '../../helpers/extension';
import { ServiceWorkerRequester } from '../../requesters/service-worker';

interface ExtensionPageGlobals {
  WebAssembly: {
    compile(bytes: ArrayBuffer): Promise<unknown>;
  };
  caches: {
    open(name: string): Promise<{
      put(url: string, response: Response): Promise<void>;
    }>;
  };
}

test.describe('installed voice host', () => {
  test('reads extension-owned voice cache from offscreen document', async () => {
    const harness = await launchExtensionContext();
    try {
      const page = await harness.context.newPage();
      await page.goto(testHarnessUrl(harness.extensionId));
      const requester = new ServiceWorkerRequester(page);

      const wasmSize = await page.evaluate(async () => {
        const response = await fetch(chrome.runtime.getURL('ort-wasm-simd-threaded.jsep.wasm'));
        if (!response.ok) throw new Error(`ONNX runtime unavailable: ${response.status}`);
        const bytes = await response.arrayBuffer();
        const browser = globalThis as unknown as ExtensionPageGlobals;
        await browser.WebAssembly.compile(bytes);
        return bytes.byteLength;
      });
      expect(wasmSize).toBeGreaterThan(1_000_000);

      await expect(requester.send('isInstalledVoiceAvailable')).resolves.toEqual({
        ok: true,
        available: false,
      });

      const voice = SUPERTONIC_VOICES[0];
      if (!voice) throw new Error('voice catalog is empty');
      const urls = [
        ...SUPERTONIC_ENGINE_ASSETS.assets.map((asset) => sourceUrl(asset.source)),
        sourceUrl(voice.source),
      ];
      await page.evaluate(async (cacheUrls) => {
        const browser = globalThis as unknown as ExtensionPageGlobals;
        const cache = await browser.caches.open('dita-voices');
        await Promise.all(cacheUrls.map((url) => cache.put(url, new Response('cached'))));
      }, urls);

      await expect(requester.send('isInstalledVoiceAvailable')).resolves.toEqual({
        ok: true,
        available: true,
      });
      expect(harness.errors).toEqual([]);
    } finally {
      await harness.close();
    }
  });
});
