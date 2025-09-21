import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { AstroNavigation } from '../../src/components/ui/astro-navigation.js';

// Import the component to register it
import '../../src/components/ui/astro-navigation.js';

describe('AstroNavigation', () => {
  let element: AstroNavigation;

  beforeEach(async () => {
    // Reset DOM and component state
    document.body.innerHTML = '';
    
    // Create fresh element
    element = await fixture(html`
      <astro-navigation current-path="/" current-language="de"></astro-navigation>
    `);
    
    // Wait for component to be fully rendered
    await element.updateComplete;
  });

  describe('Basic Rendering', () => {
    it('should render the navigation component', () => {
      expect(element).toBeInstanceOf(AstroNavigation);
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should have correct default properties', () => {
      expect(element.open).toBe(false);
      expect(element.currentPath).toBe('/');
      expect(element.currentLanguage).toBe('de');
    });

    it('should render logo with correct attributes', () => {
      const logo = element.shadowRoot!.querySelector('.nav__logo');
      const logoImg = element.shadowRoot!.querySelector('.nav__logo-icon img');
      
      expect(logo).toBeTruthy();
      expect(logo?.getAttribute('href')).toBe('/');
      expect(logoImg?.getAttribute('src')).toBe('/assets/logo-astro-club-300x300.png');
      expect(logoImg?.getAttribute('alt')).toBe('Olli\'s Astro Club Logo');
    });

    it('should render navigation menu with correct structure', () => {
      const menu = element.shadowRoot!.querySelector('.nav__menu');
      const menuItems = element.shadowRoot!.querySelectorAll('.nav__item');
      
      expect(menu).toBeTruthy();
      expect(menuItems).toHaveLength(4); // Home, Der Club, Treffen, Kontakt
    });

    it('should render mobile toggle button', () => {
      const toggle = element.shadowRoot!.querySelector('.nav__toggle');
      
      expect(toggle).toBeTruthy();
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');
      expect(toggle?.getAttribute('aria-controls')).toBe('main-menu');
      expect(toggle?.textContent?.trim()).toBe('☰');
    });
  });

  describe('Language Support', () => {
    it('should render German menu items by default', () => {
      const menuLinks = element.shadowRoot!.querySelectorAll('.nav__link');
      const linkTexts = Array.from(menuLinks).map(link => link.textContent?.trim());
      
      expect(linkTexts).toEqual(['Home', 'Der Club', 'Treffen', 'Kontakt']);
    });

    it('should render English menu items when language is en', async () => {
      element.currentLanguage = 'en';
      await element.updateComplete;
      
      const menuLinks = element.shadowRoot!.querySelectorAll('.nav__link');
      const linkTexts = Array.from(menuLinks).map(link => link.textContent?.trim());
      
      expect(linkTexts).toEqual(['Home', 'The Club', 'Events', 'Contact']);
    });

    it('should generate correct URLs for German language', () => {
      const menuLinks = element.shadowRoot!.querySelectorAll('.nav__link');
      const hrefs = Array.from(menuLinks).map(link => link.getAttribute('href'));
      
      expect(hrefs).toEqual(['/', '/club.html', '/meetings.html', '/contact.html']);
    });

    it('should generate correct URLs for English language', async () => {
      element.currentLanguage = 'en';
      await element.updateComplete;
      
      const menuLinks = element.shadowRoot!.querySelectorAll('.nav__link');
      const hrefs = Array.from(menuLinks).map(link => link.getAttribute('href'));
      
      expect(hrefs).toEqual(['/en/', '/en/club.html', '/en/meetings.html', '/en/contact.html']);
    });
  });

  describe('Active State Management', () => {
    it('should mark home link as active for root path', () => {
      element.currentPath = '/';
      
      // We need to access the private method for testing
      const isHomeActive = (element as any)._isActive('/');
      expect(isHomeActive).toBe(true);
    });

    it('should mark club link as active for club path', () => {
      element.currentPath = '/club.html';
      
      const isClubActive = (element as any)._isActive('/club');
      expect(isClubActive).toBe(true);
    });

    it('should not mark any link as active for unknown path', () => {
      element.currentPath = '/unknown.html';
      
      const isHomeActive = (element as any)._isActive('/');
      const isClubActive = (element as any)._isActive('/club');
      
      expect(isHomeActive).toBe(false);
      expect(isClubActive).toBe(false);
    });
  });

  describe('Mobile Menu Toggle', () => {
    it('should toggle menu open state when button is clicked', async () => {
      const toggleButton = element.shadowRoot!.querySelector('.nav__toggle') as HTMLButtonElement;
      
      expect(element.open).toBe(false);
      expect(toggleButton.textContent?.trim()).toBe('☰');
      
      // Click to open
      toggleButton.click();
      await element.updateComplete;
      
      expect(element.open).toBe(true);
      expect(toggleButton.textContent?.trim()).toBe('✕');
      expect(toggleButton.getAttribute('aria-expanded')).toBe('true');
      
      // Click to close
      toggleButton.click();
      await element.updateComplete;
      
      expect(element.open).toBe(false);
      expect(toggleButton.textContent?.trim()).toBe('☰');
      expect(toggleButton.getAttribute('aria-expanded')).toBe('false');
    });

    it('should apply correct CSS classes based on open state', async () => {
      const menu = element.shadowRoot!.querySelector('.nav__menu');
      
      // Initially closed
      expect(menu?.classList.contains('nav__menu--open')).toBe(false);
      
      // Open the menu
      element.open = true;
      await element.updateComplete;
      
      const openMenu = element.shadowRoot!.querySelector('.nav__menu');
      expect(openMenu?.classList.contains('nav__menu--open')).toBe(true);
    });

    it('should close menu when clicking on a menu item', async () => {
      // Open the menu first
      element.open = true;
      await element.updateComplete;
      
      const firstLink = element.shadowRoot!.querySelector('.nav__link') as HTMLElement;
      
      expect(element.open).toBe(true);
      
      // Simulate clicking on a menu item
      firstLink.click();
      
      // The menu should close (this tests the _handleMenuClick method)
      expect(element.open).toBe(false);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const nav = element.shadowRoot!.querySelector('nav');
      const menu = element.shadowRoot!.querySelector('.nav__menu');
      const toggle = element.shadowRoot!.querySelector('.nav__toggle');
      
      expect(nav?.getAttribute('role')).toBe('navigation');
      expect(nav?.getAttribute('aria-label')).toBe('Main navigation');
      expect(menu?.getAttribute('id')).toBe('main-menu');
      expect(toggle?.getAttribute('aria-controls')).toBe('main-menu');
      expect(toggle?.getAttribute('aria-label')).toBe('Toggle navigation menu');
    });

    it('should update aria-expanded when menu state changes', async () => {
      const toggle = element.shadowRoot!.querySelector('.nav__toggle');
      
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');
      
      element.open = true;
      await element.updateComplete;
      
      expect(toggle?.getAttribute('aria-expanded')).toBe('true');
    });
  });

  describe('Event Handling', () => {
    it('should dispatch language change event', async () => {
      const languageSelector = element.shadowRoot!.querySelector('astro-language-selector');
      const spy = vi.fn();
      
      element.addEventListener('astro-nav-language-change', spy);
      
      // Simulate language change event from child component
      const languageChangeEvent = new CustomEvent('language-change', {
        detail: { newLanguage: 'en' }
      });
      
      languageSelector?.dispatchEvent(languageChangeEvent);
      
      expect(spy).toHaveBeenCalled();
    });

    it('should dispatch theme change event', async () => {
      const themeToggle = element.shadowRoot!.querySelector('astro-theme-toggle');
      const spy = vi.fn();
      
      element.addEventListener('astro-nav-theme-change', spy);
      
      // Simulate theme change event from child component
      const themeChangeEvent = new CustomEvent('theme-change', {
        detail: { theme: 'dark' }
      });
      
      themeToggle?.dispatchEvent(themeChangeEvent);
      
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('Responsive Behavior', () => {
    it('should have mobile-specific styles in CSS', () => {
      const styles = (element.constructor as any).styles;
      const cssText = styles.toString();
      
      // Check for mobile media query
      expect(cssText).toContain('@media (max-width: 768px)');
      
      // Check for mobile-specific classes
      expect(cssText).toContain('.nav__menu--open');
      expect(cssText).toContain('.nav__toggle');
    });
  });
});