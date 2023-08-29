import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from './Sidebar';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
  argTypes: {}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {}
};
Light.decorators = [
  StoreDecorator({
    user: { authData: {} }
  })
];

export const Dark: Story = {
  args: {}
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: {} }
  })
];

export const NoAuth: Story = {
  args: {}
};
NoAuth.decorators = [
  StoreDecorator({
    user: {}
  })
];
