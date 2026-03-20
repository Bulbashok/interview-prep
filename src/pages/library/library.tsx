import './library.scss';

import PageTitle from '@/components/page-title/PageTitle';

import HeaderHome from '@/components/header/header';
import FooterHome from '@/components/footer/footer';

import { i18nKeys } from '@/i18n/i18n-keys';
import { authRoutes } from '@/router/routes';
// import { useTranslation } from 'react-i18next';
// import Navigation from './components/Navigation/Navigation';

const libraryPageConfig = {
  title: 'Library | asyncmind',
  description: 'Library',
} as const;

export default function LibraryPage() {
  return (
    <>
      <PageTitle pageName={libraryPageConfig.title} description={libraryPageConfig.description} />
      <div className="library">
        <HeaderHome log={t(i18nKeys.homePage.loginBtn)} click={authRoutes.login} />
        <FooterHome />
      </div>
    </>
  );
}
