import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { type FC, type HTMLAttributeAnchorTarget, type LegacyRef, memo } from 'react';
import { type Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, type ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleView } from '../../model/consts/articleConsts';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
  virtualized?: boolean;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
    ));
};

export const ArticleList: FC<ArticleListProps> = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
    virtualized = true
  } = props;
  const { t } = useTranslation('article-list');

  const isBig = view === ArticleView.BIG;

  const itemsPerRow = isBig ? 1 : 3;
  const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          key={articles[i].id}
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
        />
      );
    }

    return (
      <div
        key={key}
        style={style}
        className={cls.row}
      >
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} text={String(t('Статьи не найдены'))} />
      </div>
    );
  }

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height,
        width,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop
      }) =>
        (
          <div
            ref={registerChild as LegacyRef<HTMLDivElement>}
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          >
            {virtualized
              ? (
                <List
                  height={height ?? 700}
                  rowCount={rowCount}
                  rowHeight={isBig ? 700 : 330}
                  rowRenderer={rowRender}
                  width={width ? width - 80 : 700}
                  autoHeight
                  onScroll={onChildScroll}
                  isScrolling={isScrolling}
                  scrollTop={scrollTop}
                />)
              : (articles.map((item) => (
                <ArticleListItem
                  article={item}
                  view={view}
                  target={target}
                  key={item.id}
                  className={cls.card}
                />)))}

            { isLoading && getSkeletons(view) }
          </div>
        )
      }
    </WindowScroller>
  );
});
