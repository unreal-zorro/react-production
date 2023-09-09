import { type Decorator } from '@storybook/react';
import type { Theme } from '../../../const/theme';
// eslint-disable-next-line super-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator: (theme: Theme) => Decorator =
  (theme: Theme) => (StoryComponent) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
  };
