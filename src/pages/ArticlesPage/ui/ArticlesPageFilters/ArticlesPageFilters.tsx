import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import React, { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import {
  type Article,
  type ArticleSortField,
  type ArticleView,
  type ArticleType
} from '@/entities/Article';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { useSelector } from 'react-redux';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { type SortOrder } from '@/shared/types/sort';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = memo(
  (props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles-page');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
      void dispatch(
        fetchArticlesList({ replace: true }) as unknown as AsyncThunkAction<
          Article,
          undefined,
          any
        >
      );
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
      (view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
      },
      [dispatch]
    );

    const onChangeSort = useCallback(
      (newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const onChangeOrder = useCallback(
      (newSort: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    const onChangeSearch = useCallback(
      (search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debouncedFetchData();
      },
      [debouncedFetchData, dispatch]
    );

    const onChangeType = useCallback(
      (value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
      },
      [dispatch, fetchData]
    );

    return (
      <div
        className={classNames(cls.ArticlesPageFilters, {}, [className ?? ''])}
      >
        <div className={cls.sortWrapper}>
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
          <ArticleViewSelector view={view} onViewClick={onChangeView} />
        </div>
        <Card className={cls.search}>
          <Input
            placeholder={String(t('Поиск'))}
            value={search}
            onChange={onChangeSearch}
          />
        </Card>
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
      </div>
    );
  }
);
