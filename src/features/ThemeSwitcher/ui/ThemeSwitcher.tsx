import { classNames } from '@/shared/lib/classNames/classNames';
import React, { type FC, memo, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC = memo(
  ({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
      console.log(theme);

      toggleTheme((newTheme) => {
        void dispatch(
          saveJsonSettings({ theme: newTheme }) as unknown as AsyncThunkAction<
            undefined,
            undefined,
            any
          >
        );
      });
    }, [dispatch, theme, toggleTheme]);

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
        off={
          <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
          >
            <IconDeprecated
              Svg={ThemeIconDeprecated}
              width={40}
              height={40}
              inverted
            />
          </Button>
        }
      />
    );
  }
);
