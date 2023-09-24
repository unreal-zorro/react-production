import type { StoryFn, Decorator } from '@storybook/react';
import { setFeatureFlags } from '../../../lib/features';
import { getAllFeatureFlags } from '../../../lib/features/lib/setGetFeatures';

export const NewDesignDecorator: Decorator = (StoryComponent: StoryFn) => {
  setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

  return (
    <div className="app_redesigned">
      <StoryComponent />
    </div>
  );
};
