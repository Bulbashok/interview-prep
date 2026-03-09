import { Button, Box } from '@mui/material';
import { useRegisterForm } from './useRegisterForm';
import { RegisterField } from './RegisterField';

interface RegisterFormProps {
  loading: boolean;
}

export const RegisterForm = ({ loading }: RegisterFormProps) => {
  const { formData, handleChange, handleSubmit } = useRegisterForm();

  return (
    <Box component="form" onSubmit={handleSubmit} className="register-page__form">
      <RegisterField
        name="displayName"
        label="Имя (необязательно)"
        value={formData.displayName}
        onChange={handleChange}
        disabled={loading}
      />

      <RegisterField
        name="email"
        label="Email"
        type="email"
        required
        value={formData.email}
        onChange={handleChange}
        disabled={loading}
      />

      <RegisterField
        name="password"
        label="Пароль"
        type="password"
        required
        value={formData.password}
        onChange={handleChange}
        disabled={loading}
      />

      <RegisterField
        name="confirmPassword"
        label="Подтвердите пароль"
        type="password"
        required
        value={formData.confirmPassword}
        onChange={handleChange}
        disabled={loading}
      />

      <Button
        className="register-page__button"
        fullWidth
        type="submit"
        variant="contained"
        disabled={loading}
      >
        {loading ? 'Регистрация...' : 'Зарегистрироваться'}
      </Button>
    </Box>
  );
};
