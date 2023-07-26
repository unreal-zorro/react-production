import type { Meta, StoryObj } from '@storybook/react';

import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,
  argTypes: {}
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      user: {
        id: '1',
        username: 'username'
      },
      text: 'comment text'
    }
  }
};
