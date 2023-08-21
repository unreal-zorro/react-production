import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { type FC, memo, type ReactNode } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from 'shared/lib/hooks/useModal/useModal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer: FC<DrawerProps> = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy
  } = props;

  const {
    close,
    isClosing,
    isMounted
  } = useModal({
    animationDelay: 300,
    onClose,
    isOpen
  });

  const mods: Mods = {
    [cls.opened]: isOpen ?? true,
    [cls.isClosing]: isClosing
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.Drawer, mods, [className])}>
        <Overlay onClick={close} />
        <div
          className={cls.content}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
});
