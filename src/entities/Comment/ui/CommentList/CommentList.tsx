import { classNames } from '@/shared/lib/classNames/classNames';
import { type FC, memo } from 'react';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { type Comment } from '../../model/types/comment';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo(
  (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <VStack gap="16" max className={classNames('', {}, [className ?? ''])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
      );
    }

    return (
      <VStack gap="16" max className={classNames('', {}, [className ?? ''])}>
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
        ) : (
          <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Text text={String(t('Комментарии отсутствуют'))} />}
            off={<TextDeprecated text={String(t('Комментарии отсутствуют'))} />}
          />
        )}
      </VStack>
    );
  }
);
