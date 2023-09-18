import { classNames } from '../../../lib/classNames/classNames';
import cls from './Icon.module.scss';
import type React from 'react';
import { memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
        className ?? ''
      ])}
      {...otherProps}
    />
  );
});
