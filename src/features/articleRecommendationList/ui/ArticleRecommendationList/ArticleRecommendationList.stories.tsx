import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationList } from './ArticleRecommendationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import type { Article } from '@/entities/Article';

const meta = {
  title: 'features/ArticleRecommendationList',
  component: ArticleRecommendationList,
  argTypes: {}
} satisfies Meta<typeof ArticleRecommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'sdfsdf'
};

export const Normal: Story = {
  args: {}
};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3&_expand=user`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' }
      ]
    }
  ]
};
