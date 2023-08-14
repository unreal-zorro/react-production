import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import React, { type FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, type SelectOption } from 'shared/ui/Select/Select';
import { type SortOrder } from 'shared/types';
import { ArticleSortField } from '../../model/consts/articleConsts';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort
  } = props;
  const { t } = useTranslation('articles-page');

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('возрастанию')
    },
    {
      value: 'desc',
      content: t('убыванию')
    }
  ], [t]);

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам')
    }
  ], [t]);

  // const changeSortHandler = useCallback((newSort: string) => {
  //   onChangeSort(newSort as ArticleSortField);
  // }, [onChangeSort]);
  //
  // const changeOrderHandler = useCallback((newOrder: string) => {
  //   onChangeOrder(newOrder as SortOrder);
  // }, [onChangeOrder]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className ?? ''])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={String(t('Сортировать ПО'))}
        value={sort}
        // onChange={changeSortHandler}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        options={orderOptions}
        label={String(t('по'))}
        value={order}
        // onChange={changeOrderHandler}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
