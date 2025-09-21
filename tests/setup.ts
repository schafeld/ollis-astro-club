// Global test setup for Vitest
import { vi } from 'vitest';

// Mock DOM globals that might be needed
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock View Transition API for older browsers
if (!('startViewTransition' in document)) {
  (document as any).startViewTransition = vi.fn().mockImplementation((callback?: () => void) => {
    if (callback) callback();
    return Promise.resolve();
  });
}

// Mock CSS @supports for backdrop-filter
if (typeof CSS === 'undefined') {
  (global as any).CSS = {
    supports: vi.fn().mockImplementation((property: string, _value?: string) => {
      if (property === 'backdrop-filter') return true;
      return false;
    })
  };
} else {
  (CSS as any).supports = vi.fn().mockImplementation((property: string, _value?: string) => {
    if (property === 'backdrop-filter') return true;
    return false;
  });
}