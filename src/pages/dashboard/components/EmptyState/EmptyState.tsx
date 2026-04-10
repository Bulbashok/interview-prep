import { i18nKeys } from '@/i18n/i18n-keys';
import './EmptyState.scss';

import { useTranslation } from 'react-i18next';
import PageTitle from '@/components/page-title/PageTitle';

export default function DashboardEmptyState({ name }: { name: string }) {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle
        pageName="Dashboard | Interview Prep"
        description="Interview Prep application dashboard"
      />
      <div className="empty-state">
        <h1 className="empty-state__title">
          {name}
          {t(i18nKeys.dashboard.empty.title)}
        </h1>
        <p className="empty-state__message">{t(i18nKeys.dashboard.empty.message)}</p>
      </div>
    </>
  );
}
