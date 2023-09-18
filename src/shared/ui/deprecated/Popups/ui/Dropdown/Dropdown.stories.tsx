import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown } from './Dropdown';
import { Button } from '../../../../deprecated/Button/Button';

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {}
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first'
      },
      {
        content: 'second'
      },
      {
        content: 'third'
      }
    ]
  }
};
