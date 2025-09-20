import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * AstroThemeToggle Component
 * 
 * A toggle switch component for switching between dark and light themes.
 * Persists theme preference in localStorage and applies theme to document.
 * Includes smooth animations and accessibility features.
 */
@customElement('astro-theme-toggle')
export class AstroThemeToggle extends LitElement {
  @property({ type: String, attribute: 'default-theme' }) defaultTheme: 'light' | 'dark' = 'light';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  
  @state() private _currentTheme: 'light' | 'dark' = 'light';
  @state() private _isAnimating = false;

  private _storageKey = 'astro-club-theme';

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center; /* Ensure vertical centering */
      opacity: 0;
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-2px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .theme-toggle {
      font-family: var(--astro-font-family);
    }

    .toggle-wrapper {
      display: inline-flex;
      align-items: center;
      gap: var(--astro-spacing-sm);
      margin-top: var(--astro-spacing-xs);
    }

    .toggle-label {
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-color);
      font-weight: var(--astro-font-weight-medium);
      user-select: none;
      cursor: pointer;
    }

    .toggle-switch {
      position: relative;
      display: inline-block;
      width: var(--switch-width);
      height: var(--switch-height);
      cursor: pointer;
      border-radius: var(--switch-radius);
      background: var(--switch-bg);
      border: 2px solid var(--switch-border);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
    }

    .toggle-switch:hover:not(.disabled) {
      box-shadow: 0 0 0 4px var(--switch-hover-shadow);
    }

    .toggle-switch:focus {
      outline: none;
      box-shadow: 0 0 0 4px var(--switch-focus-shadow);
    }

    .toggle-switch.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .toggle-switch.animating {
      transition-duration: 0.6s;
    }

    .toggle-slider {
      position: absolute;
      top: 2px;
      left: 2px;
      width: var(--slider-size);
      height: var(--slider-size);
      border-radius: 50%;
      background: var(--slider-bg);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--slider-shadow);
      z-index: 2;
    }

    .toggle-switch.dark .toggle-slider {
      transform: translateX(var(--slider-offset));
      background: var(--slider-bg-dark);
    }

    .toggle-switch.animating .toggle-slider {
      transition-duration: 0.6s;
    }

    .icon {
      width: var(--icon-size);
      height: var(--icon-size);
      transition: all 0.3s ease;
      color: var(--icon-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon.hidden {
      display: none;
      opacity: 0;
      transform: scale(0.5) rotate(90deg);
    }

    .background-icons {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .bg-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: var(--bg-icon-size);
      height: var(--bg-icon-size);
      opacity: 0.3;
      transition: all 0.3s ease;
    }

    .bg-icon.sun {
      left: 6px;
      color: #fbbf24;
    }

    .bg-icon.moon {
      right: 6px;
      color: #8b5cf6;
    }

    /* Size variants */
    :host([size="sm"]) {
      --switch-width: 44px;
      --switch-height: 24px;
      --switch-radius: 12px;
      --slider-size: 16px;
      --slider-offset: 16px;
      --icon-size: 10px;
      --bg-icon-size: 8px;
    }

    :host([size="md"]) {
      --switch-width: 52px;
      --switch-height: 28px;
      --switch-radius: 14px;
      --slider-size: 20px;
      --slider-offset: 20px;
      --icon-size: 12px;
      --bg-icon-size: 10px;
    }

    :host([size="lg"]) {
      --switch-width: 60px;
      --switch-height: 32px;
      --switch-radius: 16px;
      --slider-size: 24px;
      --slider-offset: 24px;
      --icon-size: 14px;
      --bg-icon-size: 12px;
    }

    /* Light theme colors */
    :host {
      --switch-bg: linear-gradient(135deg, #e0f2fe 0%, #b3e5fc 100%);
      --switch-border: #b3e5fc;
      --switch-hover-shadow: rgba(59, 130, 246, 0.1);
      --switch-focus-shadow: rgba(59, 130, 246, 0.2);
      --slider-bg: #ffffff;
      --slider-bg-dark: #1f2937;
      --slider-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      --icon-color: #f59e0b;
    }

    /* Dark theme updates */
    :host(.dark-theme) {
      --switch-bg: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      --switch-border: #475569;
      --switch-hover-shadow: rgba(139, 92, 246, 0.1);
      --switch-focus-shadow: rgba(139, 92, 246, 0.2);
      --slider-bg: #374151;
      --slider-bg-dark: #f8fafc;
      --slider-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      --icon-color: #8b5cf6;
    }

    /* Screen reader only text */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .toggle-switch,
      .toggle-slider,
      .icon,
      .bg-icon {
        transition: none;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this._loadThemeFromStorage();
    this._applyTheme();
  }

  private _loadThemeFromStorage() {
    try {
      const savedTheme = localStorage.getItem(this._storageKey) as 'light' | 'dark' | null;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        this._currentTheme = savedTheme;
      } else {
        // Check system preference if no saved theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this._currentTheme = prefersDark ? 'dark' : this.defaultTheme;
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
      this._currentTheme = this.defaultTheme;
    }
  }

  private _saveThemeToStorage() {
    try {
      localStorage.setItem(this._storageKey, this._currentTheme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }

  private _applyTheme() {
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', this._currentTheme);
    document.documentElement.classList.toggle('dark-theme', this._currentTheme === 'dark');
    
    // Update component's class
    this.classList.toggle('dark-theme', this._currentTheme === 'dark');
    
    // Dispatch theme change event
    this.dispatchEvent(new CustomEvent('theme-change', {
      detail: {
        theme: this._currentTheme,
        isDark: this._currentTheme === 'dark'
      },
      bubbles: true,
      composed: true
    }));
  }

  private _toggleTheme() {
    if (this.disabled || this._isAnimating) return;

    this._isAnimating = true;
    this._currentTheme = this._currentTheme === 'light' ? 'dark' : 'light';
    
    this._saveThemeToStorage();
    this._applyTheme();

    // Reset animation state
    setTimeout(() => {
      this._isAnimating = false;
    }, 600);
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._toggleTheme();
    }
  }

  private _handleClick() {
    this._toggleTheme();
  }

  render() {
    const isDark = this._currentTheme === 'dark';
    const themeLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';

    return html`
      <div class="theme-toggle">
        <div class="toggle-wrapper">
          <button
            class="toggle-switch ${isDark ? 'dark' : 'light'} ${this._isAnimating ? 'animating' : ''} ${this.disabled ? 'disabled' : ''}"
            @click=${this._handleClick}
            @keydown=${this._handleKeyDown}
            ?disabled=${this.disabled}
            aria-label=${themeLabel}
            aria-pressed=${isDark}
            role="switch"
            tabindex="0"
          >
            <div class="background-icons">
              <svg class="bg-icon sun" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
              <svg class="bg-icon moon" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </div>
            
            <div class="toggle-slider">
              <svg class="icon ${isDark ? 'hidden' : ''}" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
              <svg class="icon ${!isDark ? 'hidden' : ''}" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
              </svg>
            </div>
            
            <span class="sr-only">${themeLabel}</span>
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-theme-toggle': AstroThemeToggle;
  }
}