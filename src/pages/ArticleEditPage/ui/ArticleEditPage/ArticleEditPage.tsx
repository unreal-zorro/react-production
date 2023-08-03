import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = memo((props: ArticleEditPageProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation('article-edit');
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className ?? ''])}>
      {isEdit
        ? `${t('Редактирование статьи с ID = ')}${id ?? ''}`
        : t('Создание новой статьи')
      }
    </Page>
  );
});

export default ArticleEditPage;
