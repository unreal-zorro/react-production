import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { type FC, memo, type ReactNode } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose
  } = props;

  const mods: Mods = {
    [cls.opened]: isOpen
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={onClose} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
