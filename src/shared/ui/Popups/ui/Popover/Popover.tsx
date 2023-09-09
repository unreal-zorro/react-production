import { classNames } from '../../../../lib/classNames/classNames';
import cls from './Popover.module.scss';
import { type FC, memo, type ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { type DropdownDirection } from '../../../../types/ui';
import { mapDirectionClasses } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

export const Popover: FC<PopoverProps> = memo((props: PopoverProps) => {
  const { className, direction = 'bottom right', trigger, children } = props;

  const menuClasses = [mapDirectionClasses[direction]];

  return (
    <HPopover className={classNames('', {}, [className, popupCls.popup])}>
      <HPopover.Button as={'div'} className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
