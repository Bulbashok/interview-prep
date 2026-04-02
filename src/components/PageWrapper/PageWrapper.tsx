import './PageWrapper.scss';

import HeaderHome from '../header/header';
import FooterHome from '../footer/footer';
import { authRoutes } from '@/router/routes';

interface PageWrapperProps {
  log: string;
  click: (typeof authRoutes)[keyof typeof authRoutes];
  children: React.ReactNode;
}

export default function PageWrapper({ log, click, children }: PageWrapperProps) {
  return (
    <div className="page-wrapper">
      <HeaderHome log={log} click={click} />
      {children}
      <FooterHome />
    </div>
  );
}
