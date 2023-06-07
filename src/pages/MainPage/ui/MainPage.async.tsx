import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));
