import './aboust-card.scss';

interface CardConfig {
  avatar: string;
  href: string;
  name: string;
}

export default function AboutCard(props: CardConfig) {
  const { avatar, href, name } = props;

  return (
    <>
      <div className="about-card">
        <img className="about-card__avatar" src={avatar} alt="avatar" />
        <a className="about-card__title" href={href}>
          {name}
        </a>
      </div>
    </>
  );
}
