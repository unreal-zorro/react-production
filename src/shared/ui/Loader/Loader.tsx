import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';
import { type FC } from 'react';

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className = '' }: LoaderProps) => {
  return (
    <div className={classNames('lds-roller', {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
