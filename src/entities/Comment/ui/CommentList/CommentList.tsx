import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { type FC, memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { type Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
  const {
    className,
    comments,
    isLoading
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className ?? ''])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className ?? ''])}>
      {comments?.length
        ? comments.map(comment => (
          <CommentCard
            key={comment.id}
            className={cls.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={String(t('Комментарии отсутствуют'))} />
      }
    </div>
  );
});
