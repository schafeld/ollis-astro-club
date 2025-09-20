import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/ui/astro-button.js';

const meta: Meta = {
  title: 'UI/Astro Button',
  component: 'astro-button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  render: (args) => html`
    <astro-button 
      variant=${args.variant} 
      size=${args.size} 
      ?disabled=${args.disabled}
    >
      Primary Button
    </astro-button>
  `,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
  render: (args) => html`
    <astro-button 
      variant=${args.variant} 
      size=${args.size} 
      ?disabled=${args.disabled}
    >
      Secondary Button
    </astro-button>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center;">
      <astro-button variant="primary" size="sm">Small</astro-button>
      <astro-button variant="primary" size="md">Medium</astro-button>
      <astro-button variant="primary" size="lg">Large</astro-button>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <astro-button variant="primary">Primary</astro-button>
      <astro-button variant="secondary">Secondary</astro-button>
      <astro-button variant="outline">Outline</astro-button>
      <astro-button variant="ghost">Ghost</astro-button>
    </div>
  `,
};

export const WithHref: Story = {
  render: () => html`
    <astro-button variant="primary" href="https://example.com" target="_blank">
      Link Button
    </astro-button>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <astro-button variant="primary" disabled>Disabled Primary</astro-button>
      <astro-button variant="secondary" disabled>Disabled Secondary</astro-button>
      <astro-button variant="outline" disabled>Disabled Outline</astro-button>
    </div>
  `,
};