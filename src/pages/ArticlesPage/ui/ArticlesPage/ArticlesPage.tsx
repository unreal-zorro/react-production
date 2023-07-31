import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import React, { type FC, memo, useCallback } from 'react';
import {
  type Article, ArticleList, type ArticleView, ArticleViewSelector
} from 'entities/Article';
import {
  DynamicModuleLoader, type ReducersList
} from 'shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import {
  articlesPageActions, articlesPageReducer, getArticles
} from '../../model/slices/articlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

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

  useInitialEffect(() => {
    void dispatch(fetchArticlesList() as unknown as AsyncThunkAction<Article, undefined, any>);
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticlesPage, {}, [className ?? ''])}>
        {error && <Text text={String(t('Произошла непредвиденная ошибка'))} theme={TextTheme.ERROR} />}
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
