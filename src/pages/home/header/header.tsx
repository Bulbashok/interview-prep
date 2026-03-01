import './header.scss';

import logo from '../../../assets/svg/logo.svg';

import Button from '../../../components/button/button';

import { authRoutes } from '../../../router/routes';
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
        <Button content="login" onClick={() => navigate(authRoutes.login)} />
      </div>
    </>
  );
}
