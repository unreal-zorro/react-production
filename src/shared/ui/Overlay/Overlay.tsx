import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';
import { type FC, memo } from 'react';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay: FC<OverlayProps> = memo((props: OverlayProps) => {
  const {
    className,
    onClick
  } = props;

  return (
    <div
      className={classNames(cls.Overlay, {}, [className ?? ''])}
      onClick={onClick}
    />
  );
});
