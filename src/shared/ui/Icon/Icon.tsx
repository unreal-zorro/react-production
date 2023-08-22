import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import type React from 'react';
import { type FC, memo } from 'react';

interface IconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon: FC<IconProps> = memo((props: IconProps) => {
  const {
    className,
    Svg,
    inverted
  } = props;

  return (
    <Svg className={classNames(inverted ? cls.inverted : cls.Icon, {}, [className ?? ''])} />
  );
});
