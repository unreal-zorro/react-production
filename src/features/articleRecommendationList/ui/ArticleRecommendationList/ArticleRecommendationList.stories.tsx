import type { Meta, StoryObj } from '@storybook/react';

import { ArticleRecommendationList } from './ArticleRecommendationList';

const meta = {
  title: 'features/ArticleRecommendationList',
  component: ArticleRecommendationList,
  argTypes: {}
} satisfies Meta<typeof ArticleRecommendationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {

  }
};
