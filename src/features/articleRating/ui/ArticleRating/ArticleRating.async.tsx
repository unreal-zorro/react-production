import { type FC, lazy, Suspense } from 'react';
import { type ArticleRatingProps } from './ArticleRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const ArticleRatingLazy = lazy <FC<ArticleRatingProps>>(
  async () => await import('./ArticleRating')
);

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width={'100%'} height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
