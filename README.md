# 🌟 Olli's Astro Club Website

A modern, component-based website for an astronomy club built with LitElement, TypeScript, and Vite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Start Storybook (component development)
npm run storybook
```

## 🎯 Project Status

### ✅ Completed
- [x] Project architecture and structure
- [x] LitElement components (Button, Card, Navigation, Layout)
- [x] Design system with CSS custom properties
- [x] TypeScript configuration
- [x] Vite build setup
- [x] Responsive HTML pages (Home, Club, Contact, Meetings)
- [x] Modern CSS with design tokens
- [x] Accessibility features (WCAG 2.1 AA)

### 🔄 In Progress
- [ ] Storybook component documentation
- [ ] Testing infrastructure (Vitest + Playwright)
- [ ] Additional UI components
- [ ] Content management system

### 📋 Next Steps
- [ ] Form functionality for contact page
- [ ] Image optimization and asset management
- [ ] SEO enhancements
- [ ] Progressive Web App features
- [ ] Internationalization (German/English)
- [ ] Analytics integration

## 🏗️ Architecture

### Tech Stack
- **Frontend:** LitElement (Web Components)
- **Language:** TypeScript (strict mode)
- **Build:** Vite with modern bundling
- **Styling:** Modern CSS3 with design tokens
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Documentation:** Storybook

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements
│   └── layout/         # Layout components
├── styles/             # Global styles and tokens
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── pages/              # Page-specific components

public/                 # Static assets
tests/                  # Test files
stories/                # Storybook stories
```

### Component Design
- **Web Components:** Framework-agnostic, future-proof
- **Design Tokens:** Consistent theming and spacing
- **Accessibility:** WCAG 2.1 AA compliance
- **Mobile-first:** Responsive design patterns

## 🎨 Design System

### Colors
- Primary: `#1e3a8a` (Blue 800)
- Secondary: `#059669` (Green 600)
- Background: `#ffffff` / `#f8fafc`
- Text: `#1f2937` / `#6b7280`

### Typography
- Font Family: Inter (fallback: system fonts)
- Scale: 0.75rem - 3rem (12px - 48px)
- Weights: 400, 500, 600, 700

### Spacing
- Base unit: `0.25rem` (4px)
- Scale: xs(4px) → sm(8px) → md(16px) → lg(24px) → xl(32px) → 2xl(48px) → 3xl(64px)

## 🧪 Component Library

### Available Components

#### AstroButton
```html
<astro-button variant="primary" size="lg" href="/page">
  Click me
</astro-button>
```

#### AstroCard
```html
<astro-card title="Card Title" subtitle="Subtitle" variant="elevated">
  <p>Card content goes here</p>
  <div slot="actions">
    <astro-button size="sm">Action</astro-button>
  </div>
</astro-card>
```

#### AstroNavigation
```html
<astro-navigation current-path="/club"></astro-navigation>
```

#### AstroLayout
```html
<astro-layout page-title="Page Title" current-path="/page">
  <p>Page content</p>
</astro-layout>
```

## 🌐 Pages

- **Home** (`/`) - Welcome page with club overview
- **Club** (`/club`) - About the club and membership
- **Meetings** (`/meetings`) - Events and schedule
- **Contact** (`/contact`) - Contact form and information
- **Observations** (`/observations`) - Coming soon
- **Tutorials** (`/tutorials`) - Coming soon

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm 9+

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript strict mode
- Husky for git hooks (planned)

### Browser Support
- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers with ES2020 support

## 📱 Features

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility

### Performance
- Modern ES modules
- Tree-shaking with Vite
- Lazy loading components
- Optimized asset delivery
- Minimal runtime overhead

### SEO
- Meta tags and Open Graph
- Semantic markup
- Fast loading times
- Mobile-friendly design

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 🔗 Links

- [Live Demo](https://ollis-astro-club.com) (coming soon)
- [Storybook](https://storybook.ollis-astro-club.com) (coming soon)
- [Documentation](./docs/) (coming soon)

---

Built with ❤️ for the astronomy community
