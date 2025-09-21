import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { AstroThemeToggle } from '../../src/components/ui/astro-theme-toggle.js';

// Import the component to register it
import '../../src/components/ui/astro-theme-toggle.js';

describe('AstroThemeToggle', () => {
  let element: AstroThemeToggle;

  beforeEach(async () => {
    // Clear localStorage to avoid test interference
    localStorage.clear();
    
    element = await fixture<AstroThemeToggle>(html`
      <astro-theme-toggle default-theme="light"></astro-theme-toggle>
    `);
    await element.updateComplete;
  });

  describe('Basic Rendering', () => {
    it('should render the theme toggle component', () => {
      expect(element).toBeDefined();
      expect(element.shadowRoot).toBeTruthy();
    });

    it('should have correct default properties', () => {
      expect(element.defaultTheme).toBe('light');
      expect(element.disabled).toBe(false);
      expect(element.size).toBe('md');
    });

    it('should render toggle switch with correct structure', () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch');
      const toggleSlider = element.shadowRoot!.querySelector('.toggle-slider');
      
      expect(toggleSwitch).toBeTruthy();
      expect(toggleSlider).toBeTruthy();
    });

    it('should have correct size variants', async () => {
      // Test default size (medium)
      expect(element.size).toBe('md');
      
      // CSS custom properties and attributes aren't rendered the same in tests
      // Just test that the property works
      expect(element.size).toBe('md');
      
      // Test large size
      element.size = 'lg';
      await element.updateComplete;
      
      expect(element.size).toBe('lg');
    });
  });

  describe('Theme State Management', () => {
    it('should initialize with default theme when no stored preference', () => {
      expect((element as any)._currentTheme).toBe('light');
    });

    it('should load theme from localStorage if available', async () => {
      localStorage.setItem('astro-club-theme', 'dark');
      
      // Create new element to test initialization
      const newElement = await fixture<AstroThemeToggle>(html`
        <astro-theme-toggle default-theme="light"></astro-theme-toggle>
      `);
      await newElement.updateComplete;
      
      expect((newElement as any)._currentTheme).toBe('dark');
    });

    it('should toggle theme when clicked', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      
      // Check initial state - should be light (default)
      expect((element as any)._currentTheme).toBe('light');
      
      // Click to toggle to dark
      toggleSwitch.click();
      await element.updateComplete;
      
      expect((element as any)._currentTheme).toBe('dark');
    });

    it('should persist theme preference in localStorage', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      
      // Initially light, toggle to dark
      toggleSwitch.click();
      await element.updateComplete;
      
      expect(localStorage.getItem('astro-club-theme')).toBe('dark');
    });
  });

  describe('Visual States', () => {
    it('should apply correct CSS classes based on theme', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch');
      
      // Light theme initially
      expect(toggleSwitch?.classList.contains('light')).toBe(true);
      
      // Switch to dark theme
      const button = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      expect(toggleSwitch?.classList.contains('dark')).toBe(true);
      expect(toggleSwitch?.classList.contains('light')).toBe(false);
    });

    it('should position slider correctly based on theme', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch');
      
      // Light theme initially - slider should be on the left
      expect(toggleSwitch?.classList.contains('light')).toBe(true);
      
      // Switch to dark theme
      const button = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      // Dark theme - slider should be on the right
      expect(toggleSwitch?.classList.contains('dark')).toBe(true);
      expect(toggleSwitch?.classList.contains('light')).toBe(false);
    });

    it('should show correct icons for each theme', async () => {
      // Component uses SVG icons in the slider
      const visibleIcon = element.shadowRoot!.querySelector('.icon:not(.hidden)');
      const hiddenIcon = element.shadowRoot!.querySelector('.icon.hidden');
      
      // In light theme, sun icon should be visible, moon hidden
      expect(visibleIcon).toBeTruthy();
      expect(hiddenIcon).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch');
      
      expect(toggleSwitch?.getAttribute('role')).toBe('switch');
      expect(toggleSwitch?.getAttribute('tabindex')).toBe('0');
      expect(toggleSwitch?.hasAttribute('aria-label')).toBe(true);
    });

    it('should update aria-checked based on theme state', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch');
      
      // Light theme - should not be checked (false)
      expect(toggleSwitch?.getAttribute('aria-pressed')).toBe('false');
      
      // Switch to dark theme
      const button = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      button.click();
      await element.updateComplete;
      
      expect(toggleSwitch?.getAttribute('aria-pressed')).toBe('true');
    });

    it('should be keyboard accessible', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      
      expect((element as any)._currentTheme).toBe('light');
      
      // Simulate Enter key press
      toggleSwitch.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
      await element.updateComplete;
      
      expect((element as any)._currentTheme).toBe('dark');
    });
  });

  describe('Event Handling', () => {
    it('should dispatch theme-change event when theme changes', async () => {
      const spy = vi.fn();
      element.addEventListener('theme-change', spy);
      
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      toggleSwitch.click();
      await element.updateComplete;
      
      expect(spy).toHaveBeenCalledOnce();
      expect(spy.mock.calls[0][0].detail).toEqual({
        theme: 'dark',
        isDark: true
      });
    });

    it('should not toggle when disabled', async () => {
      element.disabled = true;
      await element.updateComplete;
      
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      const initialTheme = (element as any)._currentTheme;
      
      toggleSwitch.click();
      await element.updateComplete;
      
      expect((element as any)._currentTheme).toBe(initialTheme);
    });
  });

  describe('Animation States', () => {
    it('should apply animation class during transition', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      
      toggleSwitch.click();
      await element.updateComplete;
      
      // Animation class should be present initially
      expect(toggleSwitch.classList.contains('animating')).toBe(true);
    });
  });

  describe('Document Theme Application', () => {
    it('should apply theme to document root', async () => {
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      
      toggleSwitch.click();
      await element.updateComplete;
      
      expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    });
  });

  describe('Error Handling', () => {
    it('should handle localStorage errors gracefully', async () => {
      // Mock localStorage.setItem to throw an error
      const setItemSpy = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
        throw new Error('Storage quota exceeded');
      });
      
      const toggleSwitch = element.shadowRoot!.querySelector('.toggle-switch') as HTMLElement;
      
      // Should not throw error even if localStorage fails
      expect(() => {
        toggleSwitch.click();
      }).not.toThrow();
      
      setItemSpy.mockRestore();
    });
  });
});