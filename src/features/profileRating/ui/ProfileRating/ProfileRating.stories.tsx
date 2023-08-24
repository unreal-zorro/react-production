import type { Meta, StoryObj } from '@storybook/react';

import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {}
} satisfies Meta<typeof ProfileRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    profileId: '1'
  }
};
Normal.decorators = [
  StoreDecorator({})
];
