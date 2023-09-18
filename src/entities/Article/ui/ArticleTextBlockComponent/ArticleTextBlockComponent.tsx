import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { type FC, memo } from 'react';
import { type ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/deprecated/Text';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> =
  memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [
          className ?? ''
        ])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  });
