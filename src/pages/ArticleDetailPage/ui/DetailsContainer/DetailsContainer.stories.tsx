import type { Meta, StoryObj } from '@storybook/react';

import { DetailsContainer } from './DetailsContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ArticleDetailsPage/DetailsContainer',
  component: DetailsContainer,
  argTypes: {}
} satisfies Meta<typeof DetailsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [StoreDecorator({})];
