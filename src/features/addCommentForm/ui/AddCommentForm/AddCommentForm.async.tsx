import { type FC, lazy } from 'react';
import { type AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy <FC<AddCommentFormProps>>(async () => await new Promise(resolve => {
  // Не делать в реальности!!! Это для учёбы!!!
  setTimeout(() => { resolve(import('./AddCommentForm')); }, 1500);
}));
