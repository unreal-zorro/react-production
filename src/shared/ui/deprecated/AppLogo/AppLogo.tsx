import { classNames } from '../../../lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { type FC, memo } from 'react';
import { HStack } from '../Stack';
import AppSvg from '../../../assets/icons/app-image.svg';

interface AppLogoProps {
  className?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const AppLogo: FC<AppLogoProps> = memo((props: AppLogoProps) => {
  const { className } = props;

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppSvg className={cls.appLogo} />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
