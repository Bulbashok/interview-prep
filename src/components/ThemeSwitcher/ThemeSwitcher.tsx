import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from '../button/button';
import { useState } from 'react';
import { themeManager } from '@/utils/themeManager';
import { notify } from '@/utils/notify';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';

const themes = {
  light: 'light',
  dark: 'dark',
};

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => themeManager.getTheme());
  const { t } = useTranslation();

  const toggleTheme = () => {
    try {
      const newTheme = theme === themes.light ? themes.dark : themes.light;
      setTheme(newTheme);
      themeManager.setTheme(newTheme);

      if (newTheme === themes.light) {
        notify.success(t(i18nKeys.themeSwitcher.light));
      } else {
        notify.success(t(i18nKeys.themeSwitcher.dark));
      }
    } catch {
      notify.error(t(i18nKeys.themeSwitcher.error));
    }
  };

  const icon = theme === themes.light ? <DarkModeIcon /> : <LightModeIcon />;

  return <Button content={icon} onClick={toggleTheme} />;
}
