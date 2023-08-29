import { classNames } from '../../lib/classNames/classNames';
import cls from './Card.module.scss';
import { type FC, type HTMLAttributes, memo, type ReactNode } from 'react';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

export const Card: FC<CardProps> = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, { [cls.max]: max }, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
