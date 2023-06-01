import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => resolve(import('./MainPage')), 1500);
}));
