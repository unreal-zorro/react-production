import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type ArticlesPageSchema } from '../types/articlesPageSchema';
import { type Article, ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage ?? articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled, (
          state,
          action: PayloadAction<Article[]>
        ) => {
          state.isLoading = false;
          articlesAdapter.setAll(state, action.payload);
        })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = String(action.payload);
      });
  }
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions
} = articlesPageSlice;
