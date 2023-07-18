import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { type ChangeEvent, type FC, memo, useMemo } from 'react';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select: FC<SelectProps> = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionList = useMemo(() => {
    return options?.map((opt) => {
      return (
        <option
          className={cls.option}
          value={opt.value}
          key={opt.value}
        >
          {opt.content}
        </option>
      );
    });
  }, [options]);

  const mods: Mods = {
    [cls.readonly]: readonly
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className ?? ''])}>
      {label && (
        <span className={cls.label}>
          {label + '>'}
        </span>
      )}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionList}
      </select>
    </div>
  );
});
