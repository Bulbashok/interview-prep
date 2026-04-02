import { WidgetStrategy } from '@/types/widgets';
import AsyncSorter from '../AsyncSorter/AsyncSorter';

export const asyncSorterStrategy: WidgetStrategy = {
  type: 'async-sorter',
  render(widget, onAnswer) {
    if (widget.type !== 'async-sorter') return;
    return <AsyncSorter data={widget.payload} onAnswer={onAnswer} id={widget.id} />;
  },
};
