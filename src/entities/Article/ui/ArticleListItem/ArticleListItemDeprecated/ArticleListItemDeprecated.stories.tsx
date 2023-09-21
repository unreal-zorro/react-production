import type { Meta, StoryObj } from '@storybook/react';

import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

const meta = {
  title: 'shared/ArticleListItemDeprecated',
  component: ArticleListItemDeprecated,
  argTypes: {}
} satisfies Meta<typeof ArticleListItemDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
