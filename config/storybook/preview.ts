import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { LokiDecorator } from '../../src/shared/config/storybook/LokiDecorator/LokiDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'fullscreen',
    themes: {
      default: 'light',
      list: [
        { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
        { name: 'dark', class: Theme.DARK, color: '#000000' },
        { name: 'orange', class: Theme.ORANGE, color: '#ffb005' }
      ]
    }
  },
  decorators: [
    LokiDecorator,
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator
  ]
};

export default preview;
