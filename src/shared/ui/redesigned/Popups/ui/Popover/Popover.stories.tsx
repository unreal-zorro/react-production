import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta = {
  title: 'shared/Popover',
  component: Popover,
  argTypes: {}
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    direction: 'bottom right',
    trigger: <p>ICON</p>,
    children: 'Hello'
  }
};
