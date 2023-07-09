import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {}
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {}
};
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'abc', isLoading: false }
})];

export const withError: Story = {
  args: {}
};
withError.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'abc', isLoading: false, error: 'ERROR' }
})];

export const Loading: Story = {
  args: {}
};
Loading.decorators = [StoreDecorator({
  loginForm: { username: '123', password: 'abc', isLoading: true }
})];
