import { classNames } from '../../../lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { type LinkProps, NavLink } from 'react-router-dom';
import { memo, type ReactNode } from 'react';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className = '',
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames('', { [activeClassName]: isActive }, [
          className,
          cls[variant]
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});
