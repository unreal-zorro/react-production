import { classNames } from '@/shared/lib/classNames/classNames';
import React, { type FC, memo } from 'react';
import { ArticleList } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { useSearchParams } from 'react-router-dom';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextTheme } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = memo(
  (props: ArticleInfiniteListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-list');
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
      void dispatch(
        initArticlesPage(searchParams) as unknown as AsyncThunkAction<
          undefined,
          undefined,
          any
        >
      );
    });

    if (error) {
      return (
        <Text
          text={String(t('Ошибка при загрузке статей'))}
          theme={TextTheme.ERROR}
        />
      );
    }

    return (
      <div className={classNames('', {}, [className ?? ''])}>
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={className}
        />
      </div>
    );
  }
);
