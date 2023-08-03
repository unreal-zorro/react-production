import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { type Article, ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { type Comment, CommentList } from 'entities/Comment';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentFormArticle } from '../../model/services/addCommentFormArticle/addCommentFormArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import {
  getArticleRecommendations
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.article);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentFormArticle(text) as AsyncThunkAction<Comment, string, any>);
  }, [dispatch]);

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id) as unknown as AsyncThunkAction<Article, undefined, any>);
    void dispatch(fetchArticleRecommendations() as unknown as AsyncThunkAction<Article, undefined, any>);
  });

  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
        {t('Статья не найдена')}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={String(t('Рекомендуем'))}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={cls.recommendations}
          target={'_blank'}
        />
        <Text
          size={TextSize.L}
          className={cls.commentTitle}
          title={String(t('Комментарии'))}
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
