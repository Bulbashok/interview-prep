import './404.scss';

import video1 from '../../assets/video/error-video_1.mp4';
import video2 from '../../assets/video/error-video_2.mp4';
import video3 from '../../assets/video/error-video_3.mp4';
import PageTitle from '../../components/page-title/PageTitle';
import { useState } from 'react';
import Button from '../../components/button/button';
import { useNavigate } from 'react-router';
import { appRoutes } from '../../router/routes';

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

const notFoundPageTexts = {
  title: '404',
  subtitle: 'Ooops! Page not found :(',
  alt: '404 image',
  backButton: 'Go Back',
  homePageButton: 'Go Homepage',
} as const;

const notFoundPageConfig = {
  title: 'Page not found | asyncmind',
  description: 'Page not found',
} as const;

const videos = [video1, video2, video3];

export default function NotFoundPage() {
  const [video] = useState(() => videos[Math.floor(Math.random() * videos.length)]);
  const navigate = useNavigate();

  return (
    <>
      <PageTitle pageName={notFoundPageConfig.title} description={notFoundPageConfig.description} />
      <div className={notFoundPageClasses.page}>
        <video src={video} className={notFoundPageClasses.video} autoPlay loop muted />
        <div className={notFoundPageClasses.contentContainer}>
          <div className={notFoundPageClasses.textContainer}>
            <h1 className={notFoundPageClasses.title}>{notFoundPageTexts.title}</h1>
            <h2 className={notFoundPageClasses.subtitle}>{notFoundPageTexts.subtitle}</h2>
          </div>
          <div className={notFoundPageClasses.buttonsContainer}>
            <Button content={notFoundPageTexts.backButton} onClick={() => navigate(-1)} />
            <Button
              content={notFoundPageTexts.homePageButton}
              onClick={() => navigate(appRoutes.home)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
