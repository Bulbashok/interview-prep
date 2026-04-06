import { i18nKeys } from '@/i18n/i18n-keys';
import './EmptyState.scss';

import { useTranslation } from 'react-i18next';

export default function DashboardEmptyState({ name }: { name: string }) {
  const { t } = useTranslation();

  return (
    <div className="empty-state">
      <h1 className="empty-state__title">
        {name}
        {t(i18nKeys.dashboard.empty.title)}
      </h1>
      <p className="empty-state__message">{t(i18nKeys.dashboard.empty.message)}</p>
    </div>
  );
}
