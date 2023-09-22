import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import React, { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
  Button as ButtonDeprecated,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import {
  getAddCommentFormError,
  getAddCommentFormText
} from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  addCommentFormActions,
  addCommentFormReducer
} from '../../model/slices/addCommentFormSlice';
import {
  DynamicModuleLoader,
  type ReducersList
} from '@/shared/lib/components/DynaminModuleLoader/DynamicModuleLoader';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer
};

const AddCommentForm: FC<AddCommentFormProps> = memo(
  (props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
      (value: string) => {
        dispatch(addCommentFormActions.setText(value));
      },
      [dispatch]
    );

    const onSendHandler = useCallback(() => {
      onSendComment(text ?? '');
      onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
      <DynamicModuleLoader reducers={reducers}>
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={
            <Card padding={'24'} border={'round'} max>
              <HStack
                data-testid="AddCommentForm"
                justify="between"
                max
                gap={'16'}
                className={classNames(cls.AddCommentFormRedesigned, {}, [
                  className ?? ''
                ])}
              >
                {error && (
                  <Text
                    text={String(t('Произошла непредвиденная ошибка'))}
                    variant={'error'}
                  />
                )}
                <Input
                  className={cls.input}
                  placeholder={String(t('Введите текст комментария'))}
                  value={text}
                  onChange={onCommentTextChange}
                  data-testid="AddCommentForm.Input"
                />
                <Button
                  onClick={onSendHandler}
                  data-testid="AddCommentForm.Button"
                >
                  {t('Отправить')}
                </Button>
              </HStack>
            </Card>
          }
          off={
            <HStack
              data-testid="AddCommentForm"
              justify="between"
              max
              className={classNames(cls.AddCommentForm, {}, [className ?? ''])}
            >
              {error && (
                <TextDeprecated
                  text={String(t('Произошла непредвиденная ошибка'))}
                  theme={TextTheme.ERROR}
                />
              )}
              <InputDeprecated
                className={cls.input}
                placeholder={String(t('Введите текст комментария'))}
                value={text}
                onChange={onCommentTextChange}
                data-testid="AddCommentForm.Input"
              />
              <ButtonDeprecated
                theme={ButtonTheme.OUTLINE}
                onClick={onSendHandler}
                data-testid="AddCommentForm.Button"
              >
                {t('Отправить')}
              </ButtonDeprecated>
            </HStack>
          }
        />
      </DynamicModuleLoader>
    );
  }
);

export default AddCommentForm;
