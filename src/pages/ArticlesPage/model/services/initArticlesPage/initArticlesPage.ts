import { type AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { type Article } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<
undefined,
undefined,
ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      dispatch(articlesPageActions.initState());
      void dispatch(fetchArticlesList({
        page: 1
      }) as unknown as AsyncThunkAction<Article, undefined, any>);
    }

    return undefined;
  }
);
