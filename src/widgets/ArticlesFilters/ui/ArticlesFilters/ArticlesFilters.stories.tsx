import type { Meta, StoryObj } from '@storybook/react';

import { ArticlesFilters } from './ArticlesFilters';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';

const meta = {
  title: 'shared/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {}
} satisfies Meta<typeof ArticlesFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'asc',
    type: ArticleType.ALL,
    search: '',
    onChangeSearch: (value: string) => {},
    onChangeOrder: (newOrder: SortOrder) => {},
    onChangeSort: (newOrder: ArticleSortField) => {},
    onChangeType: (type: ArticleType) => {}
  }
};
