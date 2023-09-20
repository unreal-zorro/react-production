import type { Meta, StoryObj } from '@storybook/react';

import { FiltersContainer } from './FiltersContainer';

const meta = {
  title: 'shared/FiltersContainer',
  component: FiltersContainer,
  argTypes: {}
} satisfies Meta<typeof FiltersContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
