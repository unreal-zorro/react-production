import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../const/theme';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
};

export const Circle: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
};

export const NormalDark: Story = {
  args: {
    width: '100%',
    height: 200
  }
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
  args: {
    border: '50%',
    width: 100,
    height: 100
  }
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
