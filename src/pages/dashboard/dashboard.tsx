import './dashboard.scss';

import DashboardCard from '@/components/DashboardCard/DashboardCard';
import FooterHome from '@/components/footer/footer';
import HeaderHome from '@/components/header/header';
import PageTitle from '@/components/page-title/PageTitle';
import { i18nKeys } from '@/i18n/i18n-keys';
import { authRoutes } from '@/router/routes';
import { useTranslation } from 'react-i18next';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Experience from './components/Experience/Experience';
import Streak from './components/Streak/Streak';

export default function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle
        pageName="Dashboard | Interview Prep"
        description="Interview Prep application dashboard"
      />

      <div className="dashboard">
        <HeaderHome log={t(i18nKeys.dashboard.logoutBtn)} click={authRoutes.login} />
        <DashboardCard
          title={t(i18nKeys.dashboard.titles.progress)}
          content={<ProgressBar progress={80} />}
        />
        <DashboardCard
          title={t(i18nKeys.dashboard.titles.xp)}
          content={<Experience currentExperince={1400} maxExperience={3000} />}
        />
        <DashboardCard
          title={t(i18nKeys.dashboard.titles.streak)}
          content={<Streak currentStreak={12} bestStreak={20} />}
        />
        <DashboardCard title={t(i18nKeys.dashboard.titles.history)} content={null} />
        <FooterHome />
      </div>
    </>
  );
}
