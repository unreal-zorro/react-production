import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { type FC, memo } from 'react';
import { type ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(
  (props: ArticleImageBlockComponentProps) => {
    const {
      className,
      block
    } = props;

    return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className ?? ''])}>
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && (
          <Text text={block.title} align={TextAlign.CENTER} />
        )}
      </div>
    );
  });
