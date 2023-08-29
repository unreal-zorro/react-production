import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AdminPanelPage from '../ui/AdminPanelPage';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {}
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
