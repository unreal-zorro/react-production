import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';
import { Theme } from '../../const/theme';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {}
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};

export const Dark: Story = {
  args: {}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
