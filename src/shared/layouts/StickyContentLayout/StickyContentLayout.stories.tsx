import type { Meta, StoryObj } from '@storybook/react';

import { StickyContentLayout } from './StickyContentLayout';

const meta = {
  title: 'shared/StickyContentLayout',
  component: StickyContentLayout,
  argTypes: {}
} satisfies Meta<typeof StickyContentLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    left: <div>Left</div>,
    content: <div>Content</div>,
    right: <div>Right</div>
  }
};
