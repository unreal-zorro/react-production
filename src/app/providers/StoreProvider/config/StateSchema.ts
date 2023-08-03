import { type CounterSchema } from 'entities/Counter';
import { type UserSchema } from 'entities/User';
import { type LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';
import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject
} from '@reduxjs/toolkit';
import { type CombinedState } from 'redux';
import { type ProfileSchema } from 'entities/Profile';
import { type AxiosInstance } from 'axios';
// import { type To } from '@remix-run/router';
// import { type NavigateOptions } from 'react-router/dist/lib/context';
import { type ArticleDetailsSchema } from 'entities/Article';
import { type ArticleDetailsPageSchema } from 'pages/ArticleDetailPage';
import { type AddCommentFormSchema } from 'features/addCommentForm';
import { type ArticlesPageSchema } from 'pages/ArticlesPage';
import { type UISchema } from 'features/UI';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  // navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
