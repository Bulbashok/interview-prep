import { i18nKeys } from '../../i18n/i18n-keys';
import Button from '../button/button';
import { useTranslation } from 'react-i18next';

export default function LangSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (): void => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return <Button content={t(i18nKeys.langBtn)} onClick={changeLanguage} />;
}
