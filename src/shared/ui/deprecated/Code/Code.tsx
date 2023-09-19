import { classNames } from '../../../lib/classNames/classNames';
import cls from './Code.module.scss';
import { type FC, memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/Button';
import CopyIcon from '../../../assets/icons/copy-20-20.svg';

interface CodeProps {
  className?: string;
  text: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Code: FC<CodeProps> = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className ?? ''])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});