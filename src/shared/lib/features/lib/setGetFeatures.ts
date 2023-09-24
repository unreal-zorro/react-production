import type { FeatureFlags } from '../../../types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '../../../const/localstorage';

const defaultFeatures: FeatureFlags = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new'
};

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeatureFlags = {
  ...defaultFeatures
};

// context
// state
// reload page
// костыль
export function setFeatureFlags(newFeaturesFlags: FeatureFlags) {
  if (newFeaturesFlags) {
    featureFlags = newFeaturesFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}

export function getAllFeatureFlags() {
  return featureFlags;
}
