import type { Meta, StoryObj } from '@storybook/react';

import { ViewSelectorContainer } from './ViewSelectorContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ArticlesPage/ViewSelectorContainer',
  component: ViewSelectorContainer,
  argTypes: {}
} satisfies Meta<typeof ViewSelectorContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [StoreDecorator({})];
