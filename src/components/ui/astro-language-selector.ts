import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * AstroLanguageSelector Component
 * 
 * A language selection dropdown component that toggles between German and English.
 * German is the configurable default language.
 * Supports keyboard navigation and proper accessibility.
 */
@customElement('astro-language-selector')
export class AstroLanguageSelector extends LitElement {
  @property({ type: String, attribute: 'default-language' }) defaultLanguage = 'de';
  @property({ type: String, attribute: 'current-language' }) currentLanguage = 'de';
  @property({ type: Boolean, reflect: true }) disabled = false;
  
  @state() private _isOpen = false;
  @state() private _focusedIndex = -1;

  private _languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center; /* Ensure vertical centering */
      position: relative;
      opacity: 0;
      animation: fadeIn 0.2s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-2px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .language-selector {
      position: relative;
      font-family: var(--astro-font-family);
    }

    .selector-button {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xs);
      padding: var(--astro-spacing-xs) var(--astro-spacing-sm);
      background: var(--astro-background-color);
      border: 1px solid var(--astro-border-color);
      border-radius: var(--astro-border-radius);
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-color);
      min-width: 100px;
      height: 28px; /* Match md theme toggle height */
      user-select: none;
    }

    .selector-button:hover:not(:disabled) {
      background: var(--astro-background-hover);
      border-color: var(--astro-primary-light);
      box-shadow: var(--astro-shadow-sm);
    }

    .selector-button:focus {
      outline: none;
      border-color: var(--astro-primary-color);
      box-shadow: 0 0 0 2px rgba(30, 58, 138, 0.1);
    }

    .selector-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .selector-button[aria-expanded="true"] {
      border-color: var(--astro-primary-color);
      box-shadow: 0 0 0 2px rgba(30, 58, 138, 0.1);
    }

    .current-language {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xs);
      flex: 1;
    }

    .flag {
      font-size: 1rem;
    }

    .chevron {
      width: 16px;
      height: 16px;
      transition: transform 0.2s ease;
      color: var(--astro-text-light);
    }

    .chevron.open {
      transform: rotate(180deg);
    }

    .dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--astro-background-color);
      border: 1px solid var(--astro-border-color);
      border-radius: var(--astro-border-radius);
      box-shadow: var(--astro-shadow-md);
      z-index: 99999; /* Much higher than navigation */
      margin-top: 2px;
      overflow: hidden;
      transform: translateY(-4px);
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;
    }

    .dropdown.open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .language-option {
      display: flex;
      align-items: center;
      gap: var(--astro-spacing-xs);
      padding: var(--astro-spacing-sm);
      cursor: pointer;
      transition: background-color 0.2s ease;
      border: none;
      background: none;
      width: 100%;
      text-align: left;
      font-family: inherit;
      font-size: var(--astro-font-size-sm);
      color: var(--astro-text-color);
    }

    .language-option:hover,
    .language-option:focus {
      background: var(--astro-background-hover);
      outline: none;
    }

    .language-option.focused {
      background: var(--astro-primary-light);
      color: white;
    }

    .language-option.selected {
      background: var(--astro-primary-color);
      color: white;
    }

    .language-option.selected:hover {
      background: var(--astro-primary-dark);
    }

    .checkmark {
      margin-left: auto;
      width: 16px;
      height: 16px;
      opacity: 0;
    }

    .language-option.selected .checkmark {
      opacity: 1;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .selector-button {
        min-width: 80px;
        padding: var(--astro-spacing-xs);
      }
      
      .language-name {
        display: none;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    
    // Initialize language from localStorage, browser, or default
    this.currentLanguage = this._getInitialLanguage();
    
    // Listen for clicks outside to close dropdown
    document.addEventListener('click', this._handleDocumentClick);
    document.addEventListener('keydown', this._handleDocumentKeydown);
  }

  private _getInitialLanguage(): string {
    const LANGUAGE_KEY = 'preferred-language';
    const SUPPORTED_LANGUAGES = ['de', 'en'];
    
    // 1. Check if current language is already set and valid
    if (this.currentLanguage && SUPPORTED_LANGUAGES.includes(this.currentLanguage)) {
      return this.currentLanguage;
    }
    
    // 2. Check localStorage
    try {
      const stored = localStorage.getItem(LANGUAGE_KEY);
      if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
        return stored;
      }
    } catch (e) {
      console.warn('LocalStorage not available:', e);
    }
    
    // 3. Detect from browser language
    const languages = navigator.languages || [navigator.language];
    for (const lang of languages) {
      const normalizedLang = lang.toLowerCase().split('-')[0];
      if (SUPPORTED_LANGUAGES.includes(normalizedLang)) {
        return normalizedLang;
      }
    }
    
    // 4. Fall back to default
    return this.defaultLanguage;
  }

  private _saveLanguagePreference(language: string) {
    const LANGUAGE_KEY = 'preferred-language';
    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch (e) {
      console.warn('Could not save language preference:', e);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleDocumentClick);
    document.removeEventListener('keydown', this._handleDocumentKeydown);
  }

  private _handleDocumentClick = (event: Event) => {
    if (!this.contains(event.target as Node)) {
      this._closeDropdown();
    }
  };

  private _handleDocumentKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this._isOpen) {
      this._closeDropdown();
      this._focusButton();
    }
  };

  private _handleButtonClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._toggleDropdown();
  }

  private _toggleDropdown() {
    if (this.disabled) return;
    
    this._isOpen = !this._isOpen;
    this._focusedIndex = -1;
    
    if (this._isOpen) {
      // Focus the currently selected language when opening
      const currentIndex = this._languages.findIndex(lang => lang.code === this.currentLanguage);
      this._focusedIndex = currentIndex >= 0 ? currentIndex : 0;
    }
    
    // Force a re-render
    this.requestUpdate();
  }

  private _closeDropdown() {
    this._isOpen = false;
    this._focusedIndex = -1;
  }

  private async _selectLanguage(languageCode: string) {
    // Close dropdown immediately for better UX
    this._closeDropdown();
    
    if (languageCode === this.currentLanguage) {
      return; // Already on this language
    }

    // Dispatch event for external listeners
    this.dispatchEvent(new CustomEvent('language-change', {
      bubbles: true,
      detail: { 
        previousLanguage: this.currentLanguage,
        newLanguage: languageCode 
      }
    }));
    
    // Update internal state
    this.currentLanguage = languageCode;
    
    // Trigger re-render to update the current language display
    this.requestUpdate();
    await this.updateComplete;
    
    // Update ARIA labels after state change
    this.updateComplete.then(() => {
      const button = this.shadowRoot?.querySelector('.selector-button') as HTMLButtonElement;
      if (button) {
        const currentLang = this._languages.find(lang => lang.code === this.currentLanguage);
        if (currentLang) {
          button.setAttribute('aria-label', `Sprache ändern (aktuell: ${currentLang.name})`);
        }
      }
      
      // Update ARIA selected states for options
      this.shadowRoot?.querySelectorAll('.language-option').forEach((option: Element) => {
        const isSelected = option.getAttribute('data-lang') === this.currentLanguage;
        option.setAttribute('aria-selected', isSelected.toString());
      });
    });
    
    // Navigate to the new language URL
    await this._navigateToLanguage(languageCode);
  }

  private async _navigateToLanguage(languageCode: string) {
    const currentPath = window.location.pathname;
    const currentLangCode = this._getCurrentLanguageFromPath();
    
    console.log('🔍 Navigation Debug:', {
      currentPath,
      currentLangCode,
      targetLanguage: languageCode
    });
    
    let newPath: string;
    
    // ROBUST PATH BUILDING - Multiple safety checks
    if (currentLangCode && currentPath.includes(`/${currentLangCode}/`)) {
      // We have a current language in the path, replace it
      if (currentPath === `/${currentLangCode}/`) {
        // Simple case: we're on the language root page
        newPath = `/${languageCode}/`;
        console.log('📍 Root page replacement:', `/${currentLangCode}/` + ' → ' + newPath);
      } else {
        // We're on a specific page, replace the language part
        newPath = currentPath.replace(`/${currentLangCode}/`, `/${languageCode}/`);
        console.log('📄 Page replacement:', currentPath + ' → ' + newPath);
      }
    } else {
      // No current language detected in path OR path doesn't contain language
      console.log('🏠 No language detected, building new path');
      if (currentPath === '/' || currentPath === '') {
        newPath = `/${languageCode}/`;
      } else if (currentPath.startsWith('/')) {
        // Remove leading slash and add language prefix
        newPath = `/${languageCode}${currentPath}`;
      } else {
        // Edge case: path doesn't start with slash
        newPath = `/${languageCode}/${currentPath}`;
      }
      console.log('➕ Built new path:', currentPath + ' → ' + newPath);
    }
    
    // MULTIPLE SAFETY CHECKS - NEVER allow navigation to root "/"
    if (!newPath || newPath === '/' || newPath === '' || !newPath.startsWith(`/${languageCode}/`)) {
      console.log('⚠️ SAFETY: Invalid path detected, forcing language root:', newPath);
      newPath = `/${languageCode}/`;
    }
    
    // Additional safety: ensure path always starts with /{languageCode}/
    if (!newPath.startsWith(`/${languageCode}/`)) {
      console.log('⚠️ SAFETY: Path missing language prefix, fixing:', newPath);
      newPath = `/${languageCode}/`;
    }
    
    console.log('🎯 Final navigation path (GUARANTEED safe):', newPath);
    
    // Ensure localStorage is saved before navigation
    this._saveLanguagePreference(languageCode);
    
    // SIMPLE NAVIGATION - Skip complex view transitions for now to ensure reliability
    try {
      // Use simple window.location.assign for reliable navigation
      console.log('🚀 Navigating with window.location.assign to:', newPath);
      window.location.assign(newPath);
    } catch (error) {
      // Absolute last resort fallback
      console.error('❌ Navigation failed, using href fallback:', error);
      window.location.href = newPath;
    }
  }

  private _getCurrentLanguageFromPath(): string | null {
    const pathname = window.location?.pathname || '/';
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    console.log('🔍 Language detection:', {
      pathname,
      pathSegments,
      firstSegment,
      availableLanguages: this._languages.map(l => l.code)
    });
    
    if (this._languages.some(lang => lang.code === firstSegment)) {
      console.log('✅ Language detected:', firstSegment);
      return firstSegment;
    }
    
    console.log('❌ No language detected in path');
    return null;
  }

  private async _handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!this._isOpen) {
          this._toggleDropdown();
        } else if (this._focusedIndex >= 0) {
          await this._selectLanguage(this._languages[this._focusedIndex].code);
        }
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (!this._isOpen) {
          this._toggleDropdown();
        } else {
          this._focusedIndex = Math.min(this._focusedIndex + 1, this._languages.length - 1);
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this._isOpen) {
          this._focusedIndex = Math.max(this._focusedIndex - 1, 0);
        }
        break;

      case 'Escape':
        event.preventDefault();
        this._closeDropdown();
        break;

      case 'Tab':
        this._closeDropdown();
        break;
    }
  }

  private async _handleOptionClick(languageCode: string) {
    await this._selectLanguage(languageCode);
    this._focusButton();
  }

  private _focusButton() {
    const button = this.shadowRoot?.querySelector('.selector-button') as HTMLElement;
    button?.focus();
  }

  private _getCurrentLanguage() {
    return this._languages.find(lang => lang.code === this.currentLanguage) || this._languages[0];
  }

  render() {
    const currentLang = this._getCurrentLanguage();

    return html`
      <div class="language-selector">
        <button
          class="selector-button"
          @click=${this._handleButtonClick}
          @keydown=${this._handleKeyDown}
          aria-expanded=${this._isOpen}
          aria-haspopup="listbox"
          aria-label="Select language"
          ?disabled=${this.disabled}
        >
          <div class="current-language">
            <span class="flag">${currentLang.flag}</span>
            <span class="language-name">${currentLang.name}</span>
          </div>
          <svg class="chevron ${this._isOpen ? 'open' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <div class="dropdown ${this._isOpen ? 'open' : ''}" role="listbox">
          ${this._languages.map((language, index) => html`
            <button
              class="language-option ${language.code === this.currentLanguage ? 'selected' : ''} ${index === this._focusedIndex ? 'focused' : ''}"
              role="option"
              aria-selected=${language.code === this.currentLanguage}
              @click=${() => this._handleOptionClick(language.code)}
              @mouseenter=${() => { this._focusedIndex = index; }}
            >
              <span class="flag">${language.flag}</span>
              <span class="language-name">${language.name}</span>
              <svg class="checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </button>
          `)}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-language-selector': AstroLanguageSelector;
  }
}