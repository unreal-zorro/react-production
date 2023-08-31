import { type FC } from 'react';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const counterValue = useCounterValue();
  const { t } = useTranslation();
  const { decrement, increment, add } = useCounterActions();

  const handleInc = (): void => {
    increment();
  };

  const handleDec = (): void => {
    decrement();
  };

  const handleAddFive = (): void => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button
        data-testid="increment-btn"
        onClick={handleAddFive}
      >
        {t('add5')}
      </Button>
      <Button
        data-testid="increment-btn"
        onClick={handleInc}
      >
        {t('increment')}
      </Button>
      <Button
        data-testid="decrement-btn"
        onClick={handleDec}
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
