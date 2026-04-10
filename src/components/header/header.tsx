import { useState, useEffect } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    setIsMenuOpen(false);
    navigate(appRoutes.home);
    await signOut();
  };

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="header">
      <div
        className="header__logo"
        onClick={() => navigate(appRoutes.home)}
        style={{ cursor: 'pointer' }}
      >
        <img className="header__logo__img" src={logo} alt="logo" />
        <h2 className="header__logo__title">asyncmind</h2>
      </div>

      <div
        className={`header__burger ${isMenuOpen ? 'header__burger--active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`header__content ${isMenuOpen ? 'header__content--active' : ''}`}>
        <div className="header__actions">
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
        </div>

        <div className="header__controls">
          <ThemeSwitcher />
          <ChangeLanguage />
        </div>
      </div>
    </header>
  );
}
