import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import React, { type FC, memo, useCallback } from 'react';
import {
  ArticleList, type ArticleView, ArticleViewSelector
} from 'entities/Article';
import {
  DynamicModuleLoader, type ReducersList
} from 'shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import {
  articlesPageActions, articlesPageReducer, getArticles
} from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
};

const ArticlesPage: FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage() as AsyncThunkAction<undefined, undefined, any>);
  }, [dispatch]);

  useInitialEffect(() => {
    void dispatch(initArticlesPage() as AsyncThunkAction<undefined, undefined, any>);
  });

  if (error) {
    return (
      <Text text={String(t('Произошла непредвиденная ошибка'))} theme={TextTheme.ERROR} />
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.ArticlesPage, {}, [className ?? ''])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
