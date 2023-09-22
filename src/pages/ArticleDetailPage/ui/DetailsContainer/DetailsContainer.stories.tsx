import type { Meta, StoryObj } from '@storybook/react';

import { DetailsContainer } from './DetailsContainer';

const meta = {
  title: 'shared/DetailsContainer',
  component: DetailsContainer,
  argTypes: {}
} satisfies Meta<typeof DetailsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
