# AI Development Guide for Olli's Astro Club

## Project Overview

This document provides comprehensive guidance for AI assistants working on the Olli's Astro Club website project. The goal is to create an educational, inspiring, and accessible astronomy website for young enthusiasts.

### Core Mission
- Build an informative and attractive website for young astronomy enthusiasts
- Maintain educational quality while being engaging and age-appropriate
- Follow modern web development best practices
- Ensure accessibility and multilingual support (German/English)

## Technical Architecture

### Primary Technology Stack
- **Frontend Framework**: Web Components with LitElement + React integration
- **Build System**: Vite for fast development and optimized builds
- **Testing**: Vitest (unit) + Playwright (E2E)
- **Documentation**: Storybook for component library
- **Languages**: TypeScript/JavaScript (ES6+), HTML5, CSS3
- **Styling**: Mobile-first responsive design with CSS custom properties
- **Backend**: PHP/MySQL (shared hosting compatible)

### Development Principles
1. **Component-First Architecture**: Build reusable web components
2. **Design System**: Use design tokens and consistent styling
3. **Accessibility**: Follow WCAG 2.1 AA standards
4. **Progressive Enhancement**: Ensure basic functionality without JavaScript
5. **Performance**: Optimize for mobile devices and slow connections

## AI Agent Instructions

### When Working on Components
1. **Always create LitElement components** that can be reused across React/Vue
2. **Include TypeScript types** for all properties and events
3. **Add Storybook stories** for each component variant
4. **Write unit tests** using Vitest for component logic
5. **Document accessibility features** and keyboard navigation

### Code Quality Standards
```typescript
// Example component structure
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('astro-card')
export class AstroCard extends LitElement {
  @property({ type: String }) title = '';
  @property({ type: String }) description = '';
  
  static styles = css`
    :host {
      display: block;
      /* Use CSS custom properties for theming */
    }
  `;
  
  render() {
    return html`
      <article role="article" aria-labelledby="card-title">
        <h3 id="card-title">${this.title}</h3>
        <p>${this.description}</p>
      </article>
    `;
  }
}
```

### File Organization
```
/src
  /components     # Reusable LitElement components
  /pages         # Page-level components
  /styles        # Global CSS and design tokens
  /utils         # Shared utilities and helpers
  /types         # TypeScript type definitions
  /tests         # Test files
/stories         # Storybook stories
/docs           # Documentation
```

### Naming Conventions
- **Components**: PascalCase (`AstroCard`, `NavigationMenu`)
- **Files**: kebab-case (`astro-card.ts`, `navigation-menu.ts`)
- **CSS Classes**: BEM methodology (`astro-card__title`)
- **Custom Elements**: kebab-case with prefix (`astro-card`, `astro-nav`)

## Content Guidelines

### Educational Standards
- **Age-Appropriate**: Content suitable for ages 8-16
- **Scientific Accuracy**: Verify astronomical facts and figures
- **Inclusive Language**: Use gender-neutral and culturally sensitive terms
- **Multiple Learning Styles**: Include visual, auditory, and kinesthetic elements

### Content Types
1. **Informational Articles**: Well-researched astronomy topics
2. **Interactive Elements**: Games, quizzes, and simulations
3. **Visual Content**: Images, videos, and interactive diagrams
4. **Hands-on Activities**: Printable crafts and experiments

### Accessibility Requirements
- **Alt Text**: Descriptive alternative text for all images
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: Minimum 4.5:1 ratio for normal text

## Development Workflow

### Git Practices
- **Branch Naming**: `feature/component-name` or `fix/issue-description`
- **Commit Messages**: Use conventional commits format
- **Pull Requests**: Include component screenshots and accessibility checklist

### Testing Strategy
1. **Unit Tests**: Test component logic and rendering
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user workflows
4. **Accessibility Tests**: Use automated tools + manual testing

### Quality Gates
- [ ] TypeScript compilation passes
- [ ] All tests pass
- [ ] ESLint rules satisfied
- [ ] Accessibility audit passes
- [ ] Storybook story created/updated
- [ ] Mobile responsiveness verified

## Multilingual Support

### Implementation Approach
- Use `lit-localize` for component translations
- Maintain separate content files for German/English
- Implement language switcher component
- Consider RTL support for future expansion

### Content Localization
- **German**: Friendly, educational tone appropriate for school setting
- **English**: International English, accessible to non-native speakers
- **Cultural Sensitivity**: Avoid region-specific references

## Performance Guidelines

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Optimization Strategies
- Lazy load images and non-critical components
- Use modern image formats (WebP, AVIF)
- Implement code splitting for route-based chunks
- Minimize JavaScript bundle size

## Security Considerations

### Data Protection
- No collection of personal data from minors without consent
- Implement GDPR-compliant privacy practices
- Secure API endpoints if user-generated content is added

### Content Safety
- Moderation system for user-submitted artwork
- Safe external link verification
- Regular security audits for dependencies

## Future Monetization Preparation

### Architecture Considerations
- Design components to support ad integration
- Plan for user account system (teachers, parents)
- Consider premium content areas
- Implement analytics tracking (privacy-compliant)

## Emergency Protocols

### When Things Go Wrong
1. **Build Failures**: Check TypeScript errors first
2. **Component Issues**: Verify in Storybook isolation
3. **Accessibility Problems**: Use axe-core for automated checking
4. **Performance Degradation**: Run Lighthouse audits

### Getting Help
- Reference MDN for web standards
- Check LitElement documentation for component patterns
- Use Storybook community examples
- Consult WCAG guidelines for accessibility

## Success Metrics

### Development Quality
- Component reusability score (usage across pages)
- Test coverage percentage (>80% target)
- Accessibility compliance (100% automated tests pass)
- Performance budget adherence

### Educational Impact
- User engagement metrics (time on site, return visits)
- Educational content completion rates
- Positive feedback from educators and parents

---

*This document should be updated as the project evolves. AI assistants should reference this guide for all development decisions.*