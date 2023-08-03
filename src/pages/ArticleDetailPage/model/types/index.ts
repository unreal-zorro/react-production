import { type ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema';
import { type ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
