import { WidgetStrategy, Widget } from '@/types/widgets';
import WidgetStub2 from '../TrueFalse/Stub2';

export const trueFalseStrategy: WidgetStrategy = {
  type: 'true-false',
  render(widget: Widget) {
    if (widget.type !== 'true-false') return null;

    return <WidgetStub2 data={widget.payload} id={widget.id} />;
  },
};
