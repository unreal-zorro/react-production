import type { Meta, StoryObj } from '@storybook/react';

import { ProfileCard } from './ProfileCard';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {}
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const primaryArgs = {
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
};

export const Primary: Story = {
  args: primaryArgs
};

export const PrimaryRedesigned: Story = {
  args: primaryArgs
};
PrimaryRedesigned.decorators = [NewDesignDecorator];

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
