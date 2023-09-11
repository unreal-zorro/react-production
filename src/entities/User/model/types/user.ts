import { type UserRole } from '../consts/userConsts';
import type { FeaturesFlags } from '@/shared/types/featuresFlags';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeaturesFlags;
}

export interface UserSchema {
  authData?: User;

  _inited: boolean;
}
