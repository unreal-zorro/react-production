import {
  type MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param animationDelay
 * @param isOpen
 * @param onClose
 */
export function useModal(props: UseModalProps) {
  const { onClose, isOpen, animationDelay } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  // const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback((): void => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  // Новые ссылки!!!
  const onKeyDown = useCallback(
    (e: Event): void => {
      if ((e as unknown as KeyboardEvent).key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    close
  };
}
