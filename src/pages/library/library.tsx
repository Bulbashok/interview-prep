import './library.scss';

import PageTitle from '@/components/page-title/PageTitle';

import HeaderHome from '@/components/header/header';
import MainLibrary from './MainLibrary/mainLibrary';
import FooterHome from '@/components/footer/footer';

import { authRoutes } from '@/router/routes';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

const libraryPageConfig = {
  title: 'Library | asyncmind',
  description: 'Library',
} as const;

export default function LibraryPage() {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle pageName={libraryPageConfig.title} description={libraryPageConfig.description} />
      <div className="library">
        <HeaderHome log={t(i18nKeys.homePage.loginBtn)} click={authRoutes.login} />
        <MainLibrary />
        <FooterHome />
      </div>
    </>
  );
}
