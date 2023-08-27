import { type Decorator } from '@storybook/react';
// TODO
import { type StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line super-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { type ReducersList } from '@/shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line super-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line super-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line super-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailPage/model/slices';
// eslint-disable-next-line super-plugin/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer
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
