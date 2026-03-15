import { useNavigate } from 'react-router-dom';
import { Typography, Box, Alert, Container } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { protectedRoutes, authRoutes } from '@/router/routes';
import { useRegisterForm } from './useRegisterForm';
import { RegisterForm } from './RegisterForm';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import './register.scss';

export default function RegisterPage() {
  const { t } = useTranslation();
  const { formData, error, loading, handleChange, handleSubmit } = useRegisterForm();
  const { user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate(protectedRoutes.profile);
    return null;
  }

  return (
    <Container className="register-page" maxWidth="sm">
      <Box className="register-page__content">
        <Typography className="register-page__title" variant="h4" component="h1">
          {t(i18nKeys.register.title)}
        </Typography>

        {error && (
          <Alert className="register-page__error" severity="error">
            {error}
          </Alert>
        )}

        <RegisterForm
          formData={formData}
          loading={loading}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <Typography className="register-page__login-link" variant="body2">
          {t(i18nKeys.register.loginLink)}
          <span
            className="register-page__link"
            onClick={() => navigate(authRoutes.login)}
            style={{ cursor: 'pointer' }}
          >
            {t(i18nKeys.register.loginButton)}
          </span>
        </Typography>
      </Box>
    </Container>
  );
}
