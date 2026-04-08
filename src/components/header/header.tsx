import './header.scss';

import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    navigate(appRoutes.home);
    await signOut();
    setMenuOpen(false);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
          <h2 className="header__logo__title">asyncmind</h2>
        </div>
        <button
          className="header__burger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--open' : ''}`} />
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--open' : ''}`} />
          <span className={`header__burger-line ${menuOpen ? 'header__burger-line--open' : ''}`} />
        </button>
        <div className={`header__button ${menuOpen ? 'header__button--open' : ''}`}>
          {user ? (
            <>
              <Button
                content={t(i18nKeys.header.dashboard)}
                onClick={() => handleNavigate(protectedRoutes.dashboard)}
              />
              <Button
                content={t(i18nKeys.header.profile)}
                onClick={() => handleNavigate(protectedRoutes.profile)}
              />
              <Button content={t(i18nKeys.header.logout)} onClick={handleLogout} />
            </>
          ) : (
            <Button
              content={t(i18nKeys.header.login)}
              onClick={() => handleNavigate(authRoutes.login)}
            />
          )}
          <ChangeLanguage />
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
