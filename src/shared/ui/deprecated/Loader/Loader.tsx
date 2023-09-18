import { classNames } from '../../../lib/classNames/classNames';
import './Loader.scss';
import { type FC } from 'react';

interface LoaderProps {
  className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
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
