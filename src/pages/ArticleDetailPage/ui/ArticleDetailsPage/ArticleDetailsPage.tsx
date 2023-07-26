import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { type Article, ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { dir } from 'i18next';
import {
  fetchCommentsByArticleId
} from 'pages/ArticleDetailPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { type AsyncThunkAction } from '@reduxjs/toolkit';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation('article-details');
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentIsLoading);

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id) as unknown as AsyncThunkAction<Article, undefined, any>);
  });

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
        <ArticleDetails id={id} />
        <Text className={cls.commentTitle} title={String(t('Комментарии'))} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
