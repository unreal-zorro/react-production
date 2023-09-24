import { type Decorator } from '@storybook/react';
import type { FeatureFlags } from '../../../types/featureFlags';
import { setFeatureFlags } from '../../../lib/features';

export const FeaturesFlagsDecorator: (features: FeatureFlags) => Decorator =
  (features: FeatureFlags) => (story) => {
    setFeatureFlags(features);

    return story();
  };
