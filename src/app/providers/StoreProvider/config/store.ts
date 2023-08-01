import {
  type AnyAction,
  configureStore,
  type ReducersMapObject,
  type Store,
  type ThunkDispatch
} from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
// import { type To } from '@remix-run/router';
// import { type NavigateOptions } from 'react-router/dist/lib/context';
import { type CombinedState, type Reducer } from 'redux';
import { uiReducer } from 'features/UI';

export function createReduxStore (
  initialState: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
  // navigate?: (to: To, options?: NavigateOptions) => void
): Store {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    ui: uiReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api
    // navigate
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  });

  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
}

export type RootState = ReducersMapObject<StateSchema>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

// export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
