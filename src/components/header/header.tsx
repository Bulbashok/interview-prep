import './header.scss';

import ChangeLanguage from './changeLanguage/changeLanguage';

import logo from '../../assets/svg/logo.svg';

import Button from '../button/button';

import { useNavigate } from 'react-router';
import { useAuth } from '@/hooks/useAuth';
import { appRoutes, authRoutes, protectedRoutes } from '../../router/routes';

export default function HeaderHome() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate(appRoutes.home);
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
              <Button content="Profile" onClick={() => navigate(protectedRoutes.profile)} />
              <Button content="Log out" onClick={handleLogout} />
            </>
          ) : (
            <Button content="Log in" onClick={() => navigate(authRoutes.login)} />
          )}
          <ChangeLanguage />
        </div>
      </div>
    </>
  );
}
