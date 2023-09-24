import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import React, { type FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { useSelector } from 'react-redux';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type User } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginFormComponent: FC<LoginFormProps> = (props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  // const dispatch = useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({ username, password }) as AsyncThunkAction<
        User,
        any,
        any
      >
    );
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate();
    }
  }, [dispatch, username, password, onSuccess, forceUpdate]);

  const onKeyDown = useCallback(
    (e: Event): void => {
      void (async () => {
        if ((e as unknown as KeyboardEvent).key === 'Enter') {
          await onLoginClick();
        }
      })();
    },
    [onLoginClick]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <VStack
            gap={'16'}
            className={classNames(cls.LoginForm, {}, [className ?? ''])}
          >
            <Text title={String(t('Форма авторизации'))} />
            {error && (
              <Text
                text={String(t('Вы ввели неверный логин или пароль'))}
                variant={'error'}
              />
            )}
            <Input
              autofocus
              type="text"
              className={cls.input}
              placeholder={String(t('Введите имя'))}
              onChange={onChangeUsername}
              value={username}
            />
            <Input
              type="text"
              className={cls.input}
              placeholder={String(t('Введите пароль'))}
              onChange={onChangePassword}
              value={password}
            />
            <Button
              className={cls.loginBtn}
              variant={'outline'}
              onClick={() => {
                void onLoginClick();
              }}
              disabled={isLoading}
            >
              {t('Войти')}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.LoginForm, {}, [className ?? ''])}>
            <Text title={String(t('Форма авторизации'))} />
            {error && (
              <TextDeprecated
                text={String(t('Вы ввели неверный логин или пароль'))}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              autofocus
              type="text"
              className={cls.input}
              placeholder={String(t('Введите имя'))}
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={String(t('Введите пароль'))}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={() => {
                void onLoginClick();
              }}
              disabled={isLoading}
            >
              {t('Войти')}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
};

const LoginForm: FC<LoginFormProps> = memo(LoginFormComponent);

export default LoginForm;
