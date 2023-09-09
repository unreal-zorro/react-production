import { classNames } from '@/shared/lib/classNames/classNames';
import { type FC, Suspense } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Loader } from '@/shared/ui/Loader';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={classNames('', {}, [className ?? ''])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
