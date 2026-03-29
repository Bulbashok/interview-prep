import { Button, Box } from '@mui/material';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  formData: LoginFormData;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export const LoginForm = ({ formData, loading, onChange, onSubmit }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <Box component="form" onSubmit={onSubmit} className="login-page__form">
      <div className="login-page__field">
        <input
          className="login-page__input"
          name="email"
          type="email"
          placeholder={t(i18nKeys.login.emailLabel)}
          value={formData.email}
          onChange={onChange}
          disabled={loading}
          required
        />
      </div>

      <div className="login-page__field">
        <input
          className="login-page__input"
          name="password"
          type="password"
          placeholder={t(i18nKeys.login.passwordLabel)}
          value={formData.password}
          onChange={onChange}
          disabled={loading}
          required
        />
      </div>

      <Button
        className="login-page__button"
        fullWidth
        type="submit"
        variant="contained"
        disabled={loading}
      >
        {loading ? t(i18nKeys.login.submitButtonLoading) : t(i18nKeys.login.submitButton)}
      </Button>
    </Box>
  );
};
