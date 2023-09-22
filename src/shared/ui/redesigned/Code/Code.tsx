import { classNames } from '../../../lib/classNames/classNames';
import cls from './Code.module.scss';
import { type FC, memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import CopyIcon from '../../../assets/icons/copy-20-20.svg';
import CopyIconNew from '../../../assets/icons/copy.svg';
import { ToggleFeatures } from '../../../lib/features';
import { Icon } from '../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className ?? ''])}>
          <Icon
            clickable
            onClick={onCopy}
            className={cls.copyBtn}
            Svg={CopyIconNew}
          />
          <code>{text}</code>
        </pre>
      }
      off={
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
      }
    />
  );
});
