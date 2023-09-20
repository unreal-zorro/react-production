import type { Meta, StoryObj } from '@storybook/react';

import { ViewSelectorContainer } from './ViewSelectorContainer';

const meta = {
  title: 'shared/ViewSelectorContainer',
  component: ViewSelectorContainer,
  argTypes: {}
} satisfies Meta<typeof ViewSelectorContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
