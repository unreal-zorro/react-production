import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props: LoginFormProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className ?? ''])}>
      <Input
        autofocus
        type="text"
        className={cls.input}
        placeholder={String(t('Введите имя'))}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={String(t('Введите пароль'))}
      />
      <Button
        className={cls.loginBtn}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
