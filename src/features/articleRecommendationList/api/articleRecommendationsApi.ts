import { rtkApi } from '@/shared/api/rktApi';
import { type Article } from '@/entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
          _expand: 'user'
        }
      })
    })
  })
});

export const useArticleRecommendationsList =
  recommendationsApi.useGetArticleRecommendationsListQuery;
