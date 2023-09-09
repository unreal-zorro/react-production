import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { type FC, memo } from 'react';
import { type Notifications } from '../../model/types/notifications';
import { Card, CardTheme } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';

interface NotificationItemProps {
  className?: string;
  item: Notifications;
}

export const NotificationItem: FC<NotificationItemProps> = memo(
  (props: NotificationItemProps) => {
    const { className, item } = props;

    const content = (
      <Card
        className={classNames(cls.NotificationItem, {}, [className ?? ''])}
        theme={CardTheme.OUTLINED}
      >
        <Text title={item.title} text={item.description} />
      </Card>
    );

    if (item.href) {
      return (
        <a
          className={cls.link}
          target="_blank"
          href={item.href}
          rel="noreferrer"
        >
          {content}
        </a>
      );
    }

    return content;
  }
);
