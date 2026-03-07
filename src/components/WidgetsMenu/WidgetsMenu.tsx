import './widgetsMenu.scss';

import WidgetCard from './WidgetCard';

export const menuClasses = {
  menu: 'widgets-menu',
} as const;

export default function WidgetsMenu() {
  return (
    <div className={menuClasses.menu}>
      <WidgetCard title="Stub" image={''} />
      <WidgetCard title="Stub" image={''} />
      <WidgetCard title="Stub" image={''} />
    </div>
  );
}
