import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type FC, type HTMLAttributeAnchorTarget, memo } from 'react';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { ArticleView } from '../../model/consts/articleConsts';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));
};

export const ArticleList: FC<ArticleListProps> = memo(
  (props: ArticleListProps) => {
    const {
      className,
      articles,
      isLoading,
      view = ArticleView.SMALL,
      target
    } = props;
    const { t } = useTranslation('article-list');

    if (!isLoading && !articles.length) {
      return (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <Text size={TextSize.L} text={String(t('Статьи не найдены'))} />
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        data-testid={'ArticleList'}
      >
        {articles.map((item) => (
          <ArticleListItem
            article={item}
            view={view}
            target={target}
            key={item.id}
            className={cls.card}
          />
        ))}
        {isLoading && getSkeletons(view)}
      </div>
    );
  }
);
