import type { Meta, StoryObj } from '@storybook/react';

import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

import { ArticleBlockType } from '../../model/consts/articleConsts';

const meta = {
  title: 'entities/Article/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  argTypes: {}
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      code: 'code'
    }
  }
};
