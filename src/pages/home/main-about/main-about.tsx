import './main-about.scss';

import a1 from '../../../assets/avatars/a1.jpg';
import a2 from '../../../assets/avatars/a2.jpg';
import a3 from '../../../assets/avatars/a3.jpg';
import { useTranslation } from 'react-i18next';

import AboutCard from './about-card/about-card';
import { i18nKeys } from '@/i18n/i18n-keys';

const avatarHref: string[] = [
  'https://github.com/NickKool',
  'https://github.com/Bulbashok',
  'https://github.com/JesterAV',
];
const avatarName = ['NickKool', 'Bulbashok', 'JesterAV'];

export default function MainAboutHome() {
  const { t } = useTranslation();

  return (
    <>
      <div className="main-about">
        <h2 className="main-about__title">{t(i18nKeys.homePage.aboutUs)}</h2>
        <div className="main-about__cards">
          <AboutCard avatar={a1} href={avatarHref[0]} name={avatarName[0]} />
          <AboutCard avatar={a2} href={avatarHref[1]} name={avatarName[1]} />
          <AboutCard avatar={a3} href={avatarHref[2]} name={avatarName[2]} />
        </div>
      </div>
    </>
  );
}
