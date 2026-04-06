export interface QuizPayload {
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
