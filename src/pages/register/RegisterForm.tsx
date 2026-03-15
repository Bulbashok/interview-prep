import { Button, Box } from '@mui/material';
import { RegisterField } from './RegisterField';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface RegisterFormData {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterFormProps {
  formData: RegisterFormData;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

export const RegisterForm = ({ formData, loading, onChange, onSubmit }: RegisterFormProps) => {
  const { t } = useTranslation();

  return (
    <Box component="form" onSubmit={onSubmit} className="register-page__form">
      <RegisterField
        name="displayName"
        label={t(i18nKeys.register.displayNameLabel)}
        value={formData.displayName}
        onChange={onChange}
        disabled={loading}
      />

      <RegisterField
        name="email"
        label={t(i18nKeys.register.emailLabel)}
        type="email"
        required
        value={formData.email}
        onChange={onChange}
        disabled={loading}
      />

      <RegisterField
        name="password"
        label={t(i18nKeys.register.passwordLabel)}
        type="password"
        required
        value={formData.password}
        onChange={onChange}
        disabled={loading}
      />

      <RegisterField
        name="confirmPassword"
        label={t(i18nKeys.register.confirmPasswordLabel)}
        type="password"
        required
        value={formData.confirmPassword}
        onChange={onChange}
        disabled={loading}
      />

      <Button
        className="register-page__button"
        fullWidth
        type="submit"
        variant="contained"
        disabled={loading}
      >
        {loading ? t(i18nKeys.register.submitButtonLoading) : t(i18nKeys.register.submitButton)}
      </Button>
    </Box>
  );
};
