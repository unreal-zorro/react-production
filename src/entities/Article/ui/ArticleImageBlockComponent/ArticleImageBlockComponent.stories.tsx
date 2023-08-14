import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

import { ArticleBlockType } from '../../model/consts/articleConsts';

const meta = {
  title: 'entities/Article/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  argTypes: {}
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.IMAGE,
      src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      title: 'title'
    }
  }
};
