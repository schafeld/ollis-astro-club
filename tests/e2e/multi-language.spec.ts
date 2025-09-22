import { test, expect } from '@playwright/test';

test.describe('Multi-language functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Clear storage to reset any existing preferences
    await page.evaluate(() => {
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch (e) {
        // Ignore localStorage errors in some browser contexts
        console.log('localStorage not available:', e);
      }
    });
  });

  test('should show language selection page when auto-redirect is disabled', async ({ page }) => {
    // Set browser language to something neutral to avoid auto-redirect
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['fr-FR'] // Unsupported language to force manual selection
      });
    });
    
    // Disable auto-redirect by making it look like internal navigation
    await page.goto('/de/'); // Establish internal referrer
    await page.goto('/'); // Now navigate to root
    
    // Should display language selection page
    await expect(page.locator('h1')).toContainText("Olli's Astro Club");
    await expect(page.locator('p')).toContainText('Choose your language / Wähle deine Sprache');
    
    // Should have language buttons
    await expect(page.locator('.language-btn').first()).toContainText('Deutsch');
    await expect(page.locator('.language-btn').last()).toContainText('English');
  });

  test('should auto-redirect to German for German browser language', async ({ page }) => {
    // Set browser language to German
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['de-DE', 'de', 'en']
      });
    });
    
    await page.goto('/');
    
    // Should auto-redirect to German page
    await page.waitForURL('**/de/**');
    await expect(page.url()).toContain('/de/');
  });

  test('should redirect to German when German is manually selected', async ({ page }) => {
    // Set browser language to something neutral to avoid auto-redirect
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['fr-FR'] // Unsupported language to force manual selection
      });
    });
    
    // First establish internal referrer to show language selection
    await page.goto('/de/');
    await page.goto('/');
    
    // Click German language button
    await page.click('text=Deutsch');
    
    // Should redirect to German page
    await page.waitForURL('**/de/**');
    await expect(page.url()).toContain('/de/');
    
    // Should display German content
    await expect(page.locator('h2').first()).toContainText('Gemeinsam die Wunder des Universums entdecken');
  });

  test('should redirect to English when English is manually selected', async ({ page }) => {
    // Set browser language to something neutral to avoid auto-redirect
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['fr-FR'] // Unsupported language to force manual selection
      });
    });
    
    // First establish internal referrer to show language selection
    await page.goto('/de/');
    await page.goto('/');
    
    // Click English language button
    await page.click('text=English');
    
    // Should redirect to English page
    await page.waitForURL('**/en/**');
    await expect(page.url()).toContain('/en/');
    
    // Should display English content
    await expect(page.locator('h2').first()).toContainText('Exploring the wonders of the universe together');
  });

  test('should save language preference when manually selected', async ({ page }) => {
    // Set browser language to something neutral to avoid auto-redirect
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['fr-FR'] // Unsupported language to force manual selection
      });
    });
    
    // First establish internal referrer to show language selection
    await page.goto('/de/');
    await page.goto('/');
    
    // Click German language button
    await page.click('text=Deutsch');
    await page.waitForURL('**/de/**');
    
    // Check that preference was saved
    const savedLanguage = await page.evaluate(() => {
      return localStorage.getItem('preferred-language');
    });
    
    expect(savedLanguage).toBe('de');
  });

  test('should auto-redirect based on localStorage preference', async ({ page }) => {
    // Set language preference
    await page.addInitScript(() => {
      localStorage.setItem('preferred-language', 'en');
    });
    
    await page.goto('/');
    
    // Should auto-redirect to English page
    await page.waitForURL('**/en/**');
    await expect(page.url()).toContain('/en/');
  });

  test('should detect browser language and auto-redirect', async ({ page }) => {
    // Set browser language to German
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['de-DE', 'de', 'en']
      });
    });
    
    await page.goto('/');
    
    // Should auto-redirect to German page
    await page.waitForURL('**/de/**');
    await expect(page.url()).toContain('/de/');
  });

  test('should handle direct navigation to root URL', async ({ page }) => {
    // Navigate directly to root to test behavior
    await page.goto('/');
    
    // Should either show language selection page or auto-redirect based on preferences
    // We'll wait for either the language selection page or a language-specific page
    try {
      // Try to wait for language selection page first
      await expect(page.locator('h1')).toContainText("Olli's Astro Club", { timeout: 2000 });
    } catch {
      // If not found, check if we were redirected to a language page
      await page.waitForURL(/\/(de|en)\//);
      expect(page.url()).toMatch(/\/(de|en)\//);
    }
  });

  test('should switch languages using language selector', async ({ page }) => {
    await page.goto('/de/');
    
    // Open language selector
    await page.click('astro-language-selector');
    
    // Wait for dropdown to be visible
    await page.waitForSelector('.dropdown.open', { state: 'visible' });
    
    // Click English option
    await page.click('.language-option[aria-selected="false"]');
    
    // Should navigate to English page
    await page.waitForURL('**/en/**');
    await expect(page.url()).toContain('/en/');
    
    // Check that preference was updated
    const savedLanguage = await page.evaluate(() => {
      return localStorage.getItem('preferred-language');
    });
    
    expect(savedLanguage).toBe('en');
  });

  test('should preserve path when switching languages', async ({ page }) => {
    await page.goto('/de/club.html');
    
    // Debug: Check initial URL
    console.log('Initial URL:', page.url());
    
    // Check if language selector exists
    const languageSelector = page.locator('astro-language-selector');
    await expect(languageSelector).toBeVisible();
    
    // Open language selector
    await page.click('astro-language-selector');
    
    // Wait for dropdown
    await page.waitForSelector('.dropdown.open', { state: 'visible' });
    
    // Debug: Check available language options
    const languageOptions = await page.locator('.language-option').count();
    console.log('Number of language options found:', languageOptions);
    
    // Click English option (the one that's not currently selected)
    const englishOption = page.locator('.language-option').filter({ hasText: 'English' });
    await expect(englishOption).toBeVisible();
    await englishOption.click();
    
    // Should navigate to English club page
    await page.waitForURL('**/en/club.html');
    await expect(page.url()).toContain('/en/club.html');
  });

  test('should handle unsupported browser languages', async ({ page }) => {
    // Set browser language to unsupported language
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['fr-FR', 'es-ES']
      });
    });
    
    await page.goto('/');
    
    // Should auto-redirect to default language (German)
    await page.waitForURL('**/de/**');
    await expect(page.url()).toContain('/de/');
  });

  test('should show loading state during manual redirect', async ({ page }) => {
    // Set browser language to something neutral to avoid auto-redirect
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'languages', {
        get: () => ['fr-FR'] // Unsupported language to force manual selection
      });
    });
    
    // First establish internal referrer to show language selection
    await page.goto('/de/');
    await page.goto('/');
    
    // Click German language button
    await page.click('text=Deutsch');
    
    // Should briefly show loading state
    await expect(page.locator('.loading')).toBeVisible();
    await expect(page.locator('.spinner')).toBeVisible();
    await expect(page.locator('text=Redirecting...')).toBeVisible();
  });

  test('should handle localStorage errors gracefully', async ({ page }) => {
    // Mock localStorage to throw errors
    await page.addInitScript(() => {
      localStorage.getItem = () => {
        throw new Error('LocalStorage not available');
      };
    });
    
    await page.goto('/');
    
    // Should still function and redirect based on browser language
    await page.waitForURL(/\/(de|en)\//);
    expect(page.url()).toMatch(/\/(de|en)\//);
  });
});