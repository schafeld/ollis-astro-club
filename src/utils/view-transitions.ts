/**
 * View Transition Utilities
 * 
 * Provides utilities for smooth page transitions using the View Transition API.
 * Includes browser support detection and fallback handling.
 */

export interface TransitionOptions {
  duration?: number;
  easing?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

// Page cache to store already loaded pages
interface CachedPage {
  html: string;
  title: string;
  timestamp: number;
}

const pageCache = new Map<string, CachedPage>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Check if the View Transition API is supported and should be used
 * Only enable on desktop screens (768px and wider)
 */
export function isViewTransitionSupported(): boolean {
  const hasAPI = 'startViewTransition' in document;
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  return hasAPI && isDesktop;
}

/**
 * Navigate to a new page with smooth transition
 * @param url - The URL to navigate to
 * @param options - Transition configuration options
 */
export async function navigateWithTransition(
  url: string, 
  options: TransitionOptions = {}
): Promise<void> {
  const { direction = 'right' } = options;

  // Normalize URLs for comparison
  const currentUrl = window.location.pathname;
  const targetUrl = new URL(url, window.location.origin).pathname;
  
  // Don't navigate if we're already on the target page
  if (currentUrl === targetUrl) {
    console.log(`🚫 Already on page: ${targetUrl}, skipping navigation`);
    return;
  }

  // If View Transition API is not supported or we're on mobile, fall back to regular navigation
  if (!isViewTransitionSupported()) {
    console.log('🔄 View Transition API not supported or mobile device, using regular navigation');
    window.location.href = url;
    return;
  }

  console.log(`🎬 Starting view transition to: ${url} (direction: ${direction})`);

  // Add loading state
  document.body.classList.add('view-transition-loading');

  // Start the view transition
  const transition = document.startViewTransition(async () => {
    // Update the page content
    await loadPage(url);
  });

  // Add custom classes for directional transitions
  try {
    await transition.ready;
    document.documentElement.classList.add(`transition-${direction}`);
    console.log(`✨ View transition ready, applied class: transition-${direction}`);
    
    // Clean up the class after transition
    transition.finished.finally(() => {
      document.documentElement.classList.remove(`transition-${direction}`);
      document.body.classList.remove('view-transition-loading');
      console.log('🎯 View transition completed and cleaned up');
    });
  } catch (error) {
    console.warn('View transition failed:', error);
    document.body.classList.remove('view-transition-loading');
    // Fallback to regular navigation
    window.location.href = url;
  }
}

/**
 * Load page content and update the DOM
 * @param url - The URL to load
 */
async function loadPage(url: string): Promise<void> {
  try {
    // Check if we have a cached version
    const cached = pageCache.get(url);
    const now = Date.now();
    
    let html: string;
    let title: string;
    
    if (cached && (now - cached.timestamp < CACHE_DURATION)) {
      console.log(`📄 Using cached version of: ${url}`);
      html = cached.html;
      title = cached.title;
    } else {
      console.log(`🌐 Fetching fresh content for: ${url}`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to load page: ${response.status}`);
      }
      
      html = await response.text();
      const parser = new DOMParser();
      const newDocument = parser.parseFromString(html, 'text/html');
      title = newDocument.title;
      
      // Cache the page
      pageCache.set(url, {
        html,
        title,
        timestamp: now
      });
    }
    
    // Parse the HTML
    const parser = new DOMParser();
    const newDocument = parser.parseFromString(html, 'text/html');
    
    // Update the page title
    document.title = title;
    
    // Update meta tags
    updateMetaTags(newDocument);
    
    // Update the main content
    const currentBody = document.body;
    const newBody = newDocument.body;
    
    if (newBody) {
      // Copy attributes from new body to current body
      Array.from(newBody.attributes).forEach(attr => {
        currentBody.setAttribute(attr.name, attr.value);
      });
      
      // Instead of replacing all content, preserve navigation and only update main content
      const currentLayout = currentBody.querySelector('astro-layout');
      const newLayout = newBody.querySelector('astro-layout');
      
      if (currentLayout && newLayout) {
        // Preserve the navigation by only updating the main content area
        const currentMain = currentLayout.querySelector('.page-content');
        const newMain = newLayout.querySelector('.page-content');
        
        if (currentMain && newMain) {
          console.log('View Transition: Updating main content from', currentMain.innerHTML.length, 'to', newMain.innerHTML.length, 'characters');
          currentMain.innerHTML = newMain.innerHTML;
          
          // Update the page title attribute on the layout
          const newPageTitle = newLayout.getAttribute('page-title');
          if (newPageTitle) {
            currentLayout.setAttribute('page-title', newPageTitle);
            console.log('View Transition: Updated page title to', newPageTitle);
          }
        } else {
          console.warn('View Transition: Could not find .page-content elements', { currentMain, newMain });
          // Fallback: replace entire layout content
          currentLayout.innerHTML = newLayout.innerHTML;
        }
      } else {
        console.warn('View Transition: Could not find astro-layout elements', { currentLayout, newLayout });
        // Fallback: replace entire content if layout structure is different
        currentBody.innerHTML = newBody.innerHTML;
      }
      
      // Re-initialize components after content update
      await reinitializeComponents();
    }
    
    // Update the URL without triggering navigation
    window.history.pushState({}, '', url);
    console.log('View Transition: URL updated to', url, 'actual pathname is now', window.location.pathname);
    
    // Update navigation components with new path (with a small delay to ensure URL is updated)
    setTimeout(() => {
      updateNavigationComponents(url);
    }, 5);
    
  } catch (error) {
    console.error('Error loading page:', error);
    throw error;
  }
}

/**
 * Update navigation components after page change
 */
function updateNavigationComponents(url: string): void {
  // The navigation component now manages its own state, so we don't need to interfere
  // Just dispatch an event to let it know the transition is complete
  const navigation = document.querySelector('astro-navigation');
  if (navigation) {
    const pathname = new URL(url, window.location.origin).pathname;
    console.log('View Transition: dispatching transition-complete event for', pathname);
    
    navigation.dispatchEvent(new CustomEvent('transition-complete', {
      detail: { pathname }
    }));
  }
}

/**
 * Update meta tags from the new page
 */
function updateMetaTags(newDocument: Document): void {
  const metaTagsToUpdate = [
    'description',
    'keywords',
    'og:title',
    'og:description',
    'og:url',
    'twitter:title',
    'twitter:description'
  ];
  
  metaTagsToUpdate.forEach(name => {
    const currentMeta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    const newMeta = newDocument.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    
    if (currentMeta && newMeta) {
      const content = newMeta.getAttribute('content');
      if (content) {
        currentMeta.setAttribute('content', content);
      }
    }
  });
}

/**
 * Re-initialize components after page content update
 */
async function reinitializeComponents(): Promise<void> {
  // Wait for custom elements to be defined
  await Promise.all([
    customElements.whenDefined('astro-layout'),
    customElements.whenDefined('astro-navigation'),
    customElements.whenDefined('astro-button'),
    customElements.whenDefined('astro-card')
  ]);
  
  // Trigger any necessary re-initialization
  const event = new CustomEvent('page-loaded', {
    bubbles: true,
    detail: { timestamp: Date.now() }
  });
  document.dispatchEvent(event);
}

/**
 * Set up global navigation event listeners
 */
export function setupViewTransitions(): void {
  console.log('🚀 Setting up View Transitions');
  console.log(`📱 View Transition API supported: ${isViewTransitionSupported()}`);
  
  // Listen for viewport changes to update transition support
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addListener(() => {
    console.log(`📱 Viewport changed, View Transitions ${isViewTransitionSupported() ? 'enabled' : 'disabled'}`);
  });
  
  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    if (isViewTransitionSupported()) {
      navigateWithTransition(window.location.href, { direction: 'left' });
    }
  });
  
  // Handle link clicks globally (with proper delegation)
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a[href]') as HTMLAnchorElement;
    
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Skip external links, anchors, and special protocols
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#') ||
      link.target === '_blank' ||
      link.hasAttribute('download')
    ) {
      return;
    }
    
    // Skip if the link has a data attribute to disable transitions
    if (link.hasAttribute('data-no-transition')) {
      return;
    }
    
    // Prevent default navigation
    event.preventDefault();
    
    // Navigate with transition
    navigateWithTransition(href, { direction: 'right' });
  });
}