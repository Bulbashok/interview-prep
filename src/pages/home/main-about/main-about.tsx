import './main-about.scss';

import a1 from '../../../assets/avatars/a1.jpg';
import a2 from '../../../assets/avatars/a2.jpg';
import a3 from '../../../assets/avatars/a3.jpg';

import AboutCard from './about-card/about-card';

export default function MainAboutHome() {
  return (
    <>
      <div className="main-about">
        <h2 className="main-about__title">About Us</h2>
        <div className="main-about__cards">
          <AboutCard avatar={a1} href="ergerg" name=" nasdjf" />
          <AboutCard avatar={a2} href="ergerg" name=" nasdjf" />
          <AboutCard avatar={a3} href="ergerg" name=" nasdjf" />
        </div>
      </div>
    </>
  );
}
