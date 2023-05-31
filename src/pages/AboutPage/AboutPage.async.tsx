import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
