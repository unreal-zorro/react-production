import { type Decorator } from '@storybook/react';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

// eslint-disable-next-line react/display-name
export const StoreDecorator: (state: DeepPartial<StateSchema>) => Decorator = (state: DeepPartial<StateSchema>) => (
  StoryComponent
) => {
  return (
    <StoreProvider initialState={state}>
      <StoryComponent />
    </StoreProvider>
  );
};
