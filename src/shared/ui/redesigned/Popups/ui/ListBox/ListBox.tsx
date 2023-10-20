import React, { Fragment, type ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import {
  classNames,
  type Mods
} from '../../../../../lib/classNames/classNames';
import { Button } from '../../../../redesigned/Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { type DropdownDirection } from '../../../../../types/ui';
import { mapDirectionClasses } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import ArrowIcon from '../../../../../assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
  value: T;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  items?: Array<ListBoxItem<T>>;
  className?: string;
  value?: T;
  defaultValue?: string;
  onChange: (value: T) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label
  } = props;

  const optionsClasses = [mapDirectionClasses[direction], popupCls.menu];

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value) as ListBoxItem<T>;
  }, [items, value]);

  const mods: Mods = {
    [cls.readonly]: readonly
  };

  return (
    <HStack gap="4">
      {label && (
        <span className={classNames('', mods, [className ?? ''])}>{label}</span>
      )}
      <HListBox
        as="div"
        className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button
          as={Button}
          variant={'filled'}
          // disabled={readonly}
          addonRight={<Icon Svg={ArrowIcon} />}
          // aria-disabled={readonly}
        >
          {selectedItem?.content ?? defaultValue}
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, optionsClasses)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [popupCls.active]: active,
                    [popupCls.disabled]: item.disabled,
                    [popupCls.selected]: selected
                  })}
                >
                  {selected}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
