import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

describe('Language Detection and Redirect Logic', () => {
  let mockLocalStorage: any;
  let mockLocation: any;
  let mockSessionStorage: any;

  beforeEach(() => {
    // Reset DOM
    document.head.innerHTML = '';
    document.body.innerHTML = '';

    // Mock localStorage
    mockLocalStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    };

    // Mock sessionStorage
    mockSessionStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    };

    // Mock location
    mockLocation = {
      href: '',
      host: 'ollis-astro-club.com',
      search: ''
    };

    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true
    });

    Object.defineProperty(window, 'sessionStorage', {
      value: mockSessionStorage,
      writable: true
    });

    Object.defineProperty(window, 'location', {
      value: mockLocation,
      writable: true
    });

    // Mock navigator
    Object.defineProperty(navigator, 'languages', {
      value: ['en-US', 'en'],
      writable: true
    });

    Object.defineProperty(navigator, 'language', {
      value: 'en-US',
      writable: true
    });

    // Reset document.referrer
    Object.defineProperty(document, 'referrer', {
      value: '',
      writable: true
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Language Detection', () => {
    it('should detect German from browser language', () => {
      Object.defineProperty(navigator, 'languages', {
        value: ['de-DE', 'de', 'en'],
        writable: true
      });

      // Simulate the browser language detection function
      const detectBrowserLanguage = () => {
        const languages = navigator.languages || [navigator.language];
        const supportedLanguages = ['de', 'en'];
        
        for (const lang of languages) {
          const normalizedLang = lang.toLowerCase().split('-')[0];
          if (supportedLanguages.includes(normalizedLang)) {
            return normalizedLang;
          }
        }
        
        return 'de'; // default
      };

      expect(detectBrowserLanguage()).toBe('de');
    });

    it('should detect English from browser language', () => {
      Object.defineProperty(navigator, 'languages', {
        value: ['en-US', 'en'],
        writable: true
      });

      const detectBrowserLanguage = () => {
        const languages = navigator.languages || [navigator.language];
        const supportedLanguages = ['de', 'en'];
        
        for (const lang of languages) {
          const normalizedLang = lang.toLowerCase().split('-')[0];
          if (supportedLanguages.includes(normalizedLang)) {
            return normalizedLang;
          }
        }
        
        return 'de'; // default
      };

      expect(detectBrowserLanguage()).toBe('en');
    });

    it('should fallback to default language for unsupported languages', () => {
      Object.defineProperty(navigator, 'languages', {
        value: ['fr-FR', 'es-ES'],
        writable: true
      });

      const detectBrowserLanguage = () => {
        const languages = navigator.languages || [navigator.language];
        const supportedLanguages = ['de', 'en'];
        
        for (const lang of languages) {
          const normalizedLang = lang.toLowerCase().split('-')[0];
          if (supportedLanguages.includes(normalizedLang)) {
            return normalizedLang;
          }
        }
        
        return 'de'; // default
      };

      expect(detectBrowserLanguage()).toBe('de');
    });
  });

  describe('Language Preference Storage', () => {
    it('should get language from localStorage if available', () => {
      mockLocalStorage.getItem.mockReturnValue('en');

      const getPreferredLanguage = () => {
        try {
          const stored = localStorage.getItem('preferred-language');
          if (stored && ['de', 'en'].includes(stored)) {
            return stored;
          }
        } catch (e) {
          console.warn('LocalStorage not available:', e);
        }
        
        return 'de'; // fallback to browser detection in real implementation
      };

      expect(getPreferredLanguage()).toBe('en');
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('preferred-language');
    });

    it('should save language preference to localStorage', () => {
      const saveLanguagePreference = (language: string) => {
        try {
          localStorage.setItem('preferred-language', language);
        } catch (e) {
          console.warn('Could not save language preference:', e);
        }
      };

      saveLanguagePreference('de');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('preferred-language', 'de');
    });

    it('should handle localStorage errors gracefully', () => {
      mockLocalStorage.getItem.mockImplementation(() => {
        throw new Error('LocalStorage not available');
      });

      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

      const getPreferredLanguage = () => {
        try {
          const stored = localStorage.getItem('preferred-language');
          if (stored && ['de', 'en'].includes(stored)) {
            return stored;
          }
        } catch (e) {
          console.warn('LocalStorage not available:', e);
        }
        
        return 'de';
      };

      const result = getPreferredLanguage();
      expect(consoleSpy).toHaveBeenCalledWith('LocalStorage not available:', expect.any(Error));
      expect(result).toBe('de');

      consoleSpy.mockRestore();
    });
  });

  describe('Auto-redirect Logic', () => {
    it('should auto-redirect for external visitors', () => {
      Object.defineProperty(document, 'referrer', {
        value: 'https://google.com',
        writable: true
      });

      mockSessionStorage.getItem.mockReturnValue(null);
      mockLocation.search = '';

      const shouldAutoRedirect = () => {
        const referrer = document.referrer;
        const currentHost = window.location.host;
        
        if (referrer && referrer.includes(currentHost)) {
          return false;
        }
        
        if (window.location.search.includes('no-redirect')) {
          return false;
        }
        
        if (sessionStorage.getItem('language-selection-shown')) {
          return false;
        }
        
        return true;
      };

      expect(shouldAutoRedirect()).toBe(true);
    });

    it('should not auto-redirect for internal navigation', () => {
      Object.defineProperty(document, 'referrer', {
        value: 'https://ollis-astro-club.com/de/club',
        writable: true
      });

      const shouldAutoRedirect = () => {
        const referrer = document.referrer;
        const currentHost = window.location.host;
        
        if (referrer && referrer.includes(currentHost)) {
          return false;
        }
        
        if (window.location.search.includes('no-redirect')) {
          return false;
        }
        
        if (sessionStorage.getItem('language-selection-shown')) {
          return false;
        }
        
        return true;
      };

      expect(shouldAutoRedirect()).toBe(false);
    });

    it('should not auto-redirect when no-redirect parameter is present', () => {
      mockLocation.search = '?no-redirect=true';

      const shouldAutoRedirect = () => {
        const referrer = document.referrer;
        const currentHost = window.location.host;
        
        if (referrer && referrer.includes(currentHost)) {
          return false;
        }
        
        if (window.location.search.includes('no-redirect')) {
          return false;
        }
        
        if (sessionStorage.getItem('language-selection-shown')) {
          return false;
        }
        
        return true;
      };

      expect(shouldAutoRedirect()).toBe(false);
    });

    it('should not auto-redirect when language selection was already shown', () => {
      mockSessionStorage.getItem.mockReturnValue('true');

      const shouldAutoRedirect = () => {
        const referrer = document.referrer;
        const currentHost = window.location.host;
        
        if (referrer && referrer.includes(currentHost)) {
          return false;
        }
        
        if (window.location.search.includes('no-redirect')) {
          return false;
        }
        
        if (sessionStorage.getItem('language-selection-shown')) {
          return false;
        }
        
        return true;
      };

      expect(shouldAutoRedirect()).toBe(false);
    });
  });

  describe('URL Generation', () => {
    it('should generate correct German URL', () => {
      const redirectToLanguage = (language: string, page = '') => {
        const basePath = `/${language}/`;
        return basePath + page;
      };

      expect(redirectToLanguage('de')).toBe('/de/');
      expect(redirectToLanguage('de', 'club')).toBe('/de/club');
    });

    it('should generate correct English URL', () => {
      const redirectToLanguage = (language: string, page = '') => {
        const basePath = `/${language}/`;
        return basePath + page;
      };

      expect(redirectToLanguage('en')).toBe('/en/');
      expect(redirectToLanguage('en', 'meetings')).toBe('/en/meetings');
    });
  });
});