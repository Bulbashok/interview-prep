import { useState, FormEvent, ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { protectedRoutes } from '@/router/routes';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface LoginFormData {
  email: string;
  password: string;
}

interface UseLoginFormReturn {
  formData: LoginFormData;
  error: string | null;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
}

const initialFormData: LoginFormData = {
  email: '',
  password: '',
};

const useLoginActions = (
  formData: LoginFormData,
  setError: (error: string | null) => void,
  setLoading: (loading: boolean) => void,
  t: ReturnType<typeof useTranslation>['t'],
) => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    setLoading(true);

    try {
      await signIn({
        email: formData.email,
        password: formData.password,
      });
      navigate(protectedRoutes.dashboard);
    } catch (err: unknown) {
      let errorMessage = t(i18nKeys.loginErrors.loginError);

      if (err instanceof Error) {
        const message = err.message;
        switch (message) {
          case 'INVALID_CREDENTIALS':
            errorMessage = t(i18nKeys.loginErrors.invalidCredentials);
            break;
          case 'INVALID_EMAIL':
            errorMessage = t(i18nKeys.loginErrors.invalidEmail);
            break;
          default:
            errorMessage = message;
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit };
};

export const useLoginForm = (): UseLoginFormReturn => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  }, []);

  const { handleSubmit } = useLoginActions(formData, setError, setLoading, t);

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
};
