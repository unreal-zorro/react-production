import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ForbiddenPage from '../ui/ForbiddenPage';
import { Theme } from '@/shared/const/theme';

const meta = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {}
} satisfies Meta<typeof ForbiddenPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
