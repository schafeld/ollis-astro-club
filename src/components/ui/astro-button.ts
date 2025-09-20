import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * AstroButton Component
 * 
 * A customizable button component following the design system.
 * Supports multiple variants, sizes, and states while maintaining accessibility.
 */
@customElement('astro-button')
export class AstroButton extends LitElement {
  @property({ type: String }) variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String }) type: 'button' | 'submit' | 'reset' = 'button';
  @property({ type: String }) href = '';

  static styles = css`
    :host {
      display: inline-block;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--astro-spacing-sm);
      
      border: 2px solid transparent;
      border-radius: var(--astro-border-radius);
      font-family: var(--astro-font-family);
      font-weight: var(--astro-font-weight-medium);
      text-decoration: none;
      cursor: pointer;
      transition: all var(--astro-transition-fast);
      
      /* Prevent text selection */
      user-select: none;
      -webkit-user-select: none;
    }

    /* Size variations */
    .button--sm {
      padding: var(--astro-spacing-xs) var(--astro-spacing-sm);
      font-size: var(--astro-font-size-sm);
      min-height: 32px;
    }

    .button--md {
      padding: var(--astro-spacing-sm) var(--astro-spacing-md);
      font-size: var(--astro-font-size-base);
      min-height: 40px;
    }

    .button--lg {
      padding: var(--astro-spacing-md) var(--astro-spacing-lg);
      font-size: var(--astro-font-size-lg);
      min-height: 48px;
    }

    /* Variant styles */
    .button--primary {
      background-color: var(--astro-primary-color);
      color: white;
      border-color: var(--astro-primary-color);
    }

    .button--primary:hover:not(:disabled) {
      background-color: var(--astro-primary-dark);
      border-color: var(--astro-primary-dark);
      transform: translateY(-1px);
      box-shadow: var(--astro-shadow-md);
    }

    .button--secondary {
      background-color: var(--astro-secondary-color);
      color: white;
      border-color: var(--astro-secondary-color);
    }

    .button--secondary:hover:not(:disabled) {
      background-color: var(--astro-secondary-dark);
      border-color: var(--astro-secondary-dark);
      transform: translateY(-1px);
      box-shadow: var(--astro-shadow-md);
    }

    .button--outline {
      background-color: transparent;
      color: var(--astro-primary-color);
      border-color: var(--astro-primary-color);
    }

    .button--outline:hover:not(:disabled) {
      background-color: var(--astro-primary-color);
      color: white;
      transform: translateY(-1px);
      box-shadow: var(--astro-shadow-md);
    }

    .button--ghost {
      background-color: transparent;
      color: var(--astro-primary-color);
      border-color: transparent;
    }

    .button--ghost:hover:not(:disabled) {
      background-color: rgba(30, 58, 138, 0.1);
      transform: translateY(-1px);
    }

    /* Disabled state */
    .button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      box-shadow: none !important;
    }

    /* Focus styles */
    .button:focus {
      outline: 2px solid var(--astro-primary-color);
      outline-offset: 2px;
    }

    /* Icon slot styling */
    ::slotted([slot="icon"]) {
      width: 1em;
      height: 1em;
    }
  `;

  render() {
    const classes = [
      'button',
      `button--${this.variant}`,
      `button--${this.size}`
    ].join(' ');

    if (this.href && !this.disabled) {
      return html`
        <a
          href=${this.href}
          class=${classes}
          role="button"
          tabindex="0"
          @click=${this._handleClick}
          @keydown=${this._handleKeyDown}
        >
          <slot name="icon"></slot>
          <slot></slot>
        </a>
      `;
    }

    return html`
      <button
        type=${this.type}
        class=${classes}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot name="icon"></slot>
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.dispatchEvent(new CustomEvent('astro-click', {
      detail: { variant: this.variant, size: this.size },
      bubbles: true
    }));
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if (this.href && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      this._handleClick(event);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-button': AstroButton;
  }
}