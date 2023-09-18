import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../../const/theme';

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Text'
  }
};

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear'
  }
};

export const Outline: Story = {
  args: {
    children: 'Text',
    variant: 'outline'
  }
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'l'
  }
};

export const OutlineSizeXl: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    size: 'xl'
  }
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    variant: 'outline'
  }
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled: Story = {
  args: {
    children: '>',
    variant: 'outline',
    disabled: true
  }
};
