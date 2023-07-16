import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
// import {getProfileIsLoading} from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
// import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    className
  } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const idLoading = useSelector(getProfileIsLoading);
  // const error = useSelector(getProfileError);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={String(t('Профиль'))}/>
        <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={String(t('Ваше имя'))}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={String(t('Ваша фамилия'))}
          className={cls.input}
        />
      </div>
    </div>
  );
};
