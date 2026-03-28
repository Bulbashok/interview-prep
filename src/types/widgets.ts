export type WidgetsType = 'quiz' | 'true/false' | 'async-sorter';

export interface WidgetProps {
  data: WidgetData;
  sendAnswer: () => void;
}

export interface WidgetData {
  id?: string;
  question?: string;
  options?: string[]; // Варианты ответов для Quiz
  statement?: string; // Утверждение для True/False
  isTrue?: boolean; // Правильный ответ для True/False
  blocks?: string[]; // Массив блоков для Sorter
  correctAnswer?: string | number;
}
