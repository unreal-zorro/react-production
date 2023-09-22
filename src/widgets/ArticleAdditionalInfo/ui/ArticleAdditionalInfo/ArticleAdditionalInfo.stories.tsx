import type { Meta, StoryObj } from '@storybook/react';

import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';

const meta = {
  title: 'shared/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  argTypes: {}
} satisfies Meta<typeof ArticleAdditionalInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    author: {
      id: '1',
      username: 'user'
    },
    createdAt: '07.07.2017',
    views: 1000
  }
};
