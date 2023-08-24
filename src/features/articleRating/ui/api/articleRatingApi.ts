import { rtkApi } from '@/shared/api/rktApi';
import type { Article } from '@/entities/Article';

interface GetArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg {
  userId: string;
  articleId: string;
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Article[], GetArticleRatingArg>({
      query: ({ userId, articleId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId
        }
      })
    }),
    rateArticle: build.mutation<undefined, RateArticleArg>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg
      })
    })
  })
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
