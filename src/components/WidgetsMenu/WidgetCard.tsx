import './WidgetCard.scss';

interface WidgetCardProps {
  title: string;
  image: string;
}

const widgetCardClasses = {
  card: 'widget-card',
  image: 'widget-card__image',
  title: 'widget-card__title',
} as const;

export default function WidgetCard(props: WidgetCardProps) {
  const { title, image } = props;

  return (
    <div className={widgetCardClasses.card}>
      <img className={widgetCardClasses.image} src={image} />
      <h3 className={widgetCardClasses.title}>{title}</h3>
    </div>
  );
}
