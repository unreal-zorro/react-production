import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({
  className = ''
}: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = (): void => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
