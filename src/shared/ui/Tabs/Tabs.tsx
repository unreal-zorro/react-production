import { classNames } from '../../lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { type FC, memo, type ReactNode, useCallback } from 'react';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.Tabs, {}, [className ?? ''])}>
      {tabs.map((tab) => (
        <Card
          key={tab.value}
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
