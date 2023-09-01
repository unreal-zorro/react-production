import { useTranslation } from 'react-i18next';
import { type FC } from 'react';
import { Page } from '@/widgets/Page';

const ForbiddenPage: FC = () => {
  const { t } = useTranslation('forbidden');

  return (
    <Page data-testid='ForbiddenPage'>
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
};

export default ForbiddenPage;
