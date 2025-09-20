import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {}
  },
  typescript: {
    check: false,
  },
  viteFinal: async (config) => {
    // Customize Vite config for Storybook
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': new URL('../src', import.meta.url).pathname,
        '@/components': new URL('../src/components', import.meta.url).pathname,
        '@/styles': new URL('../src/styles', import.meta.url).pathname,
        '@/utils': new URL('../src/utils', import.meta.url).pathname,
        '@/types': new URL('../src/types', import.meta.url).pathname,
      };
    }
    return config;
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;