import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react';
import type { Article } from '../../model/types/article';
import type { ArticleView } from '../../model/consts/articleConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
  (props: ArticleListItemProps) => {
    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ArticleListItemRedesigned {...props} />}
        off={<ArticleListItemDeprecated {...props} />}
      />
    );
  }
);
