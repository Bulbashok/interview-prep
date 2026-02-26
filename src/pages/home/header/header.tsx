import './header.scss';

import logo from '../../../assets/svg/logo.jpg';

import Button from '../../../components/button/button';

export default function HeaderHome() {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img className="header__logo__img" src={logo} alt="logo" />
          <h2 className="header__logo__title">asyncmind</h2>
        </div>
        <Button content="logout" />
      </div>
    </>
  );
}
