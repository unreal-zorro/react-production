import { classNames } from '@/shared/lib/classNames/classNames';
import { type FC, memo, Suspense, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/Text';
import { AddCommentForm } from '@/features/addCommentForm';
import { type Comment, CommentList } from '@/entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentIsLoading } from '../../model/selectors/comments';
import { addCommentFormArticle } from '../../model/services/addCommentFormArticle/addCommentFormArticle';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { type Article } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
      (text: string) => {
        void dispatch(
          addCommentFormArticle(text) as AsyncThunkAction<Comment, string, any>
        );
      },
      [dispatch]
    );

    useInitialEffect(() => {
      void dispatch(
        fetchCommentsByArticleId(id) as unknown as AsyncThunkAction<
          Article,
          undefined,
          any
        >
      );
    });

    return (
      <VStack gap="16" max className={classNames('', {}, [className ?? ''])}>
        <Text size={TextSize.L} title={String(t('Комментарии'))} />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    );
  }
);
