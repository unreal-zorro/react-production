import { useTranslation } from 'react-i18next';
import { type FC } from 'react';
import { Page } from '@/widgets/Page';

const AdminPanelPage: FC = () => {
  const { t } = useTranslation('admin-panel');

  return (
    <Page>
      {t('Панель администратора')}
    </Page>
  );
};

export default AdminPanelPage;
