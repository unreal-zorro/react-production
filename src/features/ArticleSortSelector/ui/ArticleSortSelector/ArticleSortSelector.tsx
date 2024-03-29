import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import React, { type FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, type SelectOption } from '@/shared/ui/deprecated/Select';
import { type SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = memo(
  (props: ArticleSortSelectorProps) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation('articles-page');

    const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
      () => [
        {
          value: 'asc',
          content: t('возрастанию')
        },
        {
          value: 'desc',
          content: t('убыванию')
        }
      ],
      [t]
    );

    const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
      () => [
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
      ],
      [t]
    );

    // const changeSortHandler = useCallback((newSort: string) => {
    //   onChangeSort(newSort as ArticleSortField);
    // }, [onChangeSort]);
    //
    // const changeOrderHandler = useCallback((newOrder: string) => {
    //   onChangeOrder(newOrder as SortOrder);
    // }, [onChangeOrder]);

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <div
            className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
              className ?? ''
            ])}
          >
            <VStack gap={'8'}>
              <Text text={String(t('Сортировать по:'))} />
              <ListBox
                items={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
              />
              <ListBox
                items={orderOptions}
                value={order}
                onChange={onChangeOrder}
              />
            </VStack>
          </div>
        }
        off={
          <div
            className={classNames(cls.ArticleSortSelector, {}, [
              className ?? ''
            ])}
          >
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
        }
      />
    );
  }
);
