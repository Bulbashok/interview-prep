import './home.scss';

import PageTitle from '../../components/page-title/PageTitle';

import HeaderHome from './header/header';
import MainHome from './main/main';
import MainAboutHome from './main-about/main-about';
import FooterHome from './footer/footer';

const homePageConfig = {
  title: 'Interview Prep | asyncmind',
  description: 'Home',
} as const;

export default function HomePageLanding() {
  return (
    <>
      <PageTitle pageName={homePageConfig.title} description={homePageConfig.description} />
      <div className="home">
        <HeaderHome />
        <MainHome />
        <MainAboutHome />
        <FooterHome />
      </div>
    </>
  );
}
