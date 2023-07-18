import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { type CSSProperties, type FC, useMemo } from 'react';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt
  } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size ?? 100,
      height: size ?? 100
    };
  }, [size]);

  return (
    <img
      className={classNames(cls.Avatar, {}, [className ?? ''])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
};
