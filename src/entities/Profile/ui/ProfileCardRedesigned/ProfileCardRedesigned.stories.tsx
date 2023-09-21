import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCardRedesigned } from './ProfileCardRedesigned';

const meta = {
  title: 'shared/ProfileCardRedesigned',
  component: ProfileCardRedesigned,
  argTypes: {}
} satisfies Meta<typeof ProfileCardRedesigned>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
