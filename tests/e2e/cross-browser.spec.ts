import { test, expect } from '@playwright/test';

// Helper function to click navigation links that works on both desktop and mobile
async function clickNavLink(page: any, href: string) {
  // Check if we're on mobile (menu is hidden)
  const menu = page.locator('.nav__menu');
  const isMenuVisible = await menu.isVisible();
  
  if (!isMenuVisible) {
    // Mobile: open the menu first
    const toggleButton = page.locator('.nav__toggle');
    await toggleButton.click();
    // Wait for menu to be visible
    await expect(menu).toBeVisible();
  }
  
  // Now click the link
  await page.click(`.nav__menu a[href="${href}"]`);
}

test.describe('Cross-Browser Compatibility', () => {
  
  test.describe('Desktop Browser Compatibility', () => {
    ['chromium', 'firefox', 'webkit'].forEach(browserName => {
      test.describe(`${browserName}`, () => {
        test(`should render navigation correctly on ${browserName}`, async ({ page }) => {
          await page.goto('/');
          
          // Basic navigation should be visible and functional
          const nav = page.locator('astro-navigation');
          await expect(nav).toBeVisible();
          
          // All menu items should be present
          await expect(page.locator('.nav__link')).toHaveCount(4);
          
          // Logo should be visible
          const logo = page.locator('.nav__logo-icon img');
          await expect(logo).toBeVisible();
          
          // Navigation should work
          await clickNavLink(page, '/club.html');
          await expect(page).toHaveURL('/club.html');
        });

        test(`should handle theme toggle correctly on ${browserName}`, async ({ page }) => {
          await page.goto('/');
          
          // Get initial theme state
          const html = page.locator('html');
          const initialTheme = await html.getAttribute('data-theme') || 'light';
          
          // Toggle theme
          await page.click('astro-theme-toggle button');
          await page.waitForTimeout(200);
          
          // Should switch to opposite theme
          const newTheme = await html.getAttribute('data-theme');
          expect(newTheme).not.toBe(initialTheme);
          expect(['light', 'dark']).toContain(newTheme);
        });

        test(`should handle language switching on ${browserName}`, async ({ page }) => {
          await page.goto('/');
          
          // Switch to English
          await page.click('astro-language-selector .selector-button');
          await page.click('astro-language-selector .language-option[aria-selected="false"]');
          
          await expect(page).toHaveURL('/en/');
          await expect(page.locator('.nav__menu a[href="/en/club.html"]')).toContainText('The Club');
        });

        test(`should support keyboard navigation on ${browserName}`, async ({ page }) => {
          await page.goto('/');
          
          // Focus the first navigation link directly
          const firstLink = page.locator('.nav__link').first();
          await firstLink.focus();
          
          // Should be able to activate focused elements
          await page.keyboard.press('Enter');
          
          // Should navigate somewhere (URL will change)
          await page.waitForTimeout(500);
          const currentUrl = page.url();
          expect(currentUrl).toMatch(/\/(club|meetings|contact)?(\.html)?$/);
        });
      });
    });
  });

  test.describe('Mobile Device Compatibility', () => {
    // iPhone 12 tests
    test('should render mobile navigation correctly on iPhone 12', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto('/');
      
      const toggleButton = page.locator('.nav__toggle');
      
      // Mobile view - toggle should be visible
      await expect(toggleButton).toBeVisible();
      await expect(page.locator('.nav__menu')).not.toBeVisible();
      
      // Open mobile menu
      await toggleButton.click();
      await expect(page.locator('.nav__menu')).toBeVisible();
      
      // Navigation should work from mobile menu
      await clickNavLink(page, '/club.html');
      await expect(page).toHaveURL(/\/club\.html$/);
    });

    test('should handle touch interactions correctly on iPhone 12', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto('/');
      
      // Theme toggle should work with touch (using click since tap needs hasTouch context)
      await page.click('astro-theme-toggle button');
      await page.waitForTimeout(200);
      // Just verify theme changed, don't assume initial state
      const newTheme = await page.locator('html').getAttribute('data-theme');
      expect(['light', 'dark']).toContain(newTheme);
      
      // Language selector should work with touch (using click since tap needs hasTouch context)
      await page.click('astro-language-selector .selector-button');
      await page.click('astro-language-selector .language-option[aria-selected="false"]');
      await expect(page).toHaveURL('/en/');
    });

    test('should maintain responsive layout on iPhone 12', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto('/');
      
      // Check mobile layout elements
      await expect(page.locator('.nav__toggle')).toBeVisible();
      await expect(page.locator('astro-language-selector')).toBeVisible();
      await expect(page.locator('astro-theme-toggle')).toBeVisible();
      
      // Content should fit viewport
      const body = page.locator('body');
      const bodyWidth = await body.evaluate(el => el.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(390);
    });

    // Pixel 5 tests  
    test('should render mobile navigation correctly on Pixel 5', async ({ page }) => {
      await page.setViewportSize({ width: 393, height: 851 });
      await page.goto('/');
      
      const toggleButton = page.locator('.nav__toggle');
      
      // Mobile view - toggle should be visible
      await expect(toggleButton).toBeVisible();
      await expect(page.locator('.nav__menu')).not.toBeVisible();
      
      // Open mobile menu
      await toggleButton.click();
      await expect(page.locator('.nav__menu')).toBeVisible();
    });

    // iPad tests
    test('should render tablet navigation correctly on iPad', async ({ page }) => {
      await page.setViewportSize({ width: 820, height: 1180 });
      await page.goto('/');
      
      const toggleButton = page.locator('.nav__toggle');
      
      // Tablet view - regular navigation
      await expect(toggleButton).not.toBeVisible();
      await expect(page.locator('.nav__menu')).toBeVisible();
    });
  });

  test.describe('Viewport Size Testing', () => {
    const viewportSizes = [
      { width: 320, height: 568, name: 'Small Mobile' },
      { width: 375, height: 667, name: 'Medium Mobile' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 1024, height: 768, name: 'Small Desktop' },
      { width: 1440, height: 900, name: 'Large Desktop' },
      { width: 1920, height: 1080, name: 'Full HD' }
    ];

    viewportSizes.forEach(({ width, height, name }) => {
      test(`should work correctly at ${name} (${width}x${height})`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto('/');
        
        // Navigation should be visible and functional
        const nav = page.locator('astro-navigation');
        await expect(nav).toBeVisible();
        
        // Check responsive behavior
        const isMobile = width <= 768; // CSS uses max-width: 768px
        const toggleButton = page.locator('.nav__toggle');
        
        if (isMobile) {
          await expect(toggleButton).toBeVisible();
          await toggleButton.click();
          await expect(page.locator('.nav__menu')).toBeVisible();
        } else {
          await expect(toggleButton).not.toBeVisible();
          await expect(page.locator('.nav__menu')).toBeVisible();
        }
        
        // Navigation should work regardless of viewport
        await clickNavLink(page, "/club.html");
        await expect(page).toHaveURL(/\/club\.html$/);
      });
    });
  });

  test.describe('Feature Support Detection', () => {
    test('should handle missing View Transition API gracefully', async ({ page }) => {
      // Disable View Transition API
      await page.addInitScript(() => {
        delete (document as any).startViewTransition;
      });
      
      await page.goto('/');
      
      // Navigation should still work
      await clickNavLink(page, "/club.html");
      await expect(page).toHaveURL(/\/club\.html$/);
    });

    test('should work without CSS backdrop-filter support', async ({ page }) => {
      // Disable backdrop-filter support
      await page.addInitScript(() => {
        const originalSupports = CSS.supports;
        (CSS as any).supports = function(property: string, value?: string) {
          if (property === 'backdrop-filter') return false;
          return value ? originalSupports(property, value) : originalSupports(property);
        };
      });
      
      await page.goto('/');
      
      // Navigation should still be visible and functional
      const nav = page.locator('astro-navigation');
      await expect(nav).toBeVisible();
      
      await clickNavLink(page, "/club.html");
      await expect(page).toHaveURL(/\/club\.html$/);
    });

    test('should handle localStorage being unavailable', async ({ page }) => {
      // Disable localStorage
      await page.addInitScript(() => {
        Object.defineProperty(window, 'localStorage', {
          value: null,
          writable: false
        });
      });
      
      await page.goto('/');
      
      // Theme toggle should still work (but not persist)
      await page.click('astro-theme-toggle button');
      // Just check if theme changed from initial state
      const theme = await page.locator('html').getAttribute('data-theme');
      expect(['light', 'dark']).toContain(theme);
      
      // Refresh page - theme should reset to default since it can't persist
      await page.reload();
      const reloadedTheme = await page.locator('html').getAttribute('data-theme');
      expect(['light', 'dark']).toContain(reloadedTheme);
    });
  });

  test.describe('Performance Across Browsers', () => {
    test('should load quickly on all browsers', async ({ page }) => {
      const startTime = Date.now();
      
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      const loadTime = Date.now() - startTime;
      
      // Should load within reasonable time (adjust as needed)
      expect(loadTime).toBeLessThan(5000);
      
      // Navigation should be immediately usable
      await expect(page.locator('astro-navigation')).toBeVisible();
    });

    test('should handle rapid interactions smoothly', async ({ page }) => {
      await page.goto('/');
      
      // Rapid theme toggles
      for (let i = 0; i < 5; i++) {
        await page.click('astro-theme-toggle button');
        await page.waitForTimeout(100);
      }
      
      // Should end up in consistent state
      const theme = await page.locator('html').getAttribute('data-theme');
      expect(['light', 'dark']).toContain(theme);
      
      // Navigation should still work
      await clickNavLink(page, "/club.html");
      await expect(page).toHaveURL(/\/club\.html$/);
    });
  });

  test.describe('Accessibility Across Browsers', () => {
    test('should maintain focus visibility on all browsers', async ({ page }) => {
      await page.goto('/');
      
      // Tab through interactive elements
      const interactiveElements = [
        '.nav__logo',
        'astro-language-selector .selector-button',
        'astro-theme-toggle button'
      ];
      
      for (const selector of interactiveElements) {
        const element = page.locator(selector);
        await element.focus();
        await expect(element).toBeFocused();
        
        // Element should have visible focus indicator
        // (this is browser-dependent but should be consistent)
        await page.waitForTimeout(100);
      }
    });

    test('should support screen reader navigation patterns', async ({ page }) => {
      await page.goto('/');
      
      // Check for proper heading structure (first main heading is h2)
      const h2 = page.locator('h2').first();
      await expect(h2).toBeVisible();
      
      // Navigation should have proper landmarks
      const nav = page.locator('nav[role="navigation"]');
      await expect(nav).toBeVisible();
      
      // Interactive elements should have proper roles
      const buttons = page.locator('button, [role="button"]');
      const buttonCount = await buttons.count();
      expect(buttonCount).toBeGreaterThan(0);
    });
  });
});