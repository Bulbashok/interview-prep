import './home.scss';

import PageTitle from '../../components/page-title/PageTitle';

import HeaderHome from '../../components/header/header';
import MainHome from './main/main';
import MainAboutHome from './main-about/main-about';
import FooterHome from '../../components/footer/footer';

import { authRoutes } from '../../router/routes';

const homePageConfig = {
  title: 'Interview Prep | asyncmind',
  description: 'Home',
} as const;

export default function HomePageLanding() {
  return (
    <>
      <PageTitle pageName={homePageConfig.title} description={homePageConfig.description} />
      <div className="home">
        <HeaderHome log="login" click={authRoutes.login} />
        <MainHome />
        <MainAboutHome />
        <FooterHome />
      </div>
    </>
  );
}
