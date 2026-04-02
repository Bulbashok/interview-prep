import './header.scss';

import ChangeLanguage from './changeLanguage/changeLanguage';

import logo from '../../assets/svg/logo.svg';

import Button from '../button/button';

import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import { appRoutes, authRoutes, protectedRoutes } from '../../router/routes';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export default function HeaderHome() {
  const { t } = useTranslation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate(appRoutes.home);
    await signOut();
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
          <h2 className="header__logo__title">asyncmind</h2>
        </div>
        <div className="header__button">
          {user ? (
            <>
              <Button
                content={t(i18nKeys.header.profile)}
                onClick={() => navigate(protectedRoutes.profile)}
              />
              <Button content={t(i18nKeys.header.logout)} onClick={handleLogout} />
            </>
          ) : (
            <Button content={t(i18nKeys.header.login)} onClick={() => navigate(authRoutes.login)} />
          )}
          <ChangeLanguage />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
