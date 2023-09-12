import type { FeaturesFlags } from './featuresFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
  name: keyof FeaturesFlags;
  on: () => T;
  off: () => T;
}

export function toggleFeatures<T>({
  name,
  on,
  off
}: ToggleFeaturesOptions<T>): T {
  if (getFeatureFlag(name)) {
    return on();
  }

  return off();
}
