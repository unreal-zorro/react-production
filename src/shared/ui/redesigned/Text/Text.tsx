import { classNames } from '../../../lib/classNames/classNames';
import cls from './Text.module.scss';
import { type FC, memo } from 'react';

export type TextVariant = 'primary' | 'error' | 'accent';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: 'size_s',
  m: 'size_m',
  l: 'size_l'
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1'
};

export const Text: FC<TextProps> = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    'data-testid': dataTestID = 'Text'
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];
  const sizeClass = mapSizeToClass[size];

  const additionalClasses = [
    className ?? '',
    cls[variant],
    cls[align],
    sizeClass
  ];

  return (
    <div className={classNames(cls.Text, {}, additionalClasses)}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestID}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestID}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
});
