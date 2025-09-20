import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './astro-language-selector.js';
import './astro-theme-toggle.js';

/**
 * AstroNavigation Component
 * 
 * A responsive navigation component for the astronomy club website.
 * Supports mobile hamburger menu, keyboard navigation, language switching, and theme toggle.
 */
@customElement('astro-navigation')
export class AstroNavigation extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, attribute: 'current-path' }) currentPath = '';
  @property({ type: String, attribute: 'current-language' }) currentLanguage = 'de';
  
  private _justToggled = false;

  static styles = css`
    :host {
      display: block;
      position: relative;
      opacity: 0;
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .nav {
      background-color: var(--astro-background-color);
      border-bottom: 1px solid var(--astro-border-color);
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: var(--astro-shadow-sm);
    }

    .nav__container {
      max-width: var(--astro-max-width);
      margin: 0 auto;
      padding: 0 var(--astro-spacing-md);
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 64px;
    }

    .nav__main {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xl);
      flex: 1;
    }

    .nav__controls {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-md);
      min-height: 28px; /* Ensure minimum height for alignment */
    }

    .nav__controls-divider {
      width: 1px;
      height: 20px; /* Reduce height slightly for better proportion */
      background-color: var(--astro-border-color);
      align-self: center; /* Ensure it's centered */
    }

    .nav__logo {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-sm);
      text-decoration: none;
      color: var(--astro-text-color);
      font-weight: var(--astro-font-weight-bold);
      font-size: var(--astro-font-size-lg);
      transition: color var(--astro-transition-normal);
    }

    .nav__logo:hover {
      color: var(--astro-primary-color);
    }

    .nav__logo-icon {
      width: 40px;
      height: 40px;
      border-radius: var(--astro-border-radius-md);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav__logo-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .nav__menu {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-lg);
      list-style: none;
      padding: 0;
      margin: 0;
      position: relative;
    }

    .nav__link {
      text-decoration: none;
      color: var(--astro-text-color);
      font-weight: var(--astro-font-weight-medium);
      padding: var(--astro-spacing-sm) var(--astro-spacing-md);
      border-radius: var(--astro-border-radius-md);
      transition: all var(--astro-transition-normal);
      display: block;
    }

    .nav__link:hover {
      background-color: var(--astro-background-hover);
      color: var(--astro-primary-color);
    }

    .nav__link--active {
      background-color: var(--astro-primary-color);
      color: white;
    }

    .nav__link--active:hover {
      background-color: var(--astro-primary-dark);
    }

    /* Mobile Toggle */
    .nav__toggle {
      display: none;
      background: none;
      border: none;
      font-size: var(--astro-font-size-xl);
      color: var(--astro-text-color);
      cursor: pointer;
      padding: var(--astro-spacing-sm);
      border-radius: var(--astro-border-radius-md);
      transition: all var(--astro-transition-normal);
    }

    .nav__toggle:hover {
      background-color: var(--astro-background-hover);
      color: var(--astro-primary-color);
    }

    .nav__toggle:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .nav__controls {
        gap: var(--astro-spacing-sm);
      }

      .nav__controls-divider {
        display: none;
      }

      :host .nav__menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--astro-background-color);
        border-top: 1px solid var(--astro-border-color);
        box-shadow: var(--astro-shadow-lg);
        flex-direction: column;
        gap: 0;
        padding: var(--astro-spacing-md);
        display: none;
      }

      :host .nav__menu--open {
        display: flex !important;
      }

      .nav__toggle {
        display: block;
      }

      .nav__item {
        width: 100%;
      }

      .nav__link {
        width: 100%;
        text-align: center;
        padding: var(--astro-spacing-md);
        border-radius: var(--astro-border-radius-md);
      }
    }

    /* Focus management */
    .nav__link:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }
  `;

  render() {
    const menuClasses = this.open ? 'nav__menu nav__menu--open' : 'nav__menu';
    const isGerman = this.currentLanguage === 'de';
    const baseUrl = isGerman ? '' : '/en'; // German uses root, English uses /en

    return html`
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav__container">
          <div class="nav__main">
            <a href=${baseUrl + '/'} class="nav__logo">
              <div class="nav__logo-icon">
                <img src="/assets/logo-astro-club-300x300.png" alt="Olli's Astro Club Logo" />
              </div>
              <span>Olli's Astro Club</span>
            </a>

            <button 
              class="nav__toggle" 
              @click=${this._toggleMenu}
              aria-expanded=${this.open ? 'true' : 'false'}
              aria-controls="main-menu"
              aria-label="Toggle navigation menu"
            >
              ${this.open ? '✕' : '☰'}
            </button>

            <ul class=${menuClasses} id="main-menu" @click=${this._handleMenuClick}>
              <li class="nav__item">
                <a href=${baseUrl + '/'} class="nav__link ${this._isActive('/') ? 'nav__link--active' : ''}">
                  ${isGerman ? 'Home' : 'Home'}
                </a>
              </li>
              <li class="nav__item">
                <a href=${baseUrl + '/club.html'} class="nav__link ${this._isActive('/club') ? 'nav__link--active' : ''}">
                  ${isGerman ? 'Der Club' : 'The Club'}
                </a>
              </li>
              <li class="nav__item">
                <a href=${baseUrl + '/meetings.html'} class="nav__link ${this._isActive('/meetings') ? 'nav__link--active' : ''}">
                  ${isGerman ? 'Treffen' : 'Events'}
                </a>
              </li>
              <li class="nav__item">
                <a href=${baseUrl + '/contact.html'} class="nav__link ${this._isActive('/contact') ? 'nav__link--active' : ''}">
                  ${isGerman ? 'Kontakt' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          <div class="nav__controls">
            <astro-language-selector
              default-language="de"
              current-language=${this.currentLanguage}
              @language-change=${this._handleLanguageChange}
            ></astro-language-selector>
            
            <div class="nav__controls-divider"></div>
            
            <astro-theme-toggle
              default-theme="light"
              size="md"
              @theme-change=${this._handleThemeChange}
            ></astro-theme-toggle>
          </div>
        </div>
      </nav>
    `;
  }

  private _handleLanguageChange(event: CustomEvent) {
    const { newLanguage } = event.detail;
    this.currentLanguage = newLanguage;
    
    // Update the URL to reflect the language change
    const currentPath = window.location.pathname;
    
    let newPath = '';
    
    if (newLanguage === 'de') {
      // German - use root paths
      if (currentPath.startsWith('/en/')) {
        // Convert from English path to German (root)
        newPath = currentPath.replace('/en/', '/');
      } else if (currentPath.startsWith('/de/')) {
        // Convert from German folder to root
        newPath = currentPath.replace('/de/', '/');
      } else {
        // Already at root (German)
        newPath = currentPath;
      }
    } else {
      // English - use /en/ paths
      if (currentPath.startsWith('/en/')) {
        // Already in English
        newPath = currentPath;
      } else if (currentPath.startsWith('/de/')) {
        // Convert from German folder to English
        newPath = currentPath.replace('/de/', '/en/');
      } else {
        // Convert from root (German) to English
        newPath = '/en' + currentPath;
      }
    }
    
    if (newPath && newPath !== currentPath) {
      window.location.href = newPath;
    }
    
    // Dispatch navigation language change event
    this.dispatchEvent(new CustomEvent('astro-nav-language-change', {
      detail: { language: newLanguage, oldPath: currentPath, newPath },
      bubbles: true,
      composed: true
    }));
  }

  private _handleThemeChange(event: CustomEvent) {
    // Theme toggle component handles theme persistence automatically
    // We just need to dispatch a navigation-level event if needed
    this.dispatchEvent(new CustomEvent('astro-nav-theme-change', {
      detail: event.detail,
      bubbles: true,
      composed: true
    }));
  }

  private _toggleMenu(event: Event) {
    event.stopPropagation(); // Prevent event bubbling
    this._justToggled = true;
    this.open = !this.open;
    this.requestUpdate(); // Force re-render
    
    // Reset the flag after a short delay
    setTimeout(() => {
      this._justToggled = false;
    }, 10);
    
    this.dispatchEvent(new CustomEvent('astro-nav-toggle', {
      detail: { open: this.open },
      bubbles: true
    }));
  }

  private _handleMenuClick(event: Event) {
    const target = event.target as Element;
    if (target.tagName === 'A') {
      // Close mobile menu when a link is clicked
      this.open = false;
    }
  }

  private _isActive(path: string): boolean {
    // Use currentPath property if set, otherwise fall back to window location
    const currentPage = this.currentPath || window.location.pathname;
    
    if (path === '/') {
      return currentPage === '/' || currentPage === '/index.html' || 
             currentPage === '/en/' || currentPage === '/en/index.html';
    }
    
    // Handle both with and without .html extension
    const pathWithHtml = path.includes('.html') ? path : `${path}.html`;
    
    // Check for exact matches (root German paths)
    if (currentPage === path || currentPage === pathWithHtml) {
      return true;
    }
    
    // Check for English paths
    if (currentPage === `/en${path}` || currentPage === `/en${pathWithHtml}`) {
      return true;
    }
    
    // Check for path starting with the base path (for sub-pages)
    return currentPage.startsWith(path + '/') || currentPage.startsWith(`/en${path}/`);
  }

  // Close menu when clicking outside (for mobile)
  connectedCallback() {
    super.connectedCallback();
    
    // Detect current language from URL
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/en/')) {
      this.currentLanguage = 'en';
    } else {
      this.currentLanguage = 'de'; // Default to German for root paths
    }
    
    document.addEventListener('click', this._handleDocumentClick.bind(this));
    document.addEventListener('keydown', this._handleKeyDown.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleDocumentClick.bind(this));
    document.removeEventListener('keydown', this._handleKeyDown.bind(this));
  }

  private _handleDocumentClick(event: Event) {
    // Don't close if we just toggled the menu
    if (this._justToggled) {
      return;
    }
    
    const target = event.target as Element;
    // Only close if clicking outside the navigation and menu is open
    if (!this.contains(target) && this.open) {
      this.open = false;
      this.requestUpdate();
    }
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
      this.open = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-navigation': AstroNavigation;
  }
}