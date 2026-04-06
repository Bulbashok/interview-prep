import './Container.scss';

interface ContainerProps {
  borderTitle: string;
  children: React.ReactNode;
  styles: {
    [key: string]: string;
  };
  setNodeRef?: (node: HTMLElement | null) => void;
}

export default function Container({ borderTitle, styles, children, setNodeRef }: ContainerProps) {
  return (
    <div className="async-sorter-container" style={styles} ref={setNodeRef}>
      <span className="async-sorter-container__label">{borderTitle}</span>
      {children}
    </div>
  );
}
