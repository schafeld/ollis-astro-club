# Component Development Guide

## Overview

This guide provides comprehensive instructions for developing reusable web components using LitElement for the Olli's Astro Club project. It covers patterns, best practices, and integration with Storybook.

## LitElement Component Architecture

### Basic Component Structure

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('astro-component')
export class AstroComponent extends LitElement {
  // Public properties (reactive)
  @property({ type: String }) title = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  
  // Internal state (reactive but not exposed)
  @state() private _loading = false;
  
  // Static styles
  static styles = css`
    :host {
      display: block;
      /* Component styles */
    }
  `;
  
  // Lifecycle methods
  connectedCallback() {
    super.connectedCallback();
    // Component mounted
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    // Component unmounted
  }
  
  // Render method
  render() {
    return html`
      <div class="component-content">
        <h2>${this.title}</h2>
        <!-- Component template -->
      </div>
    `;
  }
  
  // Event handlers
  private _handleClick(event: Event) {
    this.dispatchEvent(new CustomEvent('astro-click', {
      detail: { value: this.title },
      bubbles: true
    }));
  }
}

// Type declaration for TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'astro-component': AstroComponent;
  }
}
```

## Component Design Patterns

### 1. Container Components

Components that manage data and state:

```typescript
@customElement('astro-constellation-viewer')
export class AstroConstellationViewer extends LitElement {
  @state() private _constellations: Constellation[] = [];
  @state() private _selectedConstellation: string | null = null;
  @state() private _loading = true;
  
  async connectedCallback() {
    super.connectedCallback();
    await this._loadConstellations();
  }
  
  private async _loadConstellations() {
    try {
      this._loading = true;
      this._constellations = await fetchConstellations();
    } catch (error) {
      this._handleError(error);
    } finally {
      this._loading = false;
    }
  }
  
  render() {
    if (this._loading) {
      return html`<astro-loader></astro-loader>`;
    }
    
    return html`
      <div class="constellation-grid">
        ${this._constellations.map(constellation => html`
          <astro-constellation-card
            .constellation=${constellation}
            ?selected=${this._selectedConstellation === constellation.id}
            @constellation-select=${this._handleSelection}
          ></astro-constellation-card>
        `)}
      </div>
    `;
  }
}
```

### 2. Presentation Components

Components that display data without managing state:

```typescript
@customElement('astro-constellation-card')
export class AstroConstellationCard extends LitElement {
  @property({ type: Object }) constellation!: Constellation;
  @property({ type: Boolean, reflect: true }) selected = false;
  
  static styles = css`
    :host {
      display: block;
      border: 2px solid var(--astro-border-color);
      border-radius: var(--astro-border-radius);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    :host([selected]) {
      border-color: var(--astro-primary-color);
      box-shadow: var(--astro-elevation-2);
    }
    
    :host(:hover) {
      transform: translateY(-2px);
      box-shadow: var(--astro-elevation-3);
    }
  `;
  
  render() {
    return html`
      <div class="card-content" @click=${this._handleClick}>
        <img
          src=${this.constellation.imageUrl}
          alt=${this.constellation.name}
          loading="lazy"
        />
        <h3>${this.constellation.name}</h3>
        <p>${this.constellation.description}</p>
      </div>
    `;
  }
  
  private _handleClick() {
    this.dispatchEvent(new CustomEvent('constellation-select', {
      detail: { constellation: this.constellation },
      bubbles: true
    }));
  }
}
```

### 3. Form Components

Interactive components with validation:

```typescript
@customElement('astro-quiz-question')
export class AstroQuizQuestion extends LitElement {
  @property({ type: Object }) question!: QuizQuestion;
  @property({ type: String }) value = '';
  @property({ type: Boolean }) required = false;
  @property({ type: Boolean }) disabled = false;
  
  @state() private _error = '';
  @state() private _touched = false;
  
  static styles = css`
    .question-container {
      margin-bottom: var(--astro-spacing-lg);
    }
    
    .error-message {
      color: var(--astro-error-color);
      font-size: var(--astro-font-size-sm);
      margin-top: var(--astro-spacing-xs);
    }
    
    .option {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-sm);
      margin: var(--astro-spacing-sm) 0;
    }
  `;
  
  render() {
    return html`
      <div class="question-container">
        <h3>${this.question.text}</h3>
        <div class="options">
          ${this.question.options.map((option, index) => html`
            <label class="option">
              <input
                type="radio"
                name="question-${this.question.id}"
                value=${option.id}
                .checked=${this.value === option.id}
                ?disabled=${this.disabled}
                @change=${this._handleChange}
              />
              <span>${option.text}</span>
            </label>
          `)}
        </div>
        ${this._error ? html`
          <div class="error-message" role="alert">
            ${this._error}
          </div>
        ` : ''}
      </div>
    `;
  }
  
  private _handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this._touched = true;
    this._validateInput();
    
    this.dispatchEvent(new CustomEvent('question-change', {
      detail: {
        questionId: this.question.id,
        value: this.value,
        valid: !this._error
      },
      bubbles: true
    }));
  }
  
  private _validateInput() {
    if (this.required && !this.value && this._touched) {
      this._error = 'Please select an answer';
    } else {
      this._error = '';
    }
  }
}
```

## Design System Integration

### CSS Custom Properties (Design Tokens)

```css
/* Design tokens defined at :root level */
:root {
  /* Colors */
  --astro-primary-color: #1e3a8a;
  --astro-secondary-color: #7c3aed;
  --astro-accent-color: #f59e0b;
  --astro-text-color: #1f2937;
  --astro-background-color: #ffffff;
  --astro-border-color: #d1d5db;
  --astro-error-color: #dc2626;
  --astro-success-color: #059669;
  
  /* Typography */
  --astro-font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --astro-font-size-xs: 0.75rem;
  --astro-font-size-sm: 0.875rem;
  --astro-font-size-base: 1rem;
  --astro-font-size-lg: 1.125rem;
  --astro-font-size-xl: 1.25rem;
  --astro-font-size-2xl: 1.5rem;
  
  /* Spacing */
  --astro-spacing-xs: 0.25rem;
  --astro-spacing-sm: 0.5rem;
  --astro-spacing-md: 1rem;
  --astro-spacing-lg: 1.5rem;
  --astro-spacing-xl: 2rem;
  
  /* Border radius */
  --astro-border-radius: 0.375rem;
  --astro-border-radius-lg: 0.5rem;
  
  /* Shadows */
  --astro-elevation-1: 0 1px 3px rgba(0, 0, 0, 0.1);
  --astro-elevation-2: 0 4px 6px rgba(0, 0, 0, 0.1);
  --astro-elevation-3: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --astro-transition-fast: 0.15s ease;
  --astro-transition-normal: 0.2s ease;
  --astro-transition-slow: 0.3s ease;
}
```

### Using Design Tokens in Components

```typescript
static styles = css`
  :host {
    display: block;
    font-family: var(--astro-font-family);
    color: var(--astro-text-color);
  }
  
  .button {
    background: var(--astro-primary-color);
    color: white;
    border: none;
    padding: var(--astro-spacing-sm) var(--astro-spacing-md);
    border-radius: var(--astro-border-radius);
    font-size: var(--astro-font-size-base);
    cursor: pointer;
    transition: all var(--astro-transition-normal);
  }
  
  .button:hover {
    transform: translateY(-1px);
    box-shadow: var(--astro-elevation-2);
  }
`;
```

## Accessibility Implementation

### Semantic HTML and ARIA

```typescript
render() {
  return html`
    <article
      role="article"
      aria-labelledby="card-title-${this.constellation.id}"
      aria-describedby="card-desc-${this.constellation.id}"
    >
      <img
        src=${this.constellation.imageUrl}
        alt=${this.constellation.name}
        role="img"
      />
      <h3 id="card-title-${this.constellation.id}">
        ${this.constellation.name}
      </h3>
      <p id="card-desc-${this.constellation.id}">
        ${this.constellation.description}
      </p>
      <button
        type="button"
        aria-label="View details for ${this.constellation.name}"
        @click=${this._handleViewDetails}
      >
        Learn More
      </button>
    </article>
  `;
}
```

### Keyboard Navigation

```typescript
@customElement('astro-carousel')
export class AstroCarousel extends LitElement {
  @state() private _currentIndex = 0;
  
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._handleKeydown);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._handleKeydown);
  }
  
  private _handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this._previousSlide();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this._nextSlide();
        break;
      case 'Home':
        event.preventDefault();
        this._goToSlide(0);
        break;
      case 'End':
        event.preventDefault();
        this._goToSlide(this.slides.length - 1);
        break;
    }
  }
  
  render() {
    return html`
      <div
        class="carousel"
        role="region"
        aria-label="Image carousel"
        tabindex="0"
      >
        <!-- Carousel content -->
      </div>
    `;
  }
}
```

## Testing Strategies

### Unit Testing with Vitest

```typescript
import { expect, test, describe, beforeEach } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './astro-button.js';
import type { AstroButton } from './astro-button.js';

describe('AstroButton', () => {
  let element: AstroButton;
  
  beforeEach(async () => {
    element = await fixture<AstroButton>(html`
      <astro-button>Click me</astro-button>
    `);
  });
  
  test('should render with default properties', () => {
    expect(element.textContent?.trim()).toBe('Click me');
    expect(element.variant).toBe('primary');
    expect(element.disabled).toBe(false);
  });
  
  test('should update when properties change', async () => {
    element.variant = 'secondary';
    await elementUpdated(element);
    
    const button = element.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('button--secondary')).toBe(true);
  });
  
  test('should emit custom event when clicked', async () => {
    let eventDetail: any = null;
    
    element.addEventListener('astro-click', (event: Event) => {
      eventDetail = (event as CustomEvent).detail;
    });
    
    const button = element.shadowRoot?.querySelector('button');
    button?.click();
    
    expect(eventDetail).toEqual({ value: 'Click me' });
  });
  
  test('should handle disabled state', async () => {
    element.disabled = true;
    await elementUpdated(element);
    
    const button = element.shadowRoot?.querySelector('button');
    expect(button?.disabled).toBe(true);
    expect(button?.getAttribute('aria-disabled')).toBe('true');
  });
});
```

### Testing Accessibility

```typescript
import { expect, test } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { isAccessible } from '@web/test-runner-commands';

test('should be accessible', async () => {
  const element = await fixture(html`
    <astro-button>Accessible Button</astro-button>
  `);
  
  expect(await isAccessible(element)).toBe(true);
});

test('should have proper ARIA attributes', async () => {
  const element = await fixture(html`
    <astro-modal title="Test Modal" open>
      <p>Modal content</p>
    </astro-modal>
  `);
  
  const modal = element.shadowRoot?.querySelector('[role="dialog"]');
  expect(modal?.getAttribute('aria-labelledby')).toBeTruthy();
  expect(modal?.getAttribute('aria-modal')).toBe('true');
});
```

## Storybook Integration

### Story Structure

```typescript
// astro-button.stories.ts
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './astro-button.js';
import type { AstroButton } from './astro-button.js';

const meta: Meta<AstroButton> = {
  title: 'Components/AstroButton',
  component: 'astro-button',
  parameters: {
    docs: {
      description: {
        component: 'A customizable button component for the Astro Club interface.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost']
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;
type Story = StoryObj<AstroButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium'
  },
  render: (args) => html`
    <astro-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
    >
      Primary Button
    </astro-button>
  `
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <astro-button variant="primary">Primary</astro-button>
      <astro-button variant="secondary">Secondary</astro-button>
      <astro-button variant="outline">Outline</astro-button>
      <astro-button variant="ghost">Ghost</astro-button>
    </div>
  `
};

export const WithIcon: Story = {
  render: () => html`
    <astro-button variant="primary">
      <astro-icon name="star" slot="icon"></astro-icon>
      Favorite
    </astro-button>
  `
};

export const Interactive: Story = {
  render: () => html`
    <astro-button
      variant="primary"
      @astro-click=${(event: CustomEvent) => {
        console.log('Button clicked:', event.detail);
      }}
    >
      Click me!
    </astro-button>
  `
};
```

### Documentation in Storybook

```typescript
// Add to story configuration
parameters: {
  docs: {
    description: {
      component: `
        The AstroButton component provides a consistent button interface
        throughout the application. It supports multiple variants, sizes,
        and states while maintaining accessibility standards.
        
        ## Usage
        
        \`\`\`html
        <astro-button variant="primary" size="medium">
          Click me
        </astro-button>
        \`\`\`
        
        ## Accessibility
        
        - Supports keyboard navigation (Enter and Space)
        - Proper ARIA attributes for screen readers
        - Focus management and visual indicators
        - Color contrast meets WCAG 2.1 AA standards
      `
    }
  }
}
```

## Performance Optimization

### Lazy Loading Components

```typescript
// Lazy load heavy components
export const AstroSolarSystem = lazy(() => import('./astro-solar-system.js'));

// Use dynamic imports in components
private async _loadHeavyComponent() {
  const { AstroStarChart } = await import('./astro-star-chart.js');
  // Use component
}
```

### Efficient Rendering

```typescript
@customElement('astro-list')
export class AstroList extends LitElement {
  @property({ type: Array }) items: Item[] = [];
  
  // Use keyed lists for efficient updates
  render() {
    return html`
      <ul>
        ${this.items.map(item => html`
          <li key=${item.id}>
            <astro-list-item .item=${item}></astro-list-item>
          </li>
        `)}
      </ul>
    `;
  }
  
  // Implement shouldUpdate for performance
  shouldUpdate(changedProperties: PropertyValues) {
    // Only update if items actually changed
    if (changedProperties.has('items')) {
      const oldItems = changedProperties.get('items');
      return !this._itemsEqual(oldItems, this.items);
    }
    return true;
  }
}
```

## Error Handling

### Error Boundary Pattern

```typescript
@customElement('astro-error-boundary')
export class AstroErrorBoundary extends LitElement {
  @state() private _error: Error | null = null;
  
  constructor() {
    super();
    window.addEventListener('error', this._handleError.bind(this));
    window.addEventListener('unhandledrejection', this._handlePromiseRejection.bind(this));
  }
  
  private _handleError(event: ErrorEvent) {
    this._error = event.error;
    this.requestUpdate();
  }
  
  private _handlePromiseRejection(event: PromiseRejectionEvent) {
    this._error = new Error(event.reason);
    this.requestUpdate();
  }
  
  render() {
    if (this._error) {
      return html`
        <div class="error-container" role="alert">
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened.</p>
          <button @click=${this._handleRetry}>Try Again</button>
        </div>
      `;
    }
    
    return html`<slot></slot>`;
  }
  
  private _handleRetry() {
    this._error = null;
    this.requestUpdate();
  }
}
```

## Component Lifecycle Best Practices

### Resource Management

```typescript
@customElement('astro-video-player')
export class AstroVideoPlayer extends LitElement {
  @property({ type: String }) src = '';
  
  private _videoElement: HTMLVideoElement | null = null;
  private _resizeObserver: ResizeObserver | null = null;
  
  connectedCallback() {
    super.connectedCallback();
    this._setupResizeObserver();
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this._cleanup();
  }
  
  firstUpdated() {
    this._videoElement = this.shadowRoot?.querySelector('video') || null;
    this._setupVideoEvents();
  }
  
  private _setupResizeObserver() {
    this._resizeObserver = new ResizeObserver(() => {
      this._handleResize();
    });
    this._resizeObserver.observe(this);
  }
  
  private _setupVideoEvents() {
    if (this._videoElement) {
      this._videoElement.addEventListener('loadstart', this._handleLoadStart);
      this._videoElement.addEventListener('error', this._handleError);
    }
  }
  
  private _cleanup() {
    this._resizeObserver?.disconnect();
    
    if (this._videoElement) {
      this._videoElement.removeEventListener('loadstart', this._handleLoadStart);
      this._videoElement.removeEventListener('error', this._handleError);
      this._videoElement.pause();
    }
  }
}
```

---

*This guide provides the foundation for building consistent, accessible, and maintainable components for the Olli's Astro Club project. Follow these patterns to ensure code quality and user experience standards.*