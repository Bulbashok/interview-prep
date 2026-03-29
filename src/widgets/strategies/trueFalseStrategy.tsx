import { WidgetStrategy } from '@/types/widgets';
import WidgetStub2 from '../TrueFalse/Stub2';

export const trueFalseStrategy: WidgetStrategy = {
  type: 'true-false',
  render(widget, onAnswer) {
    if (widget.type !== 'true-false') return null;

    return <WidgetStub2 data={widget.payload} onAnswer={onAnswer} id={widget.id} />;
  },
};
