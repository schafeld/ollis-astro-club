import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/ui/astro-language-selector.js';

const meta: Meta = {
  title: 'UI/Astro Language Selector',
  component: 'astro-language-selector',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A language selection dropdown component that toggles between German and English. Supports keyboard navigation and accessibility features.'
      }
    }
  },
  argTypes: {
    defaultLanguage: {
      control: { type: 'select' },
      options: ['de', 'en'],
      description: 'The default language to be selected'
    },
    currentLanguage: {
      control: { type: 'select' },
      options: ['de', 'en'],
      description: 'The currently selected language'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the language selector is disabled'
    }
  },
  args: {
    defaultLanguage: 'de',
    currentLanguage: 'de',
    disabled: false
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    defaultLanguage: 'de',
    currentLanguage: 'de',
    disabled: false
  },
  render: (args) => html`
    <astro-language-selector
      default-language=${args.defaultLanguage}
      current-language=${args.currentLanguage}
      ?disabled=${args.disabled}
      @language-change=${(e: CustomEvent) => {
        console.log('Language changed:', e.detail);
        // Update the component's current language
        const element = e.target as any;
        element.currentLanguage = e.detail.newLanguage;
      }}
    ></astro-language-selector>
  `
};

export const English: Story = {
  args: {
    defaultLanguage: 'en',
    currentLanguage: 'en',
    disabled: false
  },
  render: (args) => html`
    <astro-language-selector
      default-language=${args.defaultLanguage}
      current-language=${args.currentLanguage}
      ?disabled=${args.disabled}
      @language-change=${(e: CustomEvent) => {
        console.log('Language changed:', e.detail);
        const element = e.target as any;
        element.currentLanguage = e.detail.newLanguage;
      }}
    ></astro-language-selector>
  `
};

export const Disabled: Story = {
  args: {
    defaultLanguage: 'de',
    currentLanguage: 'de',
    disabled: true
  },
  render: (args) => html`
    <astro-language-selector
      default-language=${args.defaultLanguage}
      current-language=${args.currentLanguage}
      ?disabled=${args.disabled}
    ></astro-language-selector>
  `
};

export const Interactive: Story = {
  args: {
    defaultLanguage: 'de',
    currentLanguage: 'de',
    disabled: false
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; padding: 2rem;">
      <h3>Language Selector with Event Handling</h3>
      <p>Click the language selector to see the events in the browser console.</p>
      
      <astro-language-selector
        default-language=${args.defaultLanguage}
        current-language=${args.currentLanguage}
        ?disabled=${args.disabled}
        @language-change=${(e: CustomEvent) => {
          console.log('Language changed from', e.detail.oldLanguage, 'to', e.detail.newLanguage);
          console.log('Full language object:', e.detail.language);
          
          // Show a notification
          const notification = document.createElement('div');
          notification.style.cssText = 
            'position: fixed;' +
            'top: 20px;' +
            'right: 20px;' +
            'background: var(--astro-primary-color);' +
            'color: white;' +
            'padding: 1rem;' +
            'border-radius: 0.5rem;' +
            'box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);' +
            'z-index: 1000;' +
            'animation: fadeIn 0.3s ease;';
          notification.textContent = 'Language changed to ' + e.detail.language.name;
          
          document.body.appendChild(notification);
          
          setTimeout(() => {
            notification.remove();
          }, 3000);
          
          // Update the component's current language
          const element = e.target as any;
          element.currentLanguage = e.detail.newLanguage;
        }}
      ></astro-language-selector>
      
      <div style="margin-top: 1rem; padding: 1rem; background-color: var(--astro-background-alt); border-radius: 0.5rem;">
        <h4>Instructions:</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
          <li>Click the language selector to open the dropdown</li>
          <li>Use arrow keys to navigate between options</li>
          <li>Press Enter or Space to select</li>
          <li>Press Escape to close the dropdown</li>
          <li>Click outside to close the dropdown</li>
        </ul>
      </div>
    </div>
  `
};

export const InNavigation: Story = {
  args: {
    defaultLanguage: 'de',
    currentLanguage: 'de',
    disabled: false
  },
  render: (args) => html`
    <div style="display: flex; align-items: center; gap: 2rem; padding: 1rem; background: var(--astro-background-color); border: 1px solid var(--astro-border-color); border-radius: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <img src="/assets/logo-astro-club-300x300.png" alt="Logo" style="width: 32px; height: 32px;">
        <span style="font-weight: bold; color: var(--astro-text-color);">Olli's Astro Club</span>
      </div>
      
      <nav style="display: flex; gap: 1.5rem; margin-left: auto;">
        <a href="#" style="text-decoration: none; color: var(--astro-text-color); font-weight: 500;">Home</a>
        <a href="#" style="text-decoration: none; color: var(--astro-text-color); font-weight: 500;">Club</a>
        <a href="#" style="text-decoration: none; color: var(--astro-text-color); font-weight: 500;">Events</a>
        <a href="#" style="text-decoration: none; color: var(--astro-text-color); font-weight: 500;">Contact</a>
      </nav>
      
      <astro-language-selector
        default-language=${args.defaultLanguage}
        current-language=${args.currentLanguage}
        ?disabled=${args.disabled}
        @language-change=${(e: CustomEvent) => {
          console.log('Language changed:', e.detail);
          const element = e.target as any;
          element.currentLanguage = e.detail.newLanguage;
        }}
      ></astro-language-selector>
    </div>
  `
};

export const MobileView: Story = {
  args: {
    defaultLanguage: 'de',
    currentLanguage: 'de',
    disabled: false
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: (args) => html`
    <div style="max-width: 320px; padding: 1rem;">
      <h3 style="margin-bottom: 1rem;">Mobile Navigation</h3>
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem; background: var(--astro-background-color); border: 1px solid var(--astro-border-color); border-radius: 0.5rem;">
        <span style="font-weight: bold;">Menu</span>
        
        <astro-language-selector
          default-language=${args.defaultLanguage}
          current-language=${args.currentLanguage}
          ?disabled=${args.disabled}
          @language-change=${(e: CustomEvent) => {
            console.log('Language changed:', e.detail);
            const element = e.target as any;
            element.currentLanguage = e.detail.newLanguage;
          }}
        ></astro-language-selector>
      </div>
      
      <p style="margin-top: 1rem; font-size: 0.9rem; color: var(--astro-text-light);">
        On mobile devices, the language name is hidden and only the flag is shown to save space.
      </p>
    </div>
  `
};