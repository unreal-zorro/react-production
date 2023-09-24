import type { Meta, StoryObj } from '@storybook/react';

import { ScrollToTopButton } from './ScrollToTopButton';

const meta = {
  title: 'shared/ScrollToTopButton',
  component: ScrollToTopButton,
  argTypes: {}
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
