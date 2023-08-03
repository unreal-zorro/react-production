import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true
      }
    });
    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({});
  });

  test('fetchArticlesList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false
      }
    });
    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('isLoading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: false
      }
    });
    await thunk.callThunk(undefined);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
