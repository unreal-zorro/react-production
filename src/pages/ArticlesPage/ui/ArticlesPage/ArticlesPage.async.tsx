import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => { resolve(import('./ArticlesPage')); }, 400);
}));
