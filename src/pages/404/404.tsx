import './404.scss';

import video1 from '../../assets/video/error-video_1.mp4';
import video2 from '../../assets/video/error-video_2.mp4';
import video3 from '../../assets/video/error-video_3.mp4';
import PageTitle from '../../components/page-title/PageTitle';
import { useState } from 'react';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router';
import { appRoutes } from '../../router/routes';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '../../i18n/i18n-keys';

const notFoundPageClasses = {
  page: 'not-found',
  textContainer: 'not-found__text-container',
  contentContainer: 'not-found__content-container',
  title: 'not-found__title',
  subtitle: 'not-found__subtitle',
  video: 'not-found__video',
  buttonsContainer: 'not-found__buttons-container',
  button: 'not-found__button',
} as const;

export const videos = [video1, video2, video3];

export default function NotFoundPage() {
  const [video] = useState(() => videos[Math.floor(Math.random() * videos.length)]);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <PageTitle
        pageName={t(i18nKeys[404].pageTitle)}
        description={t(i18nKeys[404].pageDescription)}
      />
      <div className={notFoundPageClasses.page}>
        <video
          src={video}
          className={notFoundPageClasses.video}
          autoPlay
          loop
          muted
          data-testid="404-video"
        />
        <div className={notFoundPageClasses.contentContainer}>
          <div className={notFoundPageClasses.textContainer}>
            <h1 className={notFoundPageClasses.title}>{t(i18nKeys[404].title)}</h1>
            <h2 className={notFoundPageClasses.subtitle}>{t(i18nKeys[404].subtitle)}</h2>
          </div>
          <div className={notFoundPageClasses.buttonsContainer}>
            <Button content={t(i18nKeys[404].backButton)} onClick={() => navigate(-1)} />
            <Button
              content={t(i18nKeys[404].homePageButton)}
              onClick={() => navigate(appRoutes.home)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
