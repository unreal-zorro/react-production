import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { type FC, memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const {
    className
  } = props;

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className ?? ''])}>
      <ArticleList
        isLoading
        view={ArticleView.BIG}
        articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
