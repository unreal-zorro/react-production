import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type FC, memo } from 'react';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList: FC<ArticleRecommendationListProps> =
  memo((props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles,
      error
    } = useArticleRecommendationsList(3);

    if ((isLoading || error) ?? !articles) {
      return null;
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className ?? ''])}
        data-testid="ArticleRecommendationList"
      >
        <ToggleFeatures
          feature={'isAppRedesigned'}
          on={<Text size={'l'} title={String(t('Рекомендуем'))} />}
          off={
            <TextDeprecated
              size={TextSize.L}
              title={String(t('Рекомендуем'))}
            />
          }
        />
        <ArticleList articles={articles} target={'_blank'} />
      </VStack>
    );
  });
