import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {}
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 35,
      country: Country.Russia,
      lastname: 'LastName',
      first: 'FirstName',
      city: 'City',
      currency: Currency.RUB,
      avatar
    }
  }
};

export const WithError: Story = {
  args: {
    error: 'error'
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};
