import { type FC, lazy } from 'react';
import { type LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy <FC<LoginFormProps>>(async () => await new Promise(resolve => {
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => { resolve(import('./LoginForm')); }, 1500);
}));
