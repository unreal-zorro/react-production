import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage: FC<SettingsPageProps> = memo((props: SettingsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('settings');

  return (
    <Page className={className}>
      <VStack gap={'16'}>
        <Text title={String(t('Настройки пользователя'))} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
