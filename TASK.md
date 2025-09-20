# Olli's Astro Club

This project's aim is to become an informative, attractive, and inspiring website for young astronomy and space exploration enthusiasts.
The informational part of it shall always be free, but future monetization is to be considered.

Website: [Olli's Astro Club](https://www.ollis-astro-club)

Title:

- English: Olli's Astro Club
- German: Ollis Astro Club

Logo: A logo exists already, see @./assets/logo-astro-club-300x300.png

**Generative AI task:**

Set up the foundational documents (Claude.md etc.) to guide the AI-assisted construction of this website.
Construct concise and manageable work instructions for an AI in agentic mode.
Make reasonable suggestions on up to date development best practices for development and progressive western educational norms for content.

**Website Architecture:**

- The website should be multilingual (at first only German and English)
- Personalisation and monetization (ads) may be added later
- The website is hosted on shared hosting, i.e. there's PHP and MySQL out of the box available
- The website shoukld at this point be based on Web Components and React
- Initial navigation structure:
  - Homepage (German: Startseite)
  - Astro Tips (should contain content of current index.html) (German: Astro Tipps)
  - Astro News (German: Neuigkeiten)
  - Arts and Crafts gallery (German: Basteln und Bilder)
  - Games (German: Spiele)
  - Cartoon drawing (German: Comic zeichnen)
  - About (German: Über Uns)
  - Legal / Imprint (German: Impressum)

**Planned content:**

- Astronomy news blog
- Cartoon of the day, to be colored online and printed out
- Image gallery with arts and crafts made by Astro Club kids
- About me page (Who is Oliver Schafeld and why is he running this Astro Club page?)
- 3D solar system model to rotate and zoom (should work on a tablet too)

**Desired technology stack:**

- use web components with LitElements (reusable and documented in Storybook)
- use Storybook for design guide and component reference
- JavaScript/TypeScript (ES6+)
- HTML5 with web standards and emphasis on accesibility according to international standards
- modern CSS3, mobile first, responsive design
- Use React where applicable
- The website is hosted on shared webspace (provider Ionos), if necessary PHP and MySQL would be abailable
- Storybook
- unit testing for components
- Playwright for E2E testing

The project should demonstrate highly skilled usage of the following principles and technologies:

- Development of modular and reusable web components with LitElement and lit-html
- Integration of components into Storybook for documentation, testing, and demonstrations
- Ensured compatibility with design tokens and custom CSS properties
- Facilitation of collaboration with design teams using Figma
- Implementation of unit tests and debugging workflows
- Maintenance of high code quality with Git and modern build tools (Vite)
- Web components should be used that can be reused in React or Vue too. Web components should utilize:
  - Custom elements and Shadow DOM
  - Reactive properties and event handling where applicable
- Design system integration:
  - Use of design tokens and CSS variables
  - Component architecture in line with design principles

**Tools to be used in this project:**

- Github Copilot for spec-driven development
- Storybook for component lifecycle management
- Figma for design collaboration
- VS Code with Lit plugin
- Git
- NPM
- Vite
- Vitest
- Playwright
- ESLint (VS Code plugin is installed)

**Web design considerations:**

- Style should be friendly and colorful, but not childish. Stick close to Material UI or a comparable UI library.
- Main menu should be a burger menu for mobile and a classic pull down menu that opens over full content widht (it can become large in the future)
- Integrate a search field in the header. Search functionality may be simulated based on a Json object leading to pages that contain the respective keayword.
- A versatile slideshow component is required
- A 2D drawing tool that allows coloring of provided selectable background line drawings and saving and printing of the colored version will be implemented.
