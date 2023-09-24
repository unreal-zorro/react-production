import { type FC, memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import CircleIcon from '@/shared/assets/icons/circle-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton: FC<ScrollToTopButtonProps> = memo(
  (props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Icon
        width={32}
        height={32}
        clickable
        onClick={onClick}
        className={className}
        Svg={CircleIcon}
      />
    );
  }
);
