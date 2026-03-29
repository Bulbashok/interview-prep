import './NavigationButton.scss';

import { useNavigate } from 'react-router';

interface NavigationButtonProps {
  icon: React.ReactNode;
  text: string;
  path: string;
}

export default function NavigationButton(props: NavigationButtonProps) {
  const { icon, text, path } = props;
  const navigate = useNavigate();

  return (
    <button className="navigation-button" onClick={() => navigate(path)}>
      {icon}
      <span className="navigation-button__text">{text}</span>
    </button>
  );
}
