import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box, Alert, Container, Button } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { protectedRoutes } from '@/router/routes';
import { useLoginForm } from './useLoginForm';
import { LoginForm } from './LoginForm';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import { authRoutes } from '@/router/routes';
import './login.scss';

export default function LoginPage() {
  const { t } = useTranslation();
  const { formData, error, loading, handleChange, handleSubmit } = useLoginForm();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(protectedRoutes.profile);
    }
  }, [user, navigate]);

  if (user) {
    return (
      <Container className="login-page__redirect" maxWidth="sm">
        <Box className="login-page__redirect-content">
          <Typography variant="body1" className="login-page__redirect-text">
            {t(i18nKeys.login.redirecting)}
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            className="login-page__back-button"
          >
            {t(i18nKeys.login.backButton)}
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container className="login-page" maxWidth="sm">
      <Box className="login-page__content">
        <Typography className="login-page__title" variant="h4" component="h1">
          {t(i18nKeys.login.title)}
        </Typography>

        {error && (
          <Alert className="login-page__error" severity="error">
            {error}
          </Alert>
        )}

        <LoginForm
          formData={formData}
          loading={loading}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <Typography className="login-page__register-link" variant="body2">
          {t(i18nKeys.login.registerLink)}
          <span
            className="login-page__link"
            onClick={() => navigate(authRoutes.register)}
            style={{ cursor: 'pointer' }}
          >
            {t(i18nKeys.login.registerButton)}
          </span>
        </Typography>
      </Box>
    </Container>
  );
}
