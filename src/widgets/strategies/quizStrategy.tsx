import { WidgetStrategy, Widget } from '@/types/widgets';
import Quiz from '../Quiz/Quiz';

export const quizStrategy: WidgetStrategy = {
  type: 'quiz',
  render(widget: Widget) {
    if (widget.type !== 'quiz') return null;

    return <Quiz key={widget.id} data={widget.payload} id={widget.id} />;
  },
};
