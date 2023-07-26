import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from 'entities/Article/model/types/article';

const meta = {
  title: 'shared/ArticleImageBlockComponent',
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
      src: 'src',
      title: 'title'
    }
  }
};
