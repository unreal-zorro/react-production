import type { Meta, StoryObj } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {}
} satisfies Meta<typeof NotificationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {}
};
Normal.decorators = [
  StoreDecorator({})
];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление 1',
          description: 'Описание'
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Описание'
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Описание'
        }
      ]
    }
  ]
};
