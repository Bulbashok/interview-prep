import { Widget } from '@/types/widgets';
import { WidgetStrategyRegistry } from './strategies/WidgetStrategyRegistry';

const widgetStrategyRegistry = new WidgetStrategyRegistry();

interface WindgetRenderProps {
  widget: Widget;
  sendAnswer: (answer: unknown) => void;
}

export default function WidgetRender(props: WindgetRenderProps) {
  const { widget, sendAnswer } = props;

  const renderWidget = () => {
    const strategy = widgetStrategyRegistry.getStrategy(widget.type);
    return strategy.render(widget, sendAnswer);
  };

  return renderWidget();
}
