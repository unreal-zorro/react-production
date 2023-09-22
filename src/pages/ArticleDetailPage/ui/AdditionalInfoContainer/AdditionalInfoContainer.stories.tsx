import type { Meta, StoryObj } from '@storybook/react';

import { AdditionalInfoContainer } from './AdditionalInfoContainer';

const meta = {
  title: 'shared/AdditionalInfoContainer',
  component: AdditionalInfoContainer,
  argTypes: {}
} satisfies Meta<typeof AdditionalInfoContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
