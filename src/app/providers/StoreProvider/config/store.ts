import {
  type AnyAction,
  configureStore,
  type ReducersMapObject,
  type Store,
  type ThunkDispatch
} from '@reduxjs/toolkit';
import { type StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore (initialState: StateSchema): Store {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

export type RootState = ReducersMapObject<StateSchema>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
