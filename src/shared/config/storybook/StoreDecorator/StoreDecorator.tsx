import { type Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { type ReducersList } from 'shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
};

type StoreDecoratorType = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => Decorator;

// eslint-disable-next-line react/display-name
export const StoreDecorator: StoreDecoratorType = (
  state,
  asyncReducers
) => (StoryComponent) => {
  return (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <StoryComponent />
    </StoreProvider>
  );
};
