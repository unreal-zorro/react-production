import { classNames } from '../../lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { type CSSProperties, type FC, useMemo } from 'react';
import { AppImage } from '../AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const {
    className,
    src,
    size = 100,
    alt,
    fallbackInverted
  } = props;

  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    };
  }, [size]);

  const errorFallback = <Icon
    inverted={fallbackInverted}
    width={size}
    height={size}
    Svg={UserIcon}
  />;
  const fallback = <Skeleton
    width={size}
    height={size}
    border={'50%'}
  />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      className={classNames(cls.Avatar, {}, [className ?? ''])}
      style={styles}
      src={src}
      alt={alt}
    />
  );
};
