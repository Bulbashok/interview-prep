import './main.scss';

import logo from '../../../assets/svg/logo.jpg';

import Button from '../../../components/button/button';

export default function MainHome() {
  return (
    <>
      <div className="main">
        <div className="main__descript">
          <h1 className="main__descript__title">Interview Prep</h1>
          <p className="main__descript__text">
            Проект для подготовки к собеседованиям на frontend-разработчика.
          </p>
          <Button content="Registr" />
        </div>
        <div className="main__slider">
          <img className="main__slider__jpg" src={logo} alt="primer" />
        </div>
      </div>
    </>
  );
}
