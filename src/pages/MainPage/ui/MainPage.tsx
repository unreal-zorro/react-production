import React, { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <Page data-testid="MainPage">
      <div>{t('Главная страница')}</div>
      <div>123</div>
    </Page>
  );
};

export default MainPage;
