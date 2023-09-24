import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Text } from '../Text/Text';

const meta = {
  title: 'shared/redesigned/Card',
  component: Card,
  argTypes: {}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: <Text title={'test'} text={'text text'} />
  }
};
