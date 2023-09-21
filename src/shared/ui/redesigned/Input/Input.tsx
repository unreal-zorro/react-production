import { classNames, type Mods } from '../../../lib/classNames/classNames';
import cls from './Input.module.scss';
import type React from 'react';
import type { ReactNode, FC, InputHTMLAttributes } from 'react';
import { memo, useEffect, useRef, useState } from 'react';
import { HStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    addonLeft,
    addonRight,
    label,
    size = 'm',
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
    [cls.focused]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withaddonRight]: Boolean(addonRight)
  };

  const input = (
    <div
      className={classNames(cls.InputWrapper, mods, [
        className ?? '',
        cls[size]
      ])}
    >
      <div className={cls.addonLeft}>{addonLeft}</div>
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      <div className={cls.addonRight}>{addonRight}</div>
    </div>
  );

  if (label) {
    return (
      <HStack max gap={'8'}>
        <Text text={label} />
        {input}
      </HStack>
    );
  }

  return input;
});
