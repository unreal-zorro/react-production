import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({
  className = ''
}: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <div
      data-testid="NotFoundPage"
      className={classNames(cls.NotFoundPage, {}, [className])}
    >
      {t('Страница не найдена')}
    </div>
  );
};
