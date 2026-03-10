import './home.scss';

import PageTitle from '../../components/page-title/PageTitle';

import HeaderHome from '../../components/header/header';
import MainHome from './main/main';
import MainAboutHome from './main-about/main-about';
import FooterHome from '../../components/footer/footer';

import { authRoutes } from '../../router/routes';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

const homePageConfig = {
  title: 'Interview Prep | asyncmind',
  description: 'Home',
} as const;

export default function HomePageLanding() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle pageName={homePageConfig.title} description={homePageConfig.description} />
      <div className="home">
        <HeaderHome log={t(i18nKeys.homePage.loginBtn)} click={authRoutes.login} />
        <MainHome />
        <MainAboutHome />
        <FooterHome />
      </div>
    </>
  );
}
