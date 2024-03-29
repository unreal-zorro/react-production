import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { type FC, memo } from 'react';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className = '', short = false }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = (): void => {
      void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then();
    };

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Button variant={'clear'} onClick={toggle}>
            {short ? t('Короткий язык') : t('Язык')}
          </Button>
        }
        off={
          <ButtonDeprecated
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
          >
            {short ? t('Короткий язык') : t('Язык')}
          </ButtonDeprecated>
        }
      />
    );
  }
);
