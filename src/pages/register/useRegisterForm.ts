import { useState, FormEvent, ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { protectedRoutes } from '@/router/routes';

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

const validatePassword = (password: string, confirmPassword: string): string | null => {
  if (password !== confirmPassword) {
    return 'Пароли не совпадают';
  }

  if (password.length < 6) {
    return 'Пароль должен содержать минимум 6 символов';
  }

  return null;
};

const useRegisterActions = (
  formData: RegisterFormData,
  setError: (error: string | null) => void,
  setLoading: (loading: boolean) => void,
) => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validatePassword(formData.password, formData.confirmPassword);
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
      navigate(protectedRoutes.profile);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Ошибка регистрации';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit };
};

export const useRegisterForm = (): UseRegisterFormReturn => {
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

  const { handleSubmit } = useRegisterActions(formData, setError, setLoading);

  return {
    formData,
    error,
    loading,
    handleChange,
    handleSubmit,
  };
};
