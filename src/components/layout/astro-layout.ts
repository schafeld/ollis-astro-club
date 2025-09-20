import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * AstroLayout Component
 * 
 * Main layout component that provides consistent structure for all pages.
 * Includes navigation, main content area, and footer.
 */
@customElement('astro-layout')
export class AstroLayout extends LitElement {
  @property({ type: String }) pageTitle = '';
  @property({ type: String }) currentPath = '';

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      opacity: 0;
      animation: fadeIn 0.3s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .layout__main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .layout__content {
      flex: 1;
      max-width: var(--astro-max-width);
      margin: 0 auto;
      padding: var(--astro-spacing-xl) var(--astro-spacing-md);
      width: 100%;
      box-sizing: border-box;
    }

    .layout__footer {
      background-color: var(--astro-background-alt);
      border-top: 1px solid var(--astro-border-color);
      padding: var(--astro-spacing-xl) var(--astro-spacing-md);
      margin-top: auto;
    }

    .footer__content {
      max-width: var(--astro-max-width);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--astro-spacing-xl);
      text-align: center;
    }

    .footer__section h3 {
      color: var(--astro-text-color);
      font-size: var(--astro-font-size-lg);
      font-weight: var(--astro-font-weight-bold);
      margin: 0 0 var(--astro-spacing-md) 0;
    }

    .footer__section p {
      color: var(--astro-text-light);
      margin: 0 0 var(--astro-spacing-sm) 0;
      line-height: var(--astro-line-height-relaxed);
    }

    .footer__links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer__links li {
      margin: 0 0 var(--astro-spacing-xs) 0;
    }

    .footer__links a {
      color: var(--astro-text-light);
      text-decoration: none;
      transition: color var(--astro-transition-normal);
    }

    .footer__links a:hover {
      color: var(--astro-primary-color);
    }

    .footer__bottom {
      border-top: 1px solid var(--astro-border-color);
      margin-top: var(--astro-spacing-xl);
      padding-top: var(--astro-spacing-lg);
      text-align: center;
      color: var(--astro-text-light);
      font-size: var(--astro-font-size-sm);
    }

    /* Page title styling */
    .page-title {
      color: var(--astro-text-color);
      font-size: var(--astro-font-size-3xl);
      font-weight: var(--astro-font-weight-bold);
      margin: 0 0 var(--astro-spacing-xl) 0;
      text-align: center;
      line-height: var(--astro-line-height-tight);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .layout__content {
        padding: var(--astro-spacing-lg) var(--astro-spacing-md);
      }

      .page-title {
        font-size: var(--astro-font-size-2xl);
        margin-bottom: var(--astro-spacing-lg);
      }

      .footer__content {
        grid-template-columns: 1fr;
        gap: var(--astro-spacing-lg);
        text-align: left;
      }
    }
  `;

  render() {
    return html`
      <div class="layout">
        <astro-navigation .currentPath=${this.currentPath}></astro-navigation>
        
        <main class="layout__main" role="main">
          <div class="layout__content">
            ${this.pageTitle ? html`<h1 class="page-title">${this.pageTitle}</h1>` : ''}
            <slot></slot>
          </div>
        </main>

        <footer class="layout__footer" role="contentinfo">
          <div class="footer__content">
            <div class="footer__section">
              <h3>Olli's Astro Club</h3>
              <p>
                Gemeinsam die Wunder des Universums entdecken. 
                Unser Astronomie-Club bietet spannende Beobachtungsabende, 
                lehrreiche Workshops und eine freundliche Gemeinschaft 
                für alle Sternenfreunde.
              </p>
            </div>
            
            <div class="footer__section">
              <h3>Navigation</h3>
              <ul class="footer__links">
                <li><a href="/">Home</a></li>
                <li><a href="/club">Der Club</a></li>
                <li><a href="/meetings">Treffen</a></li>
                <li><a href="/observations">Beobachtungen</a></li>
                <li><a href="/tutorials">Tutorials</a></li>
                <li><a href="/contact">Kontakt</a></li>
              </ul>
            </div>
            
            <div class="footer__section">
              <h3>Ressourcen</h3>
              <ul class="footer__links">
                <li><a href="/tutorials/telescope-basics">Teleskop-Grundlagen</a></li>
                <li><a href="/tutorials/photography">Astrofotografie</a></li>
                <li><a href="/observations/calendar">Beobachtungskalender</a></li>
                <li><a href="/club/membership">Mitgliedschaft</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer__bottom">
            <p>&copy; 2024 Olli's Astro Club. Alle Rechte vorbehalten.</p>
            <p>Mit ❤️ für die Astronomie-Community erstellt.</p>
          </div>
        </footer>
      </div>
    `;
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);
    
    if (changedProperties.has('pageTitle') && this.pageTitle) {
      // Update document title
      document.title = `${this.pageTitle} | Olli's Astro Club`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-layout': AstroLayout;
  }
}