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
      <a className="about-card" href={href} target="_blank">
        <img className="about-card__avatar" src={avatar} alt="avatar" />
        <span className="about-card__title">{name}</span>
      </a>
    </>
  );
}
