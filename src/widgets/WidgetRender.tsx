import { WidgetsType } from '../types/widgets';
import WidgetStub1 from './Stub1/Stub1';
import WidgetStub2 from './Stub2/Stub2';
import WidgetStub3 from './Stub3/Stub3';

const widgetNames = {
  widget1: 'quiz',
  widget2: 'true/false',
  widget3: 'memory game',
};

export default function WidgetRender(props: { widget: WidgetsType }) {
  const { widget } = props;

  const renderWidget = () => {
    switch (widget) {
      case widgetNames.widget1:
        return <WidgetStub1 />;

      case widgetNames.widget2:
        return <WidgetStub2 />;

      case widgetNames.widget3:
        return <WidgetStub3 />;
    }
  };

  return renderWidget();
}
