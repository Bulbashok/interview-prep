import { WidgetStrategy, Widget } from '@/types/widgets';
import WidgetStub1 from '../Quiz/Stub1';

export const quizStrategy: WidgetStrategy = {
  type: 'quiz',
  render(widget: Widget) {
    if (widget.type !== 'quiz') return null;

    return <WidgetStub1 data={widget.payload} id={widget.id} />;
  },
};
