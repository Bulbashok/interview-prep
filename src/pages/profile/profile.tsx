import { Container, Box, Typography, LinearProgress, Button } from '@mui/material';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@/router/routes';
import './profile.scss';

export function ProfileLoading() {
  const { t } = useTranslation();

  return (
    <Container className="profile-page" maxWidth="sm">
      <Box className="profile-page__content">
        <div className="profile-page__spinner">
          <LinearProgress className="profile-page__progress" />
        </div>

        <Typography variant="h5" className="profile-page__title">
          {t(i18nKeys.profile.loading)}
        </Typography>
      </Box>
    </Container>
  );
}

export default function ProfilePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container className="profile-page" maxWidth="sm">
      <Box className="profile-page__content">
        <div className="profile-page__spinner">
          <LinearProgress className="profile-page__progress" />
        </div>

        <Typography variant="h5" className="profile-page__title">
          {t(i18nKeys.profile.title)}
        </Typography>

        <Typography variant="body1" className="profile-page__subtitle">
          {t(i18nKeys.profile.subtitle)}
        </Typography>

        <Typography variant="body2" className="profile-page__description">
          {t(i18nKeys.profile.description)}
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate(appRoutes.home)}
          className="profile-page__button"
        >
          {t(i18nKeys.profile.homeButton)}
        </Button>
      </Box>
    </Container>
  );
}
