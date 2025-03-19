import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    direction: {
      defaultDirection: 'ltr',
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => {
      const direction = document.documentElement.dir || 'ltr';
      document.documentElement.dir = direction;
      return Story();
    },
  ],
  globalTypes: {
    direction: {
      name: 'Direction',
      description: 'Direction for layout',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'transfer',
        items: ['ltr', 'rtl'],
        title: 'Direction',
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
