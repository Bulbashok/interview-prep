import { themeManager } from '@/utils/themeManager';
import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    const theme = themeManager.getTheme();
    themeManager.setTheme(theme);
  }, []);

  return null;
}
