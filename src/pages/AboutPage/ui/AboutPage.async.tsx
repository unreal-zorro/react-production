import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
