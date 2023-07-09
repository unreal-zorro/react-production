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
import { createReducerManager } from './reducerManager';

export function createReduxStore (
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): Store {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type RootState = ReducersMapObject<StateSchema>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
