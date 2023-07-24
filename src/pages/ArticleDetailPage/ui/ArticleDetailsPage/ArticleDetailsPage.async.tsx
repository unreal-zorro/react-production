import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => { resolve(import('./ArticleDetailsPage')); }, 1500);
}));
