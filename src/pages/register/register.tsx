import { Link, useNavigate } from 'react-router-dom';
import { Typography, Box, Alert, Container } from '@mui/material';
import { useAuth } from '@/hooks/useAuth';
import { appRoutes, protectedRoutes } from '@/router/routes';
import { useRegisterForm } from './useRegisterForm';
import { RegisterForm } from './RegisterForm';
import './register.scss';

export default function RegisterPage() {
  const { error, loading } = useRegisterForm();
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
          Регистрация
        </Typography>

        {error && (
          <Alert className="register-page__error" severity="error">
            {error}
          </Alert>
        )}

        <RegisterForm loading={loading} />

        <Typography className="register-page__login-link" variant="body2">
          Уже есть аккаунт?{' '}
          <Link to={appRoutes.login} className="register-page__link">
            Войти
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}
