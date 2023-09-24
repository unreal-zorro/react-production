import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { type FC, memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar: FC<ScrollToolbarProps> = memo(
  (props: ScrollToolbarProps) => {
    const { className } = props;

    return (
      <VStack
        justify={'center'}
        align={'center'}
        max
        className={classNames(cls.ScrollToolbar, {}, [className ?? ''])}
      >
        <ScrollToTopButton />
      </VStack>
    );
  }
);
