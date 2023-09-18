import { type FC } from 'react';
import { Flex, type FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const VStack: FC<VStackProps> = (props: VStackProps) => {
  const { align = 'start', children, ...otherProps } = props;

  return (
    <Flex direction={'column'} align={align} {...otherProps}>
      {children}
    </Flex>
  );
};
