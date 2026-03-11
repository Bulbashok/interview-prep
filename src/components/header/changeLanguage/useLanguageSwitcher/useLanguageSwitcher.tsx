import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { notify } from '../../../utils/notify';

type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];

const LANGUAGES = {
  RU: 'ru',
  EN: 'en',
} as const;

export const useLanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

  const closeDropdown = useCallback(() => setIsOpen(false), []);

  const changeLanguage = useCallback(
    async (lang: Language) => {
      try {
        await i18n.changeLanguage(lang);
        setIsOpen(false);
        notify.success(lang === 'ru' ? 'Язык изменен на русский' : 'Language changed to English');
      } catch {
        notify.error('Error when changing language');
      }
    },
    [i18n],
  );

  return {
    isOpen,
    toggleDropdown,
    closeDropdown,
    changeLanguage,
    languages: LANGUAGES,
  };
};
