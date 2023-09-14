import { type UserRole } from '../consts/userConsts';
import type { FeaturesFlags } from '@/shared/types/featuresFlags';
import type { JsonSettings } from './jsonSettings';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeaturesFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
