import { classNames } from '@/shared/lib/classNames/classNames';
import React, { type FC, memo, useCallback } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Icon } from '@/shared/ui/deprecated/Icon';

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
      <Button
        theme={ButtonTheme.CLEAR}
        className={classNames('', {}, [className])}
        onClick={onToggleHandler}
      >
        <Icon Svg={ThemeIcon} width={40} height={40} inverted />
      </Button>
    );
  }
);
