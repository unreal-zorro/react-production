import { type FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine }
];

export const CountrySelect: FC<CountrySelectProps> = memo(
  (props: CountrySelectProps) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation('profile');

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange]
    );

    const listBoxProps = {
      value,
      items: options,
      defaultValue: String(t('Укажите страну')),
      label: String(t('Укажите страну')),
      onChange: onChangeHandler,
      className,
      readonly,
      direction: 'top right' as const
    };

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={<ListBox {...listBoxProps} />}
        off={<ListBoxDeprecated {...listBoxProps} />}
      />
    );
  }
);
