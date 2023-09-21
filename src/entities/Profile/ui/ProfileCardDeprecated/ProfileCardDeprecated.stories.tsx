import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCardDeprecated } from './ProfileCardDeprecated';

const meta = {
  title: 'shared/ProfileCardDeprecated',
  component: ProfileCardDeprecated,
  argTypes: {}
} satisfies Meta<typeof ProfileCardDeprecated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
