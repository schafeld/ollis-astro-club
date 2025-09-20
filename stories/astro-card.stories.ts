import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/ui/astro-card.js';
import '../src/components/ui/astro-button.js';

const meta: Meta = {
  title: 'UI/Astro Card',
  component: 'astro-card',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    subtitle: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
    },
    interactive: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    variant: 'default',
    interactive: false,
  },
  render: (args) => html`
    <astro-card 
      title=${args.title}
      subtitle=${args.subtitle}
      variant=${args.variant}
      ?interactive=${args.interactive}
    >
      <p>This is the main content of the card. It can contain any HTML content.</p>
    </astro-card>
  `,
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    subtitle: 'With shadow styling',
    variant: 'elevated',
    interactive: false,
  },
  render: (args) => html`
    <astro-card 
      title=${args.title}
      subtitle=${args.subtitle}
      variant=${args.variant}
    >
      <p>This card has an elevated appearance with shadow styling.</p>
    </astro-card>
  `,
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    subtitle: 'With border styling',
    variant: 'outlined',
    interactive: false,
  },
  render: (args) => html`
    <astro-card 
      title=${args.title}
      subtitle=${args.subtitle}
      variant=${args.variant}
    >
      <p>This card has an outlined appearance with border styling.</p>
    </astro-card>
  `,
};

export const WithActions: Story = {
  render: () => html`
    <astro-card 
      title="Card with Actions"
      subtitle="Buttons in action slot"
      variant="elevated"
    >
      <p>This card demonstrates how to use the actions slot for buttons.</p>
      <div slot="actions">
        <astro-button variant="secondary" size="sm">Cancel</astro-button>
        <astro-button variant="primary" size="sm">Save</astro-button>
      </div>
    </astro-card>
  `,
};

export const WithImage: Story = {
  render: () => html`
    <astro-card 
      title="Card with Image"
      subtitle="Using the image slot"
      variant="default"
    >
      <div slot="image" style="background: linear-gradient(45deg, #1e3a8a, #3730a3); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.2rem;">
        🌟 Placeholder Image
      </div>
      <p>This card shows how to use the image slot for visual content.</p>
      <div slot="actions">
        <astro-button variant="outline" size="sm">Learn More</astro-button>
      </div>
    </astro-card>
  `,
};

export const Interactive: Story = {
  render: () => html`
    <astro-card 
      title="Interactive Card"
      subtitle="Click to interact"
      variant="elevated"
      interactive
    >
      <p>This card is interactive and will respond to clicks and keyboard events.</p>
    </astro-card>
  `,
};

export const AstronomyThemed: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; max-width: 1000px;">
      <astro-card 
        title="🔭 Beobachtungsabende"
        variant="elevated"
      >
        <p>
          Regelmäßige Treffen unter dem Sternenhimmel mit professionellen Teleskopen 
          und erfahrenen Hobbyastronomen.
        </p>
        <div slot="actions">
          <astro-button variant="primary" size="sm">Anmelden</astro-button>
        </div>
      </astro-card>
      
      <astro-card 
        title="📚 Workshops & Vorträge"
        variant="elevated"
      >
        <p>
          Lerne alles über Astronomie - von den Grundlagen bis hin zu fortgeschrittenen 
          Techniken der Astrofotografie.
        </p>
        <div slot="actions">
          <astro-button variant="secondary" size="sm">Mehr erfahren</astro-button>
        </div>
      </astro-card>
      
      <astro-card 
        title="🌟 Gemeinschaft"
        variant="elevated"
      >
        <p>
          Eine freundliche Community von Sternenfreunden, die ihre Leidenschaft 
          und ihr Wissen gerne teilen.
        </p>
      </astro-card>
    </div>
  `,
};

export const EventCard: Story = {
  render: () => html`
    <astro-card 
      title="Beobachtungsabend: Wintersternbilder"
      subtitle="15. Dezember 2024 • 19:00 - 22:00 Uhr"
      variant="outlined"
    >
      <p>
        Entdecke die prächtigen Sternbilder des Winterhimmels! Wir beobachten Orion, 
        die Plejaden und andere Highlights der kalten Jahreszeit.
      </p>
      <p><strong>Treffpunkt:</strong> Vereinsgelände</p>
      <div slot="actions">
        <astro-button variant="primary" size="sm">Anmelden</astro-button>
        <astro-button variant="outline" size="sm">Details</astro-button>
      </div>
    </astro-card>
  `,
};