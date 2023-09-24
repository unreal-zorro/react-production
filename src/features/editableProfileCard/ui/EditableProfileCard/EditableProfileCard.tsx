import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type FC, memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { type AsyncThunkAction } from '@reduxjs/toolkit';
import { type Currency } from '@/entities/Currency';
import { type Country } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { type Profile, ProfileCard } from '@/entities/Profile';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ValidateProfileError } from '../../model/consts/consts';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer
};

export const EditableProfileCard: FC<EditableProfileCardProps> = memo(
  (props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const idLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
      [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
      [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
      [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
      [ValidateProfileError.INCORRECT_USER_DATA]: t(
        'Имя и фамилия обязательны'
      ),
      [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст')
    };

    useInitialEffect(() => {
      if (id) {
        void dispatch(
          fetchProfileData(id) as AsyncThunkAction<Profile, string, any>
        );
      }
    });

    const onChangeFirstname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ first: value ?? '' }));
      },
      [dispatch]
    );

    const onChangeLastname = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value ?? '' }));
      },
      [dispatch]
    );

    const onChangeAge = useCallback(
      (value?: string) => {
        const ageReg = /^-?\d*$/;
        if (ageReg.test(value ?? '')) {
          dispatch(profileActions.updateProfile({ age: Number(value ?? 0) }));
        }
      },
      [dispatch]
    );

    const onChangeCity = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ city: value ?? '' }));
      },
      [dispatch]
    );

    const onChangeUsername = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ username: value ?? '' }));
      },
      [dispatch]
    );

    const onChangeAvatar = useCallback(
      (value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value ?? '' }));
      },
      [dispatch]
    );

    const onChangeCurrency = useCallback(
      (currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
      },
      [dispatch]
    );

    const onChangeCountry = useCallback(
      (country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
      },
      [dispatch]
    );

    return (
      <DynamicModuleLoader reducers={reducers}>
        <VStack gap="16" max className={classNames('', {}, [className ?? ''])}>
          <EditableProfileCardHeader />
          {validateErrors?.length &&
            validateErrors.map((err) => {
              return (
                <Text
                  key={err}
                  theme={TextTheme.ERROR}
                  text={validateErrorTranslates[err]}
                  data-testid={'EditableProfileCard.Error'}
                />
              );
            })}
          <ProfileCard
            data={formData}
            isLoading={idLoading}
            error={error}
            readonly={readonly}
            onChangeFirstname={onChangeFirstname}
            onChangeLastname={onChangeLastname}
            onChangeAge={onChangeAge}
            onChangeCity={onChangeCity}
            onChangeUsername={onChangeUsername}
            onChangeAvatar={onChangeAvatar}
            onChangeCurrency={onChangeCurrency}
            onChangeCountry={onChangeCountry}
          />
        </VStack>
      </DynamicModuleLoader>
    );
  }
);
