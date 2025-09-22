import { test, expect } from '@playwright/test';

// Helper function to click navigation links that works on both desktop and mobile
async function clickNavLink(page: any, href: string) {
  // Check if we're on a mobile screen
  const isNarrow = await page.evaluate(() => window.innerWidth <= 768);
  
  if (isNarrow) {
    // Mobile: open the menu first if it's not open
    const menu = page.locator('.nav__menu');
    const isMenuOpen = await menu.isVisible();
    
    if (!isMenuOpen) {
      const toggleButton = page.locator('.nav__toggle');
      await toggleButton.click();
      // Wait for menu to be visible
      await expect(menu).toBeVisible();
    }
  }
  
  // Now click the link
  await page.click(`.nav__menu a[href="${href}"]`);
}

// Helper function to ensure menu is open on mobile
async function ensureMenuOpen(page: any) {
  const menu = page.locator('.nav__menu');
  const isMenuVisible = await menu.isVisible();
  
  if (!isMenuVisible) {
    const toggleButton = page.locator('.nav__toggle');
    await toggleButton.click();
    await expect(menu).toBeVisible();
  }
}

test.describe('Navigation Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Go to German page directly to avoid auto-redirect delays in tests
    await page.goto('/de/', { waitUntil: 'networkidle' });
  });

  test.describe('Desktop Navigation', () => {
    test('should render main navigation with all menu items', async ({ page }) => {
      // Check that navigation is visible
      const nav = page.locator('astro-navigation');
      await expect(nav).toBeVisible();

      // Ensure menu is open (important for mobile)
      await ensureMenuOpen(page);

      // Check all menu items are present
      const menuItems = page.locator('.nav__link');
      await expect(menuItems).toHaveCount(4);

      // Check menu item texts (German by default)
      await expect(menuItems.nth(0)).toHaveText('Home');
      await expect(menuItems.nth(1)).toHaveText('Der Club');
      await expect(menuItems.nth(2)).toHaveText('Treffen');
      await expect(menuItems.nth(3)).toHaveText('Kontakt');
    });

    test('should navigate to different pages correctly', async ({ page }) => {
      // Navigate to Club page
      await clickNavLink(page, '/de/club.html');
      await expect(page).toHaveURL(/\/de\/club\.html$/);
      
      // Navigate to Meetings page
      await clickNavLink(page, '/de/meetings.html');
      await expect(page).toHaveURL(/\/de\/meetings\.html$/);
      
      // Navigate to Contact page
      await clickNavLink(page, '/de/contact.html');
      await expect(page).toHaveURL(/\/de\/contact\.html$/);
      
      // Navigate back to Home
      await clickNavLink(page, '/de/');
      await expect(page).toHaveURL(/\/de\/$/);
      
      // Verify navigation structure is correct
      const clubLink = page.locator('.nav__link[href="/de/club.html"]');
      await expect(clubLink).toContainText('Der Club');
      
      const meetingsLink = page.locator('.nav__link[href="/de/meetings.html"]');
      await expect(meetingsLink).toContainText('Treffen');
      
      const contactLink = page.locator('.nav__link[href="/de/contact.html"]');
      await expect(contactLink).toContainText('Kontakt');
    });

    test('should show logo and navigate to home when clicked', async ({ page }) => {
      // Go to a different page first
      await page.goto('/de/club.html');
      
      // Click logo to return home
      await page.click('.nav__logo');
      await expect(page).toHaveURL('/de/');
      
      // Check logo image is present
      const logoImg = page.locator('.nav__logo-icon img');
      await expect(logoImg).toBeVisible();
      await expect(logoImg).toHaveAttribute('src', '/assets/logo-astro-club-300x300.png');
    });

    test('should show appropriate toggle button based on viewport', async ({ page }) => {
      const toggleButton = page.locator('.nav__toggle');
      const viewport = page.viewportSize();
      
      if (viewport && viewport.width <= 768) {
        // Mobile viewport - toggle should be visible
        await expect(toggleButton).toBeVisible();
      } else {
        // Desktop viewport - toggle should be hidden
        await expect(toggleButton).not.toBeVisible();
      }
    });
  });

  test.describe('Mobile Navigation', () => {
    test.use({ viewport: { width: 375, height: 667 } }); // iPhone size

    test('should show mobile toggle button', async ({ page }) => {
      const toggleButton = page.locator('.nav__toggle');
      await expect(toggleButton).toBeVisible();
      await expect(toggleButton).toHaveText('☰');
    });

    test('should hide navigation menu by default on mobile', async ({ page }) => {
      const menu = page.locator('.nav__menu');
      await expect(menu).not.toBeVisible();
    });

    test('should toggle mobile menu when hamburger is clicked', async ({ page }) => {
      const toggleButton = page.locator('.nav__toggle');
      const menu = page.locator('.nav__menu');

      // Initially closed
      await expect(menu).not.toBeVisible();
      await expect(toggleButton).toHaveText('☰');

      // Click to open
      await toggleButton.click();
      await expect(menu).toBeVisible();
      await expect(toggleButton).toHaveText('✕');

      // Click to close
      await toggleButton.click();
      await expect(menu).not.toBeVisible();
      await expect(toggleButton).toHaveText('☰');
    });

    test('should navigate correctly from mobile menu', async ({ page }) => {
      const toggleButton = page.locator('.nav__toggle');
      
      // Open mobile menu
      await toggleButton.click();
      
      // Click on Club link in navigation menu (more specific selector)
      await clickNavLink(page, '/de/club.html');
      
      // Should navigate and close menu
      await expect(page).toHaveURL(/\/de\/club\.html$/);
      await expect(page.locator('.nav__menu')).not.toBeVisible();
    });

    test('should close mobile menu when clicking outside', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const toggleButton = page.locator('.nav__toggle');
      const menu = page.locator('.nav__menu');
      
      // Open mobile menu
      await toggleButton.click();
      await expect(menu).toBeVisible();
      
      // Click outside the menu using coordinates instead of element
      await page.click('body', { position: { x: 200, y: 400 } });
      await expect(menu).not.toBeVisible();
    });

    test('should handle mobile menu with keyboard navigation', async ({ page }) => {
      const toggleButton = page.locator('.nav__toggle');
      
      // Focus and activate toggle with keyboard
      await toggleButton.focus();
      await page.keyboard.press('Enter');
      
      await expect(page.locator('.nav__menu')).toBeVisible();
      
      // Navigate through menu items with Tab
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');
      
      // Press Enter on focused item
      await page.keyboard.press('Enter');
      
      // Should navigate (exact page depends on focus, but menu should close)
      await expect(page.locator('.nav__menu')).not.toBeVisible();
    });
  });

  test.describe('Language Switching', () => {
    test('should switch between German and English', async ({ page }) => {
      // Check initial German state (use navigation menu link to avoid footer duplicate)
      await expect(page.locator('.nav__menu a[href="/de/club.html"]')).toContainText('Der Club');
      
      // Click language selector
      const languageSelector = page.locator('astro-language-selector .selector-button');
      await languageSelector.click();
      
      // Wait for dropdown to appear
      await expect(page.locator('astro-language-selector .dropdown')).toBeVisible();
      
      // Click English option
      await page.click('astro-language-selector .language-option[aria-selected="false"]');
      
      // Should navigate to English version
      await expect(page).toHaveURL('/en/');
      await expect(page.locator('.nav__menu a[href="/en/club.html"]')).toContainText('The Club');
      
      // Switch back to German
      await languageSelector.click();
      await page.waitForSelector('astro-language-selector .dropdown.open');
      
      // Click the German option by text content
      await page.click('astro-language-selector .language-option:has-text("Deutsch")');
      
      // Wait for navigation to complete
      await page.waitForURL('/de/');
      
      // Should navigate back to German version
      await expect(page).toHaveURL('/de/');
      await expect(page.locator('.nav__menu a[href="/de/club.html"]')).toContainText('Der Club');
    });

    test('should maintain correct URLs for different languages', async ({ page }) => {
      const languageSelector = page.locator('astro-language-selector .selector-button');
      
      // Go to Club page in German
      await clickNavLink(page, '/de/club.html');
      await expect(page).toHaveURL(/\/de\/club\.html$/);
      
      // Switch to English
      await languageSelector.click();
      await page.click('astro-language-selector .language-option[aria-selected="false"]');
      
      // Should be on English Club page
      await expect(page).toHaveURL(/\/en\/club\.html$/);
    });

    test('should display correct language selector state', async ({ page }) => {
      // Initial state should show German
      const currentLang = page.locator('astro-language-selector .current-language');
      await expect(currentLang).toContainText('Deutsch');
      await expect(currentLang).toContainText('🇩🇪');
      
      // Switch to English
      await page.locator('astro-language-selector .selector-button').click();
      await page.click('astro-language-selector .language-option[aria-selected="false"]');
      
      // Should show English
      await expect(currentLang).toContainText('English');
      await expect(currentLang).toContainText('🇺🇸');
    });
  });

  test.describe('Theme Toggle', () => {
    test('should toggle between light and dark themes', async ({ page }) => {
      // Check theme toggling functionality
      const html = page.locator('html');
      const themeToggle = page.locator('astro-theme-toggle button');
      
      // Get initial theme
      const initialTheme = await html.getAttribute('data-theme') || 'light';
      
      // Click theme toggle
      await themeToggle.click();
      await page.waitForTimeout(300);
      
      // Should switch to opposite theme
      const newTheme = await html.getAttribute('data-theme');
      expect(newTheme).not.toBe(initialTheme);
      expect(['light', 'dark']).toContain(newTheme);
      
      // Verify the toggle button is still functional
      await expect(themeToggle).toBeVisible();
      await expect(themeToggle).toBeEnabled();
    });

    test('should persist theme preference across page navigation', async ({ page }) => {
      // Ensure we start with a known theme state
      const html = page.locator('html');
      const initialTheme = await html.getAttribute('data-theme') || 'light';
      const themeToggle = page.locator('astro-theme-toggle button');
      
      // If not already dark, switch to dark
      if (initialTheme !== 'dark') {
        await themeToggle.click();
        await expect(html).toHaveAttribute('data-theme', 'dark');
      }
      
      // Navigate to different page
      await clickNavLink(page, '/de/club.html');
      await expect(page).toHaveURL(/\/de\/club\.html$/);
      
      // Theme should still be dark
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    });

    test('should be keyboard accessible', async ({ page }) => {
      const themeToggle = page.locator('astro-theme-toggle button');
      const html = page.locator('html');
      
      // Get initial theme
      const initialTheme = await html.getAttribute('data-theme') || 'light';
      
      // Focus and activate with keyboard
      await themeToggle.focus();
      await page.keyboard.press('Enter');
      await page.waitForTimeout(300);
      
      // Should toggle theme
      const newTheme = await html.getAttribute('data-theme');
      expect(newTheme).not.toBe(initialTheme);
      expect(['light', 'dark']).toContain(newTheme);
      
      // Verify button is keyboard accessible
      await expect(themeToggle).toBeFocused();
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper ARIA attributes', async ({ page }) => {
      // Navigation should have proper role and label
      const nav = page.locator('nav');
      await expect(nav).toHaveAttribute('role', 'navigation');
      await expect(nav).toHaveAttribute('aria-label', 'Main navigation');
      
      // Mobile toggle should have proper ARIA attributes
      await page.setViewportSize({ width: 375, height: 667 });
      const toggle = page.locator('.nav__toggle');
      await expect(toggle).toHaveAttribute('aria-controls', 'main-menu');
      await expect(toggle).toHaveAttribute('aria-expanded', 'false');
      
      // Open menu and check updated attributes
      await toggle.click();
      await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    });

    test('should support keyboard navigation', async ({ page }) => {
      // Tab through navigation items
      await page.keyboard.press('Tab'); // Focus skip link or first nav item
      
      // Should be able to navigate through menu items
      const firstLink = page.locator('.nav__link').first();
      await firstLink.focus();
      
      // Press Enter to navigate
      await page.keyboard.press('Enter');
      
      // Should navigate (URL could be /de/, /de/club.html, /de/meetings.html, /de/contact.html)
      await expect(page.url()).toMatch(/\/de\/(club|meetings|contact)?(\.html)?$/);
    });

    test('should have proper focus management', async ({ page }) => {
      // Focus should be visible on interactive elements
      const logo = page.locator('.nav__logo');
      await logo.focus();
      await expect(logo).toBeFocused();
      
      const themeToggle = page.locator('astro-theme-toggle .toggle-switch');
      await themeToggle.focus();
      await expect(themeToggle).toBeFocused();
    });
  });

  test.describe('Visual Consistency', () => {
    test('should maintain consistent styling across pages', async ({ page }) => {
      // Check navigation styling on home page
      const nav = page.locator('nav');
      const navBg = await nav.evaluate(el => getComputedStyle(el).backgroundColor);
      
      // Navigate to different page
      await clickNavLink(page, '/de/club.html');
      
      // Navigation styling should be consistent
      const navBgOnClub = await nav.evaluate(el => getComputedStyle(el).backgroundColor);
      expect(navBg).toBe(navBgOnClub);
    });

    test('should show navigation structure correctly', async ({ page }) => {
      // Open mobile menu if on mobile viewport
      const isNarrow = await page.evaluate(() => window.innerWidth <= 768);
      if (isNarrow) {
        await page.click('.nav__toggle');
        await page.waitForSelector('.nav__menu--open');
      }
      
      // Check that navigation links exist
      await expect(page.locator('.nav__link[href="/de/"]')).toContainText('Home');
      
      // Navigate and check structure
      await clickNavLink(page, '/de/club.html');
      
      // Open mobile menu again if needed
      if (isNarrow) {
        await page.click('.nav__toggle');
        await page.waitForSelector('.nav__menu--open');
      }
      
      // Verify we navigated correctly
      await expect(page).toHaveURL(/\/de\/club\.html$/);
      
      // Check that navigation link exists with correct text
      await expect(page.locator('.nav__link[href="/de/club.html"]')).toContainText('Der Club');
    });
  });
});