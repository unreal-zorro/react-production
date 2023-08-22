import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize, TextTheme } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
  title: 'shared/Text',
  component: Text,
  argTypes: {}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description'
  }
};

export const Error: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description',
    theme: TextTheme.ERROR
  }
};

export const onlyTitle: Story = {
  args: {
    title: 'Title Title Title'
  }
};

export const onlyText: Story = {
  args: {
    text: 'Description Description Description Description'
  }
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description'
  }
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
  args: {
    title: 'Title Title Title'
  }
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description'
  }
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description',
    size: TextSize.L
  }
};

export const SizeM: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description',
    size: TextSize.M
  }
};

export const SizeS: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description',
    size: TextSize.S
  }
};
