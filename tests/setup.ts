import { afterEach } from 'vitest';
import { BigSliderCard } from '../src/big-slider-card';

const storage = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', {
  configurable: true,
  value: {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, String(value)),
    removeItem: (key: string) => storage.delete(key),
    clear: () => storage.clear(),
  },
});

if (!customElements.get('big-slider-card')) {
  customElements.define('big-slider-card', BigSliderCard);
}

if (!customElements.get('hui-error-card')) {
  customElements.define('hui-error-card', class extends HTMLElement {
    setConfig(config: unknown): void {
      Reflect.set(this, 'config', config);
    }
  });
}

afterEach(() => {
  storage.clear();
  document.body.replaceChildren();
});
