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
import { useEffect, useState } from 'react';
import { UserData } from '@/types/firebase';
import { getUserData } from '@/api/getUserData';
import { RootLayout } from '@/components/skeleton/RootLayout';
import { resetStreak } from '@/api/streakCounter';

export default function Dashboard() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const loadData = async () => {
      await resetStreak();
      const data = await getUserData();
      setUserData(data);
    };

    loadData();
  }, []);

  if (!userData) return <RootLayout />;

  const hasProgress =
    userData.progress > 0 || userData.currentExp > 0 || (userData.history?.length ?? 0) > 0;

  if (!hasProgress) {
    return (
      <div className="dashboard-page">
        <HeaderHome />
        <div className="dashboard-page__empty">
          <DashboardEmptyState name={userData.displayName || 'User'} />
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
          <DashboardCards data={userData} />
        </div>

        <FooterHome />
      </div>
    </>
  );
}
