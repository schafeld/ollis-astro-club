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
  @property({ type: String }) currentPath = '';

  static styles = css`
    :host {
      display: block;
      position: relative;
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
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: var(--astro-font-size-lg);
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
      .nav__menu {
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
        transform: translateY(-100%);
        opacity: 0;
        visibility: hidden;
        transition: all var(--astro-transition-normal);
      }

      .nav__menu--open {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
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
    const menuClasses = [
      'nav__menu',
      this.open ? 'nav__menu--open' : ''
    ].filter(Boolean).join(' ');

    return html`
      <nav class="nav" role="navigation" aria-label="Main navigation">
        <div class="nav__container">
          <a href="/" class="nav__logo" @click=${this._handleLogoClick}>
            <div class="nav__logo-icon">🌟</div>
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

          <ul class=${menuClasses} id="main-menu">
            <li class="nav__item">
              <a href="/" class="nav__link ${this._isActive('/') ? 'nav__link--active' : ''}" @click=${this._handleLinkClick}>
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="/club" class="nav__link ${this._isActive('/club') ? 'nav__link--active' : ''}" @click=${this._handleLinkClick}>
                Der Club
              </a>
            </li>
            <li class="nav__item">
              <a href="/meetings" class="nav__link ${this._isActive('/meetings') ? 'nav__link--active' : ''}" @click=${this._handleLinkClick}>
                Treffen
              </a>
            </li>
            <li class="nav__item">
              <a href="/observations" class="nav__link ${this._isActive('/observations') ? 'nav__link--active' : ''}" @click=${this._handleLinkClick}>
                Beobachtungen
              </a>
            </li>
            <li class="nav__item">
              <a href="/tutorials" class="nav__link ${this._isActive('/tutorials') ? 'nav__link--active' : ''}" @click=${this._handleLinkClick}>
                Tutorials
              </a>
            </li>
            <li class="nav__item">
              <a href="/contact" class="nav__link ${this._isActive('/contact') ? 'nav__link--active' : ''}" @click=${this._handleLinkClick}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  private _toggleMenu() {
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('astro-nav-toggle', {
      detail: { open: this.open },
      bubbles: true
    }));
  }

  private _handleLinkClick(event: Event) {
    this.open = false; // Close mobile menu when link is clicked
    
    const target = event.target as HTMLAnchorElement;
    this.currentPath = target.getAttribute('href') || '';
    
    this.dispatchEvent(new CustomEvent('astro-nav-navigate', {
      detail: { path: this.currentPath },
      bubbles: true
    }));
  }

  private _handleLogoClick() {
    this.open = false;
    this.currentPath = '/';
  }

  private _isActive(path: string): boolean {
    if (path === '/') {
      return this.currentPath === '/' || this.currentPath === '';
    }
    return this.currentPath.startsWith(path);
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
    const target = event.target as Element;
    if (!this.contains(target) && this.open) {
      this.open = false;
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