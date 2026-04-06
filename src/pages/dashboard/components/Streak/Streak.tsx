import './Streak.scss';

import { i18nKeys } from '@/i18n/i18n-keys';
import { useTranslation } from 'react-i18next';

interface StreakProps {
  currentStreak: number;
  bestStreak: number;
}

export default function Streak(props: StreakProps) {
  const { currentStreak, bestStreak } = props;
  const { t } = useTranslation();

  return (
    <div className="streak">
      <p className="streak__text">
        {t(i18nKeys.dashboard.streak.current)} {currentStreak}
      </p>
      <div className="streak__line"></div>
      <p className="streak__text">
        {t(i18nKeys.dashboard.streak.best)} {bestStreak}
      </p>
    </div>
  );
}
