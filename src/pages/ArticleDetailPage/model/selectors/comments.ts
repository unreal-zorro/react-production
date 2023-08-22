import { type StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments.isLoading;
};

export const getArticleCommentError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments.error;
};
