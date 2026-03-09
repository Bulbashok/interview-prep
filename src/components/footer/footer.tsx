import './footer.scss';

import rssLogo from '../../assets/svg/rssLogo.svg';
import github from '../../assets/svg/Github.svg';

const footerHref: string[] = ['https://rs.school/', 'https://github.com/Bulbashok/interview-prep'];

export default function FooterHome() {
  return (
    <>
      <div className="footer">
        <a className="footer__logo" href={footerHref[0]} target="_blank">
          <img className="footer__logo__img" src={rssLogo} alt="rss-logo" />
          <span className="footer__logo__title">RS School</span>
        </a>
        <span className="footer__year">2026</span>
        <a className="footer__logo" href={footerHref[1]} target="_blank">
          <img className="footer__logo__img" src={github} alt="rss-logo" />
          <span className="footer__logo__title">asyncmind</span>
        </a>
      </div>
    </>
  );
}
