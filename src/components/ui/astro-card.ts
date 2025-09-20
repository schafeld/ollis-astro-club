import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * AstroCard Component
 * 
 * A versatile card component for displaying content with consistent styling.
 * Supports different variants and optional interactive elements.
 */
@customElement('astro-card')
export class AstroCard extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) subtitle = '';
  @property({ type: String }) variant: 'default' | 'elevated' | 'outlined' = 'default';
  @property({ type: Boolean, reflect: true }) interactive = false;
  @property({ type: String }) href = '';

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background-color: var(--astro-background-color);
      border-radius: var(--astro-border-radius-lg);
      overflow: hidden;
      transition: all var(--astro-transition-normal);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card--default {
      border: 1px solid var(--astro-border-color);
    }

    .card--elevated {
      box-shadow: var(--astro-shadow-md);
      border: 1px solid transparent;
    }

    .card--outlined {
      border: 2px solid var(--astro-primary-color);
      background-color: rgba(30, 58, 138, 0.02);
    }

    /* Interactive states */
    .card--interactive {
      cursor: pointer;
    }

    .card--interactive:hover {
      transform: translateY(-2px);
      box-shadow: var(--astro-shadow-lg);
    }

    .card--interactive:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }

    /* Card sections */
    .card__header {
      padding: var(--astro-spacing-lg);
      padding-bottom: var(--astro-spacing-md);
    }

    .card__title {
      font-size: var(--astro-font-size-xl);
      font-weight: var(--astro-font-weight-bold);
      color: var(--astro-text-color);
      margin: 0 0 var(--astro-spacing-xs) 0;
      line-height: var(--astro-line-height-tight);
    }

    .card__subtitle {
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-light);
      margin: 0;
      line-height: var(--astro-line-height-normal);
    }

    .card__content {
      padding: 0 var(--astro-spacing-lg) var(--astro-spacing-lg);
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .card__image {
      width: 100%;
      height: auto;
      display: block;
    }

    .card__actions {
      padding: var(--astro-spacing-md) var(--astro-spacing-lg);
      border-top: 1px solid var(--astro-border-color);
      display: flex;
      gap: var(--astro-spacing-sm);
      justify-content: flex-end;
      align-items: center;
    }

    /* Image slot styling */
    ::slotted([slot="image"]) {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    /* Actions slot styling */
    ::slotted([slot="actions"]) {
      display: flex;
      gap: var(--astro-spacing-sm);
      align-items: center;
    }
  `;

  render() {
    const classes = [
      'card',
      `card--${this.variant}`,
      this.interactive ? 'card--interactive' : ''
    ].filter(Boolean).join(' ');

    const cardContent = html`
      <div class=${classes} @click=${this._handleClick} @keydown=${this._handleKeyDown} tabindex=${this.interactive ? '0' : '-1'}>
        <slot name="image"></slot>
        
        ${this.title || this.subtitle ? html`
          <div class="card__header">
            ${this.title ? html`<h3 class="card__title">${this.title}</h3>` : ''}
            ${this.subtitle ? html`<p class="card__subtitle">${this.subtitle}</p>` : ''}
          </div>
        ` : ''}

        <div class="card__content">
          <slot></slot>
        </div>

        <slot name="actions" class="card__actions"></slot>
      </div>
    `;

    if (this.href && this.interactive) {
      return html`
        <a href=${this.href} style="text-decoration: none; color: inherit;">
          ${cardContent}
        </a>
      `;
    }

    return cardContent;
  }

  private _handleClick(_event: Event) {
    if (!this.interactive) return;

    this.dispatchEvent(new CustomEvent('astro-card-click', {
      detail: { title: this.title, variant: this.variant },
      bubbles: true
    }));
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (!this.interactive) return;
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._handleClick(event);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-card': AstroCard;
  }
}