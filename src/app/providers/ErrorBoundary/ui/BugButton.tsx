import { type FC, useEffect, useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrow}>{t('Пробросить ошибку')}</Button>;
};
