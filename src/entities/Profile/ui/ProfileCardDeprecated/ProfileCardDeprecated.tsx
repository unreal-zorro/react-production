import type { Mods } from '@/shared/lib/classNames/classNames';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import type { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
  Text as TextDeprecated,
  TextAlign,
  TextTheme
} from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation('profile');

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={String(t('Произошла ошибка при загрузке профиля'))}
        text={String(t('Попробуйте обновить страницу'))}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecatedLoader = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.ProfileCard, { [cls.loading]: true })}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecated: FC<ProfileCardProps> = (
  props: ProfileCardProps
) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props;
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        value={data?.first}
        placeholder={String(t('Ваше имя'))}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid={'ProfileCard.firstname'}
      />
      <InputDeprecated
        value={data?.lastname}
        placeholder={String(t('Ваша фамилия'))}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid={'ProfileCard.lastname'}
      />
      <InputDeprecated
        value={data?.age}
        placeholder={String(t('Ваш возраст'))}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.city}
        placeholder={String(t('Город'))}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.username}
        placeholder={String(t('Введите имя пользователя'))}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={String(t('Введите ссылку на аватар'))}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
