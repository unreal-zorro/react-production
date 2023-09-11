import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { type FC, memo } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/articleRating';
// import { getFeatureFlag } from '@/shared/lib/features';
// import { Counter } from '@/entities/Counter';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (
  props: ArticleDetailsPageProps
) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  // const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
  // const isCounterEnabled = getFeatureFlag('isCounterEnabled');

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}
      >
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {/* {isCounterEnabled && <Counter />} */}
          {/* {isArticleRatingEnabled && <ArticleRating articleId={id} />} */}
          <ArticleRating articleId={id} />
          <ArticleRecommendationList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
