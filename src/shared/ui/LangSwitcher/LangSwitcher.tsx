import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import React, { type FC } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC = ({ className = '' }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then();
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
