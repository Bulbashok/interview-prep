export type WidgetsType = 'quiz' | 'true/false' | 'async-sorter';

export interface WidgetProps {
  data: WidgetData;
  sendAnswer: () => void;
}

export interface WidgetData {
  null: null;
}
