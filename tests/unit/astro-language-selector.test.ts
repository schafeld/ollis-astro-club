import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { AstroLanguageSelector } from '../../src/components/ui/astro-language-selector.js';

// Import the component to register it
import '../../src/components/ui/astro-language-selector.js';

describe('AstroLanguageSelector', () => {
  let element: AstroLanguageSelector;
  let mockLocalStorage: any;

  beforeEach(async () => {
    // Reset DOM and component state
    document.body.innerHTML = '';
    
    // Mock localStorage
    mockLocalStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    };
    
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
      writable: true
    });
    
    // Mock navigator.languages
    Object.defineProperty(navigator, 'languages', {
      value: ['en-US', 'en'],
      writable: true
    });
    
    Object.defineProperty(navigator, 'language', {
      value: 'en-US',
      writable: true
    });
    
    // Create fresh element
    element = await fixture<AstroLanguageSelector>(html`
      <astro-language-selector current-language="de"></astro-language-selector>
    `);
  });

  afterEach(() => {
    // Clean up any event listeners
    if (element && element['_handleDocumentClick']) {
      document.removeEventListener('click', element['_handleDocumentClick']);
      document.removeEventListener('keydown', element['_handleDocumentKeydown']);
    }
    
    // Reset mocks
    vi.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('should render the language selector component', () => {
      expect(element).toBeDefined();
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should have correct default properties', () => {
      expect(element.currentLanguage).toBe('de');
      expect(element.disabled).toBe(false);
    });

    it('should render selector button with correct structure', () => {
      const button = element.shadowRoot!.querySelector('.selector-button');
      const currentLanguage = element.shadowRoot!.querySelector('.current-language');
      const chevron = element.shadowRoot!.querySelector('.chevron');
      
      expect(button).toBeTruthy();
      expect(currentLanguage).toBeTruthy();
      expect(chevron).toBeTruthy();
    });

    it('should display current language correctly', () => {
      const flag = element.shadowRoot!.querySelector('.flag');
      const langName = element.shadowRoot!.querySelector('.language-name');
      
      expect(flag?.textContent?.trim()).toBe('🇩🇪');
      expect(langName?.textContent?.trim()).toBe('Deutsch');
    });
  });

  describe('Language Data', () => {
    it('should have correct language options', () => {
      // Access private property for testing
      const languages = (element as any)._languages;
      expect(languages).toHaveLength(2);
      expect(languages[0]).toEqual({ code: 'de', name: 'Deutsch', flag: '🇩🇪' });
      expect(languages[1]).toEqual({ code: 'en', name: 'English', flag: '🇺🇸' });
    });

    it('should update display when current language changes', async () => {
      element.currentLanguage = 'en';
      await element.updateComplete;
      
      const flag = element.shadowRoot!.querySelector('.flag');
      const langName = element.shadowRoot!.querySelector('.language-name');
      
      expect(flag?.textContent?.trim()).toBe('🇺🇸');
      expect(langName?.textContent?.trim()).toBe('English');
    });
  });

  describe('Dropdown Functionality', () => {
    it('should toggle dropdown when button is clicked', async () => {
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      
      // Initially closed
      expect((element as any)._isOpen).toBe(false);
      
      button.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(true);
      
      button.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(false);
    });

    it('should show dropdown menu when open', async () => {
      // Initially closed - no dropdown visible
      let dropdown = element.shadowRoot!.querySelector('.dropdown');
      expect(dropdown?.classList.contains('open')).toBe(false);
      
      // Open dropdown
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      dropdown = element.shadowRoot!.querySelector('.dropdown');
      expect(dropdown?.classList.contains('open')).toBe(true);
    });

    it('should render language options in dropdown', async () => {
      // Open dropdown first
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      const options = element.shadowRoot!.querySelectorAll('.language-option');
      expect(options).toHaveLength(2);
      
      // Check first option (Deutsch)
      const firstOption = options[0] as HTMLElement;
      expect(firstOption.querySelector('.flag')?.textContent?.trim()).toBe('🇩🇪');
      expect(firstOption.querySelector('.language-name')?.textContent?.trim()).toBe('Deutsch');
      
      // Check second option (English)
      const secondOption = options[1] as HTMLElement;
      expect(secondOption.querySelector('.flag')?.textContent?.trim()).toBe('🇺🇸');
      expect(secondOption.querySelector('.language-name')?.textContent?.trim()).toBe('English');
    });

    it('should mark current language as selected', async () => {
      // Open dropdown
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      const currentOption = element.shadowRoot!.querySelector(
        '.language-option[aria-selected="true"]'
      );
      
      expect(currentOption).toBeTruthy();
      expect(currentOption?.querySelector('.language-name')?.textContent?.trim()).toBe('Deutsch');
    });
  });

  describe('Language Selection', () => {
    it('should change language when option is clicked', async () => {
      // Open dropdown
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      // Click on English option (the one that's NOT selected)
      const englishOption = element.shadowRoot!.querySelector('[aria-selected="false"]') as HTMLElement;
      englishOption.click();
      await element.updateComplete;
      
      expect(element.currentLanguage).toBe('en');
      expect(element.shadowRoot!.querySelector('.language-name')?.textContent?.trim()).toBe('English');
    });

    it('should dispatch language-change event when language changes', async () => {
      const spy = vi.fn();
      element.addEventListener('language-change', spy);
      
      // Open dropdown
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      // Click on English option
      const englishOption = element.shadowRoot!.querySelector('[aria-selected="false"]') as HTMLElement;
      englishOption.click();
      await element.updateComplete;
      
      expect(spy).toHaveBeenCalledWith(
        expect.objectContaining({
          detail: expect.objectContaining({
            newLanguage: 'en',
            oldLanguage: 'de'
          })
        })
      );
    });

    it('should not change language when clicking current language', async () => {
      const spy = vi.fn();
      element.addEventListener('language-change', spy);
      
      // Open dropdown
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      // Click on current language (German)
      const germanOption = element.shadowRoot!.querySelector('[aria-selected="true"]') as HTMLElement;
      germanOption.click();
      await element.updateComplete;
      
      expect(spy).not.toHaveBeenCalled();
      expect(element.currentLanguage).toBe('de');
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const button = element.shadowRoot!.querySelector('.selector-button');
      const dropdown = element.shadowRoot!.querySelector('.dropdown');
      
      expect(button?.getAttribute('aria-haspopup')).toBe('listbox');
      expect(button?.getAttribute('aria-expanded')).toBe('false');
      expect(button?.getAttribute('aria-label')).toBe('Select language');
      expect(dropdown?.getAttribute('role')).toBe('listbox');
    });

    it('should update aria-expanded when dropdown state changes', async () => {
      const button = element.shadowRoot!.querySelector('.selector-button');
      
      expect(button?.getAttribute('aria-expanded')).toBe('false');
      
      button?.dispatchEvent(new MouseEvent('click'));
      await element.updateComplete;
      
      expect(button?.getAttribute('aria-expanded')).toBe('true');
    });

    it('should have proper aria-label for screen readers', () => {
      const button = element.shadowRoot!.querySelector('.selector-button');
      
      expect(button?.getAttribute('aria-label')).toBe('Select language');
    });
  });

  describe('Disabled State', () => {
    it('should not open dropdown when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;
      
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(false);
    });
  });

  describe('Click Outside Behavior', () => {
    it('should close dropdown when clicking outside', async () => {
      // Open dropdown
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(true);
      
      // Simulate click outside
      document.body.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(false);
    });
  });

  describe('LocalStorage Integration', () => {
    it('should save language preference to localStorage when language changes', async () => {
      // Mock window.location for navigation
      const mockLocation = { 
        href: '', 
        pathname: '/de/'
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      const englishOption = element.shadowRoot!.querySelector('.language-option[aria-selected="false"]') as HTMLElement;
      
      englishOption.click();
      await element.updateComplete;
      
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('preferred-language', 'en');
    });

    it('should load language preference from localStorage on initialization', async () => {
      mockLocalStorage.getItem.mockReturnValue('en');
      
      const newElement = await fixture<AstroLanguageSelector>(html`
        <astro-language-selector current-language=""></astro-language-selector>
      `);
      
      expect(newElement.currentLanguage).toBe('en');
    });

    it('should detect browser language when no localStorage preference exists', async () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      
      Object.defineProperty(navigator, 'languages', {
        value: ['de-DE', 'de', 'en'],
        writable: true
      });
      
      const newElement = await fixture<AstroLanguageSelector>(html`
        <astro-language-selector></astro-language-selector>
      `);
      
      expect(newElement.currentLanguage).toBe('de');
    });

    it('should fallback to default language when browser language is not supported', async () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      
      Object.defineProperty(navigator, 'languages', {
        value: ['fr-FR', 'fr', 'es'],
        writable: true
      });
      
      const newElement = await fixture<AstroLanguageSelector>(html`
        <astro-language-selector default-language="de"></astro-language-selector>
      `);
      
      expect(newElement.currentLanguage).toBe('de');
    });

    it('should handle localStorage errors gracefully', async () => {
      // Create a fresh mock that throws on getItem
      const throwingLocalStorage = {
        getItem: vi.fn().mockImplementation(() => {
          throw new Error('LocalStorage not available');
        }),
        setItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn()
      };
      
      Object.defineProperty(window, 'localStorage', {
        value: throwingLocalStorage,
        writable: true
      });
      
      const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      
      const newElement = await fixture<AstroLanguageSelector>(html`
        <astro-language-selector default-language="en" current-language=""></astro-language-selector>
      `);
      
      expect(consoleSpy).toHaveBeenCalledWith('LocalStorage not available:', expect.any(Error));
      expect(newElement.currentLanguage).toBe('en'); // Should fallback to browser/default
      
      consoleSpy.mockRestore();
    });
  });

  describe('Navigation Integration', () => {
    it('should navigate to correct language URL when language changes', async () => {
      const mockLocation = { 
        href: '', 
        pathname: '/de/club'
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      const englishOption = element.shadowRoot!.querySelector('.language-option[aria-selected="false"]') as HTMLElement;
      
      englishOption.click();
      await element.updateComplete;
      
      expect(mockLocation.href).toBe('/en/club');
    });

    it('should handle root path navigation correctly', async () => {
      const mockLocation = { 
        href: '', 
        pathname: '/'
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      const englishOption = element.shadowRoot!.querySelector('.language-option[aria-selected="false"]') as HTMLElement;
      
      englishOption.click();
      await element.updateComplete;
      
      expect(mockLocation.href).toBe('/en/');
    });

    it('should use view transitions when available', async () => {
      const mockStartViewTransition = vi.fn();
      Object.defineProperty(document, 'startViewTransition', {
        value: mockStartViewTransition,
        writable: true
      });

      const mockLocation = { 
        href: '', 
        pathname: '/de/'
      };
      Object.defineProperty(window, 'location', {
        value: mockLocation,
        writable: true
      });

      const englishOption = element.shadowRoot!.querySelector('.language-option[aria-selected="false"]') as HTMLElement;
      
      englishOption.click();
      await element.updateComplete;
      
      expect(mockStartViewTransition).toHaveBeenCalled();
    });
  });

  describe('Browser Language Detection', () => {
    it('should correctly parse language codes from navigator.languages', async () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      
      Object.defineProperty(navigator, 'languages', {
        value: ['en-GB', 'en-US', 'fr'],
        writable: true
      });
      
      const newElement = await fixture<AstroLanguageSelector>(html`
        <astro-language-selector current-language=""></astro-language-selector>
      `);
      
      expect(newElement.currentLanguage).toBe('en');
    });

    it('should handle navigator.language when languages array is not available', async () => {
      mockLocalStorage.getItem.mockReturnValue(null);
      
      Object.defineProperty(navigator, 'languages', {
        value: undefined,
        writable: true
      });
      
      Object.defineProperty(navigator, 'language', {
        value: 'de-AT',
        writable: true
      });
      
      const newElement = await fixture<AstroLanguageSelector>(html`
        <astro-language-selector></astro-language-selector>
      `);
      
      expect(newElement.currentLanguage).toBe('de');
    });
  });
});