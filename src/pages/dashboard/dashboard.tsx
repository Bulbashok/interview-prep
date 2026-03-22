import './dashboard.scss';

import DashboardCard from '@/components/DashboardCard/DashboardCard';
import FooterHome from '@/components/footer/footer';
import HeaderHome from '@/components/header/header';
import PageTitle from '@/components/page-title/PageTitle';
import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';
import Navigation from './components/Navigation/Navigation';
import DashboardEmptyState from './components/EmptyState/EmptyState';
import DashboardCards from './components/DashboardCards/DashboardCards';

const dataStumb = {
  name: 'Aleksei',
  progress: 10,
  xp: 0,
  maxExp: 0,
  streak: {
    current: 0,
    best: 0,
  },
  history: [],
};

export default function Dashboard() {
  const { t } = useTranslation();

  const hasProgress = dataStumb.progress > 0 || dataStumb.xp > 0 || dataStumb.history.length > 0;

  if (!hasProgress) {
    return (
      <div className="dashboard-page">
        <HeaderHome />
        <div className="dashboard-page__empty">
          <DashboardEmptyState name={dataStumb.name} />
          <DashboardCard title={t(i18nKeys.dashboard.titles.navigation)} content={<Navigation />} />
        </div>
        <FooterHome />
      </div>
    );
  }

  return (
    <>
      <PageTitle
        pageName="Dashboard | Interview Prep"
        description="Interview Prep application dashboard"
      />

      <div className="dashboard-page">
        <HeaderHome />

        <div className="dashboard">
          <DashboardCards data={dataStumb} />
        </div>

        <FooterHome />
      </div>
    </>
  );
}
