import './home.scss';

import PageTitle from '../../components/page-title/PageTitle';
// import { useState } from 'react';

// import { useNavigate } from 'react-router';
// import { appRoutes } from '../../router/routes';

import HeaderHome from './header/header';
import MainHome from './main/main';
import FooterHome from './footer/footer';

const homePageConfig = {
  title: 'Interview Prep',
  description: 'Home',
} as const;

export default function HomePageLanding() {
  return (
    <>
      <PageTitle pageName={homePageConfig.title} description={homePageConfig.description} />
      <div className="home">
        <HeaderHome />
        <MainHome />
        <FooterHome />
      </div>
    </>
  );
}
