import { classNames } from '../../../lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { type FC, memo, type ReactNode, useCallback } from 'react';
import { Card } from '../Card/Card';
import type { FlexDirection } from '../Stack/Flex/Flex';
import { Flex } from '../Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs: FC<TabsProps> = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick, direction = 'row' } = props;

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick]
  );

  return (
    <Flex
      direction={direction}
      gap={'8'}
      align={'start'}
      className={classNames(cls.Tabs, {}, [className ?? ''])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;

        return (
          <Card
            key={tab.value}
            variant={isSelected ? 'light' : 'normal'}
            className={classNames(cls.tab, { [cls.selected]: isSelected })}
            onClick={clickHandle(tab)}
            border={'round'}
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
