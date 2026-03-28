import { ReactNode } from 'react';
import { QuizPayload } from './quiz';
import { TrueFalsePayload } from './trueFalse';

export type WidgetsType = 'quiz' | 'true-false' | 'async-sorter';

export interface BaseWidget {
  id: string;
  type: WidgetsType;
  version: number;
  difficulty: number;
  tags: string[];
}

export type Widget =
  | (BaseWidget & { type: 'quiz'; payload: QuizPayload })
  | (BaseWidget & { type: 'true-false'; payload: TrueFalsePayload });

export interface WidgetStrategy {
  type: WidgetsType;
  render: (widget: Widget, onAnswer: (answer: unknown) => void) => ReactNode;
}
