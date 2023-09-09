import { classNames, type Mods } from '../../lib/classNames/classNames';
import cls from './Modal.module.scss';
import type React from 'react';
import { type FC, type ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import { useModal } from '../../lib/hooks/useModal/useModal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
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
      <div className={classNames(cls.Modal, mods, [className ?? ''])}>
        <Overlay onClick={close} />
        <div className={cls.content}>
          <div className={cls.times} onClick={close}>
            &times;
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
};
