# Project Structure Guide

## Overview

This document defines the organizational structure for the Olli's Astro Club website project, ensuring consistency and maintainability across all development phases.

## Root Directory Structure

```
ollis-astro-club/
├── docs/                    # Project documentation
│   ├── Claude.md           # AI development guide
│   ├── CONTRIBUTING.md     # Contribution guidelines
│   ├── DEPLOYMENT.md       # Deployment instructions
│   └── API.md              # API documentation
├── src/                    # Source code
│   ├── components/         # Reusable web components
│   ├── pages/             # Page-level components
│   ├── styles/            # Global styles and design tokens
│   ├── utils/             # Shared utilities
│   ├── types/             # TypeScript type definitions
│   ├── assets/            # Static assets
│   └── locales/           # Translation files
├── tests/                 # Test files
│   ├── unit/              # Unit tests
│   ├── integration/       # Integration tests
│   └── e2e/               # End-to-end tests
├── stories/               # Storybook stories
├── public/                # Static public files
├── build/                 # Build output (generated)
├── node_modules/          # Dependencies (generated)
├── .vscode/               # VS Code configuration
├── .github/               # GitHub workflows and templates
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
├── .eslintrc.js           # ESLint configuration
├── .gitignore             # Git ignore rules
└── README.md              # Project overview
```

## Component Organization

### `/src/components/` Structure

```
components/
├── ui/                    # Basic UI components
│   ├── button/
│   │   ├── astro-button.ts
│   │   ├── astro-button.css
│   │   └── astro-button.test.ts
│   ├── card/
│   ├── modal/
│   └── input/
├── layout/                # Layout components
│   ├── header/
│   ├── footer/
│   ├── navigation/
│   └── sidebar/
├── educational/           # Educational content components
│   ├── solar-system/
│   ├── constellation-map/
│   ├── quiz/
│   └── drawing-tool/
└── shared/                # Shared utility components
    ├── icon/
    ├── loader/
    └── error-boundary/
```

### Component File Structure

Each component should follow this pattern:

```
component-name/
├── index.ts               # Main export
├── component-name.ts      # Component implementation
├── component-name.css     # Component styles
├── component-name.test.ts # Unit tests
├── component-name.stories.ts # Storybook stories
└── README.md              # Component documentation
```

## Naming Conventions

### Files and Directories

- **Directories**: kebab-case (`solar-system`, `drawing-tool`)
- **TypeScript files**: kebab-case (`astro-button.ts`, `navigation-menu.ts`)
- **CSS files**: kebab-case (`astro-button.css`)
- **Test files**: kebab-case with suffix (`astro-button.test.ts`)
- **Story files**: kebab-case with suffix (`astro-button.stories.ts`)

### Code Elements

- **Components**: PascalCase (`AstroButton`, `NavigationMenu`)
- **Custom elements**: kebab-case with prefix (`astro-button`, `astro-nav`)
- **CSS classes**: BEM methodology (`astro-button__icon`, `astro-button--primary`)
- **CSS custom properties**: kebab-case with prefix (`--astro-color-primary`)
- **Functions**: camelCase (`calculateDistance`, `formatDate`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`, `MAX_RETRIES`)

## Asset Management

### `/src/assets/` Structure

```
assets/
├── images/                # Image files
│   ├── logos/
│   ├── illustrations/
│   ├── photos/
│   └── icons/
├── fonts/                 # Custom fonts
├── videos/                # Video files
├── audio/                 # Audio files
└── data/                  # Static data files
    ├── constellations.json
    ├── planets.json
    └── translations/
```

### Asset Naming

- **Images**: descriptive-kebab-case (`mars-surface-photo.jpg`)
- **Icons**: purpose-based (`icon-play.svg`, `icon-pause.svg`)
- **Data files**: descriptive with format (`planet-data.json`)

## Style Organization

### `/src/styles/` Structure

```
styles/
├── tokens/                # Design tokens
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── breakpoints.css
├── base/                  # Base styles
│   ├── reset.css
│   ├── typography.css
│   └── layout.css
├── components/            # Component-specific styles
├── utilities/             # Utility classes
│   ├── spacing.css
│   ├── colors.css
│   └── typography.css
└── themes/                # Theme variations
    ├── light.css
    └── dark.css
```

## Testing Organization

### Test File Placement

- **Unit tests**: Co-located with components (`component.test.ts`)
- **Integration tests**: `/tests/integration/`
- **E2E tests**: `/tests/e2e/`
- **Test utilities**: `/tests/utils/`

### Test Naming

- **Test files**: `[component-name].test.ts`
- **E2E test files**: `[feature-name].e2e.ts`
- **Test suites**: Descriptive names (`'AstroButton component'`)
- **Test cases**: Action-oriented (`'should emit click event when clicked'`)

## Documentation Standards

### README Files

Each component and major directory should include a README.md with:

- **Purpose**: What the component/module does
- **Usage**: How to use it with examples
- **Props/API**: Available properties and methods
- **Examples**: Code examples and screenshots
- **Testing**: How to test the component

### Code Comments

- **JSDoc**: For all public methods and properties
- **Inline comments**: For complex logic or workarounds
- **TODO comments**: For known technical debt (format: `TODO: Description`)

## Version Control

### Branch Naming

- **Feature branches**: `feature/component-name` or `feature/feature-description`
- **Bug fixes**: `fix/bug-description`
- **Documentation**: `docs/topic`
- **Refactoring**: `refactor/scope`

### Commit Message Format

Follow Conventional Commits:

```
type(scope): description

- feat: new feature
- fix: bug fix
- docs: documentation
- style: formatting
- refactor: code restructuring
- test: adding tests
- chore: maintenance
```

## Build and Deployment

### Environment Files

```
.env.development         # Development environment
.env.production         # Production environment
.env.local             # Local overrides (not in git)
```

### Build Outputs

```
build/
├── assets/            # Processed assets
├── components/        # Built components
├── pages/            # Built pages
└── index.html        # Main entry point
```

## IDE Configuration

### VS Code Settings (`.vscode/settings.json`)

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.css": "css"
  }
}
```

### Recommended Extensions

- Lit Plugin
- ESLint
- Prettier
- TypeScript Hero
- Auto Rename Tag
- GitLens

## Quality Gates

### Pre-commit Checks

- [ ] TypeScript compilation
- [ ] ESLint validation
- [ ] Unit tests pass
- [ ] Build succeeds
- [ ] Documentation updated

### Pull Request Requirements

- [ ] All tests pass
- [ ] Code coverage maintained
- [ ] Storybook stories updated
- [ ] Accessibility review
- [ ] Performance impact assessed

---

*This structure should be maintained consistently across all development phases. Update this document when architectural changes are made.*