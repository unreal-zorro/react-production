import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props: ArticleDetailsPageProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation('article');

  return (
    <div className={classNames(cls.ArticleDetailsPage, {}, [className ?? ''])}>
      ARTICLE DETAILS
    </div>
  );
};

export default memo(ArticleDetailsPage);
