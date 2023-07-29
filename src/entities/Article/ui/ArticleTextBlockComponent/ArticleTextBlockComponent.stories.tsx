import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleBlockType } from 'entities/Article/model/types/article';

const meta = {
  title: 'entities/Article/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  argTypes: {}
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.TEXT,
      paragraphs: ['строка 1', 'строка 2', 'строка 3']
    }
  }
};
