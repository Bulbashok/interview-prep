import './EmptyState.scss';

export default function DashboardEmptyState({ name }: { name: string }) {
  return (
    <div className="empty-state">
      <h1 className="empty-state__title">{name}, добро пожаловать!</h1>
      <p className="empty-state__message">Перейдите в библиотеку и начните тренировку, успехов!</p>
    </div>
  );
}
