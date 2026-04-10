import { useTranslation } from 'react-i18next';
import './Experience.scss';
import { i18nKeys } from '@/i18n/i18n-keys';

interface ExperienceProps {
  currentExperience: number;
}

export default function Experience(props: ExperienceProps) {
  const { currentExperience } = props;
  const { t } = useTranslation();

  return (
    <div className="experience">
      <p className="experience__text">
        {t(i18nKeys.dashboard.experience)} {currentExperience}
      </p>
    </div>
  );
}
