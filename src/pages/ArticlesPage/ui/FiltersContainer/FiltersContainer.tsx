import { type FC, memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer: FC<FiltersContainerProps> = memo(
  (props: FiltersContainerProps) => {
    const { className } = props;
    const {
      order,
      type,
      onChangeType,
      onChangeSort,
      sort,
      onChangeSearch,
      search,
      onChangeOrder
    } = useArticleFilters();

    return (
      <ArticlesFilters
        className={className}
        search={search}
        sort={sort}
        order={order}
        type={type}
        onChangeType={onChangeType}
        onChangeSearch={onChangeSearch}
        onChangeSort={onChangeSort}
        onChangeOrder={onChangeOrder}
      />
    );
  }
);
