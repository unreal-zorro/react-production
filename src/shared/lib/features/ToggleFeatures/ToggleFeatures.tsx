import type { FeaturesFlags } from '../../../types/featuresFlags';
import type { ReactElement } from 'react';
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
  feature: keyof FeaturesFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
  const { on, off, feature } = props;

  if (getFeatureFlag(feature)) {
    return on;
  }

  return off;
};
