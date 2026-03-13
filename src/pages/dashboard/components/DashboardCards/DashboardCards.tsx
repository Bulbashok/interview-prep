import DashboardCard from '@/components/DashboardCard/DashboardCard';
import ProgressBar from '../ProgressBar/ProgressBar';
import Experience from '../Experience/Experience';
import Streak from '../Streak/Streak';
import History from '../History/History';
import Navigation from '../Navigation/Navigation';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';
import { DashboardUserData } from '@/types/dashboard';

export default function DashboardCards(props: { data: DashboardUserData }) {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <>
      <DashboardCard
        title={t(i18nKeys.dashboard.titles.progress)}
        content={<ProgressBar progress={data.progress} />}
      />
      <DashboardCard
        title={t(i18nKeys.dashboard.titles.xp)}
        content={<Experience currentExperince={data.xp} maxExperience={data.maxExp} />}
      />
      <DashboardCard
        title={t(i18nKeys.dashboard.titles.streak)}
        content={<Streak currentStreak={data.streak.current} bestStreak={data.streak.best} />}
      />
      <DashboardCard
        title={t(i18nKeys.dashboard.titles.history)}
        content={<History historyData={data.history} />}
      />
      <DashboardCard title={t(i18nKeys.dashboard.titles.navigation)} content={<Navigation />} />
    </>
  );
}
