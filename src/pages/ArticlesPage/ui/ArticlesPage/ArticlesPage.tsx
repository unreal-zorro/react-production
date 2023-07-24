import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props: ArticlesPageProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className ?? ''])}>
      ARTICLES PAGE
    </div>
  );
};

export default memo(ArticlesPage);
