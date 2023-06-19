import { type Decorator, type StoryFn } from '@storybook/react';
import { useEffect } from 'react';
// @ts-expect-error
import isLokiRunning from '@loki/is-loki-running';
// @ts-expect-error
import createAsyncCallback from '@loki/create-async-callback';

const delay = 1000;

export const LokiDecorator: Decorator = (StoryComponent: StoryFn) => {
  useEffect(() => {
    if (isLokiRunning()) {
      const onDone = createAsyncCallback();
      const timer = setTimeout(() => {
        onDone();
      }, delay);
      return () => { clearTimeout(timer); };
    }

    return undefined;
  }, []);

  return <StoryComponent />;
};
