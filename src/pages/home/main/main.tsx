import './main.scss';

import Button from '../../../components/button/button';

import Slider from './slider/slider';

import { authRoutes, protectedRoutes } from '../../../router/routes';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useAuth } from '@/hooks/useAuth';

export default function MainHome() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <>
      <div className="main">
        <div className="main__descript">
          <h1 className="main__descript__title">Interview Prep</h1>
          <p className="main__descript__text">{t(i18nKeys.homePage.description)}</p>
          <Button
            content={t(user ? i18nKeys.header.dashboard : i18nKeys.homePage.registrationBtn)}
            width="12em"
            backgroundColor="var(--btn-cta)"
            backgroundColorHover="var(--btn-cta-hover)"
            onClick={() => navigate(user ? protectedRoutes.dashboard : authRoutes.register)}
          />
        </div>
        <Slider />
      </div>
    </>
  );
}
