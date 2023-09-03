import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AdminPanelPage from '../ui/AdminPanelPage';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {},
  decorators: [StoreDecorator({})]
} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
