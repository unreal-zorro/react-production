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
import { VStack } from '@/shared/ui/deprecated/Stack';
import { ArticleRecommendationList } from '@/features/articleRecommendationList';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
// import { toggleFeatures } from '@/shared/lib/features';
// import { useTranslation } from 'react-i18next';

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
  // const { t } = useTranslation('article-details');

  if (!id) {
    return null;
  }

  // const articleRatingCard = toggleFeatures({
  //   name: 'isArticleRatingEnabled',
  //   on: () => <ArticleRating articleId={id} />,
  //   off: () => <Card>{String(t('Оценка статей скоро появится'))}</Card>
  // });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}
      >
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {/* {articleRatingCard} */}
          {/* <ToggleFeatures */}
          {/*  feature="isArticleRatingEnabled" */}
          {/*  on={<ArticleRating articleId={id} />} */}
          {/*  off={<Card>{t('Оценка статей скоро появится!')}</Card>} */}
          {/* /> */}
          <ArticleRecommendationList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
