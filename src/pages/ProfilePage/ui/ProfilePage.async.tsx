import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => { resolve(import('./ProfilePage')); }, 1500);
}));
