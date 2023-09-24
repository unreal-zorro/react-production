import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from '../../../const/theme';

const meta = {
  title: 'shared/redesigned/Text',
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
    variant: 'error'
  }
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title Title Title'
  }
};

export const OnlyText: Story = {
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

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title Title Title'
  }
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
  args: {
    text: 'Description Description Description Description'
  }
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description',
    size: 'l'
  }
};

export const SizeM: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description',
    size: 'm'
  }
};

export const SizeS: Story = {
  args: {
    title: 'Title Title Title',
    text: 'Description Description Description Description',
    size: 's'
  }
};
