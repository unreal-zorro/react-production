import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus ex laudantium minima modi natus repellendus, voluptatum. Asperiores expedita, nostrum?'
  }
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus ex laudantium minima modi natus repellendus, voluptatum. Asperiores expedita, nostrum?'
  }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
