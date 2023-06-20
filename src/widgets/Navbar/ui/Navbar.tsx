import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { type FC } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC = ({ className = '' }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        /
      </div>
    </div>
  );
};
