import { rtkApi } from 'shared/api/rktApi';

const recommendatinsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
});

export const useArticleRecommendationsList = recommendatinsApi.useGetArticleRecommendationsListQuery;
