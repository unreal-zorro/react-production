import { classNames } from '../../../lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { type FC, memo } from 'react';
import { HStack } from '../Stack';
import AppSvg from '../../../assets/icons/app-image.svg';

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo: FC<AppLogoProps> = memo((props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <AppSvg
        className={cls.appLogo}
        width={size}
        height={size}
        color="black"
      />
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
    </HStack>
  );
});
