import './header.scss';

import ChangeLanguage from './changeLanguage/changeLanguage';

import logo from '../../assets/svg/logo.svg';

import Button from '../button/button';

import { authRoutes } from '../../router/routes';
import { useNavigate } from 'react-router';

export default function HeaderHome() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
          <h2 className="header__logo__title">asyncmind</h2>
        </div>
        <div className="header__button">
          <Button content="login" onClick={() => navigate(authRoutes.login)} />
          <ChangeLanguage />
        </div>
      </div>
    </>
  );
}
