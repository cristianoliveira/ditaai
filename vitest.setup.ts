// pdfjs-dist (modern build) schedules worker replies with Promise.try, which
// Chromium provides but Node LTS runtimes used by Vitest may not. The real
// extension always runs in Chromium; this shim only keeps unit tests honest.
if (typeof Promise.try !== 'function') {
  Object.defineProperty(Promise, 'try', {
    value: <T>(callback: (...args: unknown[]) => T, ...args: unknown[]): Promise<T> =>
      new Promise<T>((resolve) => {
        resolve(callback(...args));
      }),
    writable: true,
    configurable: true,
  });
}
