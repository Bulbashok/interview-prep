import { Widget } from '@/types/widgets';
import { WidgetStrategyRegistry } from '../strategies/WidgetStrategyRegistry';

const widgetStrategyRegistry = new WidgetStrategyRegistry();

interface WindgetRenderProps {
  widget: Widget;
}

export default function WidgetRender({ widget }: WindgetRenderProps) {
  const renderWidget = () => {
    const strategy = widgetStrategyRegistry.getStrategy(widget.type);
    return strategy.render(widget);
  };

  return renderWidget();
}
