import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfilePage } from 'pages/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {}
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    profile: {
      form: {
        username: 'admin',
        age: 35,
        country: Country.Russia,
        lastname: 'LastName',
        first: 'FirstName',
        city: 'City',
        currency: Currency.RUB
      }
    }
  }
};
Normal.decorators = [StoreDecorator({})];

export const Dark: Story = {
  args: {
    profile: {
      form: {
        username: 'admin',
        age: 35,
        country: Country.Russia,
        lastname: 'LastName',
        first: 'FirstName',
        city: 'City',
        currency: Currency.RUB
      }
    }
  }
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
