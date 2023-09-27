import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import React, { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import type { ArticleSortField, ArticleType } from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newOrder: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = memo(
  (props: ArticlesFiltersProps) => {
    const {
      className,
      onChangeType,
      onChangeSort,
      sort,
      onChangeSearch,
      search,
      onChangeOrder,
      order,
      type
    } = props;
    const { t } = useTranslation('articles-page');

    return (
      <Card
        className={classNames(cls.ArticlesFilters, {}, [className ?? ''])}
        padding={'24'}
      >
        <VStack gap={'32'}>
          <Input
            placeholder={String(t('Поиск'))}
            value={search}
            size={'s'}
            onChange={onChangeSearch}
            addonLeft={<Icon Svg={SearchIcon} />}
          />
          <ArticleTypeTabs
            value={type}
            onChangeType={onChangeType}
            className={cls.tabs}
          />
          <ArticleSortSelector
            order={order}
            sort={sort}
            onChangeOrder={onChangeOrder}
            onChangeSort={onChangeSort}
          />
        </VStack>
      </Card>
    );
  }
);
