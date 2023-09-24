import { useTranslation } from 'react-i18next';
import { type FC, memo, useState } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import type { AsyncThunkAction } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher: FC<UiDesignSwitcherProps> = memo(
  (props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();

    const items = [
      {
        content: t('Новый'),
        value: 'new'
      },
      {
        content: t('Старый'),
        value: 'old'
      }
    ];

    const onChange = (value: string) => {
      if (authData) {
        setIsLoading(true);
        void dispatch(
          updateFeatureFlag({
            userId: authData.id,
            newFeatures: {
              isAppRedesigned: value === 'new'
            }
          }) as unknown as AsyncThunkAction<undefined, undefined, any>
        ).unwrap();
        setIsLoading(false);
        forceUpdate();
      }
    };

    return (
      <HStack>
        <Text text={String(t('Вариант интерфейса'))} />
        {isLoading ? (
          <Skeleton width={100} height={40} />
        ) : (
          <ListBox
            onChange={onChange}
            items={items}
            value={isAppRedesigned ? 'new' : 'old'}
            className={className}
          />
        )}
      </HStack>
    );
  }
);
