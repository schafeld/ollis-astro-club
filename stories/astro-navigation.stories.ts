import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/ui/astro-navigation.js';

const meta: Meta = {
  title: 'UI/Astro Navigation',
  component: 'astro-navigation',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    currentPath: {
      control: { type: 'select' },
      options: ['/', '/club', '/meetings', '/observations', '/tutorials', '/contact'],
    },
    open: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    currentPath: '/',
    open: false,
  },
  render: (args) => html`
    <astro-navigation 
      current-path=${args.currentPath}
      ?open=${args.open}
    ></astro-navigation>
  `,
};

export const ClubPage: Story = {
  args: {
    currentPath: '/club',
    open: false,
  },
  render: (args) => html`
    <astro-navigation 
      current-path=${args.currentPath}
      ?open=${args.open}
    ></astro-navigation>
  `,
};

export const MeetingsPage: Story = {
  args: {
    currentPath: '/meetings',
    open: false,
  },
  render: (args) => html`
    <astro-navigation 
      current-path=${args.currentPath}
      ?open=${args.open}
    ></astro-navigation>
  `,
};

export const MobileMenuOpen: Story = {
  args: {
    currentPath: '/',
    open: true,
  },
  render: (args) => html`
    <div style="max-width: 400px;">
      <astro-navigation 
        current-path=${args.currentPath}
        ?open=${args.open}
      ></astro-navigation>
    </div>
  `,
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const ResponsiveDemo: Story = {
  render: () => html`
    <div>
      <astro-navigation current-path="/contact"></astro-navigation>
      <div style="padding: 2rem; background-color: #f8fafc; min-height: 200px;">
        <h2>Page Content</h2>
        <p>
          Resize the viewport to see how the navigation adapts to different screen sizes.
          On mobile devices, the menu items collapse into a hamburger menu.
        </p>
      </div>
    </div>
  `,
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3>Home Active</h3>
        <astro-navigation current-path="/"></astro-navigation>
      </div>
      
      <div>
        <h3>Club Active</h3>
        <astro-navigation current-path="/club"></astro-navigation>
      </div>
      
      <div>
        <h3>Meetings Active</h3>
        <astro-navigation current-path="/meetings"></astro-navigation>
      </div>
      
      <div>
        <h3>Contact Active</h3>
        <astro-navigation current-path="/contact"></astro-navigation>
      </div>
    </div>
  `,
  parameters: {
    layout: 'padded',
  },
};