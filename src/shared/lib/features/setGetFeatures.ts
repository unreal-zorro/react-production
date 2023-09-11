import type { FeaturesFlags } from '../../types/featuresFlags';

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeaturesFlags;

export function setFeatureFlags(newFeaturesFlags: FeaturesFlags) {
  if (newFeaturesFlags) {
    featureFlags = newFeaturesFlags;
  }
}

export function getFeatureFlag(flag: keyof FeaturesFlags) {
  return featureFlags[flag];
}
