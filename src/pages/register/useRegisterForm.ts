import { useState, FormEvent, ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { protectedRoutes } from '@/router/routes';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface RegisterFormData {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UseRegisterFormReturn {
  formData: RegisterFormData;
  error: string | null;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
}

const initialFormData: RegisterFormData = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validatePassword = (
  password: string,
  confirmPassword: string,
  t: ReturnType<typeof useTranslation>['t'],
): string | null => {
  if (password !== confirmPassword) {
    return t(i18nKeys.registerErrors.passwordsMismatch);
  }

  if (password.length < 6) {
    return t(i18nKeys.registerErrors.passwordMinLength);
  }

  return null;
};

const useRegisterActions = (
  formData: RegisterFormData,
  setError: (error: string | null) => void,
  setLoading: (loading: boolean) => void,
  t: ReturnType<typeof useTranslation>['t'],
) => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validatePassword(formData.password, formData.confirmPassword, t);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      await signUp({
        email: formData.email,
        password: formData.password,
        displayName: formData.displayName || undefined,
      });
      navigate(protectedRoutes.dashboard);
    } catch (err: unknown) {
      let errorMessage = t(i18nKeys.registerErrors.registrationError);

      if (err instanceof Error) {
        const message = err.message;
        switch (message) {
          case 'EMAIL_ALREADY_IN_USE':
            errorMessage = t(i18nKeys.registerErrors.emailAlreadyInUse);
            break;
          case 'WEAK_PASSWORD':
            errorMessage = t(i18nKeys.registerErrors.weakPassword);
            break;
          case 'INVALID_EMAIL':
            errorMessage = t(i18nKeys.registerErrors.invalidEmail);
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

export const useRegisterForm = (): UseRegisterFormReturn => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);
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

  const { handleSubmit } = useRegisterActions(formData, setError, setLoading, t);

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
};
