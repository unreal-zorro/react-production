import { classNames } from '../../lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { memo } from 'react';
import type { ReactElement, FC } from 'react';

interface StickyContentLayoutProps {
  className?: string;
  left?: ReactElement;
  content: ReactElement;
  right?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = memo(
  (props: StickyContentLayoutProps) => {
    const { className, left, content, right } = props;

    return (
      <div
        className={classNames(cls.StickyContentLayout, {}, [className ?? ''])}
      >
        {right && <div className={cls.left}>{left}</div>}
        <div className={cls.content}>{content}</div>
        {left && <div className={cls.right}>{right}</div>}
      </div>
    );
  }
);
