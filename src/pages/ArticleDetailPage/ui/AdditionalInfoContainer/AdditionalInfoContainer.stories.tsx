import type { Meta, StoryObj } from '@storybook/react';

import { AdditionalInfoContainer } from './AdditionalInfoContainer';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'pages/ArticleDetailsPage/AdditionalInfoContainer',
  component: AdditionalInfoContainer,
  argTypes: {}
} satisfies Meta<typeof AdditionalInfoContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [StoreDecorator({})];
