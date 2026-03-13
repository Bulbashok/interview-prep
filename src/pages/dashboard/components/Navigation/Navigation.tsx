import './Navigation.scss';

import { protectedRoutes } from '@/router/routes';
import NavigationButton from './NavigationButton';

import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';
import { i18nKeys } from '@/i18n/i18n-keys';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <div className="dashsboard-navigation">
      <NavigationButton
        text={t(i18nKeys.dashboard.buttons.library)}
        icon={<CollectionsBookmarkIcon />}
        path={protectedRoutes.library}
      />
      <NavigationButton
        text={t(i18nKeys.dashboard.buttons.profile)}
        icon={<PersonIcon />}
        path={protectedRoutes.profile}
      />
    </div>
  );
}
