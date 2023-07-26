import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { type CSSProperties, type FC, memo } from 'react';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton: FC<SkeletonProps> = memo((props: SkeletonProps) => {
  const {
    className,
    height,
    width,
    border
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  };

  return (
    <div
      className={classNames(cls.Skeleton, {}, [className ?? ''])}
      style={styles}
    />
  );
});
