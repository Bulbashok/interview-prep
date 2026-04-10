import { WidgetStrategy, Widget } from '@/types/widgets';
import AsyncSorter from '../AsyncSorter/AsyncSorter';

export const asyncSorterStrategy: WidgetStrategy = {
  type: 'async-sorter',
  render(widget: Widget) {
    if (widget.type !== 'async-sorter') return;
    return <AsyncSorter data={widget.payload} id={widget.id} key={widget.id} />;
  },
};
