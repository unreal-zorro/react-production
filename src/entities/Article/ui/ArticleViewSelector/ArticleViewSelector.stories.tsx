import type { Meta, StoryObj } from '@storybook/react';

import { ArticleViewSelector } from './ArticleViewSelector';

import { ArticleView } from '../../model/consts/articleConsts';

const meta = {
  title: 'entities/Article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {}
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    view: ArticleView.SMALL
  }
};

export const Big: Story = {
  args: {
    view: ArticleView.BIG
  }
};
