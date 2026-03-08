import './header.scss';

import ChangeLanguage from './changeLanguage/changeLanguage';

import logo from '../../assets/svg/logo.svg';

import Button from '../button/button';

import { useNavigate } from 'react-router';
import { authRoutes } from '../../router/routes';

interface HeaderProps {
  log: string;
  click: (typeof authRoutes)[keyof typeof authRoutes];
}

export default function HeaderHome(props: HeaderProps) {
  const { log, click } = props;
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
          <h2 className="header__logo__title">asyncmind</h2>
        </div>
        <div className="header__button">
          <Button content={log} onClick={() => navigate(click)} />
          <ChangeLanguage />
        </div>
      </div>
    </>
  );
}
