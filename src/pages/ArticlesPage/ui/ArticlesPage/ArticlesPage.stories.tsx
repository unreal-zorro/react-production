import type { Meta, StoryObj } from '@storybook/react';

import ArticlesPage from './ArticlesPage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {}
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_expand=user&_limit=9&_page=2&_sort=createdAt&_order=asc&q=`,
      method: 'GET',
      status: 200,
      response: []
    }
  ]
};
