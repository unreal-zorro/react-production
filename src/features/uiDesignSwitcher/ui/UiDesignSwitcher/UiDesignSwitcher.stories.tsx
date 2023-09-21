import type { Meta, StoryObj } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';

const meta = {
  title: 'shared/UiDesignSwitcher',
  component: UiDesignSwitcher,
  argTypes: {}
} satisfies Meta<typeof UiDesignSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {

  }
};
