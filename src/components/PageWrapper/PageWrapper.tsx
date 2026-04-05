import './PageWrapper.scss';

import HeaderHome from '../header/header';
import FooterHome from '../footer/footer';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-wrapper">
      <HeaderHome />
      {children}
      <FooterHome />
    </div>
  );
}
