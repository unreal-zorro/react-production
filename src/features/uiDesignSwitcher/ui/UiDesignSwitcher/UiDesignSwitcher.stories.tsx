import type { Meta, StoryObj } from '@storybook/react';

import { UiDesignSwitcher } from './UiDesignSwitcher';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  argTypes: {}
} satisfies Meta<typeof UiDesignSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [StoreDecorator({})];
