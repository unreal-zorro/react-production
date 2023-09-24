import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {}
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const normalArgs = {
  comment: {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' }
  }
};

export const Normal: Story = {
  args: normalArgs
};

export const NormalRedesigned: Story = {
  args: normalArgs
};
NormalRedesigned.decorators = [NewDesignDecorator];

export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' }
    },
    isLoading: true
  }
};
