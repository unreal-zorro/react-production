import { type Decorator } from '@storybook/react';
import { type Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator: (theme: Theme) => Decorator = (theme: Theme) => (StoryComponent) => {
  return (
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  );
};
