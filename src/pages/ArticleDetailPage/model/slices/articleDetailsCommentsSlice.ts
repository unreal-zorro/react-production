import {
  createEntityAdapter,
  createSlice, type PayloadAction
} from '@reduxjs/toolkit';
import { type Comment } from 'entities/Comment';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ArticleDetailsCommentSchema } from '../types/ArticleDetailsCommentSchema';
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments ?? commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {}
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled, (
          state,
          action: PayloadAction<Comment[]>
        ) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });
  }
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;