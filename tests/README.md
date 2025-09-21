# Testing Documentation

This document outlines the comprehensive testing strategy for Olli's Astro Club website, ensuring the navigation, language selection, page transitions, and theme toggle functionality remain secure against regression bugs.

## Test Architecture

### Unit Tests (`tests/unit/`)
Unit tests focus on individual component behavior in isolation using Vitest and @open-wc/testing.

#### Coverage Areas:
- **Navigation Component** (`astro-navigation.test.ts`)
  - Basic rendering and structure
  - German/English language support
  - Active state management
  - Mobile menu toggle functionality
  - Accessibility compliance
  - Event handling
  - Responsive behavior

- **Theme Toggle** (`astro-theme-toggle.test.ts`)
  - Theme state management
  - Visual state transitions
  - localStorage persistence
  - Accessibility features
  - Size variants (sm/md/lg)
  - Animation states
  - Error handling

- **Language Selector** (`language-selector.test.ts`)
  - Dropdown functionality
  - Language switching
  - Keyboard navigation
  - Accessibility
  - Event dispatching
  - Outside click handling

### End-to-End Tests (`tests/e2e/`)
E2E tests verify complete user workflows across different browsers and devices using Playwright.

#### Test Categories:

**Navigation Flow** (`navigation.spec.ts`)
- Desktop and mobile navigation
- Menu interactions and state management
- Language switching with URL updates
- Theme persistence across navigation
- Accessibility compliance
- Visual consistency

**Page Transitions** (`page-transitions.spec.ts`)
- View Transition API support and fallbacks
- Smooth navigation experience
- Content loading states
- State preservation during transitions
- Error handling during navigation
- Performance optimization
- Mobile-specific transition behavior

**Cross-Browser Compatibility** (`cross-browser.spec.ts`)
- Browser-specific testing (Chrome, Firefox, Safari)
- Mobile device compatibility (iPhone, Pixel, iPad)
- Viewport size responsiveness
- Feature detection and graceful degradation
- Performance across different browsers
- Accessibility standards compliance

## Test Configuration

### Vitest Configuration (`vitest.config.ts`)
- **Environment**: jsdom for DOM testing
- **Setup**: Global test utilities and mocks
- **Coverage**: Comprehensive reporting with exclusions
- **File Patterns**: `src/**/*.{test,spec}.{js,ts}` and `tests/unit/**/*.{test,spec}.{js,ts}`

### Playwright Configuration (`playwright.config.ts`)
- **Browsers**: Chromium, Firefox, WebKit
- **Mobile Devices**: iPhone 12, Pixel 5
- **Base URL**: http://localhost:3000
- **Reporters**: HTML with screenshots on failure
- **Dev Server**: Automatic startup for testing

### Test Setup (`tests/setup.ts`)
Global mocks and utilities:
- `matchMedia` API mock
- `IntersectionObserver` mock
- `localStorage` mock with error handling
- View Transition API mock for older browsers
- CSS feature detection mock

## Running Tests

### Unit Tests
```bash
# Run all unit tests
npm run test:unit

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### End-to-End Tests
```bash
# Run all E2E tests
npm run test:e2e

# Run with browser UI visible
npm run test:e2e:headed

# Debug mode with step-through
npm run test:e2e:debug
```

### All Tests
```bash
# Run complete test suite
npm run test:all
```

## Test Scenarios Covered

### Critical User Journeys
1. **Navigation Flow**
   - User lands on homepage
   - Navigates through all main sections
   - Uses both desktop and mobile navigation
   - Active states update correctly

2. **Language Switching**
   - User switches from German to English
   - URLs update correctly (/en/ prefix)
   - Menu items display in correct language
   - Navigation state preserved

3. **Theme Persistence**
   - User toggles dark/light theme
   - Preference persists across page navigation
   - Theme loads correctly on page refresh
   - Graceful fallback when localStorage unavailable

4. **Mobile Experience**
   - Hamburger menu opens/closes correctly
   - Touch interactions work properly
   - Layout adapts to different screen sizes
   - Performance remains smooth on mobile devices

### Regression Protection

#### Navigation Overflow Fix
- **Issue**: Mobile nav links extending beyond container
- **Tests**: Mobile navigation layout verification
- **Protection**: Viewport overflow checks, responsive layout tests

#### Theme Toggle Accessibility
- **Features**: Keyboard navigation, ARIA attributes
- **Tests**: Focus management, screen reader support
- **Protection**: Accessibility compliance across browsers

#### Language Selector Dropdown
- **Features**: Keyboard navigation, outside click handling
- **Tests**: Dropdown state management, accessibility
- **Protection**: Cross-browser interaction consistency

#### View Transitions
- **Features**: Smooth page transitions, fallback support
- **Tests**: API support detection, performance metrics
- **Protection**: Graceful degradation on unsupported browsers

## Browser Support Matrix

| Feature | Chrome | Firefox | Safari | Mobile Chrome | Mobile Safari |
|---------|--------|---------|---------|---------------|---------------|
| Navigation | ✅ | ✅ | ✅ | ✅ | ✅ |
| Theme Toggle | ✅ | ✅ | ✅ | ✅ | ✅ |
| Language Selector | ✅ | ✅ | ✅ | ✅ | ✅ |
| View Transitions | ✅ | ⚠️* | ⚠️* | ✅ | ⚠️* |
| Backdrop Filter | ✅ | ✅ | ✅ | ✅ | ✅ |

*: Fallback to regular navigation

## Performance Benchmarks

### Load Time Targets
- Initial page load: < 3 seconds
- Navigation transitions: < 500ms
- Theme toggle response: < 200ms
- Language switch: < 1 second

### Memory Usage
- No memory leaks during extended navigation
- Component cleanup on route changes
- Event listener proper removal

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Reader Support**: Proper ARIA labels and roles
- **Focus Management**: Visible focus indicators
- **Color Contrast**: Meets minimum requirements in both themes

### Tested Features
- Skip links for keyboard users
- Proper heading hierarchy
- Alternative text for images
- Form labeling and error handling

## Continuous Integration

### Pre-commit Hooks
- Unit tests must pass
- Linting without errors
- Type checking successful

### CI Pipeline
- Unit tests on multiple Node versions
- E2E tests on all supported browsers
- Performance regression testing
- Accessibility audit

## Maintenance

### Regular Review
- Test scenarios updated with new features
- Browser compatibility matrix updated quarterly
- Performance benchmarks reviewed monthly
- Accessibility standards kept current

### Documentation Updates
- Test scenarios documented for new features
- Regression test cases added for bug fixes
- Performance expectations updated as needed