import type { Meta, StoryObj } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {}
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    articleId: '1'
  }
};
Normal.decorators = [
  StoreDecorator({})
];
