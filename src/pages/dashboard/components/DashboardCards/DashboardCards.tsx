import DashboardCard from '@/components/DashboardCard/DashboardCard';
import ProgressBar from '../ProgressBar/ProgressBar';
import Experience from '../Experience/Experience';
import Streak from '../Streak/Streak';
import History from '../History/History';
import Navigation from '../Navigation/Navigation';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';
import { UserData } from '@/types/firebase';

export default function DashboardCards(props: { data: UserData }) {
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
        content={<Experience currentExperience={data.currentExp} maxExperience={5000} />}
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
