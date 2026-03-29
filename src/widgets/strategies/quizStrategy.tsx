import { WidgetStrategy } from '@/types/widgets';
import WidgetStub1 from '../Quiz/Stub1';

export const quizStrategy: WidgetStrategy = {
  type: 'quiz',
  render(widget, onAnswer) {
    if (widget.type !== 'quiz') return null;

    return <WidgetStub1 data={widget.payload} onAnswer={onAnswer} id={widget.id} />;
  },
};
