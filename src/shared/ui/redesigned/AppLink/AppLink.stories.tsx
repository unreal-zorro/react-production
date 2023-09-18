import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../const/theme';
import { AppLink } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text',
    variant: 'primary'
  }
};

export const Red: Story = {
  args: {
    children: 'Text',
    variant: 'red'
  }
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    variant: 'primary'
  }
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark: Story = {
  args: {
    children: 'Text',
    variant: 'red'
  }
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
