import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * AstroNavigation Component
 * 
 * A responsive navigation component for the astronomy club website.
 * Supports mobile hamburger menu and keyboard navigation.
 */
@customElement('astro-navigation')
export class AstroNavigation extends LitElement {
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, attribute: 'current-path' }) currentPath = '';
  
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
      width: 100%;
      box-sizing: border-box;
    }

    .nav__logo {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-sm);
      text-decoration: none;
      color: var(--astro-text-color);
      font-size: var(--astro-font-size-lg);
      font-weight: var(--astro-font-weight-bold);
    }

    .nav__logo:hover {
      color: var(--astro-primary-color);
    }

    .nav__logo-icon {
      width: 32px;
      height: 32px;
      background: var(--astro-primary-color);
      border-radius: var(--astro-border-radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: var(--astro-font-size-lg);
      overflow: hidden;
    }

    .nav__logo-icon img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--astro-border-radius-md);
    }

    /* Desktop Navigation */
    .nav__menu {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: var(--astro-spacing-lg);
      align-items: center;
    }

    .nav__item {
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

    return html`
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav__container">
          <a href="/" class="nav__logo">
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
              <a href="/" class="nav__link ${this._isActive('/') ? 'nav__link--active' : ''}">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="/club.html" class="nav__link ${this._isActive('/club') ? 'nav__link--active' : ''}">
                Der Club
              </a>
            </li>
            <li class="nav__item">
              <a href="/meetings.html" class="nav__link ${this._isActive('/meetings') ? 'nav__link--active' : ''}">
                Treffen
              </a>
            </li>
            <li class="nav__item">
              <a href="/observations" class="nav__link ${this._isActive('/observations') ? 'nav__link--active' : ''}">
                Beobachtungen
              </a>
            </li>
            <li class="nav__item">
              <a href="/tutorials" class="nav__link ${this._isActive('/tutorials') ? 'nav__link--active' : ''}">
                Tutorials
              </a>
            </li>
            <li class="nav__item">
              <a href="/contact.html" class="nav__link ${this._isActive('/contact') ? 'nav__link--active' : ''}">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
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
    
    console.log(`_isActive check: path=${path}, currentPath=${this.currentPath}, currentPage=${currentPage}`);
    
    if (path === '/') {
      return currentPage === '/' || currentPage === '/index.html';
    }
    
    // Handle both with and without .html extension
    const pathWithHtml = path.includes('.html') ? path : `${path}.html`;
    return currentPage === path || currentPage === pathWithHtml || currentPage.startsWith(path + '/');
  }

  // Close menu when clicking outside (for mobile)
  connectedCallback() {
    super.connectedCallback();
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