import { type FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';

import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { BrowserView, MobileView } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Button } from '@/shared/ui/redesigned/Button';
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Card } from '@/shared/ui/redesigned/Card';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard: FC<RatingCardProps> = memo(
  (props: RatingCardProps) => {
    const {
      className,
      title,
      feedbackTitle,
      hasFeedback,
      onCancel,
      onAccept,
      rate = 0
    } = props;
    const { t } = useTranslation('rating');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
      (selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
          setIsModalOpen(true);
        } else {
          onAccept?.(selectedStarsCount);
        }
      },
      [hasFeedback, onAccept]
    );

    const acceptHandler = useCallback(() => {
      setIsModalOpen(false);
      onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandler = useCallback(() => {
      setIsModalOpen(false);
      onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <>
            <Text title={feedbackTitle} />
            <Input
              data-testid="RatingCard.Input"
              value={feedback}
              onChange={setFeedback}
              placeholder={String(t('Ваш отзыв'))}
            />
          </>
        }
        off={
          <>
            <TextDeprecated title={feedbackTitle} />
            <InputDeprecated
              data-testid="RatingCard.Input"
              value={feedback}
              onChange={setFeedback}
              placeholder={String(t('Ваш отзыв'))}
            />
          </>
        }
      />
    );

    const content = (
      <>
        <VStack align="center" gap="8" max>
          <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
              <Text
                title={starsCount ? String(t('Спасибо за оценку!')) : title}
              />
            }
            off={
              <TextDeprecated
                title={starsCount ? String(t('Спасибо за оценку!')) : title}
              />
            }
          />

          <StarRating
            selectedStars={starsCount}
            size={40}
            onSelect={onSelectStars}
          />
        </VStack>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack gap="32" max>
              {modalContent}
              <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                  <HStack max gap="16" justify="end">
                    <Button
                      data-testid="RatingCard.Close"
                      onClick={cancelHandler}
                    >
                      {t('Закрыть')}
                    </Button>
                    <Button
                      data-testid="RatingCard.Send"
                      onClick={acceptHandler}
                    >
                      {t('Отправить')}
                    </Button>
                  </HStack>
                }
                off={
                  <HStack max gap="16" justify="end">
                    <ButtonDeprecated
                      data-testid="RatingCard.Close"
                      onClick={cancelHandler}
                      theme={ButtonTheme.OUTLINE_RED}
                    >
                      {t('Закрыть')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      data-testid="RatingCard.Send"
                      onClick={acceptHandler}
                    >
                      {t('Отправить')}
                    </ButtonDeprecated>
                  </HStack>
                }
              />
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer isOpen={isModalOpen} lazy>
            <VStack gap="32">
              {modalContent}
              <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                  <Button fullWidth onClick={cancelHandler} size={'l'}>
                    {t('Отправить')}
                  </Button>
                }
                off={
                  <ButtonDeprecated
                    fullWidth
                    onClick={cancelHandler}
                    size={ButtonSize.L}
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                }
              />
            </VStack>
          </Drawer>
        </MobileView>
      </>
    );

    return (
      <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
          <Card
            border={'partial'}
            padding={'24'}
            data-testid="RatingCard"
            className={className}
            max
          >
            {content}
          </Card>
        }
        off={
          <CardDeprecated data-testid="RatingCard" className={className} max>
            {content}
          </CardDeprecated>
        }
      />
    );
  }
);
