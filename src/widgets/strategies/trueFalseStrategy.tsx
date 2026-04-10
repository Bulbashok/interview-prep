import { WidgetStrategy, Widget } from '@/types/widgets';
import TrueFalse from '../TrueFalse/TrueFalse';

export const trueFalseStrategy: WidgetStrategy = {
  type: 'true-false',
  render(widget: Widget) {
    if (widget.type !== 'true-false') return null;

    return <TrueFalse data={widget.payload} id={widget.id} />;
  },
};
