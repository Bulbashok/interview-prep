import { BaseWidget } from './widgets';

export interface QuizPayload extends BaseWidget {
  question: {
    ru: string;
    en: string;
  };
  options: QuizOptions[];
}

interface QuizOptions {
  ru: string;
  en: string;
}
