import { useTranslation } from 'react-i18next';
import { type FC } from 'react';
import { Page } from '@/widgets/Page';

const AdminPanelPage: FC = () => {
  const { t } = useTranslation('admin-panel');

  return (
    <Page data-testid='AdminPanelPage'>
      {t('Панель администратора')}
    </Page>
  );
};

export default AdminPanelPage;
