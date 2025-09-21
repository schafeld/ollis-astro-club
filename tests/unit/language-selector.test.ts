import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { AstroLanguageSelector } from '../../src/components/ui/astro-language-selector.js';

// Import the component to register it
import '../../src/components/ui/astro-language-selector.js';

describe('AstroLanguageSelector', () => {
  let element: AstroLanguageSelector;

  beforeEach(async () => {
    // Reset DOM and component state
    document.body.innerHTML = '';
    
    // Create fresh element
    element = await fixture<AstroLanguageSelector>(html`
      <astro-language-selector current-language="de"></astro-language-selector>
    `);
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
      const currentLang = element.shadowRoot!.querySelector('.current-language');
      const chevron = element.shadowRoot!.querySelector('.chevron');
      
      expect(button).toBeTruthy();
      expect(currentLang).toBeTruthy();
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
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      // Initially closed
      expect((element as any)._isOpen).toBe(false);
      expect(button.getAttribute('aria-expanded')).toBe('false');
      
      // Click to open
      button.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(true);
      expect(button.getAttribute('aria-expanded')).toBe('true');
      
      // Click to close
      button.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(false);
      expect(button.getAttribute('aria-expanded')).toBe('false');
    });

    it('should show dropdown menu when open', async () => {
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      // Initially closed - no dropdown visible
      let dropdown = element.shadowRoot!.querySelector('.dropdown');
      expect(dropdown?.classList.contains('open')).toBe(false);
      
      // Open dropdown
      button.click();
      await element.updateComplete;
      
      dropdown = element.shadowRoot!.querySelector('.dropdown');
      expect(dropdown?.classList.contains('open')).toBe(true);
    });

    it('should render language options in dropdown', async () => {
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      // Open dropdown
      button.click();
      await element.updateComplete;
      
      const options = element.shadowRoot!.querySelectorAll('.language-option');
      expect(options).toHaveLength(2);
      
      // Check first option (Deutsch)
      const firstOption = options[0];
      expect(firstOption.querySelector('.flag')?.textContent?.trim()).toBe('🇩🇪');
      expect(firstOption.querySelector('.language-name')?.textContent?.trim()).toBe('Deutsch');
      
      // Check second option (English)
      const secondOption = options[1];
      expect(secondOption.querySelector('.flag')?.textContent?.trim()).toBe('🇺🇸');
      expect(secondOption.querySelector('.language-name')?.textContent?.trim()).toBe('English');
    });

    it('should mark current language as selected', async () => {
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      // Open dropdown
      button.click();
      await element.updateComplete;
      
      const options = element.shadowRoot!.querySelectorAll('.language-option');
      const currentOption = Array.from(options).find((option: Element) => 
        option.getAttribute('aria-selected') === 'true'
      ) as HTMLElement;
      
      expect(currentOption).toBeTruthy();
      expect(currentOption?.querySelector('.language-name')?.textContent?.trim()).toBe('Deutsch');
    });
  });

  describe('Language Selection', () => {
    it('should change language when option is clicked', async () => {
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      // Open dropdown
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
      
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      // Open dropdown
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
      
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      // Open dropdown
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
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      
      expect(button?.getAttribute('aria-expanded')).toBe('false');
      
      button.click();
      await element.updateComplete;
      
      expect(button?.getAttribute('aria-expanded')).toBe('true');
    });
  });

  describe('Disabled State', () => {
    it('should not open dropdown when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;
      
      const button = element.shadowRoot!.querySelector('.selector-button') as HTMLButtonElement;
      button.click();
      await element.updateComplete;
      
      expect((element as any)._isOpen).toBe(false);
    });
  });
});