import type { Meta, StoryObj } from '@storybook/react';

import { FiltersContainer } from './FiltersContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ArticlesPage/FiltersContainer',
  component: FiltersContainer,
  argTypes: {}
} satisfies Meta<typeof FiltersContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [StoreDecorator({})];
