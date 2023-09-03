import type { Meta, StoryObj } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  argTypes: {},
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof ArticleInfiniteList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
