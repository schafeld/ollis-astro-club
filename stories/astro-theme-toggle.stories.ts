import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/ui/astro-theme-toggle.js';

const meta: Meta = {
  title: 'UI/Astro Theme Toggle',
  component: 'astro-theme-toggle',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle switch component for switching between dark and light themes. Persists theme preference in localStorage and applies theme to document.'
      }
    }
  },
  argTypes: {
    defaultTheme: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'The default theme to be selected'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the theme toggle is disabled'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the toggle switch'
    }
  },
  args: {
    defaultTheme: 'light',
    disabled: false,
    size: 'md'
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    defaultTheme: 'light',
    disabled: false,
    size: 'md'
  },
  render: (args) => html`
    <astro-theme-toggle
      default-theme=${args.defaultTheme}
      ?disabled=${args.disabled}
      size=${args.size}
      @theme-change=${(e: CustomEvent) => {
        console.log('Theme changed:', e.detail);
      }}
    ></astro-theme-toggle>
  `
};

export const DarkDefault: Story = {
  args: {
    defaultTheme: 'dark',
    disabled: false,
    size: 'md'
  },
  render: (args) => html`
    <astro-theme-toggle
      default-theme=${args.defaultTheme}
      ?disabled=${args.disabled}
      size=${args.size}
      @theme-change=${(e: CustomEvent) => {
        console.log('Theme changed:', e.detail);
      }}
    ></astro-theme-toggle>
  `
};

export const Disabled: Story = {
  args: {
    defaultTheme: 'light',
    disabled: true,
    size: 'md'
  },
  render: (args) => html`
    <astro-theme-toggle
      default-theme=${args.defaultTheme}
      ?disabled=${args.disabled}
      size=${args.size}
    ></astro-theme-toggle>
  `
};

export const SizeVariants: Story = {
  args: {
    defaultTheme: 'light',
    disabled: false
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: center; padding: 2rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 80px; text-align: right; font-size: 0.9rem;">Small:</span>
        <astro-theme-toggle
          default-theme=${args.defaultTheme}
          ?disabled=${args.disabled}
          size="sm"
          @theme-change=${(e: CustomEvent) => {
            console.log('Small toggle - Theme changed:', e.detail);
          }}
        ></astro-theme-toggle>
      </div>
      
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 80px; text-align: right; font-size: 0.9rem;">Medium:</span>
        <astro-theme-toggle
          default-theme=${args.defaultTheme}
          ?disabled=${args.disabled}
          size="md"
          @theme-change=${(e: CustomEvent) => {
            console.log('Medium toggle - Theme changed:', e.detail);
          }}
        ></astro-theme-toggle>
      </div>
      
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="width: 80px; text-align: right; font-size: 0.9rem;">Large:</span>
        <astro-theme-toggle
          default-theme=${args.defaultTheme}
          ?disabled=${args.disabled}
          size="lg"
          @theme-change=${(e: CustomEvent) => {
            console.log('Large toggle - Theme changed:', e.detail);
          }}
        ></astro-theme-toggle>
      </div>
    </div>
  `
};

export const Interactive: Story = {
  args: {
    defaultTheme: 'light',
    disabled: false,
    size: 'md'
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem; max-width: 500px;">
      <h3>Theme Toggle with Event Handling</h3>
      <p>Toggle the switch to see theme changes and events in the browser console.</p>
      
      <div style="display: flex; align-items: center; gap: 1rem; justify-content: center;">
        <span>Light</span>
        <astro-theme-toggle
          default-theme=${args.defaultTheme}
          ?disabled=${args.disabled}
          size=${args.size}
          @theme-change=${(e: CustomEvent) => {
            console.log('Theme changed to:', e.detail.theme);
            console.log('Is dark mode:', e.detail.isDark);
            
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
            notification.textContent = 'Switched to ' + e.detail.theme + ' mode';
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
              notification.remove();
            }, 2000);
          }}
        ></astro-theme-toggle>
        <span>Dark</span>
      </div>
      
      <div style="margin-top: 1rem; padding: 1rem; background-color: var(--astro-background-alt); border-radius: 0.5rem;">
        <h4>Instructions:</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
          <li>Click the toggle switch to change themes</li>
          <li>Use Tab to focus, then Space or Enter to toggle</li>
          <li>Theme preference is saved to localStorage</li>
          <li>Changes apply to the entire document</li>
        </ul>
      </div>
      
      <div style="padding: 1rem; border: 1px solid var(--astro-border-color); border-radius: 0.5rem;">
        <h4>Current theme effect:</h4>
        <p style="color: var(--astro-text-color);">
          This text color changes based on the current theme.
        </p>
        <p style="color: var(--astro-text-light);">
          This is lighter text that also adapts to the theme.
        </p>
      </div>
    </div>
  `
};

export const InNavigation: Story = {
  args: {
    defaultTheme: 'light',
    disabled: false,
    size: 'md'
  },
  render: (args) => html`
    <div style="display: flex; align-items: center; gap: 2rem; padding: 1rem; background: var(--astro-background-color); border: 1px solid var(--astro-border-color); border-radius: 0.5rem; min-width: 600px;">
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
      
      <div style="display: flex; align-items: center; gap: 1rem;">
        <astro-theme-toggle
          default-theme=${args.defaultTheme}
          ?disabled=${args.disabled}
          size=${args.size}
          @theme-change=${(e: CustomEvent) => {
            console.log('Navigation theme changed:', e.detail);
          }}
        ></astro-theme-toggle>
      </div>
    </div>
  `
};

export const WithLanguageSelector: Story = {
  args: {
    defaultTheme: 'light',
    disabled: false,
    size: 'md'
  },
  render: (args) => html`
    <div style="display: flex; align-items: center; gap: 2rem; padding: 1rem; background: var(--astro-background-color); border: 1px solid var(--astro-border-color); border-radius: 0.5rem;">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="font-weight: bold; color: var(--astro-text-color);">Navigation Controls</span>
      </div>
      
      <div style="display: flex; align-items: center; gap: 1rem; margin-left: auto;">
        <astro-language-selector
          default-language="de"
          current-language="de"
          @language-change=${(e: CustomEvent) => {
            console.log('Language changed:', e.detail);
            const element = e.target as any;
            element.currentLanguage = e.detail.newLanguage;
          }}
        ></astro-language-selector>
        
        <div style="width: 1px; height: 24px; background: var(--astro-border-color);"></div>
        
        <astro-theme-toggle
          default-theme=${args.defaultTheme}
          ?disabled=${args.disabled}
          size=${args.size}
          @theme-change=${(e: CustomEvent) => {
            console.log('Theme changed:', e.detail);
          }}
        ></astro-theme-toggle>
      </div>
    </div>
  `
};

export const Playground: Story = {
  args: {
    defaultTheme: 'light',
    disabled: false,
    size: 'md'
  },
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 2rem; max-width: 600px;">
      <h3>Theme Toggle Playground</h3>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        <div style="padding: 1rem; border: 1px solid var(--astro-border-color); border-radius: 0.5rem; background: var(--astro-background-color);">
          <h4 style="margin: 0 0 1rem 0; color: var(--astro-text-color);">Primary Colors</h4>
          <div style="width: 100%; height: 40px; background: var(--astro-primary-color); border-radius: 0.25rem; margin-bottom: 0.5rem;"></div>
          <div style="width: 100%; height: 40px; background: var(--astro-primary-light); border-radius: 0.25rem; margin-bottom: 0.5rem;"></div>
          <div style="width: 100%; height: 40px; background: var(--astro-primary-dark); border-radius: 0.25rem;"></div>
        </div>
        
        <div style="padding: 1rem; border: 1px solid var(--astro-border-color); border-radius: 0.5rem; background: var(--astro-background-alt);">
          <h4 style="margin: 0 0 1rem 0; color: var(--astro-text-color);">Text Colors</h4>
          <p style="color: var(--astro-text-color); margin: 0.5rem 0;">Primary text</p>
          <p style="color: var(--astro-text-light); margin: 0.5rem 0;">Light text</p>
          <p style="color: var(--astro-text-muted); margin: 0.5rem 0;">Muted text</p>
        </div>
      </div>
      
      <div style="text-align: center; padding: 2rem; background: var(--astro-background-alt); border-radius: 0.5rem;">
        <p style="margin-bottom: 1rem; color: var(--astro-text-color);">Toggle the theme to see how colors adapt:</p>
        <astro-theme-toggle
          default-theme=${args.defaultTheme}
          ?disabled=${args.disabled}
          size="lg"
          @theme-change=${(e: CustomEvent) => {
            console.log('Playground theme changed:', e.detail);
          }}
        ></astro-theme-toggle>
      </div>
      
      <div style="padding: 1rem; border: 1px solid var(--astro-border-color); border-radius: 0.5rem;">
        <h4>Theme Features:</h4>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
          <li>Automatic persistence in localStorage</li>
          <li>Respects system preference by default</li>
          <li>Smooth animations and transitions</li>
          <li>Accessible keyboard navigation</li>
          <li>Customizable size variants</li>
        </ul>
      </div>
    </div>
  `
};