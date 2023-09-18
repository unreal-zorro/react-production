import { classNames } from '@/shared/lib/classNames/classNames';
import { type FC } from 'react';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { useParams } from 'react-router-dom';
import { ProfileRating } from '@/features/profileRating';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props: ProfilePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page
      data-testid="ProfilePage"
      className={classNames('', {}, [className ?? ''])}
    >
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
