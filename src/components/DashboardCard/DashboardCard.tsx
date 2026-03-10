import './dashboardCard.scss';

interface DashboardCardProps {
  title: string;
  content: React.ReactNode;
}

const dashBoardCardClasses = {
  card: 'dashboard-card',
  titleContainer: 'dashboard-card__title-container',
  title: 'dashboard-card__title',
  content: 'dashboard-card__content',
} as const;

export default function DashboardCard(props: DashboardCardProps) {
  const { title, content } = props;

  return (
    <div className={dashBoardCardClasses.card}>
      <div className={dashBoardCardClasses.titleContainer}>
        <h2 className={dashBoardCardClasses.title}>{title}</h2>
      </div>
      <div className={dashBoardCardClasses.content}>{content}</div>
    </div>
  );
}
