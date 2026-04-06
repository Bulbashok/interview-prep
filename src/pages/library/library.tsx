import './library.scss';

import PageTitle from '@/components/page-title/PageTitle';

import HeaderHome from '@/components/header/header';
import MainLibrary from './MainLibrary/mainLibrary';
import FooterHome from '@/components/footer/footer';

const libraryPageConfig = {
  title: 'Library | asyncmind',
  description: 'Library',
} as const;

export default function LibraryPage() {
  return (
    <>
      <PageTitle pageName={libraryPageConfig.title} description={libraryPageConfig.description} />
      <div className="library">
        <HeaderHome />
        <MainLibrary />
        <FooterHome />
      </div>
    </>
  );
}
