import { WidgetsType, WidgetData } from '../types/widgets';
import WidgetStub1 from './Quiz/Stub1';
import WidgetStub2 from './TrueFalse/Stub2';
import WidgetStub3 from './Async-sorter/Stub3';

const widgetNames = {
  widget1: 'quiz',
  widget2: 'true/false',
  widget3: 'async-sorter',
} as const;

interface WindgetRenderProps {
  widget: WidgetsType;
  data: WidgetData;
  sendAnswer: () => void;
}

export default function WidgetRender(props: WindgetRenderProps) {
  const { widget, data, sendAnswer } = props;

  const renderWidget = () => {
    switch (widget) {
      case widgetNames.widget1:
        return <WidgetStub1 data={data} sendAnswer={sendAnswer} />;

      case widgetNames.widget2:
        return <WidgetStub2 data={data} sendAnswer={sendAnswer} />;

      case widgetNames.widget3:
        return <WidgetStub3 data={data} sendAnswer={sendAnswer} />;
    }
  };

  return renderWidget();
}
