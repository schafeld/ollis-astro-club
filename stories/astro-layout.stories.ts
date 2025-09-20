import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../src/components/layout/astro-layout.js';
import '../src/components/ui/astro-card.js';
import '../src/components/ui/astro-button.js';

const meta: Meta = {
  title: 'Layout/Astro Layout',
  component: 'astro-layout',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    pageTitle: {
      control: { type: 'text' },
    },
    currentPath: {
      control: { type: 'select' },
      options: ['/', '/club', '/meetings', '/observations', '/tutorials', '/contact'],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    pageTitle: 'Willkommen',
    currentPath: '/',
  },
  render: (args) => html`
    <astro-layout 
      page-title=${args.pageTitle}
      current-path=${args.currentPath}
    >
      <h1>Welcome to Olli's Astro Club</h1>
      <p>This is a basic page layout with navigation and footer.</p>
    </astro-layout>
  `,
};

export const ClubPage: Story = {
  args: {
    pageTitle: 'Der Club',
    currentPath: '/club',
  },
  render: (args) => html`
    <astro-layout 
      page-title=${args.pageTitle}
      current-path=${args.currentPath}
    >
      <section style="margin: 2rem 0;">
        <astro-card title="Über Olli's Astro Club" variant="elevated">
          <p>
            Unser Astronomie-Club wurde 2018 gegründet und ist ein Ort für alle, 
            die sich für die Wunder des Universums begeistern.
          </p>
        </astro-card>
      </section>
    </astro-layout>
  `,
};

export const ContactPage: Story = {
  args: {
    pageTitle: 'Kontakt',
    currentPath: '/contact',
  },
  render: (args) => html`
    <astro-layout 
      page-title=${args.pageTitle}
      current-path=${args.currentPath}
    >
      <section style="margin: 2rem 0;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
          <astro-card title="📧 E-Mail" variant="elevated">
            <p style="font-size: 1.1rem; margin: 1rem 0;">
              <strong>info@ollis-astro-club.com</strong>
            </p>
            <p>
              Schreib uns eine E-Mail für allgemeine Fragen, Anmeldungen oder 
              wenn du mehr über unseren Club erfahren möchtest.
            </p>
            <div slot="actions">
              <astro-button variant="primary" size="sm">
                E-Mail schreiben
              </astro-button>
            </div>
          </astro-card>

          <astro-card title="📱 Telefon" variant="elevated">
            <p style="font-size: 1.1rem; margin: 1rem 0;">
              <strong>+49 (0) 123 456 789</strong>
            </p>
            <p>
              Ruf uns an! Am besten erreichst du uns:
              <br><strong>Mo-Fr 18:00 - 20:00 Uhr</strong>
            </p>
          </astro-card>
        </div>
      </section>
    </astro-layout>
  `,
};

export const LongContent: Story = {
  args: {
    pageTitle: 'Lange Seite',
    currentPath: '/tutorials',
  },
  render: (args) => html`
    <astro-layout 
      page-title=${args.pageTitle}
      current-path=${args.currentPath}
    >
      <h1>Astronomie Tutorials</h1>
      
      <section style="margin: 3rem 0;">
        <h2>Erste Schritte</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          <astro-card title="🔭 Dein erstes Teleskop" variant="default">
            <p>Tipps für den Kauf deines ersten Teleskops und was du beachten solltest.</p>
            <div slot="actions">
              <astro-button variant="secondary" size="sm">Lesen</astro-button>
            </div>
          </astro-card>
          
          <astro-card title="🌙 Mondbeobachtung" variant="default">
            <p>Der Mond ist das perfekte erste Beobachtungsziel für Einsteiger.</p>
            <div slot="actions">
              <astro-button variant="secondary" size="sm">Lesen</astro-button>
            </div>
          </astro-card>
          
          <astro-card title="⭐ Sternbilder finden" variant="default">
            <p>Lerne die wichtigsten Sternbilder am Himmel zu erkennen.</p>
            <div slot="actions">
              <astro-button variant="secondary" size="sm">Lesen</astro-button>
            </div>
          </astro-card>
        </div>
      </section>

      <section style="margin: 3rem 0;">
        <h2>Fortgeschrittene Themen</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
          <astro-card title="📸 Astrofotografie" variant="outlined">
            <p>Grundlagen der Astrofotografie für beeindruckende Himmelsaufnahmen.</p>
            <div slot="actions">
              <astro-button variant="primary" size="sm">Lesen</astro-button>
            </div>
          </astro-card>
          
          <astro-card title="🌌 Deep Sky Objekte" variant="outlined">
            <p>Galaxien, Nebel und Sternhaufen - die Schätze des tiefen Weltraums.</p>
            <div slot="actions">
              <astro-button variant="primary" size="sm">Lesen</astro-button>
            </div>
          </astro-card>
        </div>
      </section>

      <section style="margin: 3rem 0; padding: 2rem; background-color: var(--astro-background-alt); border-radius: 1rem;">
        <h2>Hast du Fragen?</h2>
        <p>
          Unsere erfahrenen Club-Mitglieder helfen gerne weiter! 
          Komm zu einem unserer Treffen oder schreib uns eine E-Mail.
        </p>
        <div style="margin-top: 1rem;">
          <astro-button variant="primary" href="/contact">
            Kontakt aufnehmen
          </astro-button>
        </div>
      </section>
    </astro-layout>
  `,
};

export const MobileView: Story = {
  args: {
    pageTitle: 'Mobile Layout',
    currentPath: '/',
  },
  render: (args) => html`
    <astro-layout 
      page-title=${args.pageTitle}
      current-path=${args.currentPath}
    >
      <h1>Mobile Optimiert</h1>
      <p>Diese Ansicht zeigt, wie das Layout auf mobilen Geräten aussieht.</p>
      
      <astro-card title="Mobile Card" variant="elevated">
        <p>Cards sind auch auf mobilen Geräten gut lesbar und bedienbar.</p>
        <div slot="actions">
          <astro-button variant="primary" size="sm">Action</astro-button>
        </div>
      </astro-card>
    </astro-layout>
  `,
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};