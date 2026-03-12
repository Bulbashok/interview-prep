import { useTranslation } from 'react-i18next';
import './Experience.scss';
import { i18nKeys } from '@/i18n/i18n-keys';

interface ExperiencePorps {
  currentExperince: number;
  maxExperience: number;
}

export default function Experience(props: ExperiencePorps) {
  const { currentExperince, maxExperience } = props;
  const { t } = useTranslation();

  return (
    <div className="experience">
      <p className="experience__text">
        {t(i18nKeys.dashboard.experience)} {currentExperince} / {maxExperience}
      </p>
    </div>
  );
}
