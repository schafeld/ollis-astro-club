// Component exports and registration
import './components/ui/astro-button.js';
import './components/ui/astro-card.js';
import './components/ui/astro-navigation.js';
import './components/ui/astro-language-selector.js';
import './components/ui/astro-theme-toggle.js';
import './components/layout/astro-layout.js';

// Import styles
import './styles/main.css';

// Import and setup view transitions
import { setupViewTransitions } from './utils/view-transitions.js';

// Export components for external use
export { AstroButton } from './components/ui/astro-button.js';
export { AstroCard } from './components/ui/astro-card.js';
export { AstroNavigation } from './components/ui/astro-navigation.js';
export { AstroLanguageSelector } from './components/ui/astro-language-selector.js';
export { AstroThemeToggle } from './components/ui/astro-theme-toggle.js';
export { AstroLayout } from './components/layout/astro-layout.js';

console.log('🌟 Olli\'s Astro Club components loaded successfully!');

// Initialize view transitions
setupViewTransitions();

// Remove flash of unstyled content
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for components to initialize
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 100);
});