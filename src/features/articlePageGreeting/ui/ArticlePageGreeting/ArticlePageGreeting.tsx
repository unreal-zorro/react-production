import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlesPageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageWasOpened) {
      setIsOpen(true);
      void dispatch(
        saveJsonSettings({
          isArticlesPageWasOpened: true
        }) as unknown as AsyncThunkAction<undefined, undefined, any>
      );
    }
  }, [dispatch, isArticlesPageWasOpened]);

  const onClose = () => {
    setIsOpen(false);
  };

  const text = (
    <Text
      title={String(t('Добро пожаловать на страницу статей'))}
      text={String(
        t('Здесь вы можете искать и просматривать статьи на различные темы')
      )}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});
