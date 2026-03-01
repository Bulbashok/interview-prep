import './main.scss';

import logo from '../../../assets/svg/logo.jpg';

import Button from '../../../components/button/button';

import { authRoutes } from '../../../router/routes';
import { useNavigate } from 'react-router';

export default function MainHome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="main__descript">
          <h1 className="main__descript__title">Interview Prep</h1>
          <p className="main__descript__text">
            An interactive platform to sharpen your skills and ace frontend technical interviews.
            We’ve curated a comprehensive database of current questions, coding challenges, and
            architecture cases to help you structure your knowledge and land your dream offer.
          </p>
          <Button
            content="Registration"
            width="12em"
            backgroundColor="var(--btn-cta)"
            backgroundColorHover="var(--btn-cta-hover)"
            onClick={() => navigate(authRoutes.register)}
          />
        </div>
        <div className="main__slider">
          <img className="main__slider__jpg" src={logo} alt="primer" />
        </div>
      </div>
    </>
  );
}
